import * as React from 'react';

import styled, { StyledProp, css, cx, CSSInterpolation } from '@eduzz/houston-styles';

import Content from './Content';
import DialogContextProvider from './context';
import Footer from './Footer';
import { showAlert, showConfirm } from './Global';
import Header from './Header';
import { ModalProps, modalSizesInPx } from '../Modal';
import ModalBase from '../Modal/__utils/ModalBase';
import Overlay from '../Overlay';
import Portal from '../Portal';
import nestedComponent from '../utils/nestedComponent';

export type DialogTypes = 'positive' | 'informative' | 'warning' | 'negative';

export interface DialogProps extends Omit<ModalProps, 'closeIcon' | 'disableEscapeKey'> {
  /**
   * Default `informative`
   */
  type?: DialogTypes;
  /**
   * Type icon display.
   * Default `true`
   */
  showTypeIcon?: boolean;
}

const Dialog = ({
  visible,
  className,
  onClose,
  children,
  showTypeIcon = true,
  size = 'sm',
  type = 'informative',
  ...rest
}: DialogProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  const contextValue = React.useMemo(() => ({ onClose, type, showTypeIcon }), [onClose, type, showTypeIcon]);

  if (!visible) {
    return null;
  }

  return (
    <Portal target='hst-dialog'>
      <Overlay visible={visible}>
        <DialogContextProvider value={contextValue}>
          <ModalBase
            className={cx(className, `hst-dialog-size-${size}`, `hst-dialog-type-${type}`)}
            aria-modal
            {...rest}
          >
            {children}
          </ModalBase>
        </DialogContextProvider>
      </Overlay>
    </Portal>
  );
};

const DialogWrapper = styled(Dialog, { label: 'hst-dialog' })`
  ${({ theme }) => {
    const modifiersSizes: CSSInterpolation[] = [];
    const modifiersTypes: CSSInterpolation[] = [];

    Object.entries(modalSizesInPx).forEach(([size, value]) =>
      modifiersSizes.push(css`
        &.hst-dialog-size-${size} {
          width: ${theme.pxToRem(value)}rem;
        }
      `)
    );

    Object.keys(theme.feedbackColor).forEach(color =>
      modifiersTypes.push(css`
        &.hst-dialog-type-${color} {
          .hst-dialog-header-wrapper {
            .hst-dialog-header-icon {
              svg {
                fill: ${theme.feedbackColor[color].pure};
              }
            }
          }
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
      ${modifiersTypes}
    `;
  }}
`;

/**
 * @deprecated Use Modal from Antd
 * https://ant.design/components/modal/
 */
export default nestedComponent(React.memo(DialogWrapper), {
  Header,
  Content,
  Footer,
  /**
   * @deprecated Use Modal from Antd
   * https://ant.design/components/modal/
   */
  alert: (params: Parameters<typeof showAlert>[0]) => showAlert(params),
  /**
   * @deprecated Use Modal from Antd
   * https://ant.design/components/modal/
   */
  confirm: (params: Parameters<typeof showConfirm>[0]) => showConfirm(params)
});
