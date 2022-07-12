import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

export type IconSizes = 'lg' | 'md' | 'sm';

export type IconProps = Omit<React.SVGAttributes<SVGElement>, 'width'> &
  IStyledProp & {
    /**
     * Defaults to 'md' (24px or 1.5rem)
     */
    size?: IconSizes;
  };

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ focusable = false, children, className, size = 'md', ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox='0 0 192 192'
        className={cx(className, `--${size}`)}
        focusable={focusable}
        fill='currentColor'
        {...rest}
      >
        {children}
      </svg>
    );
  }
);

export default styled(Icon, { label: 'houston-icon' })`
  ${({ theme }) => {
    const sizesMap: Record<IconSizes, number> = {
      lg: 32,
      md: 24,
      sm: 16
    };
    return Object.entries(sizesMap).map(
      ([sizeKey, sizeValueInPx]) => css`
        &.--${sizeKey} {
          width: ${theme.pxToRem(sizeValueInPx)}rem;
        }
      `
    );
  }}
`;
