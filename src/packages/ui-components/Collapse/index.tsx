import * as React from 'react';

import CollapseMUI from '@material-ui/core/Collapse';

import WrapperTheme from '../styles/ThemeProvider/WrapperTheme';

interface ICollapseProps {
  visibled: boolean;
  children?: any;
  onEnter?: () => void;
  destroyOnClose?: boolean;
  mountOnEnter?: boolean;
}

const Collapse = React.memo<ICollapseProps>(
  ({ children, visibled, destroyOnClose = false, onEnter, mountOnEnter = false }) => {
    return (
      <WrapperTheme>
        <CollapseMUI
          in={visibled}
          timeout={500}
          unmountOnExit={destroyOnClose}
          onEnter={onEnter && onEnter}
          mountOnEnter={mountOnEnter}
        >
          {children}
        </CollapseMUI>
      </WrapperTheme>
    );
  }
);

export default Collapse;
