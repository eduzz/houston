import * as React from 'react';

import { Collapse as AntdCollapse } from 'antd';

import styled from '@emotion/styled';

export interface CollapseProps {
  id?: string;
  visibled: boolean;
  children?: React.ReactNode;
  className?: string;
}

const CollapseEffect = ({ children, visibled, id, className }: CollapseProps) => {
  return (
    <AntdCollapse ghost bordered={false} activeKey={visibled ? '1' : undefined} className={className}>
      <AntdCollapse.Panel key={'1'} header='' id={id}>
        {children}
      </AntdCollapse.Panel>
    </AntdCollapse>
  );
};

export default styled(CollapseEffect)`
  & .ant-collapse-header {
    display: none !important;
  }

  & .ant-collapse-content-box {
    padding: 0 !important;
  }
`;
