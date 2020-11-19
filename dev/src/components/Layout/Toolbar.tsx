import React, { memo, useCallback, useContext } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CoreToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuIcon from 'mdi-react/MenuIcon';

import clsx from 'clsx';

import { DrawerContext } from './Drawer/context';

interface IProps {
  title?: string;
  children?: React.ReactNode;
}

const useStyle = makeStyles(theme => ({
  root: {
    height: 67,
    marginTop: 12 * -1,
    marginBottom: 12,
    [theme.breakpoints.up('sm')]: {
      marginTop: 24 * -1,
      marginBottom: 24
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
      width: 'calc(100% - 240px)'
    }
  },
  appBarDrawerMini: {
    width: 'calc(100% - 55px)'
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
            </Grid>
          )}
        </CoreToolbar>
      </AppBar>
    </div>
  );
});

export default Toolbar;
