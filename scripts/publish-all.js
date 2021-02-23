const childProccess = require('child_process');
const semver = require('semver');
const fs = require('fs');
const ora = require('ora');
const inquirer = require('inquirer');

const currentVersion = require('../package.json').version;

async function init() {
  if (!semver.valid(currentVersion)) {
    throw new Error('Invalid Version: ' + currentVersion);
  }

  ora(' NEW VERSION:' + currentVersion).succeed()

  let packages = await fs.promises.readdir(`${__dirname}/../packages`);
  packages = packages.map(path => ({
    name: require(`${__dirname}/../packages/${path}/package.json`).name,
    folder: `${__dirname}/../packages/${path}`
  }));

  await Promise.all(packages.map(async package => {
    const remoteVersion = await exec(`npm view ${package.name} version`)
    package.remoteVersion = remoteVersion;
  }));

  ora(' REMOTE VERSIONS:').info()
  console.table(packages, ['name', 'remoteVersion']);

  for (let package of packages) {
    await checkVersion(package);
  }

  const params = await inquirer.prompt([{
    name: 'confirmed',
    type: 'confirm',
    default: false,
    message: 'Tudo OK! Podemos continuar?'
  }]);

  if (!params.confirmed) {
    return false;
  }

  for (let package of packages) {
    await changePackageVersion(package);
    await publish(package);
  }

  return true;
}

async function publish(package) {
  const promise = exec(`(cd ${package.folder} && npm publish)`);
  ora.promise(promise, `PUBLISHING: ${package.name}`)
  await promise;
}

async function changePackageVersion(package) {
  const loader = ora(`CHANGING VERSION: ${package.name}`).start()

  const path = `${package.folder}/package.json`;
  let content = fs.readFileSync(path, 'utf8');

  content = content
    .replace(/(.+\"version\"\:\s\").+(\"+)/gim, `$1${currentVersion}$2`);

  fs.writeFileSync(path, content);
  loader.succeed();
}

async function checkVersion(package) {
  const isGreater = semver.gt(currentVersion, package.remoteVersion);

  if (isGreater) return;
  ora('Version already published, skipping...').fail();
  process.exit(0);
}

function exec(command, live) {
  return new Promise((resolve, reject) => {
    const proccess = childProccess.exec(command, (err, stdout) => {
      if (err) reject(err);
      resolve(stdout?.trim());
    });

    if (!live) return;
    proccess.stdout.on('data', data => console.log(data.toString()));
  })
}

init().then(success => {
  if (!success) return;
  console.log('VERSION CHANGED WITH SUCCESS');
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(-1);
})