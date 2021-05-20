import * as React from 'react';

export interface IShowcaseButtonProps {
  callback?: () => void;
  children?: React.ReactNode;
}

export default React.memo<IShowcaseButtonProps>(() => null);
