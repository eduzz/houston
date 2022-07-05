import * as React from 'react';

import { IStyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import Item from './Item';
import Left from './Left';
import Right from './Right';
import Text from './Text';

export interface IListProps extends IStyledProp {
  id?: string;
  stripedRows?: boolean;
  children: React.ReactNode;
}

const List = ({ children, id }: IListProps) => {
  return <div id={id}>{children}</div>;
};

export default nestedComponent(React.memo(List), {
  Item,
  Text,
  Left,
  Right
});
