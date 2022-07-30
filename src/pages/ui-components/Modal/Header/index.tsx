import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { StyledProp, css } from '@eduzz/houston-styles';

import Divider from '../../Divider';
import IconButton from '../../IconButton';
import Typography from '../../Typography';
import { IconClose } from '../__utils/icons';
import { ModalContext } from '../context';

export interface ModalHeaderProps {
  children: React.ReactNode;
  disableTypography?: boolean;
}

const ModalHeader = ({
  children,
  disableTypography,
  ...rest
}: ModalHeaderProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  const closeIcon = useContextSelector(ModalContext, context => context.closeIcon);
  const onClose = useContextSelector(ModalContext, context => context.onClose);

  return (
    <header {...rest}>
      <div className='modal-header__wrapper'>
        <span className='modal-header__title'>
          {!disableTypography ? (
            <Typography as='h6' size='sm'>
              {children}
            </Typography>
          ) : (
            children
          )}
        </span>

        {closeIcon && (
          <IconButton className='modal-header__close-icon' aria-label='Fechar Modal' size='md' onClick={onClose}>
            <IconClose />
          </IconButton>
        )}
      </div>

      <Divider />
    </header>
  );
};

export default React.memo(styled(ModalHeader, { label: 'houston-modal-header' })`
  ${({ theme }) => css`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 0%;
    border-radius: ${theme.border.radius.sm} ${theme.border.radius.sm} 0 0;

    .modal-header__wrapper {
      padding: ${theme.spacing.inset.sm};
      display: flex;
      align-items: center;
      justify-content: space-between;

      ${theme.breakpoints.down('sm')} {
        padding: ${theme.spacing.inset.xs};
      }

      .modal-header__close-icon {
        margin-left: ${theme.spacing.inline.xxs};
      }
    }
  `}
`);
