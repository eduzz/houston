import * as React from 'react';

import { Theme } from '@mui/material/styles';

import generateTheme from './_default';

const HoustonThemeContext = React.createContext<Partial<Theme>>(generateTheme());
export default HoustonThemeContext;
