import * as React from 'react';

import { TypographyProps } from '@material-ui/core/Typography';

type ListSubtitleProps = 'id' | 'className';

export interface IListSubtitleProps extends Pick<TypographyProps, ListSubtitleProps> {
  children: React.ReactNode;
}

export default (() => null) as React.FC<IListSubtitleProps>;
