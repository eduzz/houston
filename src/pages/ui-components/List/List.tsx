import * as React from 'react';

import styled, { IStyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import ListContextProvider from './context';
import Item from './Item';
import Left from './Left';
import Right from './Right';
import Text from './Text';

export interface IListProps extends IStyledProp, React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
  dividers?: true;
}

const List = ({ children, dividers, ...rest }: IListProps) => {
  return (
    <ListContextProvider value={{ dividers }}>
      <ul role='list' {...rest}>
        {children}
      </ul>
    </ListContextProvider>
  );
};

const ListWrapper = React.memo(styled(List, { label: 'houston-list' })());

export default nestedComponent(React.memo(ListWrapper), {
  Item,
  Text,
  Left,
  Right
});
