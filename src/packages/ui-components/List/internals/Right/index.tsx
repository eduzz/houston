import * as React from 'react';

import IconButtonMUI from '@material-ui/core/IconButton';
import ListItemIconMUI from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import TypographyMUI from '@material-ui/core/Typography';

import clsx from 'clsx';

import { IListRightProps } from '../../Right';

const useStyles = makeStyles(theme => ({
  iconRoot: {
    minWidth: 20,
    '& svg': {
      width: 20,
      height: 20
    }
  },
  rightRoot: {
    color: theme.palette.grey[500],
    marginLeft: 'auto'
  },
  rightText: {
    fontSize: 10,
    lineHeight: '15px',
    color: theme.palette.grey[600]
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
      <IconButtonMUI
        className={clsx([classes.rightRoot, classes.iconRoot, onClick && classes.clickable])}
        onClick={onClick && onClick}
        size='small'
      >
        {icon}
      </IconButtonMUI>
    );
  }

  if (icon) {
    return <ListItemIconMUI className={clsx([classes.rightRoot, classes.iconRoot])}>{icon}</ListItemIconMUI>;
  }

  if (text) {
    return (
      <TypographyMUI
        {...rest}
        component='p'
        className={clsx([classes.rightRoot, classes.rightText, onClick && classes.clickable])}
        onClick={onClick && onClick}
      >
        {text}
      </TypographyMUI>
    );
  }

  return null;
};

export default Right;
