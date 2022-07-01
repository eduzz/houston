import * as React from 'react';

import styled from '@emotion/styled';

import { IStyledProp } from '@eduzz/houston-styles/styled';

import nestedComponent from '../utils/nestedComponent';
import Content from './Content';
import Sidebar from './Sidebar';

export interface ILayoutProps extends IStyledProp {
  children?: React.ReactNode;
}

const Layout = ({ ...rest }: ILayoutProps) => <div {...rest} />;

const LayoutWrapper = styled(Layout, { label: 'houston-layout' })`
  display: flex;
  width: 100%;
`;

export default nestedComponent(LayoutWrapper, {
  Sidebar,
  Content
});
