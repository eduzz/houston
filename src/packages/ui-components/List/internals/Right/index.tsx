import * as React from 'react';

import ListItemIconMUI from '@material-ui/core/ListItemIcon';

import clsx from 'clsx';

import IconButton from '../../../ButtonIcon';
import createUseStyles from '../../../styles/createUseStyles';
import Typography from '../../../Typography';
import { IListRightProps } from '../../Right';

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
    color: theme.colors.grey[500],
    marginLeft: 'auto'
  },
  rightText: {
    color: theme.colors.grey[600]
  },
  clickable: {
    cursor: 'pointer'
  }
}));

interface IProps extends IListRightProps {}

const Right = ({ icon, text, onClick, ...rest }: IProps) => {
  const classes = useStyles();

  if (icon && onClick) {
    return (
      <IconButton
        className={clsx([classes.rightRoot, classes.iconRootRight, onClick && classes.clickable])}
        onClick={onClick && onClick}
        size='small'
      >
        {icon}
      </IconButton>
    );
  }

  if (icon) {
    return <ListItemIconMUI className={clsx([classes.rightRoot, classes.iconRootRight])}>{icon}</ListItemIconMUI>;
  }

  if (text) {
    return (
      <Typography
        {...rest}
        className={clsx([classes.rightRoot, classes.rightText, onClick && classes.clickable])}
        onClick={onClick && onClick}
        size='xx-small'
      >
        {text}
      </Typography>
    );
  }

  return null;
};

export default Right;
