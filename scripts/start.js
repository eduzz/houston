const childProccess = require('child_process');
const semver = require('semver');
const ora = require('ora');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const devPath = '../src/dev/src/components/index.tsx';

async function init() {
  const answers = await inquirer.prompt([{
    name: 'manual',
    type: 'confirm',
    default: false,
    message: 'Quer inserir uma versão na marra?'
  }]);

  childProccess.spawnSync('yarn', ['build'], { stdio: 'inherit' });

  await createDevFile();
  childProccess.spawn('yarn', ['start:dev'], { stdio: 'inherit' });
}

async function createDevFile() {
  const exists = await new Promise(resolve => fs.access(devPath, err => resolve(!err)))
  if (exists) return;

  await fs.promises.copyFile(devPath.replace('.tsx', '.template'), devPath);
}

init().catch(err => {
  console.error(err);
  process.exit(-1);
})
