import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { IStyledProp, css } from '@eduzz/houston-styles';

import Divider from '../../Divider';
import IconButton from '../../IconButton';
import Typography from '../../Typography';
import { ModalContext } from '../context';

export interface ModalHeaderProps {
  children?: React.ReactNode;
}

const IconClose = () => (
  <svg xmlns='http://www.w3.org/2000/svg' focusable={false} width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.12224 0.84467C1.82935 0.551777 1.35447 0.551777 1.06158 0.84467C0.768687 1.13756 0.768687 1.61244 1.06158 1.90533L6.93937 7.78312L0.84467 13.8778C0.551777 14.1707 0.551777 14.6456 0.84467 14.9385C1.13756 15.2314 1.61244 15.2314 1.90533 14.9385L8.00003 8.84378L14.0679 14.9116C14.3608 15.2045 14.8357 15.2045 15.1285 14.9116C15.4214 14.6187 15.4214 14.1439 15.1285 13.851L9.06069 7.78312L14.9116 1.93217C15.2045 1.63928 15.2045 1.16441 14.9116 0.871513C14.6187 0.57862 14.1439 0.57862 13.851 0.871513L8.00003 6.72246L2.12224 0.84467Z'
      fill='black'
    />
  </svg>
);

const ModalHeader = ({ children, ...rest }: ModalHeaderProps & React.HTMLAttributes<HTMLDivElement> & IStyledProp) => {
  const closeIcon = useContextSelector(ModalContext, context => context.closeIcon);
  const onClose = useContextSelector(ModalContext, context => context.onClose);

  return (
    <header {...rest}>
      <div className='modal-header__content'>
        <div className='modal-header__title'>
          {typeof children === 'string' && (
            <Typography.Heading as='h6' size='sm'>
              {children}
            </Typography.Heading>
          )}

          {typeof children !== 'string' && children}
        </div>

        {closeIcon && (
          <div className='modal-header__close-icon'>
            <IconButton aria-label='Close' size='md' onClick={onClose}>
              <IconClose />
            </IconButton>
          </div>
        )}
      </div>

      <Divider />
    </header>
  );
};

const ModalHeaderStyle = styled(ModalHeader, { label: 'houston-modal-header' })`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.sm} ${theme.border.radius.sm} 0 0;

    .modal-header__content {
      padding: ${theme.spacing.inset.sm};
      display: flex;
      align-items: center;
      justify-content: space-between;

      .modal-header__close-icon {
        margin-left: ${theme.spacing.inline.xxs};
      }
    }
  `}
`;

export default React.memo(ModalHeaderStyle);
