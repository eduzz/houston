# Button

Houston has three types of buttons and they can be configured according to the need for use within Eduzz applications.

### Import

```
import Button from '@eduzz/houston/components/Button'; (recommended)
```

or

```
import { Button } from '@eduzz/houston';
```

### Use

```
<Button>My Button</Button>
```

### Props available

| prop | type | required | default |
| ---- | ---- | -------- | ------- |
| className | `string` | false | - |
| style | `React.CSSProperties` | false | - |
| onClick | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | false | - |
| disabled | `boolean` | false | `false` |
| startIcon | `React.Node` | false | - |
| type | `primary`, `secondary`, `text` | false | `primary` |
| href | `string` | false | - |
| endIcon | `React.Node` | false | - |
| fullWidth | `boolean` | false | `false` |
| id | `string` | false | - |
| loading | `boolean` | false | `false` |
