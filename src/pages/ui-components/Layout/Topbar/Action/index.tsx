import styled, { StyledProp, css, cx } from '@eduzz/houston-styles';

import Button from '../../../Button';
import IconButton from '../../../IconButton';

export interface ActionProps extends StyledProp {
  /**
   * If `true`, the item will be highlighted.
   */
  active?: boolean;
  icon: React.ReactNode;
  label?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Action: React.FC<ActionProps> = ({ active, icon, label, onClick, className }) => {
  return (
    <div className={cx(className, { '--has-label': !!label })} onClick={onClick}>
      {!!label && (
        <Button
          startIcon={icon}
          variant='text'
          color='inherit'
          fullWidth
          active={active}
          className='houston-topbar-action__text-button'
        >
          {label}
        </Button>
      )}

      <IconButton className='houston-topbar-action__icon-button' active={active}>
        {icon}
      </IconButton>
    </div>
  );
};

export default styled(Action, { label: 'houston-topbar-action' })(
  ({ theme }) => css`
    ${theme.breakpoints.up('lg')} {
      &.--has-label .houston-topbar-action__icon-button {
        display: none;
      }
    }

    ${theme.breakpoints.down('lg')} {
      & .houston-topbar-action__text-button {
        display: none;
      }
    }
  `
);
