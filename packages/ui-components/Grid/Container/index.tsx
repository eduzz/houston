import * as React from 'react';

import MUIContainer, { ContainerProps } from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

const useStyles = makeStyles(() =>
  createStyles({
    confortable: {
      width: '100%',
      maxWidth: 1062,
      margin: '0 auto',
      padding: '0 18px'
    },
    cozy: {
      width: '100%',
      maxWidth: 1062,
      margin: '0 auto',
      padding: '0 28px'
    },
    compact: {
      width: '100%',
      maxWidth: 1062,
      margin: '0 auto',
      padding: '0 20px'
    },
    fluid: {
      maxWidth: '100%'
    }
  })
);

type ContainerPropsExtends = 'id' | 'className' | 'children' | 'style';

export type IConfig = {
  [key: string]: {
    className: string;
  };
};

export type IContainerType = 'confortable' | 'cozy' | 'compact';

interface IProps extends Pick<ContainerProps, ContainerPropsExtends> {
  /**
   * Type container (spacing, margins)
   *
   * `confortable` spacing big
   * `cozy` spacing medium
   * `compact` spacing small
   *  default `cozy`
   */
  type?: IContainerType;
  /**
   * max-width ignore
   */
  fluid?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const { children, type, fluid = false } = props;
  const classes = useStyles();

  const config: IConfig = React.useMemo(() => {
    return {
      confortable: {
        className: classes.confortable
      },
      cozy: {
        className: classes.cozy
      },
      compact: {
        className: classes.compact
      }
    };
  }, [classes.compact, classes.confortable, classes.cozy]);

  const containerProps = { ...props };

  delete containerProps.fluid;
  delete containerProps.children;
  delete containerProps.type;

  return (
    <MUIContainer
      {...containerProps}
      className={clsx(config[type ?? 'cozy'].className, fluid && classes.fluid)}
      ref={ref}
    >
      {children}
    </MUIContainer>
  );
});

export default React.memo(Container);
