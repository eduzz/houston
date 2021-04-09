# Box

O componente Box serve como um componente encapsulador (wrapper) para a auxiliar na maioria das necessidades de uso com CSS.

### Importação

```js
import Box from '@eduzz/houston-ui/Box';
```

### Exemplo

```jsx
<Box
    xs={{ margin: 0, padding: 0 }}
    sm={{ margin: '0 12px', padding: 20 }}
    md={{ margin: '0 12px', padding: 40 }}
    lg={{ margin: '0 12px', padding: 60 }}
>
    Your component here
</Box>
```

### Props

| prop | tipo                                                      | obrigatório | padrão                             | descrição                                                                                         |
|------|-----------------------------------------------------------|-------------|------------------------------------|---------------------------------------------------------------------------------------------------|
| xs   | `{ margin?: string | number, padding?: string | number }` | `false`     | `{ margin: '16px 0', padding: 0 }` | Se um valor for definido apenas em xs, todos os outros pontos de interrupção terão o mesmo valor. |
| sm   | `{ margin?: string | number, padding?: string | number }` | `false`     | `{ margin: '16px 0', padding: 0 }` | -                                                                                                 |
| md   | `{ margin?: string | number, padding?: string | number }` | `false`     | `{ margin: '16px 0', padding: 0 }` | -                                                                                                 |
| lg   | `{ margin?: string | number, padding?: string | number }` | `false`     | `{ margin: '16px 0', padding: 0 }` | -                                                                                                 |
| xl   | `{ margin?: string | number, padding?: string | number }` | `false`     | `{ margin: '16px 0', padding: 0 }` | -                                                                                                 |
