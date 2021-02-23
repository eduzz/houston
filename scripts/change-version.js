const childProccess = require('child_process');
const semver = require('semver');
const fs = require('fs');

const currentVersion = require('../package.json').version;

async function init() {
  await checkVersion()

  const packages = await fs.promises.readdir(`${__dirname}/../packages`);
  for (let package of packages) {
    await changePackageVersion(package);
  }
}

async function changePackageVersion(packageFolder) {
  const path = `${__dirname}/../packages/${packageFolder}/package.json`;
  let content = fs.readFileSync(path, 'utf8');

  content = content
    .replace(/(.+\"version\"\:\s\").+(\"+)/gim, `$1${currentVersion}$2`);

  fs.writeFileSync(path, content);
}

async function checkVersion() {
  const remoteVersion = await exec('npm view @eduzz/houston version');

  console.table({ currentVersion, remoteVersion });

  if (!semver.valid(currentVersion)) {
    throw new Error('Invalid Version');
  }

  const isGreater = semver.gt(currentVersion, remoteVersion);
  if (!isGreater) {
    throw new Error('Version is not greather than previous');
  }

}

function exec(command) {
  return new Promise((resolve, reject) => {
    childProccess.exec(command, (err, stdout) => {
      if (err) reject(err);
      resolve(stdout?.trim());
    });
  })
}

init().then(() => {
  console.log('VERSION CHANGED WITH SUCCESS');
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(-1);
})