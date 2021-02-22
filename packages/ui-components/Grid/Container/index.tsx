import * as React from 'react';

import MUIContainer, { ContainerProps } from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import WrapperTheme from '../../ThemeProvider/WrapperTheme';
import GridContextProvider from '../context';
import { IContainerType, IGridConfig } from '../interfaces';

const useStyles = makeStyles(() =>
  createStyles({
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
  })
);

type ContainerPropsExtends = 'id' | 'className' | 'children' | 'style' | 'tabIndex';

interface IProps extends Pick<ContainerProps, ContainerPropsExtends> {
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
  layout?: 'fluid' | 'solid';
}

const Container = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const { children, spacing, layout = 'solid' } = props;
  const classes = useStyles();

  const config: IGridConfig = React.useMemo(() => {
    return {
      comfortable: {
        className: classes.comfortable
      },
      cozy: {
        className: classes.cozy
      },
      compact: {
        className: classes.compact
      }
    };
  }, [classes.compact, classes.comfortable, classes.cozy]);

  const containerProps = React.useMemo(
    () => (({ id, className, style, tabIndex }) => ({ id, className, style, tabIndex }))(props),
    [props]
  );

  return (
    <WrapperTheme>
      <GridContextProvider value={{ spacing }}>
        <MUIContainer
          {...containerProps}
          ref={ref}
          className={clsx(classes.root, config[spacing ?? 'cozy'].className, layout === 'fluid' && classes.fluid)}
        >
          {children}
        </MUIContainer>
      </GridContextProvider>
    </WrapperTheme>
  );
});

export default React.memo(Container);
