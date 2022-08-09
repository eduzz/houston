import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { StyledProp, css, cx } from '@eduzz/houston-styles';

import Divider from '../../Divider';
import IconButton from '../../IconButton';
import Typography from '../../Typography';
import { IconClose } from '../__utils/icons';
import { ModalContext } from '../context';

export interface ModalHeaderProps {
  children: React.ReactNode;
  disableTypography?: boolean;
  /**
   * The icon will be rendered in `fullscreen` prop.
   */
  icon?: React.ReactNode;
}

const ModalHeader = ({
  children,
  disableTypography,
  className,
  icon,
  ...rest
}: ModalHeaderProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  const closeIcon = useContextSelector(ModalContext, context => context.closeIcon);
  const onClose = useContextSelector(ModalContext, context => context.onClose);

  return (
    <header className={cx(className, 'hst-modal-header')} {...rest}>
      <div className='hst-modal-header__wrapper'>
        <span className='hst-modal-header__title'>
          {icon && <div className='hst-modal-header-title__icon'>{icon}</div>}

          {!disableTypography ? (
            <Typography as='h6' size='sm'>
              {children}
            </Typography>
          ) : (
            children
          )}
        </span>

        {closeIcon && (
          <IconButton className='hst-modal-header__close' aria-label='Fechar Modal' size='md' onClick={onClose}>
            <IconClose />
          </IconButton>
        )}
      </div>

      <Divider />
    </header>
  );
};

export default React.memo(styled(ModalHeader, { label: 'hst-modal-header' })`
  ${({ theme }) => css`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 0%;
    border-radius: ${theme.border.radius.sm} ${theme.border.radius.sm} 0 0;

    .hst-modal-header__wrapper {
      padding: ${theme.spacing.inset.sm};
      display: flex;
      align-items: center;
      justify-content: space-between;

      ${theme.breakpoints.down('sm')} {
        padding: ${theme.spacing.inset.xs};
      }

      .hst-modal-header__title {
        display: flex;
        align-items: center;

        .hst-modal-header-title__icon {
          svg {
            margin-right: ${theme.spacing.inline.nano};
          }
        }
      }

      .hst-modal-header__close {
        margin-left: ${theme.spacing.inline.xxs};
      }
    }
  `}
`);
