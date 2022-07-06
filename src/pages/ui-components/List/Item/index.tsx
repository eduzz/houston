import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

export interface IListItemProps extends IStyledProp {
  children?: React.ReactNode;
  disabled?: true;
  isActive?: true;
}

const ListItem = ({ children, className, disabled, isActive }: IListItemProps) => {
  return (
    <div tabIndex={0} className={cx(className, { '--disabled': disabled }, { '--active': isActive })}>
      {children}
    </div>
  );
};

export default React.memo(
  styled(ListItem, { label: 'houston-list-item' })(({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      padding: ${theme.spacing.inset.xs};

      &.--disabled {
        opacity: ${theme.opacity.level[6]};
      }

      &.--active {
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[1])};
        transition: 0.5s background-color;
      }

      :hover:not(.--disabled),
      :focus:not(.--disabled) {
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
        transition: 0.5s background-color;
      }
    `;
  })
);
