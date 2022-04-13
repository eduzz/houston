import * as React from 'react';

import styled, { IStyledProp } from '../../styles/styled';
import MenuContext, { ISidebarMenuContext } from './context';

export interface ISidebarMenu extends IStyledProp {
  id?: string;
  children: React.ReactNode;
}

const SidebarMenu: React.FC<ISidebarMenu> = ({ className, children, ...rest }) => {
  const [expanded, setExpanded] = React.useState('');

  const handleClickExpand = React.useCallback((key: string, forceActive: boolean) => {
    setExpanded(value => (value === key && !forceActive ? '' : key));
  }, []);

  const contextValue = React.useMemo<ISidebarMenuContext>(
    () => ({ expanded, handleClickExpand }),
    [expanded, handleClickExpand]
  );

  return (
    <MenuContext.Provider value={contextValue}>
      <nav {...rest} className={className}>
        <ul>{children}</ul>
      </nav>
    </MenuContext.Provider>
  );
};

export default styled(React.memo(SidebarMenu), { label: 'houston-sidebar-menu' })`
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 3px;
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grey[300]};
    border-radius: 4px;
  }

  ul {
    list-style-type: none;
  }
`;
