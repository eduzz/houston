import * as React from 'react';

import { cx } from '@emotion/css';
import AvatarMUI from '@mui/material/Avatar';
import ListItemIconMUI from '@mui/material/ListItemIcon';

import createUseStyles from '@eduzz/houston-style/createUseStyles';

const useStyles = createUseStyles(theme => ({
  iconRoot: {
    color: theme.neutralColor.high.dark,
    minWidth: 20,
    lineHeight: 1.5,
    marginRight: 8,
    '& > svg': {
      width: 20,
      height: 20
    }
  },
  imageRoot: {
    color: theme.neutralColor.low.light,
    backgroundColor: theme.neutralColor.high.light,
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
    return <AvatarMUI {...rest} src={image} className={cx([classes.imageRoot, striped && classes.striped])} />;
  }

  return (
    <AvatarMUI {...rest} className={cx([classes.imageRoot, striped && classes.striped])}>
      {image}
    </AvatarMUI>
  );
};

export default React.memo(ListLeft);
