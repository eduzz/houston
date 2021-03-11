# Tabs

### Import

```js
import Tabs from '@eduzz/houston-ui/Tabs';
```

### Use uncontrolled value

```jsx
<Tabs>
  <Tabs.Content label='Title 1'>Content 1</Tabs.Content>
  <Tabs.Content label='Title 2' icon={<MyIcon />}>Content 2</Tabs.Content>
  <Tabs.Content label='Title 3' disabled>Content 3</Tabs.Content>
  <Tabs.Content label='Title 4' disabledPadding>Content 4</Tabs.Content>
</Tabs>
```

### Use controlled value

```jsx
// currentTab = 2

<Tabs value={currentTab} onChange={handleChangeTab}>
  <Tabs.Content label='Title 1'>Content 1</Tabs.Content>
  <Tabs.Content label='Title 2' icon={<MyIcon />}>Content 2</Tabs.Content>
  <Tabs.Content label='Title 3' disabled>*Active Tab*</Tabs.Content>
</Tabs>
```

### Props available on Tabs

| prop     | type                      | required | default | description       |
|----------|---------------------------|----------|---------|-------------------|
| value    | `number`                  | false    | -       | Tab index         |
| onChange | `(value: number) => void` | false    | -       | Receive new index |

### Props available on Tabs.Content

| prop            | type        | required | default |
|-----------------|-------------|----------|---------|
| label           | `string`    | true     | -       |
| icon            | `ReactNode` | false    | -       |
| disabled        | `boolean`   | false    | false   |
| disabledPadding | `boolean`   | false    | false   |
