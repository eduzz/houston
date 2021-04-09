# Alert

Um alerta exibe uma mensagem curta e importante de uma forma que atrai a atenção do usuário sem interromper o que ele estiver fazendo.

### Importação

```js
import Alert from '@eduzz/houston-ui/Alert';
```

### Exemplo

```jsx
<Alert closable>Simple Alert</Alert>

<Alert>
    Controlled Alert

    <Alert.Action label='Cancel' variant='text' />
    <Alert.Action label='View' />
</Alert>

<Alert type='error' multiline>
    <Alert.Title>Multiline Alert.</Alert.Title>
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error voluptates repellat
    blanditiis. Temporibus, ipsa. A nemo, molestias quae nam perspiciatis nisi aut delectus ex, amet ut
    numquam commodi quo.

    <Alert.Action label='Cancel' variant='text' />
    <Alert.Action label='View' />
</Alert>
```

### Alert props

| prop      | tipo                                    | obrigatório | padrão      | descrição                                                                                        |
|-----------|-----------------------------------------|-------------|-------------|--------------------------------------------------------------------------------------------------|
| type      | `success`, `info`, `warning`, `error`   | `false`     | `success`   | -                                                                                                |
| onClose   | `(event: React.SyntheticEvent) => void` | `false`     | -           | Se houver um valor, ele adiciona automaticamente o "X".                                          |
| icon      | `React.ReactNode`, `false`              | `false`     | `type` icon | Se `false`, o ícone ficará oculto.                                                               |
| closable  | `boolean`                               | `false`     | `false`     | Se `true`, o componente controla o próprio estado e não há necessidade de usar a prop `onClose`. |
| multiline | `boolean`                               | `false`     | `false`     | Se `true`, as ações cairão na linha abaixo do texto.                                             |

### Alert.Title props

O componente recebe apenas o `children`.

### Alert.Action props

| prop  | tipo              | obrigatório | padrão | descrição |
|-------|-------------------|-------------|--------|-----------|
| label | `React.ReactNode` | `true`      | -      | -         |

E todos as props disponíveis no *Componente de botão*.
