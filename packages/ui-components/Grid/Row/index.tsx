import * as React from 'react';

import Grid, { GridProps } from '@material-ui/core/Grid';
import { GridSpacing } from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import WrapperTheme from '../../ThemeProvider/WrapperTheme';
import { useGrid } from '../context';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: 0,
      width: '100%'
    }
  })
);

type RowPropsExtends = 'id' | 'className' | 'children' | 'justify' | 'alignItems' | 'style';

interface IProps extends Pick<GridProps, RowPropsExtends> {}

const Row = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const classes = useStyles();
  const { spacing } = useGrid();

  const config = React.useMemo(() => {
    const sizes = { comfortable: 10, cozy: 4, compact: 2 };
    return sizes[spacing ?? 'cozy'] as GridSpacing;
  }, [spacing]);

  return (
    <WrapperTheme>
      <Grid {...props} container ref={ref} className={classes.root} spacing={config} />
    </WrapperTheme>
  );
});

export default React.memo(Row);
