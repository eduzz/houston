import React, { memo, SyntheticEvent, useCallback, useContext } from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import makeStyles from '@material-ui/core/styles/makeStyles';

import DotsHorizontalIcon from 'mdi-react/DotsHorizontalIcon';

import DropdownMenuContext from './context';

interface IProps {
  text: string;
  icon?: typeof DotsHorizontalIcon;
  handler: () => void;
}

const useStyle = makeStyles({
  text: {
    paddingLeft: '0 !important'
  }
});

const OptionItem = memo((props: IProps) => {
  const context = useContext(DropdownMenuContext);
  const classes = useStyle(props);

  const onClick = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      event.stopPropagation();
      context(props.handler);
    },
    [context, props.handler]
  );

  return (
    <MenuItem onClick={onClick}>
      {!!props.icon && (
        <ListItemIcon>
          <props.icon />
        </ListItemIcon>
      )}
      <ListItemText inset={!!props.icon} primary={props.text} className={props.icon ? classes.text : null} />
    </MenuItem>
  );
});

export default OptionItem;
