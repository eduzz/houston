# Tooltip

Usado para identificar elementos e descrever funcionalidades.

### Importação

```js
import Tooltip from '@eduzz/houston-ui/Tooltip';
```

### Exemplo

```jsx
<Tooltip title='Lorem ipsum dolor'>
  <Button>John Doe</Button>
</Tooltip>
```

## Propriedades disponíveis

| prop      | tipo                | obrigatório | padrão  | descrição                                |
| --------- | ------------------- | ----------- | ------- | ---------------------------------------- |
| title     | `string`            | `true`      | -       | -                                        |
| disabled  | `boolean`           | `false`     | `false` | -                                        |
| placement | `ITooltipPlacement` | `false`     | `top`   | -                                        |
| open      | `boolean`           | `false`     | `false` | Se verdadeiro, sempre exibirá o `title`. |
| onOpen    | `function`          | `false`     | -       | -                                        |
| onClose   | `function`          | `false`     | -       | -                                        |
