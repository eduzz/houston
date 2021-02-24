import * as React from 'react';

import Grid, { GridProps } from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';

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

const Column = React.forwardRef<HTMLDivElement, IColumnProps>((props, ref) => {
  const classes = useStyles();

  return <Grid {...props} item classes={{ root: classes.column }} ref={ref} />;
});

export default React.memo(Column);
