import * as React from 'react';

import styled, { StyledProp, css, cx } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import Left from './Left';
import Right from './Right';
import Text from './Text';

interface TagProps extends StyledProp {
  children: React.ReactNode;
  disabled?: boolean;
  isActive?: boolean;
  onClick: any;
}

const Tag = ({ children, disabled, isActive, className, ...rest }: TagProps) => {
  return (
    <span className={cx(className, { '--disabled': disabled }, { '--active': isActive })} tabIndex={0} {...rest}>
      {children}
    </span>
  );
};

const TagWrapper = styled(Tag, { label: 'houston-tag' })(({ theme }) => {
  return css`
    display: inline-flex;
    align-items: center;
    outline: ${theme.border.width.xs} solid ${theme.neutralColor.low.pure};
    border-radius: ${theme.border.radius.pill};
    padding: ${theme.spacing.stack.quarck} ${theme.spacing.inline.nano};
    /* cursor: pointer; */

    :hover {
      background-color: ${theme.brandColor.primary.pure};
      color: ${theme.neutralColor.high.pure};
      outline: none;
      transition: 0.5s background-color;
    }

    :focus {
      outline: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
    }

    &.--disabled {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      opacity: ${theme.opacity.level[6]};
      pointer-events: none;
    }

    &.--active {
    }
  `;
});

export default nestedComponent(TagWrapper, {
  Left,
  Right,
  Text
});
