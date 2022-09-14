import styled, { StyledProp, css, cx } from '@eduzz/houston-styles';

import Button from '../../../Button';
import IconButton from '../../../IconButton';

export type ActionProps = StyledProp &
  React.HTMLAttributes<HTMLDivElement> & {
    /**
     * If `true`, the item will be highlighted.
     */
    active?: boolean;
    icon: React.ReactNode;
    label?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  };

const Action: React.FC<ActionProps> = ({ active, icon, label, onClick, className, ...rest }) => {
  return (
    <div className={cx(className, { 'hst-topbar-action-has-label': !!label })} onClick={onClick} {...rest}>
      {!!label && (
        <Button startIcon={icon} variant='text' fullWidth active={active} className='hst-topbar-action-text-button'>
          {label}
        </Button>
      )}

      <IconButton className='hst-topbar-action-icon-button' active={active}>
        {icon}
      </IconButton>
    </div>
  );
};

export default styled(Action, { label: 'hst-topbar-action' })(
  ({ theme }) => css`
    & .hst-topbar-action-icon-button,
    & .hst-topbar-action-text-button.--text {
      color: inherit;
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
