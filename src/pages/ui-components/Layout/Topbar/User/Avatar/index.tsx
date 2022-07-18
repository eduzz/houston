import * as React from 'react';

import { cx } from '@emotion/css';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

const sizes = {
  lg: 64,
  md: 40,
  sm: 32,
  xs: 24
} as const;

export interface UserAvatarProps extends StyledProp {
  name: string | undefined;
  avatar: string | undefined;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const UserAvatar = React.memo<UserAvatarProps>(({ className, name, avatar, size }) => {
  const firstLetter = name?.trim()[0] ?? '';
  return <div className={cx(className, `--size-${size ?? 'sm'}`)}>{!avatar && firstLetter}</div>;
});

export default styled(UserAvatar, { label: 'houston-topbar-user-avatar' })(
  ({ theme, avatar }) => css`
    border-radius: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.brandColor.primary.pure};
    font-weight: 600;
    font-size: 14px;
    line-height: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${avatar ? `url(${avatar})` : 'none'};

    ${Object.keys(sizes).map(
      size => css`
        &.--size-${size} {
          width: ${theme.pxToRem(sizes[size])}rem;
          min-width: ${theme.pxToRem(sizes[size])}rem;
          max-width: ${theme.pxToRem(sizes[size])}rem;
          height: ${theme.pxToRem(sizes[size])}rem;
          min-height: ${theme.pxToRem(sizes[size])}rem;
          max-height: ${theme.pxToRem(sizes[size])}rem;
        }
      `
    )}

    &::selection {
      background: none;
    }
  `
);
