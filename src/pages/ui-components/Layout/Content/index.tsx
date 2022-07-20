import * as React from 'react';

import styled, { StyledProp } from '@eduzz/houston-styles/styled';

export interface ISidebarContentProps extends StyledProp {
  children?: React.ReactNode;
}

const SidebarContent = ({ ...rest }: ISidebarContentProps) => <div {...rest} />;

export default styled(SidebarContent, { label: 'houston-sidebar-content' })`
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;
