import React, { memo, useCallback, useRef, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';

import ViewDashboardIcon from 'mdi-react/ViewDashboardIcon';

import Drawer from 'components/Layout/Drawer';

import DashboardIndexPage from './Dashboard';

export const ScrollTopContext = React.createContext<Function>(() => {});

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100vw',
    height: '100vh'
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100vw',
    height: '100vh',
    overflow: 'auto',
    padding: 12,
    [theme.breakpoints.up('sm')]: {
      padding: 24
    }
  }
}));

const IndexPage = memo((props: {}) => {
  const classes = useStyles(props);

  const mainContent = useRef<HTMLDivElement>();
  const [menu] = useState(() => [{ path: '/', display: 'Dashboard', icon: ViewDashboardIcon }]);

  const scrollTop = useCallback(() => setTimeout(() => mainContent.current.scrollTo(0, 0), 100), []);
  const renderRedirect = useCallback(() => <Redirect to='/' />, []);

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <ScrollTopContext.Provider value={scrollTop}>
          <Drawer menu={menu}>
            <main ref={mainContent} className={classes.content}>
              <Switch>
                <Route path='/' component={DashboardIndexPage} />
                <Route render={renderRedirect} />
              </Switch>
            </main>
          </Drawer>
        </ScrollTopContext.Provider>
      </div>
    </BrowserRouter>
  );
});

export default IndexPage;
