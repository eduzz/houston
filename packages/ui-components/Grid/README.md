# Grid

O layout responsivo da grade do Houston se adapta ao tamanho e orientação da tela, garantindo a consistência entre layouts.

### Importação

```js
import Container from '@eduzz/houston-ui/Grid/Container';
import Column from '@eduzz/houston-ui/Grid/Column';
import Row from '@eduzz/houston-ui/Grid/Row';
```

### Exemplo

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

### Não faça isso

```jsx
<Container spacing='comfortable'>
  <Row alignItems='center'>
    <Column xs={12} sm={12} md={12} lg={12} xl={12}>
      ...
    </Column>
  </Row>

  // ❌  Um `Container` não pode estar dentro de outro` Container`.
  <Container spacing='compact'>
    <Row alignItems='center'>
      <Column xs={12} sm={12} md={12} lg={12} xl={12}>
        ...
      </Column>
    </Row>
  <Container>
<Container>
```

### Container Props

| prop    | tipo                             | obrigatório | padrão  |
|---------|----------------------------------|-------------|---------|
| spacing | `comfortable`, `cozy`, `compact` | `false`     | `cozy`  |
| layout  | `fluid`, `solid`                 | `false`     | `solid` |

### Row Props

| prop       | tipo                                                                                | obrigatório | padrão |
|------------|-------------------------------------------------------------------------------------|-------------|--------|
| alignItems | `flex-start`, `center`, `flex-end`, `stretch`, `baseline`                           | `false`     | -      |
| justify    | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` | `false`     | -      |

### Column Props

| prop | tipo                                                                             | obrigatório | padrão |
|------|----------------------------------------------------------------------------------|-------------|--------|
| xs   | `boolean`, `auto`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` | `false`     | -      |
| sm   | `boolean`, `auto`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` | `false`     | -      |
| md   | `boolean`, `auto`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` | `false`     | -      |
| lg   | `boolean`, `auto`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` | `false`     | -      |
| xl   | `boolean`, `auto`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` | `false`     | -      |
