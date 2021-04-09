# ThemeProvider

Um provedor de tema genérico e estilizador CSS.

### Importação

```js
import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';
```

### Exemplo

**Este provedor não substituirá temporariamente o tema atual do projeto, apenas estilizará os componentes do Houston. Habilitando a migração de componentes gradualmente.**

No arquivo raiz do projeto

```jsx
const palette: IThemePalette = {};
<ThemeProvider palette={palette}>....</ThemeProvider>
```

### Props available

| prop    | tipo            | obrigatório | padrão          |
|---------|-----------------|-------------|-----------------|
| palette | `IThemePalette` | `false`     | `default theme` |


### Tema padrão

```js
{
  background: {
    paper: '#fff',
    default: '#F9FAFB'
  },
  common: {
    black: '#000',
    white: '#fff'
  },
  error: {
    light: '#FDD9D7',
    main: '#F44336',
    dark: '#B8160A',
    contrastText: '#fff'
  },
  grey: {
    50: '#fafafa',
    100: '#F9FAFB',
    200: '#ECEFF1',
    300: '#B0BEC5',
    400: '#78909C',
    500: '#546E7A',
    600: '#37474F',
    700: '#373737',
    800: '#272727',
    900: '#1E1E1E'
  },
  warning: {
    main: '#FFCA28',
    dark: '#E5AD00',
    light: '#FFF4D4',
    contrastText: '#37474F'
  },
  primary: {
    light: '#9EB5D9',
    main: '#0D47A1',
    dark: '#072D83',
    contrastText: '#fff'
  },
  secondary: {
    light: '#ECEFF1',
    main: '#78909C',
    dark: '#37474F',
    contrastText: '#fff'
  },
  info: {
    light: '#E6F5FC',
    main: '#039BE5',
    dark: '#0277B0',
    contrastText: '#fff'
  },
  success: {
    light: '#D2EBD3',
    main: '#4caf50',
    dark: '#388e3c',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  text: {
    disabled: '#B0BEC5',
    hint: '#B0BEC5',
    primary: '#546E7A',
    secondary: '#78909C'
  }
}
```
