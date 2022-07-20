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

export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ModalProps {
  visible: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  /**
   * Default `sm`
   */
  size?: ModalSize;
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
        <ModalContextProvider value={{ onClose, closeIcon }}>
          <ModalBase className={cx(className, `--modal-size-${size}`)} aria-modal={true} {...rest}>
            {children}
          </ModalBase>
        </ModalContextProvider>
      </Overlay>
    </Portal>
  );
};

const ModalStyle = styled(Modal, { label: 'houston-modal' })`
  ${({ theme }) => {
    const modifiersSizes: CSSInterpolation[] = [];
    const sizesInPx: Record<ModalSize, number> = { xs: 400, sm: 560, md: 640, lg: 800, xl: 1200 };

    Object.entries(sizesInPx).forEach(([key, value]) =>
      modifiersSizes.push(css`
        &.--modal-size-${key} {
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

export default nestedComponent(React.memo(ModalStyle), {
  Header,
  Content,
  Footer
});
