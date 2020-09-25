# Eduzz Houston

<img src="docs/assets/welcome.svg" width="100%" />

### Installation

```
$ yarn add @eduzz/houston
```

### Use

```
import { Button } from '@eduzz/houston';
```

or

```
import Button from '@eduzz/houston/components/Button';
```

### Configuration

**[Attention]** For the project to be able to migrate little by little, we individually implemented ThemeProvider above all the components so as not to overwrite the current project theme.

In the project's root file (temporarily optional)

```
import ThemeProvider from '@eduzz/houston/components/ThemeProvider';

<ThemeProvider application='APPLICATION_NAME'>
  {...}
</ThemeProvider>
```

| Applications     | value     | done          |
| ---------------- | --------- | ------------- |
| Select Afiliados | select    | true          |
| Órbita           | orbita    | false         |
| Jobzz            | jobzz     | false         |
| Blinket          | blinket   | false         |
| Safe Vídeo       | safevideo | false         |
| Nutror           | nutror    | false         |
| Checkount Sun    | sun       | false         |
| Telescope        | telescope | false         |
| Alumy            | alumy     | false         |
| Custom Pallete   | custom    | false         |
