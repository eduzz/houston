import { useEffect } from 'react';

import { useContext } from 'use-context-selector';

import styled, { StyledProp, css, cx } from '@eduzz/houston-styles';

import Badge from '../../../Badge';
import Button from '../../../Button';
import IconButton from '../../../IconButton';
import TopbarActionsContext from '../Actions/context';

export type ActionProps = StyledProp &
  React.HTMLAttributes<HTMLDivElement> & {
    /**
     * If `true`, the item will be highlighted.
     */
    active?: boolean;
    icon: React.ReactNode;
    label?: React.ReactNode;
    badgeCount?: number;
    badgeDot?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  };

const Action: React.FC<ActionProps> = ({ active, icon, label, onClick, badgeCount, badgeDot, className, ...rest }) => {
  const registerAction = useContext(TopbarActionsContext);

  useEffect(() => {
    const unregister = registerAction({ badgeCount: badgeCount ?? 0, badgeDot: badgeDot ?? false });
    return () => unregister();
  }, [badgeCount, badgeDot, registerAction]);

  return (
    <div className={cx(className, { 'hst-topbar-action-has-label': !!label })} onClick={onClick} {...rest}>
      <Badge count={badgeCount === 0 ? undefined : badgeCount} dot={badgeCount ? false : badgeDot}>
        {!!label && (
          <Button startIcon={icon} variant='text' fullWidth active={active} className='hst-topbar-action-text-button'>
            {label}
          </Button>
        )}

        <IconButton className='hst-topbar-action-icon-button' active={active}>
          {icon}
        </IconButton>
      </Badge>
    </div>
  );
};

export default styled(Action, { label: 'hst-topbar-action' })(
  ({ theme }) => css`
    & .hst-topbar-action-icon-button,
    & .hst-topbar-action-text-button.--text {
      color: #666666;
    }

    ${theme.breakpoints.up('lg')} {
      &.hst-topbar-action-has-label .hst-topbar-action-icon-button {
        display: none;
      }
    }

    ${theme.breakpoints.down('lg')} {
      & .hst-topbar-action-text-button {
        display: none;
      }
    }
  `
);
