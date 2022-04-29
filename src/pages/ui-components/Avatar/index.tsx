import * as React from 'react';

import AvatarMUI, { AvatarProps } from '@mui/material/Avatar';

import AvatarOutline from '@eduzz/houston-icons/AvatarOutline';
import AvatarSolid from '@eduzz/houston-icons/AvatarSolid';
import { cx } from '@eduzz/houston-styles';
import createUseStyles from '@eduzz/houston-styles/createUseStyles';

type AvatarPropsExtends = 'id' | 'className' | 'src' | 'alt' | 'onClick' | 'children';

export type IAvatarSize = 'small' | 'middle' | 'large' | number;

export type IAvatarType = 'text' | 'icon';

export interface IAvatarProps extends Pick<AvatarProps, AvatarPropsExtends> {
  /**
   * Default `false`
   */
  filled?: boolean;
  /**
   * Default `icon`
   */
  type?: IAvatarType;
  /**
   * Default `middle`
   */
  size?: IAvatarSize;
}

const sizes = { small: 40, middle: 60, large: 80 };

const useStyles = createUseStyles(theme => ({
  root: ({ size }: { size: IAvatarSize }) => ({
    display: 'inline-flex',
    background: 'none',
    border: `2px solid ${theme.neutralColor.low.light}`,
    color: theme.neutralColor.low.light,
    fontWeight: theme.font.weight.semibold,
    width: size,
    height: size,

    '&.--icon': {
      alignItems: 'flex-end',
      borderWidth: 2,

      '& span.houston-icon': {
        position: 'relative',
        top: 5
      }
    },

    '&.--filled': {
      background: theme.neutralColor.low.light,
      color: 'white',
      borderWidth: 4,

      '& span.houston-icon': {
        color: 'white',
        top: '7px !important'
      }
    },

    '&.--image': {
      borderWidth: 1
    }
  }),

  small: ({ size }: { size: IAvatarSize }) => ({
    width: size ?? sizes.small,
    height: size ?? sizes.small,
    fontSize: theme.font.size.xxs,
    borderWidth: 2
  }),

  middle: ({ size }: { size: IAvatarSize }) => ({
    width: size ?? sizes.middle,
    height: size ?? sizes.middle,
    fontSize: theme.font.size.sm
  }),

  large: ({ size }: { size: IAvatarSize }) => ({
    width: size ?? sizes.large,
    height: size ?? sizes.large,
    fontSize: theme.font.size.lg
  })
}));

const Avatar: React.FC<IAvatarProps> = ({
  children,
  className,
  size = 'middle',
  type = 'icon',
  filled,
  src,
  ...rest
}) => {
  const hasIcon = type === 'icon';
  const sizeIsNumber = typeof size === 'number';

  const classes = useStyles({ size: sizeIsNumber ? size : null });

  const sizeClasses = React.useMemo(
    () => ({ small: classes.small, middle: classes.middle, large: classes.large }),
    [classes.large, classes.middle, classes.small]
  );

  const iconRender = React.useMemo(() => {
    const currentSize = (sizeIsNumber ? size : sizes[size]) - 4;

    if (filled) {
      return <AvatarSolid size={currentSize} />;
    }

    return <AvatarOutline size={currentSize} />;
  }, [filled, size, sizeIsNumber]);

  const styles = React.useMemo(
    () =>
      cx(
        classes.root,
        !sizeIsNumber && sizeClasses[size],
        hasIcon && '--icon',
        filled && '--filled',
        src && '--image',
        className
      ),
    [className, classes.root, filled, hasIcon, size, sizeClasses, sizeIsNumber, src]
  );

  return (
    <AvatarMUI {...rest} src={src} className={styles}>
      {hasIcon && iconRender}
      {type === 'text' && children}
    </AvatarMUI>
  );
};

export default React.memo(Avatar);
