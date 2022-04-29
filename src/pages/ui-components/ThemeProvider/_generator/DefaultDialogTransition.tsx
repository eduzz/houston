import { forwardRef } from 'react';

import Slide from '@mui/material/Slide';

const DefaultDialogTransition = forwardRef((props: any, ref: any) => {
  return <Slide direction='up' {...props} ref={ref} />;
});

export default DefaultDialogTransition;
