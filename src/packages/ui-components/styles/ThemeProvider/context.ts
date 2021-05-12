import * as React from 'react';

import { Theme } from '@material-ui/core/styles';

import generateTheme from './_default';

const HoustonThemeContext = React.createContext<Partial<Theme>>(generateTheme());
export default HoustonThemeContext;
