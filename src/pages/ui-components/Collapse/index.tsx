import * as React from 'react';

import CollapseMUI from '@mui/material/Collapse';

interface CollapseProps {
  visibled: boolean;
  children?: React.ReactNode;
  onEnter?: () => void;
  destroyOnClose?: boolean;
  mountOnEnter?: boolean;
  timeout?: number;
}

const Collapse = ({
  children,
  visibled,
  destroyOnClose = false,
  onEnter,
  mountOnEnter = false,
  timeout = 500
}: CollapseProps) => {
  return (
    <CollapseMUI
      in={visibled}
      timeout={timeout}
      unmountOnExit={destroyOnClose}
      onEnter={onEnter}
      mountOnEnter={mountOnEnter}
    >
      {children}
    </CollapseMUI>
  );
};
export default React.memo(Collapse);
