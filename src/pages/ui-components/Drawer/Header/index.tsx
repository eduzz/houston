import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { StyledProp, css } from '@eduzz/houston-styles';

import Divider from '../../Divider';
import IconButton from '../../IconButton';
import { IconClose } from '../../Modal/__utils/icons';
import Typography from '../../Typography';
import { DrawerContext } from '../context';

export interface DrawerHeaderProps {
  children: React.ReactNode;
  disableTypography?: boolean;
}

const DrawerHeader = ({
  children,
  disableTypography,
  ...rest
}: DrawerHeaderProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  const onClose = useContextSelector(DrawerContext, context => context.onClose);
  const closeIcon = useContextSelector(DrawerContext, context => context.closeIcon);

  return (
    <header {...rest}>
      <div className='hst-drawer-header__wrapper'>
        <span className='hst-drawer-header__title'>
          {!disableTypography ? (
            <Typography as='h6' size='sm'>
              {children}
            </Typography>
          ) : (
            children
          )}
        </span>

        {closeIcon && (
          <IconButton className='hst-drawer-header__close' aria-label='Fechar Drawer' size='md' onClick={onClose}>
            <IconClose />
          </IconButton>
        )}
      </div>

      <Divider />
    </header>
  );
};

export default React.memo(styled(DrawerHeader, { label: 'hst-drawer-header' })`
  ${({ theme }) => css`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 0%;

    .hst-drawer-header__wrapper {
      padding: ${theme.spacing.inset.sm};
      display: flex;
      align-items: center;
      justify-content: space-between;

      ${theme.breakpoints.down('sm')} {
        padding: ${theme.spacing.inset.xs};
      }

      .hst-drawer-header__close {
        margin-left: ${theme.spacing.inline.xxs};
      }
    }
  `}
`);
