import './global.css';

import React from 'react';

import { StylesProvider } from '@material-ui/core/styles';

const isSSR = typeof window === "undefined" || !window.document;

const generateClassName = (rule, styleSheet) => {
  if (isSSR) {
    return `${styleSheet.options.classNamePrefix}-${rule.key}`;
  }

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
