import * as React from 'react';

export interface IShowcaseButtonsProps {
  hideCloseButton?: boolean;
  children?: React.ReactNode;
}

export default React.memo<IShowcaseButtonsProps>(() => null);
