import * as React from 'react';

import Typography from '../../Typography';

export interface IAlertTitleProps {
  children?: React.ReactNode;
}

const AlertTitle = ({ children }: IAlertTitleProps) => (
  <div className='__title'>
    <Typography.Heading color='neutralColor.low.pure' as='h5' lineHeight='default'>
      {children}
    </Typography.Heading>
  </div>
);

export default AlertTitle;
