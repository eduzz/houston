import React, { memo, useCallback, useContext } from 'react';
import { useCallbackObservable, useObservable } from 'react-use-observable';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import ThemeContext from 'assets/theme/context';
import DropdownMenu from 'components/Shared/DropdownMenu';
import OptionItem from 'components/Shared/DropdownMenu/OptionItem';
import { logError } from 'helpers/rxjs-operators/logError';
import DarkIcon from 'mdi-react/Brightness4Icon';
import LightIcon from 'mdi-react/Brightness5Icon';
import ExitToAppIcon from 'mdi-react/ExitToAppIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import authService from 'services/auth';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: -10,
    padding: 0
  },
  avatar: {
    width: 40,
    height: 40,
    fontSize: 16,
    backgroundColor: theme.palette.secondary.main
  }
}));

const UserMenu = memo((props: {}) => {
  const classes = useStyles(props);
  const themeContext = useContext(ThemeContext);

  const [user] = useObservable(() => {
    return authService.getUser().pipe(
      map(user => ({
        avatar: null,
        avatarLetters: `${user.firstName?.substr(0, 1) ?? ''} ${user.lastName?.substr(0, 1) ?? ''}`.trim() || 'U'
      })),
      logError()
    );
  }, []);

  const handleChangePassword = useCallback(() => authService.openChangePassword(), []);

  const [handleLogout] = useCallbackObservable(() => {
    return of(true).pipe(
      switchMap(() => authService.logout()),
      logError()
    );
  }, []);

  if (!user) {
    return null;
  }

  return (
    <DropdownMenu anchorOrigin={{ vertical: 35, horizontal: 'right' }}>
      <IconButton color='inherit' className={classes.button}>
        <Avatar className={classes.avatar}>{user.avatarLetters}</Avatar>
      </IconButton>
      <OptionItem
        text={themeContext.currentTheme === 'light' ? 'Tema Escuro' : 'Tema Claro'}
        icon={themeContext.currentTheme === 'light' ? DarkIcon : LightIcon}
        handler={themeContext.toogleTheme}
      />
      <OptionItem text='Trocar senha' icon={KeyVariantIcon} handler={handleChangePassword} />
      <OptionItem text='Sair' icon={ExitToAppIcon} handler={handleLogout} />
    </DropdownMenu>
  );
});

export default UserMenu;
