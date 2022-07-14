import * as React from 'react';

import styled, { IStyledProp, css, cx, CSSInterpolation } from '@eduzz/houston-styles';

import Overlay from '../Overlay';
import Portal from '../Portal';
import { getReactChildrenProps } from '../utils/children';
import nestedComponent from '../utils/nestedComponent';
import Content from './Content';
import ModalContextProvider from './context';
import Footer from './Footer';
import Header from './Header';

export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  size?: ModalSize;
  children?: React.ReactNode;
  closeIcon?: boolean;
}

const Modal = ({
  visible,
  className,
  size = 'sm',
  onClose,
  closeIcon = true,
  children,
  ...rest
}: ModalProps & React.HTMLAttributes<HTMLDivElement> & IStyledProp) => {
  const hasHeader = !!getReactChildrenProps(children, Header).length;
  const hasFooter = !!getReactChildrenProps(children, Footer).length;

  if (!visible) {
    return null;
  }

  return (
    <Portal wrapperId='houston-modal'>
      <Overlay visible={visible}>
        <ModalContextProvider value={{ onClose, closeIcon, hasHeader, hasFooter }}>
          <div role='dialog' aria-modal={true} className={cx(className, `--modal-size-${size}`)} {...rest}>
            {children}
          </div>
        </ModalContextProvider>
      </Overlay>
    </Portal>
  );
};

const ModalStyle = styled(Modal, { label: 'houston-modal' })`
  ${({ theme }) => {
    const modifiersSizes: CSSInterpolation[] = [];

    const sizesInPx: Record<ModalSize, number> = {
      xs: 400,
      sm: 560,
      md: 640,
      lg: 800,
      xl: 1200
    };

    {
      Object.entries(sizesInPx).forEach(([key, value]) =>
        modifiersSizes.push(css`
          &.--modal-size-${key} {
            width: ${theme.pxToRem(value)}rem;
          }
        `)
      );
    }

    return css`
      display: flex;
      flex-direction: column;
      background-color: ${theme.neutralColor.high.pure};
      border-radius: ${theme.border.radius.sm};
      box-shadow: ${theme.shadow.level[3]};
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
