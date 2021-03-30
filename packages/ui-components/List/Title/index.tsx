import * as React from 'react';

import { TypographyProps } from '@material-ui/core/Typography';

type ListTitleProps = 'id' | 'className';

export interface IListTitleProps extends Pick<TypographyProps, ListTitleProps> {
  children: React.ReactNode;
}

export default React.memo<IListTitleProps>(() => null);
