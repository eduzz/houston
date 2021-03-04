const childProccess = require('child_process');
const semver = require('semver');
const fs = require('fs');
const ora = require('ora');
const inquirer = require('inquirer');

let currentVersion = require('../package.json').version;

const isCI = process.argv.slice(2)[0] === '--ci';

async function init() {
  if (!isCI) {
    const versionConfirm = await inquirer.prompt([{
      name: 'confirmed',
      type: 'confirm',
      default: false,
      message: `Já alterou a versão (${currentVersion})?`
    }]);

    if (!versionConfirm.confirmed) {
      await generateVersion();
      currentVersion = require('../package.json').version;
    }
  }

  if (!semver.valid(currentVersion)) {
    throw new Error('Invalid Version: ' + currentVersion);
  }

  ora('NEW VERSION:' + currentVersion).succeed()

  let packages = await fs.promises.readdir(`${__dirname}/../packages`);
  packages = packages.map(path => ({
    name: require(`${__dirname}/../packages/${path}/package.json`).name,
    folder: `${__dirname}/../packages/${path}`
  }));

  await Promise.all(packages.map(async package => {
    const remoteVersion = await exec(`npm view ${package.name} version`)
    package.remoteVersion = remoteVersion;
  }));

  ora('REMOTE VERSIONS:').info()
  console.table(packages, ['name', 'remoteVersion']);

  for (let package of packages) {
    await checkVersion(package);
  }

  if (!isCI) {
    const params = await inquirer.prompt([{
      name: 'confirmed',
      type: 'confirm',
      default: false,
      message: 'Tudo OK! Podemos continuar?'
    }]);


    if (!params.confirmed) {
      return false;
    }
  }

  await npmLogin();

  const cleanPromise = exec('yarn clean');
  ora.promise(cleanPromise, 'CLEANING PROJECT');
  await cleanPromise;

  for (let package of packages) {
    await changePackageVersion(package, packages);
    await publish(package);
  }

  if (!isCI) {
    const gitPromise = exec(`git tag v${currentVersion} && git push --tag`);
    ora.promise(gitPromise, 'GIT TAG');
    await gitPromise;
  }

  return true;
}

async function npmLogin() {
  return new Promise((resolve, reject) => {
    const cmd = isCI ?
      childProccess.spawn('npm', ['whoami'], { stdio: 'inherit', env: { ...process.env } }) :
      childProccess.spawn('npm', ['login'], { stdio: 'inherit' });

    cmd.once('error', err => reject(err));
    cmd.once('close', code => code == 0 ? resolve() : reject("Process exit with " + code));
  });
}

async function generateVersion() {
  return new Promise((resolve, reject) => {
    const login = childProccess.spawn('yarn', ['run', 'change-version'], { stdio: 'inherit' });
    login.once('error', err => reject(err));
    login.once('exit', (code) => code >= 0 ? resolve() : reject());
  });
}

async function publish(package) {
  const promise = exec(`(cd ${package.folder} && npm publish --access=public)`);
  ora.promise(promise, `PUBLISHING: ${package.name}`)
  await promise;
}

async function changePackageVersion(package, allPackages) {
  const loader = ora(`CHANGING VERSION: ${package.name}`).start()

  const path = `${package.folder}/package.json`;
  let content = fs.readFileSync(path, 'utf8');

  content = content.replace(/(.+\"version\"\:\s\").+(\"+)/gim, `$1${currentVersion}$2`);

  allPackages.forEach(package => {
    content = content.replace(new RegExp(`(.+"${package.name}":\\s").+("+)`, "gim"), `$1${currentVersion}$2`);
  });

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
    const cmd = childProccess.exec(command, { env: { ...process.env } }, (err, stdout) => {
      if (err) reject(err);
      resolve(stdout?.trim());
    });

    if (!live) return;
    cmd.stdout.on('data', data => console.log(data.toString()));
  })
}

init().then(success => {
  if (!success) return;
  console.log('\n');
  ora(`NEW VERSION PUBLISHED: ${currentVersion}`).succeed();
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(-1);
})
