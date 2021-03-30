import * as React from 'react';

import Typography from '../../../Typography';

import { IListTitleProps } from '../../Title';

interface IProps extends IListTitleProps {}

const Subtitle = ({ children, ...props }: IProps) => {
  return (
    <Typography {...props} size='small' lineHeight='compact'>
      {children}
    </Typography>
  );
};

export default React.memo(Subtitle);
