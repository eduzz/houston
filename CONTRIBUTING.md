---
name: Como Contribuir
route: /contributing
---

# Como Contribuir

## Repositório Monorepo

Utilizamos uma arquitetura monorepo para facilitar na hora de desenvolver,
mas tentamos manter de uma maneira simples para que fique fácil de entender.

## Atenção

* Não utilize o **npm** pois utilizamos o **workspaces** do yarn para ele instalar todas as dependências de todos os projetos.
* Todas as funcionalidades Web devem ter um .mdx pois ele gerará o doc, com o máximo de exemplos e códigos de exemplo possível.
* Lembre-se que o *Houston™️* também será usado com o [`react-native`](https://reactnative.dev), menos o package [**ui-components**](https://github.com/eduzz/houston/tree/master/packages/ui-components).
* Todos os componentes previstos estão no Figma vide quadro abaixo.

## Arquitetura

No projeto principal (@eduzz/houston-ui) discutimos muito sobre o uso de uma lib base para não termos que fazer tudo 
do zero e ganhar um pouco de velocidade no início, ponderamos sobre o **AntD** mas chegamos a conclusão que ele era 
**muito pesado e mudava os padrões** que já aplicamos em projeto atuais hoje, como quase todos os produtos já utilizam
o **MaterialUI**, optamos por continuar usando ele por baixo, mas de uma maneira transparente para caso no futuro decidirmos 
remover ele, não terá impacto na maneira como usamos os componentes, mas para não impactar uma aplicação que já usa o sistema de 
temas dele criamos o **WrapperTheme** que aplicará o tema do Houston™ apenas nos componentes do Houston™.

## Como rodar

1. Clonar o repositório
2. `yarn` na raiz do projeto
3. `yarn start`
4. Abra no **VSCode** o projeto pelo **main.code-workspace**
5. Instale as extensões recomendadas

Ele irá buildar e iniciar o projeto de docs em **http://localhost:3000**.

## Como iniciar uma tarefa

1. Veja o quadro de tarefas na aba [Projects](https://github.com/eduzz/houston/projects/3), aqui mesmo no GitHub.
2. Escolha uma a seu gosto.
3. Mova para a coluna de RFC (Request for comments), na issue da tarefa, adicione a sua proposta de como o componente deve se comportar, automaticamente será enviado uma mensagem no discord pedindo para o pessoal comentar.
4. Espere o feedback do pessoal (24hrs está de bom tamanho).
5. Mande bala no código, **faça sua branch a partir da `develop`**
6. Abra um PR linkando a issue e coloque (caso não seja colocado automaticamente pelo github) eu (@danieloprado), o fer (@ffernandomoraes) como reviewers e outros que você ache interessante olhar seu código.
7. Mova a tarefa no Board.
8. Quando a PR passar pela verificação automática será disparado uma mensagem no discord informando que uma PR está pronta para review.
9. Veja os comentários da PR, se tudo estiver correto, ela será mergeada com a `develop` e estará na proxima versão.

## Backlog

Acesse o [Board](https://github.com/eduzz/houston/projects/3) para ver as tarefas e os componentes que faltam.  

## Padrões

Sempre que desenvolver um componente ou qualquer funcionalidade adicionar um **.mdx** com os detalhes de como usá-lo e 
suas props/configurações. Tente seguir ao máximo a sintaxe dos componentes já existentes.

<img src="https://github.com/eduzz/docs/public/example 1.png" width="250" />

**Lembre-se de cada responsabilidade:**

| Package                      | Descrição                                                                      |
|------------------------------|--------------------------------------------------------------------------------|
| @eduzz/houston-ui            | Componentes do houston para web                                                |
| @eduzz/eslint-config-houston | Configuração padrão para o eslint                                              |
| @eduzz/houston-forms         | Hooks para validação de formulário (livre de plataforma. ex: web ou app)       |
| @eduzz/houston-hooks         | Hooks de uso geral (livre de plataforma. ex: web ou app)                       |
| @eduzz/core                  | Configurações compartilhadas entre os projetos, não deve ser usado diretamente |

## Por baixo dos panos

Utilizamos o [ultra-runner](https://www.npmjs.com/package/ultra-runner) para gerenciar o monorepo, ele é bem simples 
todos os projetos jão estão configurados com build, dev e precommit unificados, todos os projetos utilizam a configuração do eslint
padrão que disponibilizamos junto com o package **@eduzz/eslint-config-houston**

## Comunicação e novidades

Entre no nosso servidor no [Discord](https://discord.gg/EeCnYRsCkX).

## Dúvidas?

* Sobre a parte de dev 💪: @ffernandomoraes ou @danieloprado
* Sobre a parte de design 🌈: @murilolamarca
