import * as React from 'react';

export interface IShowcaseTextProps {
  content?: string;
  children?: React.ReactNode;
}

export default React.memo<IShowcaseTextProps>(() => null);
