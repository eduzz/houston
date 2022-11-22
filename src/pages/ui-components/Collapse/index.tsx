import * as React from 'react';

//@ts-ignore
import CollapseMUI from '@mui/material/Collapse';

export interface CollapseProps {
  id?: string;
  visibled: boolean;
  children?: React.ReactNode;
  onEnter?: () => void;
  onClose?: () => void;
  destroyOnClose?: boolean;
  mountOnEnter?: boolean;
  timeout?: number;
}

const Collapse = ({
  children,
  visibled,
  destroyOnClose = false,
  onEnter,
  onClose,
  mountOnEnter = false,
  timeout = 500,
  id
}: CollapseProps) => {
  return (
    <CollapseMUI
      id={id}
      in={visibled}
      timeout={timeout}
      unmountOnExit={destroyOnClose}
      onEnter={onEnter}
      onExited={onClose}
      mountOnEnter={mountOnEnter}
    >
      {children}
    </CollapseMUI>
  );
};

/**
 * @deprecated Use Collapse from Antd
 * https://ant.design/components/collapse/
 */
export default React.memo(Collapse);
