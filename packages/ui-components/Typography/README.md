# Button

### Import

```
import Typography from '@eduzz/houston/components/Typography'; (recommended)
```

or

```
import { Typography } from '@eduzz/houston';
```

### Use

```
<Typography>My text</Typography>
```

### Props available

| prop | type | required | default |
| ---- | ---- | -------- | ------- |
| className | `string` | false | - |
| style | `React.CSSProperties` | false | - |
| paragraph | `boolean` | false | `false` |
| variant | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `subtitle1`, `subtitle2`, `body1`, `body2`, `caption`, `button`, `overline` | false | - |
| color | `initial`, `inherit`, `primary`, `secondary`, `textPrimary`, `textSecondary`, `error` | false | `initial` |
