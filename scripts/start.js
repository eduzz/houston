const childProccess = require('child_process');
const semver = require('semver');
const ora = require('ora');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const devPath = `${__dirname}/../src/dev/src/components/index.tsx`;
const devFolderPath = `${__dirname}/../src/dev/src/components`;
const templatePath = `${__dirname}/../src/dev/src/components.template`;

async function init(mode) {
  if (!['dev', 'docs', 'both'].includes(mode)) {
    mode = null;
  }

  if (!mode) {
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

    mode = answers.mode;
  }

  childProccess.spawnSync('yarn', ['clean'], { stdio: 'inherit' });
 
  if (['dev', 'both'].includes(mode)) {
    childProccess.spawnSync('yarn', ['build'], { stdio: 'inherit' });
    await createDevFile();
  }

  childProccess.spawn('yarn', [`start:${mode}`], { stdio: 'inherit' });
}

async function createDevFile() {
  const folderExists = await new Promise(resolve => fs.access(devFolderPath, err => resolve(!err)));
  if (!folderExists) {
    fs.mkdirSync(devFolderPath);
  }
  
  const exists = await new Promise(resolve => fs.access(devPath, err => resolve(!err)));
  if (exists) return;

  await fs.promises.copyFile(templatePath, devPath);
}

const mode = process.argv.slice(2)[0]?.replace('--', '');

init(mode).catch(err => {
  console.error(err);
  process.exit(-1);
})
