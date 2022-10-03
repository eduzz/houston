import * as React from 'react';

import styled, { cx } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import Thumbnail from './Thumbnail';

export type ImageFits = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  src: string;
  /**
   * Default `cover`
   */
  fit?: ImageFits;
}

/**
 * @deprecated Use Image from Antd
 * https://ant.design/components/image/
 */
const ImageComponent = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ fallbackSrc, src: srcProp, className, fit = 'cover', ...props }, ref) => {
    const [src, setSrc] = React.useState(fallbackSrc || srcProp);

    React.useEffect(() => {
      if (!fallbackSrc) return;
      const image = new Image();
      image.src = srcProp;
      image.onload = () => setSrc(srcProp);
    }, [srcProp, fallbackSrc]);

    return <img ref={ref} className={cx(className, fit && `hst-image-fit-${fit}`)} src={src} {...props} />;
  }
);

const StyledImage = styled(ImageComponent, { label: 'hst-image' })`
  display: block;
  max-width: 100%;
  height: auto;

  &.hst-image-fit-fill {
    object-fit: fill;
  }

  &.hst-image-fit-contain {
    object-fit: contain;
  }

  &.hst-image-fit-cover {
    object-fit: cover;
  }

  &.hst-image-fit-none {
    object-fit: none;
  }

  &.hst-image-fit-scale-down {
    object-fit: scale-down;
  }
`;

export default nestedComponent(StyledImage, {
  Thumbnail
});
