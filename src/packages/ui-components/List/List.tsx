import * as React from 'react';

import ListMUI, { ListProps as ListPropsMUI } from '@material-ui/core/List';

import { getReactFirstChildrenProps, isReactComponent } from '../Helpers/functions';
import nestedComponent from '../Helpers/nestedComponent';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
import { IListItem } from './interfaces';
import Items from './internals/Items';
import Item from './Item';
import Left, { IListLeftProps } from './Left';
import Right, { IListRightProps } from './Right';
import Subtitle, { IListSubtitleProps } from './Subtitle';
import Title, { IListTitleProps } from './Title';

type ListProps = 'id' | 'className' | 'children';

export interface IListProps extends Pick<ListPropsMUI, ListProps> {
  stripedRows?: boolean;
}

const List: React.FC<IListProps> = ({ children, stripedRows = false, ...props }) => {
  const items: IListItem[] = React.useMemo(() => {
    return React.Children.map(children, (child: React.ReactElement) => {
      if (!isReactComponent(child, Item)) return null;

      const left = getReactFirstChildrenProps<IListLeftProps>(child?.props?.children, Left);
      const title = getReactFirstChildrenProps<IListTitleProps>(child.props?.children, Title);
      const subtitle = getReactFirstChildrenProps<IListSubtitleProps>(child.props?.children, Subtitle);
      const right = getReactFirstChildrenProps<IListRightProps>(child?.props?.children, Right);

      return { left, title, subtitle, right };
    }).filter(item => !!item);
  }, [children]);

  return (
    <ListMUI component='ul' {...props}>
      <Items items={items} stripedRows={stripedRows} />
    </ListMUI>
  );
};

export default nestedComponent(withHoustonTheme(React.memo(List)), { Item, Title, Subtitle, Left, Right });
