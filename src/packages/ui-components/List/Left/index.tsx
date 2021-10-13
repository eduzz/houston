import * as React from 'react';

import AvatarMUI from '@mui/material/Avatar';
import ListItemIconMUI from '@mui/material/ListItemIcon';
import clsx from 'clsx';

import createUseStyles from '../../styles/createUseStyles';

const useStyles = createUseStyles(theme => ({
  iconRoot: {
    color: theme.colors.grey[500],
    minWidth: 20,
    lineHeight: 1.5,
    marginRight: 8,
    '& > svg': {
      width: 20,
      height: 20
    }
  },
  imageRoot: {
    color: theme.colors.grey[600],
    backgroundColor: theme.colors.grey[200],
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

export interface IListLeftProps {
  id?: string;
  className?: string;
  icon?: React.ReactNode;
  image?: React.ReactNode;
  striped?: boolean;
}
const ListLeft: React.FC<IListLeftProps> = ({ icon, image, striped = false, ...rest }) => {
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

export default React.memo(ListLeft);
