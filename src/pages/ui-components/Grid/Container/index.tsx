import * as React from 'react';

import { cx } from '@emotion/css';
import MUIContainer, { ContainerProps } from '@mui/material/Container';

import createUseStyles from '../../styles/createUseStyles';
import GridContextProvider from '../context';
import { IContainerType } from '../interfaces';

const useStyles = createUseStyles({
  root: {
    width: '100%',
    maxWidth: 1062,
    margin: '0 auto'
  },
  comfortable: {
    padding: '0 18px'
  },
  cozy: {
    padding: '0 28px'
  },
  compact: {
    padding: '0 20px'
  },
  fluid: {
    maxWidth: '100%'
  }
});

type ContainerPropsExtends = 'id' | 'className' | 'children' | 'style' | 'tabIndex';

export type IContainterLayout = 'fluid' | 'solid';

export interface IContainerProps extends Pick<ContainerProps, ContainerPropsExtends> {
  /**
   * Type container
   *
   * `comfortable` spacing big
   * `cozy` spacing medium
   * `compact` spacing small
   *
   *  default `cozy`
   */
  spacing?: IContainerType;
  /**
   * Types layout
   *
   * `fluid` max-width ignored
   * `solid` limited
   *
   * default `solid`
   */
  layout?: IContainterLayout;
}

const Container = React.forwardRef<HTMLDivElement, IContainerProps>(
  ({ children, className, spacing = 'cozy', layout = 'solid', ...rest }, ref) => {
    const classes = useStyles();

    const contextValue = React.useMemo(() => ({ spacing }), [spacing]);

    return (
      <GridContextProvider value={contextValue}>
        <MUIContainer
          {...rest}
          ref={ref}
          className={cx(classes.root, classes[spacing], layout === 'fluid' && classes.fluid, className)}
        >
          {children}
        </MUIContainer>
      </GridContextProvider>
    );
  }
);

export default React.memo(Container);
