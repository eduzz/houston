import * as React from 'react';

import styled, { css, cx } from '@eduzz/houston-styles';

export type ThumbnailSizes = 'sm' | 'md' | 'lg' | 'xl';
export type ThumbnailFits = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export interface IThumbnailProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  size: ThumbnailSizes;
  src: string;
  fit?: ThumbnailFits;
}

const Thumbnail = React.forwardRef<HTMLImageElement, IThumbnailProps>(
  ({ fallbackSrc, src: srcProp, size, className, fit, ...props }, ref) => {
    const [src, setSrc] = React.useState(fallbackSrc || srcProp);

    React.useEffect(() => {
      if (!fallbackSrc) return;
      const image = new Image();
      image.src = srcProp;
      image.onload = () => setSrc(srcProp);
    }, [srcProp, fallbackSrc]);

    return (
      <img
        ref={ref}
        className={cx(
          className,
          {
            '--xlarge': size === 'xl',
            '--large': size === 'lg',
            '--medium': size === 'md',
            '--small': size === 'sm'
          },
          fit && `--${fit}`
        )}
        src={src}
        {...props}
      />
    );
  }
);

export default styled(Thumbnail, { label: 'houston-thumbnail' })`
  ${({ theme }) => css`
    border-radius: ${theme.pxToRem(theme.border.radius.xs)};

    &.--xlarge {
      width: ${theme.pxToRem('80px')};
      height: ${theme.pxToRem('80px')};
    }

    &.--large {
      width: ${theme.pxToRem('64px')};
      height: ${theme.pxToRem('64px')};
    }

    &.--medium {
      width: ${theme.pxToRem('40px')};
      height: ${theme.pxToRem('40px')};
    }

    &.--small {
      width: ${theme.pxToRem('24px')};
      height: ${theme.pxToRem('24px')};
    }

    &.--fill {
      object-fit: fill;
    }

    &.--contain {
      object-fit: contain;
    }

    &.--cover {
      object-fit: cover;
    }

    &.--none {
      object-fit: none;
    }

    &.--scale-down {
      object-fit: scale-down;
    }
  `}
`;
