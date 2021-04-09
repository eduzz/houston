# Button

Botões permitem que os usuários tomem ações e decisões com um simples toque.

### Importação

```js
import Button from '@eduzz/houston-ui/Button';
```

### Exemplo

```jsx
<Button>My Button</Button>
```

### Props

| prop      | tipo                           | obrigatório | padrão    |
|-----------|--------------------------------|-------------|-----------|
| disabled  | `boolean`                      | `false`     | `false`   |
| startIcon | `React.Node`                   | `false`     | -         |
| endIcon   | `React.Node`                   | `false`     | -         |
| variant   | `primary`, `secondary`, `text` | `false`     | `primary` |
| href      | `string`                       | `false`     | -         |
| endIcon   | `React.Node`                   | `false`     | -         |
| fullWidth | `boolean`                      | `false`     | `false`   |
| loading   | `boolean`                      | `false`     | `false`   |
| onClick   | `function`                     | `false`     | -         |
