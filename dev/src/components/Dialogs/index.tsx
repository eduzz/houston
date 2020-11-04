import React, { Fragment, memo } from 'react';

import ChangePasswordDialog from './ChangePassword';
import LoginDialog from './Login';

const Dialogs = memo(() => {
  return (
    <Fragment>
      <LoginDialog />
      <ChangePasswordDialog />
    </Fragment>
  );
});

export default Dialogs;
