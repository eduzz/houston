# Toast

Usado para exibir notificações temporárias.

### Importação

```js
import Toast from '@eduzz/houston-ui/Toast';
```

### Exemplo

```jsx
function handle() {
  Toast.success('Success', options);
  Toast.error('Error', options);
  Toast.info('Info', options);
}
```

### Opções

| opção   | tipo       | descrição                                |
|---------|------------|------------------------------------------|
| onOpen  | `function` | Chamado quando a notificação aparece.    |
| onClose | `function` | Chamado quando a notificação desaparece. |
| onClick | `function` | Chamado ao clicar dentro da notificação. |
