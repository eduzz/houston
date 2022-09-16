import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg';

type SizesMap = Record<AvatarSize, string>;

type FontMap = Record<AvatarSize, string>;

const sizesMap: SizesMap = { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '4rem' };

const AvatarIcon = () => (
  <svg viewBox='0 0 192 192' fill='none' xmlns='http://www.w3.org/2000/svg' focusable={false} aria-hidden='true'>
    <path d='M160 150.408C144.592 168.515 121.637 180 96 180C70.3625 180 47.4076 168.515 32 150.408V136C32 116.118 48.1178 100 68 100H124C143.882 100 160 116.118 160 136V150.408Z' />
    <path d='M132 52C132 71.8823 115.882 88 96 88C76.1177 88 60 71.8823 60 52C60 32.1177 76.1177 16 96 16C115.882 16 132 32.1177 132 52Z' />
  </svg>
);

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, StyledProp {
  alt?: string;
  src?: string;
  /**
   * Default `md`
   */
  size?: AvatarSize;
  children?: React.ReactNode;
}

const Avatar = ({ src, children, className, size = 'md', alt, ...rest }: AvatarProps) => {
  const hasImage = !!src;
  const hasText = typeof children === 'string';

  const firstLetter = (hasText && children?.[0]?.trim()) ?? ' ';

  return (
    <span className={cx(className, `hst-avatar-size-${size}`)} {...rest}>
      {hasImage && <img className='hst-avatar-image' src={src} alt={alt ?? 'Avatar'} />}
      {!hasImage && hasText && <span className='hst-avatar-text'>{firstLetter}</span>}
      {!hasImage && !hasText && (
        <span className='hst-avatar-icon' role='img' aria-label='usuário'>
          <AvatarIcon />
        </span>
      )}
    </span>
  );
};

export default styled(React.memo(Avatar), { label: 'hst-avatar' })(({ theme }) => {
  const fontMap: FontMap = {
    xs: theme.font.size.xxs,
    sm: theme.font.size.sm,
    md: theme.font.size.md,
    lg: theme.font.size.xl
  };

  return css`
    color: ${theme.neutralColor.high.pure};
    overflow: hidden;
    border-radius: ${theme.border.radius.circular};
    display: inline-flex;
    vertical-align: middle;
    justify-content: center;
    background-color: ${theme.brandColor.primary.pure};

    img.hst-avatar-image {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    &.hst-avatar-size-xs {
      width: ${sizesMap.xs};
      height: ${sizesMap.xs};
      min-width: ${sizesMap.xs};
      min-height: ${sizesMap.xs};
      max-width: ${sizesMap.xs};
      max-height: ${sizesMap.xs};

      .hst-avatar-text {
        font-size: ${fontMap.xs};
        line-height: ${fontMap.xs};
      }
    }

    &.hst-avatar-size-sm {
      width: ${sizesMap.sm};
      height: ${sizesMap.sm};
      min-width: ${sizesMap.sm};
      min-height: ${sizesMap.sm};
      max-width: ${sizesMap.sm};
      max-height: ${sizesMap.sm};

      .hst-avatar-text {
        font-size: ${fontMap.sm};
        line-height: ${fontMap.sm};
      }
    }

    &.hst-avatar-size-md {
      width: ${sizesMap.md};
      height: ${sizesMap.md};
      min-width: ${sizesMap.md};
      min-height: ${sizesMap.md};
      max-width: ${sizesMap.md};
      max-height: ${sizesMap.md};

      .hst-avatar-text {
        font-size: ${fontMap.md};
        line-height: ${fontMap.md};
      }
    }

    &.hst-avatar-size-lg {
      width: ${sizesMap.lg};
      height: ${sizesMap.lg};
      min-width: ${sizesMap.lg};
      min-height: ${sizesMap.lg};
      max-width: ${sizesMap.lg};
      max-height: ${sizesMap.lg};

      .hst-avatar-text {
        font-size: ${fontMap.lg};
        line-height: ${fontMap.lg};
      }
    }

    .hst-avatar-text {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-weight: ${theme.font.weight.bold};
      user-select: none;
    }

    .hst-avatar-icon {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: ${theme.neutralColor.high.pure};
        width: 100%;
      }
    }
  `;
});
