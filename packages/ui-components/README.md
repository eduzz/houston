# Eduzz Houston

[![version](https://img.shields.io/npm/v/@eduzz/@eduzz/houston-ui)](https://www.npmjs.com/package/@eduzz/houston)
[![size](https://img.shields.io/bundlephobia/min/@eduzz/houston-ui)](https://www.npmjs.com/package/@eduzz/houston)

### Installation

```
$ yarn add @eduzz/houston
```

### Configuration

**This Provider will not temporarily replace the current theme of the project, it will only style Houston's components. Enabling the migration of components gradually.**

In the project's root file

```js
import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';
```

```jsx
const palette: IThemePalette = {};
<ThemeProvider palette={palette}>....</ThemeProvider>
```

### Props available

| prop    | type            | required | default         |
|---------|-----------------|----------|-----------------|
| palette | `IThemePalette` | false    | `default theme` |

