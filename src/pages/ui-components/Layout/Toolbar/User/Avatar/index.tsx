import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles';

export interface UserAvatarProps extends IStyledProp {
  name: string | undefined;
  avatar: string | undefined;
}

const UserAvatar = React.memo<UserAvatarProps>(({ className, name, avatar }) => {
  const firstLetter = name?.trim()[0] ?? '';
  return <div className={className}>{!avatar && firstLetter}</div>;
});

export default styled(UserAvatar, { label: 'houston-toolbar-user-avatar' })(
  ({ theme, avatar }) => css`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.brandColor.primary.pure};
    font-weight: 600;
    margin-right: ${theme.spacing.nano};
    font-size: 14px;
    line-height: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${avatar ? `url(${avatar})` : 'none'};

    &::selection {
      background: none;
    }
  `
);
