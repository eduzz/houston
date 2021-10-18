import * as React from 'react';

import MUIAlertTitle from '@mui/material/AlertTitle';

export interface IAlertTitleProps {
  children?: React.ReactNode;
}

const AlertTitle: React.FC<IAlertTitleProps> = ({ children }) => <MUIAlertTitle>{children}</MUIAlertTitle>;

export default AlertTitle;
