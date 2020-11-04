import React, { memo, Props, useCallback, useContext } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CoreToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import clsx from 'clsx';
import MenuIcon from 'mdi-react/MenuIcon';

import { DrawerContext } from './Drawer/context';
import UserMenu from './UserMenu';

interface IProps extends Props<{}> {
  title?: string;
}

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
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey['900'] : null,
    color: 'white',
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
  },
  iconMenu: {
    marginLeft: '-15px'
  }
}));

const Toolbar = memo((props: IProps) => {
  const context = useContext(DrawerContext);
  const classes = useStyle(props);

  const openDrawer = useCallback(() => context.toogle(), [context]);

  return (
    <div className={classes.root}>
      <AppBar
        className={clsx({
          [classes.appBar]: true,
          [classes.appBarDrawerMini]: !context.isTemporary && !context.isFull
        })}
        color='default'
      >
        <CoreToolbar>
          <IconButton color='inherit' onClick={openDrawer} className={classes.iconMenu}>
            <MenuIcon />
          </IconButton>
          {props.children}
          {!props.children && (
            <Grid container alignItems='center'>
              <Grid item xs={true}>
                <Typography variant='h6' color='inherit' noWrap>
                  {props.title || 'App'}
                </Typography>
              </Grid>
              <Grid item xs={false}>
                <UserMenu />
              </Grid>
            </Grid>
          )}
        </CoreToolbar>
      </AppBar>
    </div>
  );
});

export default Toolbar;
