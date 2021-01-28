# Eduzz Houston

[![version](https://img.shields.io/npm/v/@eduzz/@eduzz/houston-ui)](https://www.npmjs.com/package/@eduzz/houston)
[![size](https://img.shields.io/bundlephobia/min/@eduzz/houston-ui)](https://www.npmjs.com/package/@eduzz/houston)

### Installation

```
$ yarn add @eduzz/houston
```

### Use

```js
import Button from '@eduzz/houston-ui/Button';
```

### Configuration

**This Provider will not temporarily replace the current theme of the project, it will only style Houston's components according to the application. Enabling the migration of components gradually.**

In the project's root file

```jsx
import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';

<ThemeProvider application='APPLICATION_NAME'>
  {...}
</ThemeProvider>
```

| application      | value        | done  |
|------------------|--------------|-------|
| Select Afiliados | `select`     | true  |
| Órbita           | `orbita`     | false |
| Jobzz            | `jobzz`      | false |
| Blinket          | `blinket`    | false |
| Safe Vídeo       | `safevideo`  | false |
| Nutror           | `nutror`     | false |
| Checkount Sun    | `sun`        | false |
| Telescope        | `telescope`  | false |
| Alumy            | `alumy`      | false |
| Backoffice       | `backoffice` | false |
| Custom Pallete   | `custom`     | false |
