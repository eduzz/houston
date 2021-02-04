import * as React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { useTableContext } from '../../context';

const useStyles = makeStyles(() =>
  createStyles({
    option: {
      display: 'flex',
      alignItems: 'center',

      '& svg': {
        marginRight: 4,
        fontSize: 24
      }
    }
  })
);

const Actions: React.FC<{}> = () => {
  const classes = useStyles();
  const { currentRow, actions, anchorEl, setAnchorEl, options, setOptions } = useTableContext();

  const handleCloseActions = React.useCallback(() => {
    setAnchorEl(null);
    setTimeout(() => setOptions([]), 150);
  }, [setAnchorEl, setOptions]);

  const handleClick = React.useCallback(
    (callback: (data: unknown) => void) => {
      handleCloseActions();
      callback(currentRow);
    },
    [handleCloseActions, currentRow]
  );

  if (!actions) {
    return null;
  }

  return (
    <Menu
      anchorEl={anchorEl}
      open={!!anchorEl}
      onClose={handleCloseActions}
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
      elevation={2}
    >
      {(!options?.length ? actions?.options : options)?.map((option, index) => {
        const optionProps = { ...option };

        const disabled =
          typeof option?.disabled === 'boolean'
            ? option?.disabled
            : option?.disabled && currentRow && option.disabled(currentRow);

        const hide =
          typeof option?.hide === 'boolean' ? option?.hide : option?.hide && currentRow && option.hide(currentRow);

        delete optionProps.children;
        delete optionProps.onClick;
        delete optionProps.disabled;
        delete optionProps.hide;
        delete optionProps.icon;

        if (hide) {
          return null;
        }

        return (
          <MenuItem
            {...optionProps}
            key={`menu-option-${index}`}
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
};

export default React.memo(Actions);
