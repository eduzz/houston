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
| onClose | `(event: React.SyntheticEvent) => void` | false | - | - |
| icon | `React.ReactNode`, `false` | false | `type` icon | If `false`, the icon will be hidden. |
| title | `React.ReactNode` | false | - | - |
| closabled | `boolean` | false | false | If true, the component controls the state itself. |
| actions | `IActions[]` | false | [] | - |
