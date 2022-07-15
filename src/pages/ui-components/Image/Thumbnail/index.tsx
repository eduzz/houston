import * as React from 'react';

import styled, { css, cx } from '@eduzz/houston-styles';

import Image, { ImageProps } from '..';

export type ThumbnailSizes = 'sm' | 'md' | 'lg' | 'xl';

export interface ThumbnailProps extends ImageProps {
  size?: ThumbnailSizes;
}

const Thumbnail = React.forwardRef<HTMLImageElement, ThumbnailProps>(({ size = 'md', className, ...props }, ref) => {
  return <Image ref={ref} className={cx(className, size && `--${size}`)} {...props} />;
});

export default styled(Thumbnail, { label: 'houston-thumbnail' })`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.xs};

    &.--xl {
      width: ${theme.pxToRem(80)}rem;
      height: ${theme.pxToRem(80)}rem;
    }

    &.--lg {
      width: ${theme.pxToRem(64)}rem;
      height: ${theme.pxToRem(64)}rem;
    }

    &.--md {
      width: ${theme.pxToRem(40)}rem;
      height: ${theme.pxToRem(40)}rem;
    }

    &.--sm {
      width: ${theme.pxToRem(24)}rem;
      height: ${theme.pxToRem(24)}rem;
    }
  `}
`;
