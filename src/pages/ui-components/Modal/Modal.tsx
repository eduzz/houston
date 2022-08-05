import * as React from 'react';

import styled, { StyledProp, css, cx, CSSInterpolation } from '@eduzz/houston-styles';

import useEscapeKey from '../hooks/useEscapeKey';
import Overlay from '../Overlay';
import Portal from '../Portal';
import nestedComponent from '../utils/nestedComponent';
import Content from './__internals/Content';
import Footer from './__internals/Footer';
import Header from './__internals/Header';
import ModalBase from './__utils/ModalBase';
import ModalContextProvider from './context';
import FullScreen from './Fullscreen';

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
          <ModalBase className={cx(className, `--hst-modal-size-${size}`)} aria-modal {...rest}>
            {children}
          </ModalBase>
        </ModalContextProvider>
      </Overlay>
    </Portal>
  );
};

const ModalWrapper = styled(Modal, { label: 'hst-modal' })`
  ${({ theme }) => {
    const modifiers: CSSInterpolation[] = [];

    Object.entries(modalSizesInPx).forEach(([size, value]) =>
      modifiers.push(css`
        &.--hst-modal-size-${size} {
          width: ${theme.pxToRem(value)}rem;
        }
      `)
    );

    return css`
      & > .hst-modal-header .hst-modal-header-title__icon {
        display: none;
      }

      &,
      & > form {
        display: flex;
        flex-direction: column;
        max-width: calc(100vw - ${theme.spacing.inset.md});
        max-height: calc(100vh - ${theme.spacing.inset.md});

        ${theme.breakpoints.down('sm')} {
          max-width: calc(100vw - ${theme.spacing.inset.xs});
          max-height: calc(100vh - ${theme.spacing.inset.xs});
        }
      }

      ${modifiers}
    `;
  }}
`;

export default nestedComponent(React.memo(ModalWrapper), {
  Header,
  Content,
  Footer,
  FullScreen
});
