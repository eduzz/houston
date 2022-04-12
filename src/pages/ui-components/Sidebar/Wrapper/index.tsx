import * as React from 'react';

import styled, { IStyledProp } from '../../styles/styled';

export interface ISidebarWrapperProps extends IStyledProp {}

const SidebarWrapper: React.FC<ISidebarWrapperProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default styled(SidebarWrapper, { label: 'houston-sidebar-wrapper' })`
  flex: 1;
`;
