import * as React from 'react';

import styled, { StyledProp, css, cx, CSSInterpolation } from '@eduzz/houston-styles';

import useEscapeKey from '../hooks/useEscapeKey';
import Overlay from '../Overlay';
import Portal from '../Portal';
import nestedComponent from '../utils/nestedComponent';
import ModalBase from './__utils/ModalBase';
import Content from './Content';
import ModalContextProvider from './context';
import Footer from './Footer';
import Header from './Header';

export const modalSizesInPx: Record<ModalSizes, number> = { xs: 400, sm: 560, md: 640, lg: 800, xl: 1200 };

export type ModalSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  /**
   * Default `sm`
   */
  size?: ModalSizes;
  /**
   * Display close icon
   * Default `true`
   */
  closeIcon?: boolean;
  /**
   * Default `false`
   */
  disableEscapeKey?: boolean;
}

const Modal = ({
  visible,
  className,
  size = 'sm',
  onClose,
  closeIcon = true,
  disableEscapeKey,
  children,
  ...rest
}: ModalProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
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
    <Portal target='houston-modal'>
      <Overlay visible={visible}>
        <ModalContextProvider value={contextValue}>
          <ModalBase className={cx(className, `--modal-size-${size}`)} aria-modal {...rest}>
            {children}
          </ModalBase>
        </ModalContextProvider>
      </Overlay>
    </Portal>
  );
};

const ModalWrapper = styled(Modal, { label: 'houston-modal' })`
  ${({ theme }) => {
    const modifiersSizes: CSSInterpolation[] = [];

    Object.entries(modalSizesInPx).forEach(([size, value]) =>
      modifiersSizes.push(css`
        &.--modal-size-${size} {
          width: ${theme.pxToRem(value)}rem;
        }
      `)
    );

    return css`
      display: flex;
      flex-direction: column;
      max-width: calc(100vw - ${theme.spacing.inset.md});
      max-height: calc(100vh - ${theme.spacing.inset.md});

      ${theme.breakpoints.down('sm')} {
        max-width: calc(100vw - ${theme.spacing.inset.xs});
        max-height: calc(100vh - ${theme.spacing.inset.xs});
      }

      ${modifiersSizes}
    `;
  }}
`;

export default nestedComponent(React.memo(ModalWrapper), {
  Header,
  Content,
  Footer
});
