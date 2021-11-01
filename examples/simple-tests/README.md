# Example tests

### Installation

```bash
yarn add jest @types/jest enzyme @types/enzyme babel-jest @wojtekmaj/enzyme-adapter-react-17 @babel/preset-typescript @babel/preset-react @babel/preset-env --dev
```

### Configuration

.babelrc
```js
{
  "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
  "plugins": []
}
```

jest.config.js
```js
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
};
```

### Run

In package.json add:
```json
"scripts": {
  ...
  "test": "jest"
},
```
