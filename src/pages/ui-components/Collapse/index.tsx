import * as React from 'react';

import CollapseMUI from '@mui/material/Collapse';

interface ICollapseProps {
  visibled: boolean;
  children?: any;
  onEnter?: () => void;
  destroyOnClose?: boolean;
  mountOnEnter?: boolean;
  timeout?: number;
}

const Collapse: React.FC<ICollapseProps> = ({
  children,
  visibled,
  destroyOnClose = false,
  onEnter,
  mountOnEnter = false,
  timeout = 500
}) => {
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
