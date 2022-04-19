const childProccess = require('child_process');
const semver = require('semver');
const ora = require('ora');
const fs = require('fs');
const inquirer = require('inquirer');

let newVersion = '';

async function init() {
  const answers = await inquirer.prompt([{
    name: 'manual',
    type: 'confirm',
    default: false,
    message: 'Quer inserir uma versão na marra?'
  }, {
    name: 'version',
    type: 'text',
    when: a => a.manual,
    validate: a => semver.valid(a) ? true : 'inválido',
    message: 'Manda bala:'
  }, {
    name: 'beta',
    type: 'confirm',
    when: a => !a.manual,
    default: false,
    message: 'É beta?'
  }, {
    name: 'major',
    type: 'confirm',
    when: a => !a.manual,
    default: false,
    message: (a) => `Possui Break Change${a.beta ? ' desde de o último beta' : ''}? (major change)`
  }, {
    name: 'minor',
    type: 'confirm',
    when: a => !a.manual && !a.major,
    default: false,
    message: 'Alguma feature nova? (minor change)'
  }]);

  if (!answers.manual) {
    const versionsPromise = getLastVersions();
    ora.promise(versionsPromise, 'CHECKING REMOTE VERSIONS');
    const versions = await versionsPromise;

    newVersion = generateVersion(answers, versions);
  } else {
    newVersion = answers.version;
  }

  const params = await inquirer.prompt([{
    name: 'confirmed',
    type: 'confirm',
    default: false,
    message: `A nova versão será ${newVersion} Podemos continuar?`
  }]);

  if (!params.confirmed) {
    throw new Error('Cancelado');
  }

  const foldersBlackList = ['pages'];
  let packages = await fs.promises.readdir(`${__dirname}/../src/pages`, { withFileTypes: true });

  console.log({packages})

  packages = [
    {
      name: 'workspace',
      folder: `${__dirname}/../`
    },
    ...packages.filter(file => file.isDirectory() && !foldersBlackList.includes(file.name)).map(file => ({
      name: require(`${__dirname}/../src/pages/${file.name}/package.json`).name,
      folder: `${__dirname}/../src/pages/${file.name}`
    }))
  ];

  for (let package of packages) {
    await changePackageVersion(package, packages, newVersion);
  }
}

async function changePackageVersion(package, allPackages, newVersion) {
  const loader = ora(`UPDATING VERSION: ${package.name}`).start()

  const path = `${package.folder}/package.json`;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/(.+\"version\"\:\s\").+(\"+)/gim, `$1${newVersion}$2`);

  allPackages.forEach(package => {
    content = content.replace(new RegExp(`(.+"${package.name}":\\s").+("+)`, "gim"), `$1${newVersion}$2`);
  });

  fs.writeFileSync(path, content);
  loader.succeed();
}

async function getLastVersions() {
  const versions = await exec('npm view @eduzz/houston-core versions --json').then(v => JSON.parse(v).reverse());

  const beta = versions.find(v => v.includes('beta'));
  const current = versions.find(v => !v.includes('beta'));

  return {
    beta: beta && semver.gtr(current, beta) ? null : beta,
    current
  }
}

function generateVersion(answers, versions) {
  if (answers.beta) {
    if (answers.major) {
      return semver.inc(versions.beta ?? versions.current, 'premajor', 'beta');
    }

    if (answers.minor) {
      return semver.inc(versions.beta ?? versions.current, 'preminor', 'beta');
    }

    return semver.inc(versions.beta ?? versions.current, 'prepatch', 'beta');
  }

  if (answers.major) {
    return semver.inc(versions.current, 'major', 'beta');
  }

  if (answers.minor) {
    return semver.inc(versions.current, 'minor', 'beta');
  }

  return semver.inc(versions.current, 'patch', 'beta');
}

function exec(command) {
  return new Promise((resolve, reject) => {
    const proccess = childProccess.exec(command, (err, stdout) => {
      if (err) reject(err);
      resolve(stdout?.trim());
    });
  })
}

init().then(() => {
  console.log('\n');
  ora(`NEW VERSION CHANGED: ${newVersion}`).succeed();
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(-1);
})
