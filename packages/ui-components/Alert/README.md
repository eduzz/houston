# Alert

### Import

```js
import Alert from '@eduzz/houston-ui/Alert';
```

### Use

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

### Alert props available

| prop      | type                                    | required | default     | description                                                                                      |
|-----------|-----------------------------------------|----------|-------------|--------------------------------------------------------------------------------------------------|
| type      | `success`, `info`, `warning`, `error`   | false    | `success`   | -                                                                                                |
| onClose   | `(event: React.SyntheticEvent) => void` | false    | -           | If there is a value, it automatically adds the "X".                                              |
| icon      | `React.ReactNode`, `false`              | false    | `type` icon | If `false`, the icon will be hidden.                                                             |
| closable  | `boolean`                               | false    | false       | If true, the component controls the state itself and there is no need to use the `onClose` prop. |
| multiline | `boolean`                               | false    | false       | If true, the actions will drop to the line below the text.                                       |

### Alert.Title props available

The component receive only the child.

### Alert.Action props available

| prop  | type              | required | default | description |
|-------|-------------------|----------|---------|-------------|
| label | `React.ReactNode` | true     | -       | -           |

And all available props on *Button component*.
