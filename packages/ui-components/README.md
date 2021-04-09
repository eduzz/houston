# Eduzz Houston

[![version](https://img.shields.io/npm/v/@eduzz/houston)](https://www.npmjs.com/package/@eduzz/houston-ui)

### Installation

```
$ yarn add @eduzz/houston
```

### Configuração

**Este provedor não substituirá temporariamente o tema atual do projeto, apenas estilizará os componentes do Houston. Habilitando a migração de componentes gradualmente.**

No arquivo raiz do projeto

```js
import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';
```

```jsx
const palette: IThemePalette = {};
<ThemeProvider palette={palette}>....</ThemeProvider>
```

### Props

| prop    | tipo            | obrigatório | padrão          |
|---------|-----------------|-------------|-----------------|
| palette | `IThemePalette` | `false`     | `default theme` |

