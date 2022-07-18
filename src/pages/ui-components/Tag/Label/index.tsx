import * as React from 'react';

import { StyledProp, cx } from '@eduzz/houston-styles';

import Typography from '../../Typography';

export interface LabelProps extends StyledProp {
  children: React.ReactNode;
}

const Label = ({ children, className, ...rest }: LabelProps) => (
  <Typography className={cx('houston-tag-label', className)} {...rest} size='xs' lineHeight='lg'>
    {children}
  </Typography>
);

export default Label;
