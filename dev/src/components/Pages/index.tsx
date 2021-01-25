import React, { memo, useCallback, useRef, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Drawer, { IMenu } from 'components/Layout/Drawer';

import AlertPage from './Alert';
import ButtonsPage from './Buttons';
import DashboardPage from './Dashboard';
import FormChoosePage from './Forms/Choose';
import FormSelectPage from './Forms/Select';
import FormTextPage from './Forms/Text';
import FormValidationPage from './Forms/Validation';
import GridPage from './Grid';
import ToastPage from './Toast';
import TypographyPage from './Typography';

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
  const [menu] = useState<IMenu[]>(() => [
    { path: '/', display: 'Dashboard' },
    { path: '/alert', display: 'Alert' },
    { path: '/buttons', display: 'Buttons' },
    { path: '/grid', display: 'Grid' },
    {
      path: '/forms',
      display: 'Forms',
      submenu: [
        { path: '/forms/text', display: 'Text' },
        { path: '/forms/choose', display: 'Choose' },
        { path: '/forms/select', display: 'Select' },
        { path: '/forms/validation', display: 'Validation' }
      ]
    },
    { path: '/toast', display: 'Toast' },
    { path: '/typography', display: 'Typography' }
  ]);

  const scrollTop = useCallback(() => setTimeout(() => mainContent.current.scrollTo(0, 0), 100), []);
  const renderRedirect = useCallback(() => <Redirect to='/' />, []);

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <ScrollTopContext.Provider value={scrollTop}>
          <Drawer menu={menu}>
            <main ref={mainContent} className={classes.content}>
              <Switch>
                <Route path='/alert' component={AlertPage} />
                <Route path='/buttons' component={ButtonsPage} />
                <Route path='/grid' component={GridPage} />
                <Route path='/toast' component={ToastPage} />
                <Route path='/forms/text' component={FormTextPage} />
                <Route path='/forms/choose' component={FormChoosePage} />
                <Route path='/forms/choose' component={FormChoosePage} />
                <Route path='/forms/select' component={FormSelectPage} />
                <Route path='/forms/validation' component={FormValidationPage} />
                <Route path='/typography' component={TypographyPage} />
                <Route path='/' component={DashboardPage} />
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
