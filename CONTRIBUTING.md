# Como Contribuir 🤓🐒

### Repositório Monorepo 🔀 

Utilizamos uma arquitetura monorepo para facilitar na hora de desenvolver,
mas tentamos manter de uma maneira simples para que ficar fácil de entender.

### Atenção ⚠️

* Não utilize o **npm** pois utilizamos o **workspaces** do yarn para ele instalar todas as depedencias de todos os projetos.
* Todas as funcionalidades Web devem estar no projeto dev, com o máximo de exemplos e codígos de exemplo possível.
* Lembre-se que o *Houston™️* também será usado com o react-native, menos o package de **ui-components**.
* Todos os componentes previstos estão no Figma vide quadro abaixo.

### Como rodar 🚀

1. Clonar o repositório
2. yarn na raiz do projeto
3. yarn start
4. Abra no **VSCode** o projeto pelo **main.code-workspace**
5. Instale as extensões recomendadas

Ele irá buildar e iniciar todos os projetos e também irá inciar o projeto dev no **http://localhost:3000**.

### Backlog 📂

Accesse o [Board](https://github.com/eduzz/houston/projects/3) para ver as tarefas e os componentes que faltam.  

### Padrões 💄

Sempre que desenvolver um componente ou qualquer funcionalidade adicionar um **README.md** com os detalhes de como usa-lo e 
suas props/configurações. Tente seguir ao máximo a sintaxe dos componentes já existentes. 

<img src="docs/assets/example 1.png" width="250" />

**Lembre-se de cada responsabilidade:**

| Package                      | Descrição                                                                      |
|------------------------------|--------------------------------------------------------------------------------|
| @eduzz/houston-ui            | Componentes do houston para web                                                |
| @eduzz/eslint-config-houston | Configuração padrão para o eslint                                              |
| @eduzz/houston-forms         | Hooks para validação de formulário (livre de plataforma. ex: web ou app)       |
| @eduzz/houston-hooks         | Hooks de uso geral (livre de plataforma. ex: web ou app)                        |
| @eduzz/core                  | Configurações compartilhadas entre os projetos, não deve ser usado diretamente |

## Por baixo dos panos 💃

Utilizamos o [ultra-runner](https://www.npmjs.com/package/ultra-runner) para gerenciar o monorepo, ele é bem simples 
todos os projetos jão estão configurados com build, dev e precommit unificados, todos os projetos utilizam a configuração do eslint
padrão que disponibilizamos junto com o package **@eduzz/eslint-config-houston**

### Comunicação e novidades 💬

Entre no nosso servidor no [Discord](https://discord.gg/EeCnYRsCkX).

# Dúvidas?

* Sobre a parte de dev 💪: @ffernandomoraes ou @danieloprado
* Sobre a parte de design 🌈: @murilolamarca
