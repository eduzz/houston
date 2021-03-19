import React, { memo } from 'react';

import Alert from '@eduzz/houston-ui/Alert';

const ComponentExample = memo(() => {
  return (
    <Alert title='Exemplo de componente' type='info'>
      Demonstraçao do seu componente Houston que será documentado
    </Alert>
  );
});

export default ComponentExample;
