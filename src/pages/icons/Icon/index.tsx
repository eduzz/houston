import * as React from 'react';

export type IconSizes = 'sm' | 'md' | 'lg';

export type IconProps = Omit<React.SVGAttributes<SVGElement>, 'width' | 'height'> & {
  /**
   * Defaults to 'md' (24px or 1.5rem)
   */
  size?: IconSizes | number;
};

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ focusable = false, children, size = 'md', ...rest }, ref) => {
    const sizesMap: Record<IconSizes, number> = {
      lg: 32,
      md: 24,
      sm: 16
    };

    return (
      <svg
        ref={ref}
        width={sizesMap[size] ?? (size as number)}
        viewBox='0 0 192 192'
        focusable={focusable}
        fill='currentColor'
        {...rest}
      >
        {children}
      </svg>
    );
  }
);

export default Icon;
