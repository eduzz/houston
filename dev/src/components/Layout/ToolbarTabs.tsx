import React, { memo, Props, useContext } from 'react';

import AppBar from '@material-ui/core/AppBar';
import makeStyles from '@material-ui/core/styles/makeStyles';

import clsx from 'clsx';

import { DrawerContext } from './Drawer/context';

const useStyle = makeStyles(theme => ({
  root: {
    height: theme.variables.headerHeight,
    marginTop: theme.variables.contentPadding * -1,
    marginBottom: theme.variables.contentPadding,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.variables.contentPaddingUpSm * -1,
      marginBottom: theme.variables.contentPaddingUpSm
    }
  },
  appBar: {
    position: 'fixed',
    top: theme.variables.headerHeightUpSm,
    backgroundColor: theme.palette.grey['900'],
    color: 'white',
    boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.29)',
    width: '100%',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.type === 'light' ? 'white' : null,
      color: theme.palette.type === 'light' ? theme.palette.text.primary : null,
      width: `calc(100% - ${theme.variables.drawerWidthFull}px)`
    }
  },
  appBarDrawerMini: {
    width: `calc(100% - ${theme.variables.drawerWidthMini}px)`
  }
}));

const ToolbarTabs = memo((props: Props<{}>) => {
  const context = useContext(DrawerContext);
  const classes = useStyle(props);

  return (
    <div className={classes.root}>
      <AppBar
        className={clsx({
          [classes.appBar]: true,
          [classes.appBarDrawerMini]: !context.isTemporary && !context.isFull
        })}
      >
        {props.children}
      </AppBar>
    </div>
  );
});

export default ToolbarTabs;
