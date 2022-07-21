import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg';

export type AvatarColor = 'primary' | 'high';

type SizesMap = Record<AvatarSize, string>;

type FontMap = Record<AvatarSize, string>;

const sizesMap: SizesMap = { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '4rem' };

const Icon = () => (
  <svg viewBox='0 0 192 192' fill='none' xmlns='http://www.w3.org/2000/svg' focusable={false} aria-hidden='true'>
    <path d='M160 150.408C144.592 168.515 121.637 180 96 180C70.3625 180 47.4076 168.515 32 150.408V136C32 116.118 48.1178 100 68 100H124C143.882 100 160 116.118 160 136V150.408Z' />
    <path d='M132 52C132 71.8823 115.882 88 96 88C76.1177 88 60 71.8823 60 52C60 32.1177 76.1177 16 96 16C115.882 16 132 32.1177 132 52Z' />
  </svg>
);

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, StyledProp {
  src?: string;
  alt?: string;
  /**
   * Default `primary`
   */
  color?: AvatarColor;
  /**
   * Default `md`
   */
  size?: AvatarSize;
  children?: React.ReactNode;
}

const Avatar = ({ src, alt, children, className, color = 'primary', size = 'md', ...rest }: AvatarProps) => {
  const hasImage = !!src;
  const hasText = typeof children === 'string';

  const firstLetter = (hasText && children?.[0]?.trim()) ?? ' ';

  return (
    <span className={cx(className, `--${color}`, `--${size}`)} {...rest}>
      {hasImage && <img src={src} alt={alt} />}
      {!hasImage && hasText && <span className='houston-avatar__text'>{firstLetter}</span>}
      {!hasImage && !hasText && (
        <span className='houston-avatar__icon' role='img' aria-label='usuário'>
          <Icon />
        </span>
      )}
    </span>
  );
};

export default styled(React.memo(Avatar), { label: 'houston-avatar' })(({ theme }) => {
  const fontMap: FontMap = {
    xs: theme.font.size.xxs,
    sm: theme.font.size.sm,
    md: theme.font.size.md,
    lg: theme.font.size.xl
  };

  return css`
    color: white;
    overflow: hidden;
    border-radius: 50%;
    display: inline-flex;
    vertical-align: middle;
    justify-content: center;
    background-color: ${theme.brandColor.primary.pure};

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    &.--xs {
      width: ${sizesMap.xs};
      height: ${sizesMap.xs};
      min-width: ${sizesMap.xs};
      min-height: ${sizesMap.xs};
      max-width: ${sizesMap.xs};
      max-height: ${sizesMap.xs};

      .houston-avatar__text {
        font-size: ${fontMap.xs};
        line-height: ${fontMap.xs};
      }
    }

    &.--sm {
      width: ${sizesMap.sm};
      height: ${sizesMap.sm};
      min-width: ${sizesMap.sm};
      min-height: ${sizesMap.sm};
      max-width: ${sizesMap.sm};
      max-height: ${sizesMap.sm};

      .houston-avatar__text {
        font-size: ${fontMap.sm};
        line-height: ${fontMap.sm};
      }
    }

    &.--md {
      width: ${sizesMap.md};
      height: ${sizesMap.md};
      min-width: ${sizesMap.md};
      min-height: ${sizesMap.md};
      max-width: ${sizesMap.md};
      max-height: ${sizesMap.md};

      .houston-avatar__text {
        font-size: ${fontMap.md};
        line-height: ${fontMap.md};
      }
    }

    &.--lg {
      width: ${sizesMap.lg};
      height: ${sizesMap.lg};
      min-width: ${sizesMap.lg};
      min-height: ${sizesMap.lg};
      max-width: ${sizesMap.lg};
      max-height: ${sizesMap.lg};

      .houston-avatar__text {
        font-size: ${fontMap.lg};
        line-height: ${fontMap.lg};
      }
    }

    &.--high {
      color: ${theme.brandColor.primary.pure};
      background-color: ${theme.neutralColor.high.pure};

      .houston-avatar__icon svg {
        fill: ${theme.brandColor.primary.pure};
      }
    }

    .houston-avatar__text {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-weight: ${theme.font.weight.bold};
      user-select: none;
    }

    .houston-avatar__icon {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: white;
        width: 100%;
      }
    }
  `;
});
