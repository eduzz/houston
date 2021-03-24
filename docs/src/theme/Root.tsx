import React, { memo } from 'react';
import '../css/custom.css';

import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';

const Root = memo(({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
});

export default Root;
