import * as React from 'react';

import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import createUseStyles from '../../../styles/createUseStyles';
import { ITableRow } from '../../interfaces';
import { ITableOptionProps } from '../../Option';

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

interface IProps extends Omit<MenuProps, 'open'> {
  anchorEl: HTMLElement;
  onClose: () => void;
  options: ITableOptionProps[];
  currentRow: ITableRow;
}

const MenuActions = React.memo<IProps>(({ onClose, options, anchorEl, currentRow }) => {
  const classes = useStyles();

  const handleClick = React.useCallback(
    (callback?: (data: unknown) => void) => {
      callback && callback(currentRow?.data);
      onClose();
    },
    [onClose, currentRow]
  );

  return (
    <Menu
      anchorEl={anchorEl}
      open={!!anchorEl}
      onClose={onClose}
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
      {options?.map((option, index) => {
        const disabled =
          typeof option?.disabled === 'boolean'
            ? option?.disabled
            : option?.disabled && currentRow && option.disabled(currentRow?.data);

        const hide =
          typeof option?.hide === 'boolean'
            ? option?.hide
            : option?.hide && currentRow && option.hide(currentRow?.data);

        if (hide) {
          return null;
        }

        return (
          <MenuItem
            id={`menu-option-${option.id}`}
            key={`menu-option-${index}`}
            className={option.className}
            onClick={() => handleClick(option?.onClick)}
            disabled={disabled}
          >
            <div className={classes.option}>
              {option?.icon && option?.icon}
              {option?.children}
            </div>
          </MenuItem>
        );
      })}
    </Menu>
  );
});

export default MenuActions;
