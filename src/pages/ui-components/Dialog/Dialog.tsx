import * as React from 'react';

import styled, { StyledProp, css, cx, CSSInterpolation } from '@eduzz/houston-styles';

import { ModalProps, modalSizesInPx } from '../Modal';
import ModalBase from '../Modal/__utils/ModalBase';
import Overlay from '../Overlay';
import Portal from '../Portal';
import nestedComponent from '../utils/nestedComponent';
import Content from './Content';
import DialogContextProvider from './context';
import Footer from './Footer';
import Header from './Header';

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
    <Portal target='houston-dialog'>
      <Overlay visible={visible}>
        <DialogContextProvider value={contextValue}>
          <ModalBase
            className={cx(className, `--dialog-size-${size}`, `--dialog-type-${type}`)}
            aria-modal={true}
            {...rest}
          >
            {children}
          </ModalBase>
        </DialogContextProvider>
      </Overlay>
    </Portal>
  );
};

const DialogStyle = styled(Dialog, { label: 'houston-dialog' })`
  ${({ theme }) => {
    const modifiersSizes: CSSInterpolation[] = [];
    const modifiersTypes: CSSInterpolation[] = [];

    Object.entries(modalSizesInPx).forEach(([key, value]) =>
      modifiersSizes.push(css`
        &.--dialog-size-${key} {
          width: ${theme.pxToRem(value)}rem;
        }
      `)
    );

    Object.keys(theme.feedbackColor).forEach(key =>
      modifiersTypes.push(css`
        &.--dialog-type-${key} {
          .dialog-header__wrapper {
            .dialog-header__icon {
              svg {
                fill: ${theme.feedbackColor[key].pure};
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

export default nestedComponent(React.memo(DialogStyle), {
  Header,
  Content,
  Footer
});
