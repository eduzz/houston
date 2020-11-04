import React, { Fragment, memo, Props, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import CoreDrawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';

import clsx from 'clsx';
import MoreIcon from 'mdi-react/MoreIcon';

import Content from './Content';
import { DrawerContext } from './context';

export interface IMenu {
  path: string;
  icon?: typeof MoreIcon;
  display: string;
  action?: string;
  submenu?: IMenu[];
}

interface IProps extends RouteComponentProps<{}>, Props<{}>, WithWidth {
  menu: IMenu[];
}

const useStyle = makeStyles(theme => ({
  drawer: {
    width: theme.variables.drawerWidthFull,
    borderRight: 'none !important',
    boxShadow: `${theme.variables.boxShadow} !important`,
    [theme.breakpoints.up('md')]: {
      width: theme.variables.drawerWidthFull,
      position: 'relative',
      height: '100vh'
    }
  },
  drawerFull: {
    width: theme.variables.drawerWidthFull,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerMini: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.variables.drawerWidthMini
  }
}));

const Drawer = memo((props: IProps) => {
  const classes = useStyle(props);
  const modalProps = useRef({ keepMounted: true }).current;
  const drawerClasses = useRef({ paper: classes.drawer }).current;

  const [drawerOpened, setDrawerOpened] = useState(false);
  const [drawerFull, setDrawerFull] = useState(localStorage.getItem('app-drawer-full') !== 'N');

  const navigate = useCallback(
    (url: string) => {
      props.history.push(url);
      setDrawerOpened(false);
    },
    [props.history]
  );

  const contextValue = useMemo(
    () => ({
      open: () => {
        props.width === 'xs' || props.width === 'sm' ? setDrawerOpened(true) : setDrawerFull(true);
      },
      close: () => {
        props.width === 'xs' || props.width === 'sm' ? setDrawerOpened(false) : setDrawerFull(false);
      },
      toogle: () => {
        props.width === 'xs' || props.width === 'sm' ? setDrawerOpened(!drawerOpened) : setDrawerFull(!drawerFull);
      },
      isFull: drawerFull,
      isTemporary: props.width === 'xs' || props.width === 'sm'
    }),
    [props.width, drawerOpened, drawerFull]
  );

  useEffect(() => localStorage.setItem('app-drawer-full', drawerFull ? 'Y' : 'N'), [drawerFull]);

  const content = <Content menu={props.menu} navigate={navigate} close={contextValue.close} />;

  return (
    <Fragment>
      <DrawerContext.Provider value={contextValue}>
        <Hidden mdUp>
          <CoreDrawer
            variant='temporary'
            anchor='left'
            open={drawerOpened}
            classes={drawerClasses}
            onClose={contextValue.close}
            ModalProps={modalProps}
          >
            {content}
          </CoreDrawer>
        </Hidden>
        <Hidden smDown>
          <CoreDrawer
            variant='permanent'
            className={clsx(classes.drawer, {
              [classes.drawerFull]: drawerFull,
              [classes.drawerMini]: !drawerFull
            })}
            classes={{
              paper: clsx({
                [classes.drawerFull]: drawerFull,
                [classes.drawerMini]: !drawerFull
              })
            }}
          >
            {content}
          </CoreDrawer>
        </Hidden>

        {props.children}
      </DrawerContext.Provider>
    </Fragment>
  );
});

export default withRouter(withWidth()(Drawer));
