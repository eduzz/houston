import * as React from 'react';

import { IButtonProps } from '../../Button';

export interface IAlertActionProps extends Omit<IButtonProps, 'children'> {
  label: React.ReactNode;
}

export default React.memo<IAlertActionProps>(() => null);
