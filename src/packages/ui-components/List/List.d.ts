import * as React from 'react';
import { ListProps as ListPropsMUI } from '@mui/material/List';
declare type ListProps = 'id' | 'className' | 'children';
export interface IListProps extends Pick<ListPropsMUI, ListProps> {
    stripedRows?: boolean;
}
declare const _default: React.FC<IListProps> & {
    Item: React.NamedExoticComponent<import("./Item").IListItemProps>;
    Text: React.NamedExoticComponent<import("./Text").IListTitleProps>;
    Left: React.NamedExoticComponent<import("./Left").IListLeftProps>;
    Right: React.NamedExoticComponent<import("./Right").IListRightProps>;
};
export default _default;
