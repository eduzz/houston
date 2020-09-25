# Eduzz Houston

<img src="docs/assets/welcome.svg" width="100%" />

### Installation

```
$ yarn add @eduzz/houston
```

### Use

```
import Button from '@eduzz/houston/components/Button'; (recommended)
```

or

```
import { Button } from '@eduzz/houston';
```

### Configuration

In the project's root file

```
import ThemeProvider from '@eduzz/houston/components/ThemeProvider';

<ThemeProvider application='APPLICATION_NAME'>
  {...}
</ThemeProvider>
```

| application      | value     | done          |
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
