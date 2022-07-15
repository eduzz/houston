import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import Divider from '../../Divider';
import { ListContext } from '../context';

export interface ListItemProps extends IStyledProp, React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  disabled?: boolean;
  isActive?: boolean;
}

const ListItem = ({ children, className, disabled, isActive, ...rest }: ListItemProps) => {
  const dividers = useContextSelector(ListContext, context => context.dividers);

  return (
    <>
      <li
        role='listitem'
        tabIndex={0}
        className={cx(className, { '--disabled': disabled }, { '--active': isActive })}
        {...rest}
      >
        {children}
      </li>

      {dividers && <Divider />}
    </>
  );
};

export default styled(ListItem, { label: 'houston-list-item' })(({ theme }) => {
  return css`
    display: flex;
    align-items: center;
    line-height: 0;
    padding: ${theme.spacing.inset.xs};

    &.--disabled {
      opacity: ${theme.opacity.level[6]};
      pointer-events: none;
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
});
