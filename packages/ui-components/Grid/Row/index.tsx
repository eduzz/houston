import * as React from 'react';

import Grid, { GridProps } from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import WrapperTheme from '../../ThemeProvider/WrapperTheme';
import { useGrid } from '../context';
import { IGridConfig } from '../interfaces';

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
  const { spacing } = useGrid() || {};
  const { children } = props;

  const config: IGridConfig = React.useMemo(() => {
    return {
      comfortable: {
        spacing: 5
      },
      cozy: {
        spacing: 2
      },
      compact: {
        spacing: 1
      }
    };
  }, []);

  const rowProps = React.useMemo(() => ({ ...props }), [props]);

  return (
    <WrapperTheme>
      <Grid {...rowProps} container ref={ref} className={classes.root} spacing={config[spacing ?? 'cozy'].spacing}>
        {children}
      </Grid>
    </WrapperTheme>
  );
});

export default React.memo(Row);
