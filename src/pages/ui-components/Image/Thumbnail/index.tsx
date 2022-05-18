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
    border-radius: ${theme.border.radius.xs};

    &.--xl {
      width: ${theme.pxToRem(80)};
      height: ${theme.pxToRem(80)};
    }

    &.--lg {
      width: ${theme.pxToRem(64)};
      height: ${theme.pxToRem(64)};
    }

    &.--md {
      width: ${theme.pxToRem(40)};
      height: ${theme.pxToRem(40)};
    }

    &.--sm {
      width: ${theme.pxToRem(24)};
      height: ${theme.pxToRem(24)};
    }
  `}
`;
