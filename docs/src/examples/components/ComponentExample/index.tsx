import React, { memo } from 'react';

import Alert from '@eduzz/houston-ui/Alert';

const ComponentExample = memo(() => {
  return (
    <Alert type='info' multiline>
      <Alert.Title>Demonstração do componente</Alert.Title>
      Demonstraçao do seu componente Houston que será documentado
    </Alert>
  );
});

export default ComponentExample;
