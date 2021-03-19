import * as React from 'react';

export interface IAlertTitleProps {
  children?: React.ReactNode;
}

export default React.memo<IAlertTitleProps>(() => null);
