import * as React from 'react';

export interface IShowcaseImageProps {
  src: string;
  alt: string;
}

export default React.memo<IShowcaseImageProps>(() => null);
