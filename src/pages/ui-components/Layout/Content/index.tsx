import * as React from 'react';

import styled, { IStyledProp } from '../../styles/styled';

export interface ISidebarContentProps extends IStyledProp {
  children: React.ReactNode;
}

const SidebarContent: React.FC<ISidebarContentProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default styled(SidebarContent, { label: 'houston-sidebar-content' })`
  flex: 1;
`;
