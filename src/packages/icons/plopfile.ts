import * as fs from 'fs';
import { NodePlopAPI, ActionType } from 'plop';

const whiteListFiles = ['Outline.svg', 'Solid.svg', 'Default.svg'];

const folderName = {
  'Default.svg': '',
  'Outline.svg': 'Outline',
  'Solid.svg': 'Solid'
};

function removePaths(paths: string[]) {
  paths.forEach(path => {
    if (fs.existsSync(path)) {
      try {
        fs.unlinkSync(path);
      } catch (err) {
        console.error(err);
      }
    }
  });
}

function checkPathExist(path: string) {
  if (fs.existsSync(path)) {
    return true;
  }

  return false;
}

export default function (plop: NodePlopAPI) {
  plop.setGenerator('icon', {
    description: 'Criação do ícone a partir da pasta',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do ícone/pasta? (Por exemplo: Avatar, Add, Cards...)'
      }
    ],

    actions: data => {
      const { name } = data;

      let actions: ActionType[] = [];
      let files: Array<string> = [];

      const dirFiles = fs.readdirSync(`./${name}`);
      const dirTemp = `./${name}Temp/`;

      dirFiles.forEach(file => {
        if (checkPathExist(`./${name}/${file}`) && whiteListFiles.includes(file)) {
          files = [...files, file];
        }
      });

      if (!files.length) {
        console.error(`\n Nenhum arquivo encontrado dentro da pasta, tente novamente... \n`);
        process.exit(0);
      }

      const baseSvgContent = fs.readFileSync('./templates/svg.md', 'utf8');
      const baseIndexContent = fs.readFileSync('./templates/iconWeb.md', 'utf8');

      if (!checkPathExist(dirTemp)) {
        fs.mkdirSync(dirTemp);
      }

      files.map(file => {
        const content = fs.readFileSync(`./${name}/${file}`, 'utf8');
        fs.writeFileSync(`${dirTemp}/${file}`, content);
      });

      files.map(file => {
        const folder = `${name}${folderName[file]}`;
        const content = fs.readFileSync(`${dirTemp}/${file}`, 'utf8');

        if (!checkPathExist(`./${folder}`)) {
          fs.mkdirSync(`./${folder}`);
        }

        removePaths([`./${folder}`, `./${name}`]);

        const currentSvg = content.replace(
          /(width="(.*?)" height="(.*?)"|width="(.*?)"|height="(.*?)")+/g,
          'width={width}'
        );

        const currentSvgContent = baseSvgContent.replace(/{{content}}/g, currentSvg);
        const currentIndexContent = baseIndexContent.replace(/{{name}}/g, folder);

        fs.writeFileSync(`./${folder}/index.tsx`, currentIndexContent);
        fs.writeFileSync(`./${folder}/svg.tsx`, currentSvgContent);

        actions = [...actions];
      });

      removePaths([`${dirTemp}`]);

      return actions;
    }
  });
}
