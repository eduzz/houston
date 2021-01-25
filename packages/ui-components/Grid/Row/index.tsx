import * as React from 'react';

import Grid, { GridProps, GridSpacing } from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

const useStyles = makeStyles(() =>
  createStyles({
    confortable: {
      width: 'calc(100% - 36px)',
      maxWidth: 1062
    },
    cozy: {
      margin: '0 28px',
      width: 'calc(100% - 56px)',
      maxWidth: 1062
    },
    compact: {
      margin: '0 20px',
      width: 'calc(100% - 40px)',
      maxWidth: 1062
    },
    fluid: {
      maxWidth: '100%'
    }
  })
);

type GridPropsExtends = 'id' | 'className' | 'children' | 'justify' | 'alignItems' | 'style';

export type IConfig = {
  [key: string]: {
    className: string;
    spacing?: GridSpacing;
  };
};

export type IRowType = 'confortable' | 'cozy' | 'compact';

interface IProps extends Pick<GridProps, GridPropsExtends> {
  /**
   * Type container (spacing, margins)
   *
   * `confortable` spacing big
   * `cozy` spacing medium
   * `compact` spacing small
   */
  type?: IRowType;
  /**
   * max-width ignore
   */
  fluid?: boolean;
}

const Row = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const { children, type, fluid = false } = props;
  const classes = useStyles();

  const config: IConfig = {
    confortable: {
      className: classes.confortable,
      spacing: 5
    },
    cozy: {
      className: classes.cozy,
      spacing: 2
    },
    compact: {
      className: classes.compact,
      spacing: 1
    }
  };

  return (
    <Grid
      {...props}
      container
      className={clsx(config[type ?? 'confortable'].className, fluid && classes.fluid)}
      ref={ref}
      spacing={config[type ?? 'confortable'].spacing}
    >
      {children}
    </Grid>
  );
});

export default React.memo(Row);
