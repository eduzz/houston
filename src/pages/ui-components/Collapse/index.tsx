import * as React from 'react';

import { Collapse as AntdCollapse } from 'antd';

import styled from '@emotion/styled';

export interface CollapseProps {
  id?: string;
  visibled: boolean;
  children?: React.ReactNode;
  onEnter?: () => void;
  onClose?: () => void;
  destroyOnClose?: boolean;
  mountOnEnter?: boolean;
  timeout?: number;
  className?: string;
}
const Collapse = ({
  children,
  visibled,
  destroyOnClose = false,
  onEnter,
  onClose,
  mountOnEnter = false,
  id,
  className
}: CollapseProps) => {
  React.useEffect(() => {
    if (visibled) onEnter && onEnter();
    onClose && onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibled]);

  const shouldRender = React.useMemo(() => {
    if (!destroyOnClose && !mountOnEnter) return true;

    if (destroyOnClose) {
      return visibled ? false : true;
    }

    if (mountOnEnter) {
      return visibled ? true : false;
    }

    return false;
  }, [destroyOnClose, mountOnEnter, visibled]);

  return (
    <AntdCollapse ghost bordered={false} activeKey={visibled ? '1' : undefined} className={className}>
      <AntdCollapse.Panel key={'1'} header='' id={id}>
        {shouldRender ? children : <></>}
      </AntdCollapse.Panel>
    </AntdCollapse>
  );
};

/**
 * @deprecated Use Collapse from Antd
 * https://ant.design/components/collapse/
 */
export default styled(Collapse)`
  .ant-collapse-header {
    display: none !important;
  }

  .ant-collapse-content-box {
    padding: 0 !important;
  }
`;
