const childProccess = require('child_process');
const semver = require('semver');
const ora = require('ora');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const devPath = '../src/dev/src/components/index.tsx';

async function init() {
  const answers = await inquirer.prompt([{
    name: 'mode',
    type: 'list',
    default: 'both',
    choices: [
      { name: 'Apenas o Dev, não tenho tempo para escrever documentação 🦖', value: 'dev' },
      { name: 'Apenas a Documentação, sou um escritor frustado 🤓', value: 'docs' },
      { name: 'Os dois, quero fritar um ovo 🍳', value: 'both' }
    ],
    message: 'Qual projeto deseja iniciar?'
  }]);

  childProccess.spawnSync('yarn', ['clean'], { stdio: 'inherit' });

  if(answers.mode === 'dev' || answers.mode === 'both') {
    childProccess.spawnSync('yarn', ['build'], { stdio: 'inherit' });
    await createDevFile();
    childProccess.spawn('yarn', ['start:dev'], { stdio: 'inherit' });
  }

  if(answers.mode === 'docs' || answers.mode === 'both') {
    childProccess.spawn('yarn', ['start:docs'], { stdio: 'inherit' });
  }
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
