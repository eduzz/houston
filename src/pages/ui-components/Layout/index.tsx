import * as React from 'react';

import styled from '@emotion/styled';

import nestedComponent from '../Helpers/nestedComponent';
import { IStyledProp } from '../styled';
import Content from './Content';
import Sidebar from './Sidebar';

interface ILayoutProps extends IStyledProp {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ ...rest }) => {
  return <div {...rest} />;
};

const LayoutWrapper = styled(Layout, { label: 'houston-layout' })`
  display: flex;
`;

export default nestedComponent(LayoutWrapper, {
  Sidebar,
  Content
});
