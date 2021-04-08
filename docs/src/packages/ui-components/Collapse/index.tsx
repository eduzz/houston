import * as React from 'react';

import CollapseMUI from '@material-ui/core/Collapse';

import WrapperTheme from '../ThemeProvider/WrapperTheme';

interface ICollapseProps {
  visibled: boolean;
  children?: any;
  onEnter?: () => void;
  destroyOnClose?: boolean;
}

const Collapse = React.memo<ICollapseProps>(({ children, visibled, destroyOnClose = false, onEnter }) => {
  return (
    <WrapperTheme>
      <CollapseMUI in={visibled} timeout={500} unmountOnExit={destroyOnClose} onEnter={onEnter && onEnter}>
        {children}
      </CollapseMUI>
    </WrapperTheme>
  );
});

export default Collapse;
