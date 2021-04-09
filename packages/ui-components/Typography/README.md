# Typography

Use a tipografia para apresentar seu design e conteúdo da forma mais clara e eficiente possível.

### Importação

```js
import Typography from '@eduzz/houston-ui/Typography';
```

### Exemplo

```jsx
<Typography>My text</Typography>
```

### Props

| prop         | tipo                                                                                                            | obrigatório | padrão    |
|--------------|-----------------------------------------------------------------------------------------------------------------|-------------|-----------|
| paragraph    | `boolean`                                                                                                       | `false`     | `false`   |
| variant      | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `subtitle1`, `subtitle2`, `body1`, `body2`, `caption`, `button`, `overline` | `false`     | -         |
| color        | `initial`, `inherit`, `primary`, `secondary`, `textPrimary`, `textSecondary`, `error`                           | `false`     | `initial` |
| size         | `FontSizes`                                                                                                     | `false`     | -         |
| lineHeight   | `LineHeights`                                                                                                   | `false`     | -         |
| fontWeight   | `FontWeight`                                                                                                    | `false`     | -         |
| marginBottom | `boolean`                                                                                                       | `false`     | -         |
