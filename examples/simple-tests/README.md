# Example tests

### Installation

```bash
yarn add jest @types/jest enzyme @types/enzyme babel-jest @wojtekmaj/enzyme-adapter-react-17 @babel/preset-typescript @babel/preset-react @babel/preset-env --dev
```

### Configuration

.babelrc
```js
{
  "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
}
```

jest.config.js
```js
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.spec.ts(x)', 'src/**/*.test.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
};
```

.jest/setup.ts
```js
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
```

### Run

In package.json add line:
```json
"scripts": {
  "test": "jest"
},
```
