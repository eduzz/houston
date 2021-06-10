const ora = require('ora');
const inquirer = require('inquirer');
const fs = require('fs');
const childProccess = require('child_process');

const packagePath = `${__dirname}/../src/packages/icons`;
const trashFolderPath = `${packagePath}/_dump`;

const mapperNameIcon = {
  'padrao.svg': '',
  'default.svg': '',
  'outline.svg': 'Outline',
  'outiline.svg': 'Outline',
  'solid.svg': 'Solid'
};

function exec(command) {
  return new Promise((resolve, reject) => {
    const proccess = childProccess.exec(command, (err, stdout) => {
      if (err) reject(err);
      resolve(stdout?.trim());
    });
  })
}

function customMessage(message, type = 'none', indent = 2) {
  const mapperIcon = { success: '✓ ', error: 'x ', warn: 'x ', none: '' };
  const mapperColor = { error: '\x1b[31m', success: '\x1b[32m', warn: '\x1b[33m', none: '\x1b[37m' };
  const currentIcon = mapperIcon[type];
  const currentIndent = new Array(indent).fill('').map(() => ' ').join('');

  return setTimeout(() => console.log(mapperColor[type], `${currentIndent}${currentIcon}${message}`), 1);
}

function delay(ms) {
  return new Promise(res => setTimeout(res, ms)); 
}

function checkPathExist(path) {
  if (fs.existsSync(path)) return true;
  return false;
}

function validateInitialConfig() {
  return new Promise((resolve, reject) => {
    const hasTrashFolder = checkPathExist(trashFolderPath);

    if (!hasTrashFolder) {
      reject('\n Atenção, para criar um novo ícone siga os passos abaixo: \n \n 1. Crie uma pasta na raiz do projeto de ícones (@eduzz/houston-icons), chamada "_dump", \n 2. Insira os ícones com suas versões. Por exemplo: MeuIcone/Solid.svg, MeuIcone/Outline.svg, OutroIcone/Default.svg e etc... \n 3. Após ter feito os itens 1 e 2, rode o comando novamente. \n');
    }

    resolve(true);
  });
}

function readIcons() {
  return new Promise((resolve, reject) => {
    let icons = [];

    fs.readdirSync(trashFolderPath).forEach(value => {
      const isValid = fs.lstatSync(`${trashFolderPath}/${value}`).isDirectory();

      if (isValid) {
        icons = [...icons, value];
        customMessage(`Ícone: ${value} encontrado.`, 'success');
        return;
      }
      
      customMessage(`Arquivo: ${value} ignorado.`, 'warn');
    });

    if (!icons.length) {
      reject('\n [ERRO] Nenhum ícone encontrado dentro da pasta. \n');
    }

    resolve(icons);
  });
}

function validateIconVariant(name) {
  if (mapperNameIcon[name] !== undefined || mapperNameIcon[name] !== null) {
    return true;
  }

  return false;
}

function createIcons(icons) {
  const baseSvgContent = fs.readFileSync(`${packagePath}/templates/svg.template`, 'utf8');
  const baseIndexContent = fs.readFileSync(`${packagePath}/templates/iconWeb.template`, 'utf8');

  icons.forEach(icon => {
    const currentFiles = fs.readdirSync(`${trashFolderPath}/${icon}`);

    if (!currentFiles.length) {
      customMessage(`${icon}:`);
      customMessage(`Não possui arquivos dentro da pasta, ignorado.`, 'warn', 4);
      return;
    }

    customMessage(`${icon}:`);

    currentFiles.map(file => {
      const currentFile = file.toLowerCase();

      if (!validateIconVariant(currentFile)) {
        customMessage(`Arquivo: ${file} fora dos padrões de nomenclatura, ignorado.`, 'warn', 4);
        return;
      }

      const iconName = `${icon}${mapperNameIcon[currentFile]}`;
      const iconPath = `${packagePath}/${iconName}`;
      const iconContent = fs.readFileSync(`${trashFolderPath}/${icon}/${file}`, 'utf8');

      if (checkPathExist(iconPath)) {
        customMessage(`Ícone: ${iconName} já existe, ignorado.`, 'warn', 4);
        return;
      }

      const currentSvg = iconContent.replace(
        /(width="(.*?)" height="(.*?)"|width="(.*?)"|height="(.*?)")+/g,
        'width={width}'
      );

      const currentSvgContent = baseSvgContent.replace(/{{content}}/g, currentSvg);
      const currentIndexContent = baseIndexContent.replace(/{{name}}/g, iconName);

      if (!checkPathExist(iconPath)) {
        fs.mkdirSync(iconPath);
      }

      fs.writeFileSync(`${iconPath}/index.tsx`, currentIndexContent);
      fs.writeFileSync(`${iconPath}/svg.tsx`, currentSvgContent);

      customMessage(`Ícone: ${iconName} criado com sucesso.`, 'success', 4);
    });
  });
}

async function init() {
  let newIcons = [];

  await delay(1000);

  const validateConfigPromise = validateInitialConfig();
  ora.promise(validateConfigPromise, 'Configuração inicial.');
  await validateConfigPromise;

  await delay(1000);

  const valideIconsPromise = readIcons();
  ora.promise(valideIconsPromise, 'Buscando por ícones.');
  newIcons = await valideIconsPromise;

  await delay(1000);

  const answers = await inquirer.prompt([{
    name: 'continue',
    type: 'confirm',
    default: true,
    message: 'Deseja continuar com a criação?'
  }]);

  if (!answers.continue) {
    ora('Operação cancelada...').fail();
    process.exit(0);
  }

  const statusCreate = ora({ text: 'Criando o(s) ícone(s)...\n' });
  statusCreate.start();

  await delay(1000);

  createIcons(newIcons);
  statusCreate.succeed('Resultado:');

  await delay(1000);

  ora().succeed('Rodando Eslint.');

  await exec('yarn lint --fix').then(v => console.log(v));

  await delay(1000);

  ora().succeed('Processo finalizado.');
}

init().then(success => {
  if (!success) return;
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(-1);
})
