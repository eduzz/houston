import * as React from 'react';

import Typography from '../../Typography';

export interface IAlertContentProps {
  children?: React.ReactNode;
}

const AlertContent = ({ children }: IAlertContentProps) => (
  <div className='__text'>
    <Typography.Paragraph color='neutralColor.low.pure' size='sm' lineHeight='lg'>
      {children}
    </Typography.Paragraph>
  </div>
);

export default AlertContent;
