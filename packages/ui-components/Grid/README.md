# Grid

### Import

```js
import Container from '@eduzz/houston-ui/Grid/Container';
import Column from '@eduzz/houston-ui/Grid/Column';
import Row from '@eduzz/houston-ui/Grid/Row';
```

### Use

```jsx
<Container spacing='comfortable'>
  <Row alignItems='center'>
    <Column xs={12} sm={12} md={12} lg={12} xl={12}>
      ...
    </Column>
  </Row>

  <Row alignItems='flex-end'>
    <Column xs={12} sm={12} md={12} lg={12} xl={12}>
      ...
    </Column>
  </Row>

  <Row justify='center'>
    <Column xs={12} sm={12} md={12} lg={12} xl={12}>
      ...
    </Column>
  </Row>
<Container>
```

### Do not do it

```jsx
<Container spacing='comfortable'>
  <Row alignItems='center'>
    <Column xs={12} sm={12} md={12} lg={12} xl={12}>
      ...
    </Column>
  </Row>

  // ❌  A `Container` cannot be inside another `Container`
  <Container spacing='compact'>
    <Row alignItems='center'>
      <Column xs={12} sm={12} md={12} lg={12} xl={12}>
        ...
      </Column>
    </Row>
  <Container>
<Container>
```

### Container Props available

| prop    | type                             | required | default |
|---------|----------------------------------|----------|---------|
| spacing | `comfortable`, `cozy`, `compact` | false    | `cozy`  |
| layout  | `fluid`, `solid`                 | false    | `solid` |

### Row Props available

| prop       | type                                                                                | required | default |
|------------|-------------------------------------------------------------------------------------|----------|---------|
| alignItems | `flex-start`, `center`, `flex-end`, `stretch`, `baseline`                           | false    | -       |
| justify    | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` | false    | -       |

### Column Props available

| prop | type                                                                             | required | default |
|------|----------------------------------------------------------------------------------|----------|---------|
| xs   | `boolean`, `auto`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` | false    | -       |
| sm   | `boolean`, `auto`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` | false    | -       |
| md   | `boolean`, `auto`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` | false    | -       |
| lg   | `boolean`, `auto`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` | false    | -       |
| xl   | `boolean`, `auto`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` | false    | -       |

Check breakpoints on this [link](https://material-ui.com/pt/customization/breakpoints/).
