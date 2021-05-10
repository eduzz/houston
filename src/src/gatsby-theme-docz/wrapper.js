import './global.css';

import React from 'react';

import { StylesProvider } from '@material-ui/core/styles';


function fixLayout() {
  const aButton = document.querySelector('.sidebar a');
  if(!aButton) return;
  aButton.click();
  setTimeout(() => history.back(), 100);
}
fixLayout();


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
