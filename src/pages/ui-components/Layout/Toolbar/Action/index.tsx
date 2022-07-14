import styled, { IStyledProp, cx, css } from '@eduzz/houston-styles';

import { TOOLBAR_HEIGHT } from '../../context';

export interface ActionProps extends IStyledProp {
  /**
   * If `true`, the item will be highlighted.
   */
  active?: boolean;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
}

const Action: React.FC<ActionProps> = ({ active, icon, label, ...rest }) => {
  return (
    <div {...rest}>
      <div className={cx('houston-toolbar-action__button', { '--active': active, '--has-icon': !!icon })}>
        {icon && <div className='houston-toolbar-action__icon'>{icon}</div>}
        {label && <div className='houston-toolbar-action__label'>{label}</div>}
      </div>
    </div>
  );
};

export default styled(Action, { label: 'houston-toolbar-action' })(
  ({ theme }) => css`
    position: relative;

    .houston-toolbar-action__button {
      display: flex;
      align-items: center;
      padding: 0 ${theme.spacing.xxxs};
      transition: 0.15s ease-out;
      height: ${TOOLBAR_HEIGHT}px;
      cursor: pointer;

      ${theme.breakpoints.down('sm')} {
        padding: 0 ${theme.spacing.nano};
      }

      &:hover,
      &.--active {
        background: rgba(0, 0, 0, 0.15);
      }

      &.--has-icon {
        .houston-toolbar-action__label {
          margin-left: ${theme.spacing.nano};

          ${theme.breakpoints.down('sm')} {
            display: none;
          }
        }
      }

      .houston-toolbar-action__icon {
        line-height: 0;
      }

      .houston-toolbar-action__label {
        font-size: 14px;

        &::selection {
          background: transparent;
        }
      }
    }
  `
);
