import React, { memo } from 'react';

import Alert from '@eduzz/houston-ui/Alert';

const AlertVariantsExample = memo(() => {
  return (
    <>
      <Alert>Success</Alert>
      <br />
      <Alert type='info'>Info</Alert>
      <br />
      <Alert type='error'>Error</Alert>
      <br />
      <Alert type='warning'>Warning</Alert>
      <br />
    </>
  );
});

export default AlertVariantsExample;
