import * as React from 'react';

import Grid, { GridProps } from '@material-ui/core/Grid';
import { GridSpacing } from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import WrapperTheme from '../../styles/ThemeProvider/WrapperTheme';
import { useGrid } from '../context';
import { IContainerType } from '../interfaces';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: 0,
      width: '100%'
    }
  })
);

type RowPropsExtends =
  | 'id'
  | 'className'
  | 'children'
  | 'justify'
  | 'alignItems'
  | 'style'
  | 'onClick'
  | 'onDoubleClick';

export interface IRowProps extends Pick<GridProps, RowPropsExtends> {
  spacing?: IContainerType;
}

const Row = React.forwardRef<HTMLDivElement, IRowProps>((props, ref) => {
  const classes = useStyles();
  const { spacing } = useGrid();

  const config = React.useMemo(() => {
    const sizes = props?.spacing ?? { comfortable: 10, cozy: 4, compact: 2 };
    return sizes[spacing ?? 'cozy'] as GridSpacing;
  }, [spacing, props.spacing]);

  return (
    <WrapperTheme>
      <Grid {...props} container ref={ref} className={clsx(classes.root, props?.className)} spacing={config} />
    </WrapperTheme>
  );
});

export default React.memo(Row);
