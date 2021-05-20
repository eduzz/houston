import * as React from 'react';

export interface IShowcaseTextProps {
  children?: React.ReactNode;
}

export default React.memo<IShowcaseTextProps>(() => null);
