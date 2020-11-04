Eduzz Houston: Eslint Config
----------------------------

Default Config of eslint, you just need to create a ***.eslintrc*** and a ***.prettierrc.js*** like below:

*There ir no need to add eslint plugins (eslint-config-prettier, @typescript-eslint, and etc...),*
*you need just install this package and voilà*

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