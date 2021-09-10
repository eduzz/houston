import * as React from 'react';

import ListItemMUI from '@material-ui/core/ListItem';

export interface IListItemProps {
  children?: React.ReactNode;
}

const ListItem: React.FC<IListItemProps> = ({ children }) => {
  return (
    <ListItemMUI>
      <div>{children}</div>
    </ListItemMUI>
  );
};

export default React.memo(ListItem);
