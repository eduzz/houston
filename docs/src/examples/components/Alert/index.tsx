import React, { memo } from 'react';

import Alert from '@eduzz/houston-ui/Alert';

const AlertExample = memo(() => {
  return (
    <>
      <Alert closable>Success, updated product!</Alert>
      <br />

      <Alert type='info'>New update!</Alert>
      <br />

      <Alert title='Oops, error!' type='error'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error voluptates repellat blanditiis.
        Temporibus, ipsa. A nemo, molestias quae nam perspiciatis nisi aut delectus ex, amet ut numquam commodi quo.
      </Alert>
      <br />
    </>
  );
});

export default AlertExample;
