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

type IDeletedProps =
  | 'container'
  | 'item'
  | 'justify'
  | 'spacing'
  | 'zeroMinWidth'
  | 'alignContent'
  | 'alignItems'
  | 'direction'
  | 'wrap';

interface IProps extends Omit<GridProps, IDeletedProps> {}

const Column = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Grid {...props} classes={{ root: classes.column }} item ref={ref}>
      {children}
    </Grid>
  );
});

export default React.memo(Column);
