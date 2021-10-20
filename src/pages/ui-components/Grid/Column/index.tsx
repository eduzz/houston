import * as React from 'react';

import Grid, { GridProps } from '@mui/material/Grid';

type IOmitProps =
  | 'container'
  | 'item'
  | 'justify'
  | 'justifyContent'
  | 'spacing'
  | 'zeroMinWidth'
  | 'alignContent'
  | 'alignItems'
  | 'direction'
  | 'wrap';

export interface IColumnProps extends Omit<GridProps, IOmitProps> {}

const Column = React.forwardRef<HTMLDivElement, IColumnProps>(({ className, ...rest }, ref) => {
  return <Grid {...rest} item className={className} ref={ref} />;
});

export default Column;
