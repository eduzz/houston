import * as React from 'react';

import styled, { css, cx } from '@eduzz/houston-styles';

import Image, { ImageProps } from '..';

export type ThumbnailSizes = 'sm' | 'md' | 'lg' | 'xl';

export interface ThumbnailProps extends ImageProps {
  size?: ThumbnailSizes;
}

/**
 * @deprecated Use Image from Antd
 * https://ant.design/components/image/
 */
const Thumbnail = React.forwardRef<HTMLImageElement, ThumbnailProps>(({ size = 'md', className, ...props }, ref) => {
  return <Image ref={ref} className={cx(className, size && `hst-thumbnail-size-${size}`)} {...props} />;
});

export default styled(Thumbnail, { label: 'hst-thumbnail' })`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.xs};

    &.hst-thumbnail-size-xl {
      width: ${theme.pxToRem(80)}rem;
      height: ${theme.pxToRem(80)}rem;
    }

    &.hst-thumbnail-size-lg {
      width: ${theme.pxToRem(64)}rem;
      height: ${theme.pxToRem(64)}rem;
    }

    &.hst-thumbnail-size-md {
      width: ${theme.pxToRem(40)}rem;
      height: ${theme.pxToRem(40)}rem;
    }

    &.hst-thumbnail-size-sm {
      width: ${theme.pxToRem(24)}rem;
      height: ${theme.pxToRem(24)}rem;
    }
  `}
`;
