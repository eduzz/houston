# Alert

### Import

```
import Button from '@eduzz/houston/components/Alert'; (recommended)
```

or

```
import { Alert } from '@eduzz/houston';
```

### Use

```
<Alert>My Alert</Alert>
```

### Props available

| prop | type | required | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| id | `string` | false | - | - |
| className | `string` | false | - | - |
| style | `React.CSSProperties` | false | - | - |
| type | `success`, `info`, `warning`, `error` | false | `success` | - |
| onClose | `(event: React.SyntheticEvent) => void` | false | - | If there is a value, it automatically adds the "X". |
| icon | `React.ReactNode`, `false` | false | `type` icon | If `false`, the icon will be hidden. |
| title | `React.ReactNode` | false | - | - |
| closabled | `boolean` | false | false | If true, the component controls the state itself and there is no need to use the `onClose` prop. |
| actions | `IActions[]` | false | [] | - |
