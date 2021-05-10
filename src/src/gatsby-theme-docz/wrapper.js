import './global.css';

import React from 'react';

import { StylesProvider } from '@material-ui/core/styles';

const generateClassName = (rule, styleSheet) => {
  const random = Math.random().toString(36).substring(5);
  return `${styleSheet.options.classNamePrefix}-${rule.key}-${random}`;
}

export default ({ children }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      {children}
    </StylesProvider>
  );
};
