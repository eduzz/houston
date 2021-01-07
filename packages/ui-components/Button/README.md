# Button

### Import

```js
import Button from '@eduzz/houston-ui/Button';
```

### Use

```jsx
<Button>My Button</Button>
```

### Props available

| prop      | type                                                               | required | default   |
|-----------|--------------------------------------------------------------------|----------|-----------|
| className | `string`                                                           | false    | -         |
| style     | `React.CSSProperties`                                              | false    | -         |
| onClick   | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | false    | -         |
| disabled  | `boolean`                                                          | false    | `false`   |
| startIcon | `React.Node`                                                       | false    | -         |
| variant   | `primary`, `secondary`, `text`                                     | false    | `primary` |
| href      | `string`                                                           | false    | -         |
| endIcon   | `React.Node`                                                       | false    | -         |
| fullWidth | `boolean`                                                          | false    | `false`   |
| id        | `string`                                                           | false    | -         |
| loading   | `boolean`                                                          | false    | `false`   |
