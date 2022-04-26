import * as React from 'react';

import { HoustonTokens, createTokens } from '@eduzz/houston-tokens';

const HoustonThemeContext = React.createContext<HoustonTokens>(createTokens('orbita'));

export default HoustonThemeContext;
