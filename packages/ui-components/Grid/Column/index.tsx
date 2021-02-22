import * as React from 'react';

import Grid, { GridProps } from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import WrapperTheme from '../../ThemeProvider/WrapperTheme';

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

interface IProps extends Omit<GridProps, IOmitProps> {}

const Column = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <WrapperTheme>
      <Grid {...props} item classes={{ root: classes.column }} ref={ref}>
        {children}
      </Grid>
    </WrapperTheme>
  );
});

export default React.memo(Column);
