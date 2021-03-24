module.exports = function(plop) {
  /* Nome e descrição do template */
  plop.setGenerator("Documentação", {
    description: "Template para gerar documentações do Houston",

    prompts: [
      /* Questões que quer perguntar no CLI */
      {
        type: "list",
        name: "docType",
        message: "📄  Qual tipo de documentação você quer criar?",
        choices: ["Componente", "Hook", "Outro"],
        filter: function(val) {
          if (val.toLowerCase() === 'componente') {
            return 'components';
          }

          if (val.toLowerCase() === 'hook') {
            return 'hooks';
          }

          return 'others';
        }
      },
      {
        type: "input",
        name: "title",
        message: "🏷️   Qual o título da sua documentação?",
      },
      {
        type: "input",
        name: "id",
        message: "🆔  Qual o id da sua documentação?",
      },
    ],

    actions: [
      /* Ações que quer gerar a partir das respostas do CLI  */
      {
          type: "add",
          path: `docs/{{docType}}/{{dashCase id}}.mdx`,
          templateFile: "src/templates/docs-{{docType}}.hbs",
      }
    ],
  });
}