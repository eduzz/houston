import * as React from 'react';

import CollapseMUI from '@mui/material/Collapse';

export interface CollapseProps {
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
  timeout = 500
}: CollapseProps) => {
  return (
    <CollapseMUI
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
export default React.memo(Collapse);
