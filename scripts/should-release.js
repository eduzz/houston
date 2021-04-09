const nodeVersion = process.version.replace('v', '');
const fs = require('fs');

const buildGithub = fs.existsSync('/opt/hostedtoolcache/node/${nodeVersion}/x64/lib/node_modules');

const childProccess = require('child_process');
const semver = buildGithub ? require(`/opt/hostedtoolcache/node/${nodeVersion}/x64/lib/node_modules/semver`) : require('semver');
const ora = buildGithub ? require(`/opt/hostedtoolcache/node/${nodeVersion}/x64/lib/node_modules/ora`)  : require('ora');

let currentVersion = require('../package.json').version;

async function init() {
  if (!semver.valid(currentVersion)) {
    throw new Error('Invalid Version: ' + currentVersion);
  }

  ora('NEW VERSION:' + currentVersion).succeed()

  let packages = await fs.promises.readdir(`${__dirname}/../src/packages`, { withFileTypes: true });
  packages = packages
    .filter(file => file.isDirectory())
    .map(file => ({
      name: require(`${__dirname}/../src/packages/${file.name}/package.json`).name,
      folder: `${__dirname}/../src/packages/${file.name}`
    }));

  await Promise.all(packages.map(async package => {
    const remoteVersion = await exec(`npm view ${package.name} version`)
    package.remoteVersion = remoteVersion;
  }));

  ora('REMOTE VERSIONS:').info()
  console.table(packages, ['name', 'remoteVersion']);

  await new Promise((resolve) => setTimeout(() => resolve()), 300);

  for (let package of packages) {
    await checkVersion(package);
  }

  await exec('echo false > .skip-release');

  return true;
}

async function checkVersion(package) {
  const isGreater = semver.gt(currentVersion, package.remoteVersion);

  if (isGreater) return;
  ora('Version already published, skipping...').fail();
  await exec('echo true > .skip-release');

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
  ora(`NEW VERSION CAN BE PUBLISHED: ${currentVersion}`).succeed();
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(-1);
})
