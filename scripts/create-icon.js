const inquirer = require('inquirer');
const ora = require('ora');
const fs = require('fs');
const path = require('path');

const configNameIcon = {
  'Default.svg': '',
  'Outline.svg': 'Outline',
  'Solid.svg': 'Solid'
};

function rimraf(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(entry => {
      const currentPath = path.join(dirPath, entry);

      if (fs.lstatSync(currentPath).isDirectory()) {
        rimraf(currentPath);
        return;
      }

      fs.unlinkSync(currentPath);
    });

    fs.rmdirSync(dirPath);
  }
}

function checkPathExist(path) {
  if (fs.existsSync(path)) {
    return true;
  }

  return false;
}


async function init() {
  const questions = await inquirer.prompt(
    [
      // {
      //   name: 'start',
      //   type: 'confirm',
      //   default: true,
      //   message: 'Já inseriu a pasta do ícone dentro do @eduzz/houston-icons? (@eduzz/houston-icons)'
      //   // validate: v => v ? true : 'Insira a pasta do ícone dentro do @eduzz/houston-icons antes de começar o processo!',
      // },
      {
        name: 'name',
        type: 'input',
        // when: a => a.start,
        message: 'Nome do ícone/pasta? (Por exemplo: Avatar, Add, Cards...)'
      }
    ]
  );

  if (questions.name) {
    const { name } = questions;

    let files = [];

    const pathPackageIcons = `${__dirname}/../src/packages/icons`;
    const dirIcon = `${pathPackageIcons}/${name}`;

    const readFiles = fs.readdirSync(dirIcon);
    const dirTemp = `${dirIcon}Temp`;

    // check exists files
    readFiles.forEach(file => {
      if (checkPathExist(dirIcon) && configNameIcon[file]) {
        files = [...files, file];
        return;
      }

      ora(`File '${file}' nonstandard, ignored...`).fail();
    });

    if (!files.length) {
      console.error(`\n Nenhum arquivo encontrado dentro da pasta, tente novamente... \n`);
      process.exit(0);
    }

    const baseSvgContent = fs.readFileSync(`${pathPackageIcons}/templates/svg.md`, 'utf8');
    const baseIndexContent = fs.readFileSync(`${pathPackageIcons}/templates/iconWeb.md`, 'utf8');

    if (!checkPathExist(dirTemp)) {
      fs.mkdirSync(dirTemp);
    }

    // move files to temp folder
    files.map(file => {
      const content = fs.readFileSync(`${dirIcon}/${file}`, 'utf8');
      fs.writeFileSync(`${dirTemp}/${file}`, content);
    });

    rimraf(dirIcon);

    // create icon(s)
    files.map(file => {
      const iconName = `${name}${configNameIcon[file]}`;
      const iconFolder = `${dirIcon}${configNameIcon[file]}`;
      const iconContent = fs.readFileSync(`${dirTemp}/${file}`, 'utf8');

      if (!checkPathExist(iconFolder)) {
        fs.mkdirSync(iconFolder);
      }

      const currentSvg = iconContent.replace(
        /(width="(.*?)" height="(.*?)"|width="(.*?)"|height="(.*?)")+/g,
        'width={width}'
      );

      const currentSvgContent = baseSvgContent.replace(/{{content}}/g, currentSvg);
      const currentIndexContent = baseIndexContent.replace(/{{name}}/g, iconName);

      fs.writeFileSync(`${iconFolder}/index.tsx`, currentIndexContent);
      fs.writeFileSync(`${iconFolder}/svg.tsx`, currentSvgContent);

      ora(`Success, created icon: ${name}${configNameIcon[file]}`).succeed();
    });

    rimraf(dirTemp);
  }

  return true;
}

init().then(success => {
  if (!success) return;
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(-1);
})
