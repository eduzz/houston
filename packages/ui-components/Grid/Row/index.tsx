import * as React from 'react';

import Grid, { GridProps, GridSpacing } from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

const useStyles = makeStyles(() =>
  createStyles({
    confortable: {
      margin: 0,
      width: '100%'
    },
    cozy: {
      margin: 0,
      width: '100%'
    },
    compact: {
      margin: 0,
      width: '100%'
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
   *  default `cozy`
   */
  type?: IRowType;
}

const Row = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const { children, type } = props;
  const classes = useStyles();

  const config: IConfig = React.useMemo(() => {
    return {
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
  }, [classes.compact, classes.confortable, classes.cozy]);

  const rowProps = { ...props };

  return (
    <Grid
      {...rowProps}
      container
      className={clsx(config[type ?? 'cozy'].className)}
      ref={ref}
      spacing={config[type ?? 'cozy'].spacing}
    >
      {children}
    </Grid>
  );
});

export default React.memo(Row);
