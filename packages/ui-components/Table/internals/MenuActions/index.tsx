import * as React from 'react';

import Menu, { MenuProps } from '@material-ui/core/Menu';

interface IProps extends MenuProps {}

const MenuActions: React.FC<IProps> = props => {
  const menuProps = { ...props };
  const { children } = props;

  return (
    <Menu
      {...menuProps}
      getContentAnchorEl={null}
      disableAutoFocusItem
      disableAutoFocus
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      elevation={1}
    >
      {children}
    </Menu>
  );
};

export default React.memo(MenuActions);
