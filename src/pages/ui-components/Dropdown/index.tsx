import * as React from 'react';

import { flushSync } from 'react-dom';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import styled, { css, StyledProp } from '@eduzz/houston-styles';

import Popover from '../Popover';
import usePopover from '../Popover/usePopover';
import Root from './Root';

export type DropdownPlacement =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';

export interface DropdownProps {
  /**
   * Position
   * @default `bottom-start`
   */
  placement?: DropdownPlacement;
  /**
   * Hidden content
   */
  content: React.ReactNode;
  /**
   * Display arrow position
   * @default `true`
   */
  arrow?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  onOpen?: () => void;
}

export const ARROW_SIZE = 12;
export const ARROW_HALF_SIZE = ARROW_SIZE / 2;
const Dropdown = ({
  children,
  onOpen,
  onClose,
  placement = 'bottom-start',
  arrow = true,
  content,
  className,
  id: idProp,
  ...rest
}: DropdownProps & StyledProp & React.HTMLAttributes<HTMLElement>) => {
  const { openPopover: open, closePopover: close, popoverTargetProps, popoverProps, isPopoverOpened } = usePopover();
  const [dropdownCreated, , createDropdown, deleteDropdown] = useBoolean();

  const [id] = React.useState(idProp ?? `hst-dropdown-${Math.floor(Math.random() * 1000)}`);

  const onOpenDropdown = React.useCallback(() => {
    flushSync(() => {
      createDropdown();
    });

    open();
    onOpen && onOpen();
  }, [onOpen, open, createDropdown]);

  const onCloseDropdown = React.useCallback(() => {
    onClose && onClose();
    close();
    deleteDropdown();
  }, [onClose, close, deleteDropdown]);

  const props: Partial<React.HTMLAttributes<HTMLDivElement>> & { ref: React.MutableRefObject<any> } = {
    tabIndex: 0,
    onClick: onOpenDropdown,
    ref: popoverTargetProps.ref,
    ...rest
  };

  React.useEffect(() => {
    if (!isPopoverOpened && popoverProps.ref?.current) {
      onCloseDropdown();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onCloseDropdown, isPopoverOpened]);

  return (
    <>
      {typeof children === 'string' ? (
        <span {...props}>{children}</span>
      ) : (
        React.cloneElement(children as React.ReactElement, props)
      )}

      {dropdownCreated && (
        <Popover {...popoverProps} id={id} placement={placement} variant='tooltip' className={className}>
          <Root arrow={arrow}>{content}</Root>
        </Popover>
      )}
    </>
  );
};

const DropdownWrapper = styled(Dropdown)`
  ${({ theme }) => {
    const ARROW_SIZE_IN_REM = `${theme.pxToRem(ARROW_SIZE)}rem`;
    const ARROW_HALF_SIZE_IN_REM = `${theme.pxToRem(ARROW_HALF_SIZE)}rem`;
    const ARROW_DOUBLE_SIZE_IN_REM = `${theme.pxToRem(ARROW_SIZE * 2)}rem`;

    return css`
      #hst-dropdown-arrow {
        z-index: 1;
        position: absolute;
        overflow: hidden;
        width: ${ARROW_DOUBLE_SIZE_IN_REM};
        height: ${ARROW_DOUBLE_SIZE_IN_REM};
      }

      #hst-dropdown-arrow::before {
        content: '';
        position: absolute;
        width: ${ARROW_SIZE_IN_REM};
        height: ${ARROW_SIZE_IN_REM};
        left: calc(50% - ${ARROW_HALF_SIZE_IN_REM});
        background: ${theme.neutralColor.high.pure};
      }

      &.hst-popover[data-popper-placement='top'],
      &.hst-popover[data-popper-placement='top-start'],
      &.hst-popover[data-popper-placement='top-end'] {
        & > .hst-popover-container {
          margin-bottom: ${ARROW_HALF_SIZE_IN_REM};
        }

        #hst-dropdown-arrow {
          bottom: -${ARROW_DOUBLE_SIZE_IN_REM};

          &::before {
            transform: translateY(-${ARROW_HALF_SIZE_IN_REM}) rotate(45deg);
          }
        }
      }

      &.hst-popover[data-popper-placement='bottom'],
      &.hst-popover[data-popper-placement='bottom-start'],
      &.hst-popover[data-popper-placement='bottom-end'] {
        & > .hst-popover-container {
          margin-top: ${ARROW_HALF_SIZE_IN_REM};
        }

        #hst-dropdown-arrow {
          top: -${ARROW_DOUBLE_SIZE_IN_REM};

          &::before {
            bottom: 0;
            transform: translateY(${ARROW_HALF_SIZE_IN_REM}) rotate(45deg);
          }
        }
      }

      &.hst-popover[data-popper-placement='left'],
      &.hst-popover[data-popper-placement='left-start'],
      &.hst-popover[data-popper-placement='left-end'] {
        & > .hst-popover-container {
          position: relative;
          left: -${ARROW_HALF_SIZE_IN_REM};
        }

        #hst-dropdown-arrow {
          right: -${ARROW_DOUBLE_SIZE_IN_REM};

          &::before {
            left: 0;
            transform: translate(-${ARROW_HALF_SIZE_IN_REM}, ${ARROW_HALF_SIZE_IN_REM}) rotate(45deg);
          }
        }
      }

      &.hst-popover[data-popper-placement='right'],
      &.hst-popover[data-popper-placement='right-start'],
      &.hst-popover[data-popper-placement='right-end'] {
        & > .hst-popover-container {
          position: relative;
          right: -${ARROW_HALF_SIZE_IN_REM};
        }

        #hst-dropdown-arrow {
          left: -${ARROW_DOUBLE_SIZE_IN_REM};

          &::before {
            right: 0;
            transform: translate(${ARROW_SIZE_IN_REM}, ${ARROW_HALF_SIZE_IN_REM}) rotate(45deg);
          }
        }
      }
    `;
  }}
`;

/**
 * @deprecated Use Dropdown from Antd
 * https://ant.design/components/dropdown/
 */
export default React.memo(DropdownWrapper);
