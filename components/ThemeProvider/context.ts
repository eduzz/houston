import * as React from 'react';

import { Theme } from '@material-ui/core/styles';

export type ContextThemeType = Partial<Theme>;

const ContextTheme = React.createContext<ContextThemeType>(null);
export default ContextTheme;
