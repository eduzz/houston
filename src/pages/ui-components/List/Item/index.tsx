import * as React from 'react';

import ListItemMUI from '@mui/material/ListItem';

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
