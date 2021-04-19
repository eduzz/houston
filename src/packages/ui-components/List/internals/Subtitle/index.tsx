import * as React from 'react';

import Typography from '../../../Typography';
import { IListTitleProps } from '../../Title';

interface IProps extends IListTitleProps {}

const Subtitle = ({ children, ...props }: IProps) => (
  <Typography {...props} size='small' fontWeight='regular' lineHeight='compact' variant='secondary'>
    {children}
  </Typography>
);

export default React.memo(Subtitle);
