Eduzz Houston: Eslint Config
----------------------------

Default Config of eslint, you just need to create a ***.eslintrc*** and a ***.prettierrc.js*** like below:

```sh
yarn add --dev @eduzz/eslint-config-houston @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-eslint-plugin eslint-plugin-import-helpers eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unused-imports prettier 
```

```json
//.eslintrc
{
  "extends": [
    "@eduzz/eslint-config-houston"
  ]
}
```

```js
//.prettierrc.js
module.exports = {
  ...require("@eduzz/eslint-config-houston/.prettierrc")
}
```