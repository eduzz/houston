# Tabs

As abas facilitam a exploração e alternam entre diferentes visualizações.

### Importação

```js
import Tabs from '@eduzz/houston-ui/Tabs';
```

### Valor não controlado

```jsx
<Tabs>
  <Tabs.Content label='Title 1'>Content 1</Tabs.Content>
  <Tabs.Content label='Title 2' icon={<MyIcon />}>Content 2</Tabs.Content>
  <Tabs.Content label='Title 3' disabled>Content 3</Tabs.Content>
  <Tabs.Content label='Title 4' disabledPadding>Content 4</Tabs.Content>
</Tabs>
```

### Valor controlado

```jsx
// currentTab = 2

<Tabs value={currentTab} onChange={handleChangeTab}>
  // 0
  <Tabs.Content label='Title 1'>Content 1</Tabs.Content> 
  // 1
  <Tabs.Content label='Title 2' icon={<MyIcon />}>Content 2</Tabs.Content>
  // 2
  <Tabs.Content label='Title 3' disabled>*Active Tab*</Tabs.Content>
</Tabs>
```

### Tabs props

| prop     | type                      | required | default | description         |
|----------|---------------------------|----------|---------|---------------------|
| value    | `number`                  | `false`  | -       | Índice da Tab.      |
| onChange | `(value: number) => void` | `false`  | -       | Recebe novo índice. |

### Tabs.Content props

| prop            | type        | required | default |
|-----------------|-------------|----------|---------|
| label           | `string`    | `true`   | -       |
| icon            | `ReactNode` | `false`  | -       |
| disabled        | `boolean`   | `false`  | `false` |
| disabledPadding | `boolean`   | `false`  | `false` |
