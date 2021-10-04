import * as React from 'react';

import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import createUseStyles from '@eduzz/houston-ui/styles/createUseStyles';

import { ITableAction } from '../interface';

const useStyles = createUseStyles(() => ({
  option: {
    display: 'flex',
    alignItems: 'center',

    '& svg, span': {
      marginRight: 8,
      fontSize: 24
    }
  }
}));

interface IProps extends MenuProps {
  anchorEl: HTMLElement;
  onClose: () => void;
  options: ITableAction[];
  rowData: unknown;
  rowIndex: number;
}

const MenuActions = React.memo<IProps>(({ open, onClose, options: optionsProp, anchorEl, rowData, rowIndex }) => {
  const classes = useStyles();

  const options = React.useMemo(() => {
    return (optionsProp || []).map(option => ({
      ...option,
      onClick: () => {
        option.onClick(rowData, rowIndex);
        onClose();
      }
    }));
  }, [onClose, optionsProp, rowData, rowIndex]);

  const menuOptions = React.useMemo<Partial<MenuProps>>(
    () => ({
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      transformOrigin: { vertical: 'top', horizontal: 'right' }
    }),
    []
  );

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      disableAutoFocusItem
      disableAutoFocus
      keepMounted
      anchorOrigin={menuOptions.anchorOrigin}
      transformOrigin={menuOptions.transformOrigin}
      elevation={3}
      PaperProps={{
        style: {
          maxHeight: 350
        }
      }}
    >
      {options?.map(option => {
        return (
          <MenuItem key={option.key} onClick={option.onClick} disabled={option.disabled}>
            <div className={classes.option}>
              {option.icon}
              {option.content}
            </div>
          </MenuItem>
        );
      })}
    </Menu>
  );
});

export default MenuActions;
