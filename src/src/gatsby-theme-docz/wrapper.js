import React from 'react';

import { StylesProvider } from '@material-ui/core/styles';

const generateClassName = (rule, styleSheet) => {
  return `${styleSheet.options.classNamePrefix}-${rule.key}`;
}


export default ({ children }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      {children}
    </StylesProvider>
  );
};