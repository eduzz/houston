import styled, { IStyledProp, cx, css } from '@eduzz/houston-styles';

import { TOPBAR_HEIGHT } from '../../context';

export interface ActionProps extends IStyledProp {
  /**
   * If `true`, the item will be highlighted.
   */
  active?: boolean;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Action: React.FC<ActionProps> = ({ active, icon, label, onClick, className }) => {
  return (
    <div className={cx(className, { '--active': active, '--has-icon': !!icon })} onClick={onClick}>
      {icon && <div className='houston-topbar-action__icon'>{icon}</div>}
      {label && <div className='houston-topbar-action__label'>{label}</div>}
    </div>
  );
};

export default styled(Action, { label: 'houston-topbar-action' })(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 0 ${theme.spacing.xxxs};
    transition: 0.15s ease-out;
    height: ${TOPBAR_HEIGHT}px;
    cursor: pointer;

    ${theme.breakpoints.down('sm')} {
      padding: 0 ${theme.spacing.nano};
    }

    &:hover,
    &.--active {
      background: rgba(0, 0, 0, 0.15);
    }

    &.--has-icon {
      .houston-topbar-action__label {
        margin-left: ${theme.spacing.nano};

        ${theme.breakpoints.down('sm')} {
          display: none;
        }
      }
    }

    .houston-topbar-action__icon {
      line-height: 0;

      & > .houston-icon {
        width: 24px !important;
        height: 24px !important;
      }
    }

    .houston-topbar-action__label {
      font-size: 14px;

      &::selection {
        background: transparent;
      }
    }
  `
);
