import * as React from 'react';

export interface IShowcaseStepProps {
  id?: number;
  children?: React.ReactNode;
}

export default React.memo<IShowcaseStepProps>(() => null);
