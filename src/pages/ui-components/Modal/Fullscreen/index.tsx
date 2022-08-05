import * as React from 'react';

import styled, { StyledProp, css } from '@eduzz/houston-styles';

import useEscapeKey from '../../hooks/useEscapeKey';
import Overlay from '../../Overlay';
import Portal from '../../Portal';
import ModalContextProvider from '../context';
import { ModalProps } from '../Modal';

export interface ModalFullScreenProps extends Omit<ModalProps, 'size'> {}

const ModalFullscreen = ({
  visible,
  onClose,
  closeIcon = true,
  disableEscapeKey,
  children,
  ...rest
}: ModalFullScreenProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
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
    <Portal target='houston-modal-fullscreen'>
      <Overlay visible={visible}>
        <ModalContextProvider value={contextValue}>
          <div role='dialog' aria-modal {...rest}>
            {children}
          </div>
        </ModalContextProvider>
      </Overlay>
    </Portal>
  );
};

const ModalFullScreenWrapper = styled(ModalFullscreen, { label: 'hst-modal-fullscreen' })`
  ${({ theme }) => {
    return css`
      background-color: ${theme.neutralColor.high.pure};

      & > .hst-modal-header {
        border-radius: 0;
      }

      &,
      & > form {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
      }
    `;
  }}
`;

export default React.memo(ModalFullScreenWrapper);
