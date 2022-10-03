import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import Divider from '../../Divider';
import { ListContext } from '../context';

export interface ListItemProps extends StyledProp, React.HTMLAttributes<HTMLLIElement> {
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
        className={cx(className, { 'hst-list-item-disabled': disabled }, { 'hst-list-item-active': isActive })}
        {...rest}
      >
        {children}
      </li>

      {dividers && <Divider />}
    </>
  );
};

/**
 * @deprecated Use List from Antd
 * https://ant.design/components/list/
 */
export default styled(ListItem, { label: 'hst-list-item' })(({ theme }) => {
  return css`
    display: flex;
    align-items: center;
    line-height: 0;
    padding: ${theme.spacing.inset.xs};

    &.hst-list-item-disabled {
      opacity: ${theme.opacity.level[6]};
      pointer-events: none;
      user-select: none;
    }

    &.hst-list-item-active {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[1])};
      transition: 0.5s background-color;
    }

    :hover:not(.hst-list-item-disabled),
    :focus:not(.hst-list-item-disabled) {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      transition: 0.5s background-color;
    }
  `;
});
