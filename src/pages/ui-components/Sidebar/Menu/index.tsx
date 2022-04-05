import * as React from 'react';

import styled, { IStyledProp } from '../../styles/styled';
import MenuContext from './context';

export interface ISidebarMenu extends IStyledProp {
  id?: string;
  /**
   * Expanded item key.
   * @example expanded='sales'
   */
  expanded?: string;
}

const SidebarMenu: React.FC<ISidebarMenu> = ({ className, children, expanded: expandedProp, ...rest }) => {
  const [expanded, setExpanded] = React.useState<string>(expandedProp ?? '');

  const handleClickExpand = React.useCallback((key: string) => {
    setExpanded(value => (value === key ? '' : key));
  }, []);

  return (
    <MenuContext.Provider value={{ expanded, handleClickExpand }}>
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
