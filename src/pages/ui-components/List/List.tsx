import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import ListContextProvider from './context';
import Item from './Item';
import Left from './Left';
import Right from './Right';
import Text from './Text';

export interface ListProps extends StyledProp, React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
  /**
   * Default `false`
   */
  dividers?: boolean;
}

/**
 * @deprecated Use List from Antd
 * https://ant.design/components/list/
 */
const List = ({ children, className, dividers = false, ...rest }: ListProps) => {
  return (
    <ListContextProvider dividers={dividers}>
      <ul role='list' className={cx(className, { 'hst-list-dividers': dividers })} {...rest}>
        {children}
      </ul>
    </ListContextProvider>
  );
};

const ListWrapper = React.memo(
  styled(List, { label: 'hst-list' })(
    () => css`
      &.hst-list-dividers {
        hr:last-of-type {
          display: none;
        }
      }
    `
  )
);

export default nestedComponent(ListWrapper, {
  Item,
  Text,
  Left,
  Right
});
