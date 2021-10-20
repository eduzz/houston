import * as React from 'react';
import generateTheme from './_default';
var HoustonThemeContext = React.createContext(generateTheme());
export default HoustonThemeContext;
