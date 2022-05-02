import * as React from 'react';

import AvatarMUI, { AvatarProps } from '@mui/material/Avatar';

import AvatarOutline from '@eduzz/houston-icons/AvatarOutline';
import AvatarSolid from '@eduzz/houston-icons/AvatarSolid';
import styled, { cx, IStyledProp } from '@eduzz/houston-styles';

type AvatarPropsExtends = 'id' | 'className' | 'src' | 'alt' | 'onClick' | 'children';

export type IAvatarSize = 'small' | 'medium' | 'large' | number;

export type IAvatarType = 'text' | 'icon';

export interface IAvatarProps extends Pick<AvatarProps, AvatarPropsExtends>, IStyledProp {
  /**
   * Default `false`
   */
  filled?: boolean;
  /**
   * Default `icon`
   */
  type?: IAvatarType;
  /**
   * Default `medium`
   */
  size?: IAvatarSize;
}

const sizes = { small: 40, medium: 60, large: 80 };

const Avatar: React.FC<IAvatarProps> = ({
  children,
  className,
  size = 'medium',
  type = 'icon',
  filled,
  src,
  ...rest
}) => {
  const hasIcon = type === 'icon';
  const sizeIsNumber = typeof size === 'number';

  const iconRender = React.useMemo(() => {
    const currentSize = ((sizeIsNumber ? size : sizes[size]) ?? sizes.medium) - 4;

    if (filled) {
      return <AvatarSolid size={currentSize} />;
    }

    return <AvatarOutline size={currentSize} />;
  }, [filled, size, sizeIsNumber]);

  return (
    <AvatarMUI
      {...rest}
      src={src}
      className={cx(
        className,
        !sizeIsNumber && `--${size ?? 'medium'}`,
        hasIcon && '--icon',
        filled && '--filled',
        src && '--image'
      )}
    >
      {hasIcon && iconRender}
      {type === 'text' && children}
    </AvatarMUI>
  );
};

export default styled(Avatar)`
    display: inline-flex;
    background: none;
    border: 2px solid ${({ theme }) => theme.neutralColor.low.light};
    color: ${({ theme }) => theme.neutralColor.low.light};
    font-weight: ${({ theme }) => theme.font.weight.semibold};

    &.--icon {
      align-items: flex-end;
      border-width: 2px;

      & span.houston-icon {
        position: relative;
        top: 5;
      }
    }

    &.--filled {
      background: ${({ theme }) => theme.neutralColor.low.light};
      color: white;
      border-width: 4px;

      & span.houston-icon {
        color: white;
        top: 7px !important;
      }
    }

    &.--image {
      border-width: 1px;
    }

  &.--small {
    width: ${sizes.small}px;
    height: ${sizes.small}px;
    font-size: ${({ theme }) => theme.font.size.xxs};
    border-width: 2px;
  }

  &.--medium{
    width: ${sizes.medium}px;
    height: ${sizes.medium}px;
    font-size: ${({ theme }) => theme.font.size.sm};
  }

  &.--large {
    width: ${sizes.large}px;
    height: ${sizes.large}px;
    font-size: ${({ theme }) => theme.font.size.lg};
  }
})
`;
