import * as fs from 'fs';
import { NodePlopAPI, ActionType } from 'plop';

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

function checkFileExist(path: string) {
  if (fs.existsSync(path)) return true;
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
      },
      {
        type: 'list',
        choices: [
          'Padrão (Default.svg)',
          'Contorno (Outline.svg)',
          'Sólido (Solid.svg)',
          'Ambos (Outline.svg e Solid.svg)'
        ],
        name: 'type',
        message: 'Qual o tipo do ícone?'
      }
    ],
    actions: data => {
      let actions: ActionType[] = [];

      const { name, type } = data;

      const configMap = {
        'Padrão (Default.svg)': {
          folder: '',
          file: 'Default.svg'
        },
        'Contorno (Outline.svg)': {
          folder: 'Outline',
          file: 'Outline.svg'
        },
        'Sólido (Solid.svg)': {
          folder: 'Solid',
          file: 'Solid.svg'
        },
        'Ambos (Outline.svg e Solid.svg)': {
          folder: '',
          file: 'both'
        }
      };

      if (configMap[type] === 'both') {
        if (!checkFileExist(configMap[configMap[1]].file) || !checkFileExist(configMap[configMap[2]].file)) {
          console.error(
            `\n Um ou mais arquivos não foram encontrados (./${name}/${configMap[1]} e/ou ./${name}/${configMap[2]}), verifique e tente novamente... \n`
          );
          process.exit(0);
        }
      }

      const currentNameFile = configMap[type].file;

      if (!fs.existsSync(`./${name}/${currentNameFile}`)) {
        console.error(`\n Arquivo não encontrado (./${name}/${currentNameFile}), verifique e tente novamente... \n`);
        process.exit(0);
      }

      const baseContent = fs.readFileSync('./templates/svg.md', 'utf8');
      const content = fs.readFileSync(`./${name}/${currentNameFile}`, 'utf8');

      removePaths([`./${name}/index.tsx`, `./${name}/svg.tsx`, `./${name}/${currentNameFile}`]);

      const currentFile = content.replace(
        /(width="(.*?)" height="(.*?)"|width="(.*?)"|height="(.*?)")+/g,
        'width={width}'
      );

      const currentContent = baseContent.replace(/{{ content }}/g, currentFile);

      fs.writeFileSync(`./${name}/svg.tsx`, currentContent);

      actions = [
        {
          type: 'add',
          path: `./{{name}}/index.tsx`,
          templateFile: './templates/iconWeb.md',
          skipIfExists: false
        }
      ];

      return actions;
    }
  });
}
