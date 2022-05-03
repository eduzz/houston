import * as React from 'react';

import styled, { IStyledProp } from '@eduzz/houston-styles/styled';

export interface ISidebarContentProps extends IStyledProp {
  children: React.ReactNode;
}

const SidebarContent: React.FC<ISidebarContentProps> = ({ ...rest }) => {
  return <div {...rest} />;
};

export default styled(SidebarContent, { label: 'houston-sidebar-content' })`
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;
