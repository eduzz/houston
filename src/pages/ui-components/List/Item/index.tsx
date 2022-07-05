import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles';

export interface IListItemProps extends IStyledProp {
  children?: React.ReactNode;
}

const ListItem: React.FC<IListItemProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default React.memo(
  styled(ListItem, { label: 'houston-list-item' })(({ theme }) => {
    return css`
      display: flex;
      border: solid;
      border-width: thin;
    `;
  })
);

//export default React.memo(ListItem);
