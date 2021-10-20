import * as React from 'react';

import Grid, { GridProps, GridSpacing } from '@mui/material/Grid';
import { useContextSelector } from 'use-context-selector';

import { GridContext } from '../context';
import { ContainerSizes, IContainerType } from '../interfaces';

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

const Row = React.forwardRef<HTMLDivElement, IRowProps>(({ className, spacing: spacingProp, ...rest }, ref) => {
  const spacingContext = useContextSelector(GridContext, context => context.spacing);

  const config = React.useMemo(() => {
    return ContainerSizes[spacingProp ?? spacingContext ?? 'cozy'] as GridSpacing;
  }, [spacingContext, spacingProp]);

  return <Grid {...rest} container ref={ref} className={className} spacing={config} />;
});

export default React.memo(Row);
