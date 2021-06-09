import * as React from 'react';

import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import { ITableActionOption } from './context';

const useStyles = makeStyles(() => ({
  option: {
    display: 'flex',
    alignItems: 'center',

    '& svg, span': {
      marginRight: 8,
      fontSize: 24
    }
  }
}));

interface IProps extends Omit<MenuProps, 'open'> {
  anchorEl: HTMLElement;
  onClose: () => void;
  options: ITableActionOption[];
  rowData: unknown;
  rowIndex: number;
}

const MenuActions = React.memo<IProps>(({ onClose, options: optionsProp, anchorEl, rowData, rowIndex }) => {
  const classes = useStyles();

  const options = React.useMemo(() => {
    return optionsProp.map(option => ({
      ...option,
      onClick: () => {
        option.onClick(rowData, rowIndex);
        onClose();
      }
    }));
  }, [onClose, optionsProp, rowData, rowIndex]);

  const menuOptions = React.useMemo<Partial<MenuProps>>(
    () => ({
      anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
      transformOrigin: { vertical: 'top', horizontal: 'center' }
    }),
    []
  );

  return (
    <Menu
      anchorEl={anchorEl}
      open={!!anchorEl}
      onClose={onClose}
      getContentAnchorEl={null}
      disableAutoFocusItem
      disableAutoFocus
      anchorOrigin={menuOptions.anchorOrigin}
      transformOrigin={menuOptions.transformOrigin}
      elevation={1}
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
