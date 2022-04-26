import * as React from 'react';

import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import styled, { IStyledProp } from '@eduzz/houston-style/styled';

import { ITableAction } from '../interface';

interface IProps extends MenuProps, IStyledProp {
  anchorEl: HTMLElement;
  onClose: () => void;
  options: ITableAction[];
  rowData: unknown;
  rowIndex: number;
}

const MenuActions = React.memo<IProps>(
  ({ open, onClose, options: optionsProp, anchorEl, rowData, rowIndex, className }) => {
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
        PaperProps={{ style: { maxHeight: 350 } }}
        className={className}
      >
        {options?.map(option => {
          return (
            <MenuItem className='__menuItem' key={option.key} onClick={option.onClick} disabled={option.disabled}>
              <div className='__option'>
                {option.icon}
                {option.content}
              </div>
            </MenuItem>
          );
        })}
      </Menu>
    );
  }
);

export default styled(MenuActions)`
  & > .__menuItem > .__option {
    display: flex;
    align-items: center;

    & svg,
    & span {
      margin-right: 8px;
      font-size: 24px;
    }
  }
`;
