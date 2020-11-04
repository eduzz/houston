import React, { forwardRef, memo, useCallback, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useObservable } from 'react-use-observable';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import makeStyles from '@material-ui/core/styles/makeStyles';

import logoWhite from 'assets/images/logo-white.png';
import splashImage from 'assets/images/splash.png';
import { logError } from 'helpers/rxjs-operators/logError';
import authService from 'services/auth';

import LoginDialogForm from './Form';
import LoginDialogRecoveryAccess from './RecoveryAcces';

const useStyle = makeStyles({
  root: {
    minHeight: '100vh',
    minWidth: '100vw',
    position: 'relative',
    background: `url(${splashImage}) no-repeat center`,
    backgroundSize: 'cover'
  },
  container: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    margin: 'auto',
    width: 320,
    height: 470,
    maxWidth: 'calc(100% - 30px)',
    color: 'white'
  },
  logo: {
    textAlign: 'center',
    marginBottom: 20
  },
  logoImage: {
    width: 220,
    maxWidth: '100%',
    maxHeight: 120
  },
  viewContainer: {
    boxSizing: 'border-box',
    padding: '0 10px',
    height: 325
  }
});

const LoginDialog = memo((props: {}) => {
  const classes = useStyle(props);
  const [currentView, setCurrentView] = useState(0);

  const [opened] = useObservable(() => {
    return authService.shouldOpenLogin().pipe(logError());
  }, []);

  const handleChangeView = useCallback((view: number) => () => setCurrentView(view), []);

  return (
    <Dialog
      fullScreen
      disableBackdropClick
      disableEscapeKeyDown
      open={opened || false}
      TransitionComponent={Transition}
    >
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.logo}>
            <img src={logoWhite} className={classes.logoImage} alt='logo' />
          </div>

          <SwipeableViews index={currentView}>
            <div className={classes.viewContainer}>
              <LoginDialogForm onRecoveryAccess={handleChangeView(1)} />
            </div>
            <div className={classes.viewContainer}>
              <LoginDialogRecoveryAccess onCancel={handleChangeView(0)} onComplete={handleChangeView(0)} />
            </div>
          </SwipeableViews>
        </div>
      </div>
    </Dialog>
  );
});

const Transition = memo(
  forwardRef((props: any, ref: any) => {
    return <Slide direction='up' {...props} ref={ref} />;
  })
);

export default LoginDialog;
