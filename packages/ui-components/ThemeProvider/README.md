# ThemeProvider

### Import

```js
import ThemeProvider from '@eduzz/houston-ui/components/ThemeProvider';
```

### Use

In the project's root file

```jsx
const palette: IThemePalette = {};
<ThemeProvider palette={palette}>....</ThemeProvider>
```

### Props available

| prop    | type            | required | default         |
|---------|-----------------|----------|-----------------|
| palette | `IThemePalette` | false    | `default theme` |
