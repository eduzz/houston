import * as React from 'react';

import Grid, { GridProps, GridSpacing } from '@mui/material/Grid';
import clsx from 'clsx';

import createUseStyles from '../../styles/createUseStyles';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import { useGrid } from '../context';
import { IContainerType } from '../interfaces';

const useStyles = createUseStyles({
  root: {
    margin: 0,
    width: '100%'
  }
});

type RowPropsExtends =
  | 'id'
  | 'className'
  | 'children'
  | 'justifyContent'
  | 'alignItems'
  | 'style'
  | 'onClick'
  | 'onDoubleClick';

export interface IRowProps extends Pick<GridProps, RowPropsExtends> {
  spacing?: IContainerType;
}

const Row = React.forwardRef<HTMLDivElement, IRowProps>(({ className, spacing: spacingProps, ...rest }, ref) => {
  const classes = useStyles();
  const { spacing } = useGrid();

  const config = React.useMemo(() => {
    const sizes = spacingProps ?? { comfortable: 10, cozy: 4, compact: 2 };
    return sizes[spacing ?? 'cozy'] as GridSpacing;
  }, [spacing, spacingProps]);

  return <Grid {...rest} container ref={ref} className={clsx(classes.root, className)} spacing={config} />;
});

export default withHoustonTheme(React.memo(Row));
