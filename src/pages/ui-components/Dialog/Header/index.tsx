import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { StyledProp, css } from '@eduzz/houston-styles';

import Divider from '../../Divider';
import Typography from '../../Typography';
import { DialogContext } from '../context';
import { DialogTypes } from '../Dialog';
import Icon from './icons';

export interface DialogHeaderProps {
  children: React.ReactNode;
  disableTypography?: boolean;
}

export type IconMap = Record<DialogTypes, JSX.Element>;

const IconMap: IconMap = {
  informative: <Icon.Informative />,
  positive: <Icon.Positive />,
  negative: <Icon.Error />,
  warning: <Icon.Warning />
};

const DialogHeader = ({
  children,
  disableTypography,
  ...rest
}: DialogHeaderProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  const type = useContextSelector(DialogContext, context => context.type);
  const showTypeIcon = useContextSelector(DialogContext, context => context.showTypeIcon);

  return (
    <header {...rest}>
      <div className='dialog-header__wrapper'>
        {showTypeIcon && (
          <span role='img' className='dialog-header__icon'>
            {IconMap[type]}
          </span>
        )}

        <span className='dialog-header__title'>
          {!disableTypography ? (
            <Typography as='h6' size='sm'>
              {children}
            </Typography>
          ) : (
            children
          )}
        </span>
      </div>

      <Divider />
    </header>
  );
};

export default React.memo(styled(DialogHeader, { label: 'houston-dialog-header' })`
  ${({ theme }) => css`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 0%;
    border-radius: ${theme.border.radius.sm} ${theme.border.radius.sm} 0 0;

    .dialog-header__wrapper {
      padding: ${theme.spacing.inset.sm};
      display: flex;
      align-items: center;

      ${theme.breakpoints.down('sm')} {
        padding: ${theme.spacing.inset.xs};
      }

      .dialog-header__icon {
        line-height: 0;
        margin-right: ${theme.spacing.inline.nano};
      }
    }
  `}
`);
