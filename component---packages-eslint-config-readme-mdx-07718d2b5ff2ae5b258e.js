(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{TQLc:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n("cxan"),s=n("+wNj"),r=(n("ERkP"),n("ZVZ0")),o=n("9Rvw"),i=(n("l1C2"),["components"]),c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/eslint-config/README.mdx"}});var l={_frontmatter:c},p=o.a;function u(e){var t=e.components,n=Object(s.a)(e,i);return Object(r.b)(p,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"eslint-config"},"ESLint Config"),Object(r.b)("p",null,"Para configurar no padrão do Houston, primerio você deve adicionar as dependências, pois o eslint exige que plugins devem,\nser adicionados no projeto principal:"),Object(r.b)("h2",{id:"react"},"React"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev @eduzz/eslint-config-houston @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-eslint-plugin eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unused-imports eslint-plugin-sonarjs prettier\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'// .eslintrc\n{\n  "extends": ["@eduzz/eslint-config-houston"]\n}\n\n// .prettierrc.js\nmodule.exports = {\n  ...require(\'@eduzz/eslint-config-houston/.prettierrc\')\n};\n')),Object(r.b)("h2",{id:"react-native"},"React Native:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev @eduzz/eslint-config-houston eslint-plugin-react-native @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-eslint-plugin eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unused-imports eslint-plugin-sonarjs prettier\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'// .eslintrc\n{\n  "extends": ["@eduzz/eslint-config-houston/native"]\n}\n\n// .prettierrc.js\nmodule.exports = {\n  ...require(\'@eduzz/eslint-config-houston/.prettierrc\')\n};\n')),Object(r.b)("h2",{id:"node"},"Node"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev @eduzz/eslint-config-houston @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-eslint-plugin eslint-plugin-import eslint-plugin-prettier eslint-plugin-unused-imports eslint-plugin-sonarjs prettier\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'// .eslintrc\n{\n  "extends": ["@eduzz/eslint-config-houston/node"]\n}\n\n// .prettierrc.js\nmodule.exports = {\n  ...require(\'@eduzz/eslint-config-houston/.prettierrc\')\n};\n')),Object(r.b)("h2",{id:"configurações-extras"},"Configurações Extras"),Object(r.b)("h3",{id:"vscode"},"VSCode"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Adicione a extensão do ",Object(r.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"ESLint"),".\n",Object(r.b)("strong",{parentName:"p"},"SUGERIMOS DESISTALAR OU DESATIVAR A EXTENSÃO DO PRETTIER POIS O ESLINT QUE APLICARÁ O PRETTIER."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Crie/Adicione no .vscode/settings.json (não na suas configurações, pois assim ficará no projeto e o time já terá acesso):"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  //... suas configurações\n  "editor.codeActionsOnSave": {\n    "source.organizeImports": false,\n    "source.fixAll.eslint": true\n  },\n  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],\n  "editor.formatOnPaste": false,\n  "editor.formatOnSave": false,\n  "editor.formatOnType": false,\n  "editor.tabSize": 2\n}\n')),Object(r.b)("h3",{id:"react-hooks"},"React Hooks"),Object(r.b)("p",null,"Para que o eslint verifique e aplica a regra correta do ",Object(r.b)("strong",{parentName:"p"},"react-hooks/exhaustive-deps")," é preciso adicionar seus custom hooks\nnas regras do .eslintrc, para facilitar esse processo criamos um ",Object(r.b)("strong",{parentName:"p"},"generator"),". Já adicionados todos os hooks do Houston,\nmas caso queria adicionar os do seu proejeto:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// .eslintrc.js <~precisa ser .js\nconst generator = require('@eduzz/eslint-config-houston/generator');\n\nmodule.exports = {\n  extends: ['@eduzz/eslint-config-houston'],\n  rules: {\n    'react-hooks/exhaustive-deps': generator.exhaustiveDeps('warn', ['useMyCustomHook'], true)\n  }\n};\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Método"),Object(r.b)("th",{parentName:"tr",align:null},"Params"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"exhaustiveDeps"),Object(r.b)("td",{parentName:"tr",align:null},"1. 'warn' ","|"," 'error'",Object(r.b)("br",null),"2. Array com seus hooks ",Object(r.b)("br",null),"3. boolean se deve ou não adicionar os hooks do @eduzz/houston-hooks")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"⚠️ Vale ressaltar que os custom hooks devem seguir o padrão de que o segundo parametro seja a deps")),Object(r.b)("h3",{id:"react-17-e-jsx"},"React 17 e JSX"),Object(r.b)("p",null,"Para utilizar a nova versão do React com jsx-runtime basta seguir o ",Object(r.b)("a",{parentName:"p",href:"https://pt-br.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"},"tutorial do blog"),",\nmas resumidamente é:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# Removendo Imports React não Utilizadas\nnpx react-codemod update-react-imports\n")),Object(r.b)("p",null,"tsconfig.json"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  //... suas configurações\n  "compilerOptions": {\n    "jsx": "react-jsx" //Troque esse configuração\n  }\n}\n')),Object(r.b)("p",null,".eslintrc"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": ["@eduzz/eslint-config-houston"],\n  "rules": {\n    //Adicione essas rules\n    "react/jsx-uses-react": "off",\n    "react/react-in-jsx-scope": "off"\n  }\n}\n')))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/eslint-config/README.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-eslint-config-readme-mdx-07718d2b5ff2ae5b258e.js.map