import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

export type IAvatarSize = 'xs' | 'sm' | 'md' | 'lg';

export type IAvatarColor = 'primary' | 'high';

type ISizesMap = { [key in IAvatarSize]: string };

type IFontSizesMap = { [key in IAvatarSize]: string };

const sizesMap: ISizesMap = { xs: '24px', sm: '32px', md: '40px', lg: '64px' };

export interface IAvatarProps extends React.HTMLAttributes<HTMLDivElement>, IStyledProp {
  src?: string;
  alt?: string;
  /**
   * Default `primary`
   */
  color?: IAvatarColor;
  /**
   * Default `md`
   */
  size?: IAvatarSize;
  children?: React.ReactNode;
}

const Avatar = ({ src, alt, children, className, color = 'primary', id, onClick }: IAvatarProps) => {
  const wrapperProps = { id, onClick };
  const imageProps = { src, alt };

  const hasImage = !!src;
  const hasText = children && typeof children === 'string';

  const firstLetter = (hasText && children?.[0]?.trim()) ?? ' ';

  return (
    <span className={cx(className, { '--high': color === 'high' })} {...wrapperProps}>
      {hasImage && <img {...imageProps} />}

      {!hasImage && hasText && <span className='__text'>{firstLetter}</span>}

      {!hasImage && !hasText && (
        <span className='__icon' role='img' aria-label='usuário'>
          <svg viewBox='0 0 44 55' fill='none' xmlns='http://www.w3.org/2000/svg' focusable={false} aria-hidden='true'>
            <path d='M43.3333 45.1362C38.1975 51.1715 30.5458 55 22 55C13.4542 55 5.80257 51.1715 0.666687 45.1362V40.3333C0.666687 33.7059 6.03927 28.3333 12.6667 28.3333H31.3333C37.9608 28.3333 43.3333 33.7059 43.3333 40.3333V45.1362Z' />
            <path d='M22 24.3333C28.6274 24.3333 34 18.9608 34 12.3333C34 5.70592 28.6274 0.333336 22 0.333336C15.3726 0.333336 10 5.70592 10 12.3333C10 18.9608 15.3726 24.3333 22 24.3333Z' />
          </svg>
        </span>
      )}
    </span>
  );
};

export default styled(React.memo(Avatar), { label: 'houston-avatar' })(({ theme, size = 'md' }) => {
  const fontSizeMap: IFontSizesMap = {
    xs: theme.font.size.xxs,
    sm: theme.font.size.sm,
    md: theme.font.size.md,
    lg: theme.font.size.xl
  };

  return css`
    width: ${theme.pxToRem(sizesMap[size])};
    height: ${theme.pxToRem(sizesMap[size])};
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

    &.--high {
      color: ${theme.brandColor.primary.pure};
      background-color: ${theme.neutralColor.high.pure};

      .__icon svg {
        fill: ${theme.brandColor.primary.pure};
      }
    }

    .__text {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: ${theme.pxToRem(fontSizeMap[size])};
      line-height: ${theme.pxToRem(fontSizeMap[size])};
      font-weight: ${theme.font.weight.bold};
      user-select: none;
    }

    .__icon {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: white;
        height: 87.5%;
      }
    }
  `;
});
