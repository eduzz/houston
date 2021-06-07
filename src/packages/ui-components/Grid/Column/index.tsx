import * as React from 'react';

import Grid, { GridProps } from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

const useStyles = makeStyles(() =>
  createStyles({
    column: {
      paddingTop: '0 !important',
      paddingBottom: '0 !important'
    }
  })
);

type IOmitProps =
  | 'container'
  | 'item'
  | 'justify'
  | 'spacing'
  | 'zeroMinWidth'
  | 'alignContent'
  | 'alignItems'
  | 'direction'
  | 'wrap';

export interface IColumnProps extends Omit<GridProps, IOmitProps> {}

const Column = React.forwardRef<HTMLDivElement, IColumnProps>(({ className, ...rest }, ref) => {
  const classes = useStyles();

  return <Grid {...rest} item className={clsx(classes.column, className)} ref={ref} />;
});

export default React.memo(Column);
