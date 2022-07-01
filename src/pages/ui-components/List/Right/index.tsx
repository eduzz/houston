import * as React from 'react';

import ListItemIconMUI from '@mui/material/ListItemIcon';

import { cx } from '@eduzz/houston-styles';
import createUseStyles from '@eduzz/houston-styles/createUseStyles';

import IconButton from '../../IconButton';
import Typography from '../../Typography';

const useStyles = createUseStyles(theme => ({
  iconRootRight: {
    minWidth: 20,
    marginRight: 0,
    paddingLeft: 16,

    '& svg': {
      width: 20,
      height: 20
    }
  },
  rightRoot: {
    color: theme.neutralColor.high.dark,
    marginLeft: 'auto'
  },
  rightText: {
    color: theme.neutralColor.low.light
  },
  clickable: {
    cursor: 'pointer'
  }
}));

export interface IListRightProps {
  id?: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  text?: string;
}

const ListRight: React.FC<IListRightProps> = ({ icon, text, onClick, ...rest }) => {
  const classes = useStyles();

  const componentProps = {
    className: cx([classes.rightRoot, classes.iconRootRight, onClick && classes.clickable]),
    onClick: !!onClick && onClick
  };

  if (icon && onClick) {
    return (
      <IconButton {...componentProps} size='small'>
        {icon}
      </IconButton>
    );
  }

  if (icon) {
    return <ListItemIconMUI className={cx([classes.rightRoot, classes.iconRootRight])}>{icon}</ListItemIconMUI>;
  }

  if (text) {
    return (
      <Typography {...rest} {...componentProps} size='xxxs'>
        {text}
      </Typography>
    );
  }

  return null;
};

export default React.memo(ListRight);
