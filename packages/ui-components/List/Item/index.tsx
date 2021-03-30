import * as React from 'react';

export interface IListItemProps {
  children: React.ReactNode;
}

export default React.memo<IListItemProps>(() => null);
