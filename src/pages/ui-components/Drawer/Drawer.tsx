import * as React from 'react';

import styled, { css, CSSInterpolation, cx, StyledProp } from '@eduzz/houston-styles';

import Content from './Content';
import DrawerContextProvider from './context';
import Footer from './Footer';
import Header from './Header';
import useEscapeKey from '../hooks/useEscapeKey';
import { ModalProps, modalSizesInPx } from '../Modal';
import Overlay from '../Overlay';
import Portal from '../Portal';
import nestedComponent from '../utils/nestedComponent';

export type DrawerPlacement = 'left' | 'right';

export interface DrawerProps extends ModalProps {
  /**
   * Default `right`
   */
  placement?: DrawerPlacement;
}

const Drawer = ({
  visible,
  disableEscapeKey,
  closeIcon = true,
  onClose,
  className,
  size = 'sm',
  children,
  placement = 'right',
  ...rest
}: DrawerProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  const contextValue = React.useMemo(() => ({ onClose, closeIcon }), [closeIcon, onClose]);

  useEscapeKey(() => {
    if (visible && !disableEscapeKey) {
      onClose && onClose();
    }
  }, [disableEscapeKey, onClose, visible]);

  if (!visible) {
    return null;
  }

  return (
    <Portal target='hst-drawer'>
      <Overlay visible={visible}>
        <DrawerContextProvider value={contextValue}>
          <div
            role='dialog'
            tabIndex={-1}
            aria-modal
            className={cx(className, `hst-drawer-size-${size}`, `hst-drawer-placement-${placement}`)}
            {...rest}
          >
            {children}
          </div>
        </DrawerContextProvider>
      </Overlay>
    </Portal>
  );
};

const DrawerWrapper = styled(Drawer, { label: 'hst-drawer' })`
  ${({ theme }) => {
    const modifiers: CSSInterpolation[] = [];
    const placementMap: DrawerPlacement[] = ['right', 'left'];

    Object.entries(modalSizesInPx).forEach(([size, value]) =>
      modifiers.push(css`
        &.hst-drawer-size-${size} {
          width: ${theme.pxToRem(value)}rem;
        }
      `)
    );

    placementMap.forEach(placement =>
      modifiers.push(css`
        &.hst-drawer-placement-${placement} {
          ${placement}: 0%;
        }
      `)
    );

    return css`
      background-color: ${theme.neutralColor.high.pure};
      box-shadow: ${theme.shadow.level[3]};
      position: fixed;
      display: flex;
      flex-direction: column;
      max-width: 100vw;
      height: 100vh;
      top: 0;

      ${modifiers}
    `;
  }}
`;

/**
 * @deprecated Use Drawer from Antd
 * https://ant.design/components/drawer/
 */
export default nestedComponent(React.memo(DrawerWrapper), {
  Header,
  Content,
  Footer
});
