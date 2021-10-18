import * as React from 'react';

import CollapseMUI from '@mui/material/Collapse';

import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';

interface ICollapseProps {
  visibled: boolean;
  children?: any;
  onEnter?: () => void;
  destroyOnClose?: boolean;
  mountOnEnter?: boolean;
}

const Collapse: React.FC<ICollapseProps> = ({
  children,
  visibled,
  destroyOnClose = false,
  onEnter,
  mountOnEnter = false
}) => {
  return (
    <CollapseMUI
      in={visibled}
      timeout={500}
      unmountOnExit={destroyOnClose}
      onEnter={!!onEnter && onEnter}
      mountOnEnter={mountOnEnter}
    >
      {children}
    </CollapseMUI>
  );
};
export default withHoustonTheme(React.memo(Collapse));
