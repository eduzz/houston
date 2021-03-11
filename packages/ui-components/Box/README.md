# Box

### Import

```js
import Box from '@eduzz/houston-ui/Box';
```

### Use

```jsx
<Box
    xs={{ margin: 0, padding: 0 }}
    sm={{ margin: '0 12px', padding: 20 }}
    md={{ margin: '0 12px', padding: 40 }}
    lg={{ margin: '0 12px', padding: 60 }}
    className={classes.root}
>
    Your component here
</Box>
```

### Props available

| prop | type                                                      | required | default                            | description                                                                       |
|------|-----------------------------------------------------------|----------|------------------------------------|-----------------------------------------------------------------------------------|
| xs   | `{ margin?: string | number, padding?: string | number }` | false    | `{ margin: '16px 0', padding: 0 }` | If a value is set only in xs, all the other breakpoints will have the same value. |
| sm   | `{ margin?: string | number, padding?: string | number }` | false    | `{ margin: '16px 0', padding: 0 }` | -                                                                                 |
| md   | `{ margin?: string | number, padding?: string | number }` | false    | `{ margin: '16px 0', padding: 0 }` | -                                                                                 |
| lg   | `{ margin?: string | number, padding?: string | number }` | false    | `{ margin: '16px 0', padding: 0 }` | -                                                                                 |
| xl   | `{ margin?: string | number, padding?: string | number }` | false    | `{ margin: '16px 0', padding: 0 }` | -                                                                                 |
