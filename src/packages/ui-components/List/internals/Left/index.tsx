import * as React from 'react';

import AvatarMUI from '@material-ui/core/Avatar';
import ListItemIconMUI from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import { IListLeftProps } from '../../Left';

const useStyles = makeStyles(theme => ({
  iconRoot: {
    color: theme.palette.grey[500],
    minWidth: 20,
    lineHeight: 1.5,
    marginRight: 8,
    '& > svg': {
      width: 20,
      height: 20
    }
  },
  imageRoot: {
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
}));

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

  if (typeof image === 'string') {
    return <AvatarMUI {...rest} src={image} className={clsx([classes.imageRoot, striped && classes.striped])} />;
  }

  return (
    <AvatarMUI {...rest} className={clsx([classes.imageRoot, striped && classes.striped])}>
      {image}
    </AvatarMUI>
  );
};

export default Left;
