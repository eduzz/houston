import * as React from 'react';

import AvatarMUI from '@material-ui/core/Avatar';
import ListItemIconMUI from '@material-ui/core/ListItemIcon';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import { IListLeftProps } from '../../Left';

const useStyles = makeStyles(theme =>
  createStyles({
    iconRoot: {
      color: theme.palette.grey[500],
      minWidth: 20,
      marginRight: 8,
      '& > svg': {
        width: 20,
        height: 20
      }
    },
    leftIcon: {
      width: 20,
      height: 20
    },
    leftImage: {
      color: theme.palette.grey[600],
      backgroundColor: theme.palette.grey[200],
      marginRight: 8,
      '& > svg': {
        width: 20,
        height: 20
      }
    },
    striped: {
      backgroundColor: '#fff'
    }
  })
);

interface IProps extends IListLeftProps {}

const Left = ({ icon, image, striped = false, ...rest }: IProps) => {
  const classes = useStyles();

  if (icon) {
    return (
      <ListItemIconMUI {...rest} className={classes.iconRoot}>
        {icon}
      </ListItemIconMUI>
    );
  }

  if (!icon && image) {
    return typeof image === 'string' ? (
      <AvatarMUI {...rest} src={image} className={clsx([classes.leftImage, striped && classes.striped])} />
    ) : (
      <AvatarMUI {...rest} className={clsx([classes.leftImage, striped && classes.striped])}>
        {image}
      </AvatarMUI>
    );
  }

  return null;
};

export default Left;
