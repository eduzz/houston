import * as React from 'react';

import styled, { css, cx } from '@eduzz/houston-styles';

export type ThumbnailSizes = 'sm' | 'md' | 'lg' | 'xl';
export type ThumbnailFits = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export interface IThumbnailProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  /**
   * Default `md`
   */
  size?: ThumbnailSizes;
  src: string;
  /**
   * Default `cover`
   */
  fit?: ThumbnailFits;
}

const Thumbnail = React.forwardRef<HTMLImageElement, IThumbnailProps>(
  ({ fallbackSrc, src: srcProp, size = 'md', className, fit = 'cover', ...props }, ref) => {
    const [src, setSrc] = React.useState(fallbackSrc || srcProp);

    React.useEffect(() => {
      if (!fallbackSrc) return;
      const image = new Image();
      image.src = srcProp;
      image.onload = () => setSrc(srcProp);
    }, [srcProp, fallbackSrc]);

    return <img ref={ref} className={cx(className, size && `--${size}`, fit && `--fit-${fit}`)} src={src} {...props} />;
  }
);

export default styled(Thumbnail, { label: 'houston-thumbnail' })`
  ${({ theme }) => css`
    border-radius: ${theme.pxToRem(theme.border.radius.xs)};

    &.--xl {
      width: ${theme.pxToRem('80px')};
      height: ${theme.pxToRem('80px')};
    }

    &.--lg {
      width: ${theme.pxToRem('64px')};
      height: ${theme.pxToRem('64px')};
    }

    &.--md {
      width: ${theme.pxToRem('40px')};
      height: ${theme.pxToRem('40px')};
    }

    &.--sm {
      width: ${theme.pxToRem('24px')};
      height: ${theme.pxToRem('24px')};
    }

    &.--fit-fill {
      object-fit: fill;
    }

    &.--fit-contain {
      object-fit: contain;
    }

    &.--fit-cover {
      object-fit: cover;
    }

    &.--fit-none {
      object-fit: none;
    }

    &.--fit-scale-down {
      object-fit: scale-down;
    }
  `}
`;
