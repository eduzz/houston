import React, { memo, useCallback } from 'react';

import List from '@material-ui/core/List';
import makeStyles from '@material-ui/core/styles/makeStyles';

import logoWhite from 'assets/images/logo-white.png';

import { IMenu } from '..';

import DrawerListItem from './ListItem';

interface IProps {
  menu: IMenu[];
  navigate: (path: string) => void;
  close: () => void;
}

const useStyle = makeStyles(theme => ({
  root: {
    background: theme.palette.grey['900'],
    color: theme.palette.primary.contrastText,
    height: '100vh',
    overflowY: 'auto'
  },
  header: {
    padding: '10px 0',
    textAlign: 'center'
  },
  headerLogo: {
    minHeight: 67 - 11
  },
  logo: {
    maxWidth: 'calc(100% - 10px)',
    width: 150,
    maxHeight: 100
  },
  list: {
    padding: 0
  },
  name: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    color: 'white',
    marginBottom: 15
  }
}));

const Content = memo((props: IProps) => {
  const classes = useStyle(props);
  const navigate = useCallback((menu: IMenu) => props.navigate(menu.path), [props]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerLogo}>
          <img src={logoWhite} className={classes.logo} alt='logo' />
        </div>
      </div>

      <List className={classes.list}>
        {props.menu.map(item => (
          <DrawerListItem key={item.path} data={item} onClick={navigate} />
        ))}
      </List>
    </div>
  );
});

export default Content;
