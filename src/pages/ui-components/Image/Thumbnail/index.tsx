import * as React from 'react';

import styled, { css, cx } from '@eduzz/houston-styles';

import Image, { IImageProps } from '..';

export type ThumbnailSizes = 'sm' | 'md' | 'lg' | 'xl';

export interface IThumbnailProps extends IImageProps {
  size?: ThumbnailSizes;
}

const Thumbnail = React.forwardRef<HTMLImageElement, IThumbnailProps>(({ size = 'md', className, ...props }, ref) => {
  return <Image ref={ref} className={cx(className, size && `--${size}`)} {...props} />;
});

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
  `}
`;
