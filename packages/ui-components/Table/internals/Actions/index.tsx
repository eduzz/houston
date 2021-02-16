import * as React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { useTableContext } from '../../context';
import MenuActions from '../MenuActions';

const useStyles = makeStyles(() =>
  createStyles({
    option: {
      display: 'flex',
      alignItems: 'center',

      '& svg': {
        marginRight: 8,
        fontSize: 24
      }
    }
  })
);

const Actions: React.FC<{}> = () => {
  const classes = useStyles();
  const { currentRow, actions, anchorEl, setAnchorEl, options, setOptions, setCurrentRow } = useTableContext();

  const handleCloseActions = React.useCallback(() => {
    setAnchorEl(null);

    setTimeout(() => {
      setOptions([]);
      setCurrentRow(null);
    }, 180);
  }, [setAnchorEl, setOptions, setCurrentRow]);

  const handleClick = React.useCallback(
    (callback: (data: unknown) => void) => {
      handleCloseActions();
      callback(currentRow?.data);
    },
    [handleCloseActions, currentRow]
  );

  if (!actions) {
    return null;
  }

  return (
    <MenuActions anchorEl={anchorEl} open={!!anchorEl} onClose={handleCloseActions}>
      {(!options?.length ? actions?.options : options)?.map((option, index) => {
        const optionProps = { ...option };

        const disabled =
          typeof option?.disabled === 'boolean'
            ? option?.disabled
            : option?.disabled && currentRow && option.disabled(currentRow?.data);

        const hide =
          typeof option?.hide === 'boolean'
            ? option?.hide
            : option?.hide && currentRow && option.hide(currentRow?.data);

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
    </MenuActions>
  );
};

export default React.memo(Actions);
