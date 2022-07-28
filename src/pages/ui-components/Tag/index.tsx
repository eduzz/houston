import * as React from 'react';

import { Cancel } from '@eduzz/houston-icons';
import styled, { StyledProp, css, cx } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import Left from './__utils/Left';
import Right from './__utils/Right';
import Text from './__utils/Text';
import Category from './Category';
import Highlight from './Highlight';

export interface TagProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  isActive?: boolean;
  onClose?: () => void;
}

const Tag = ({ children, disabled, isActive, onClick: onClickProp, className, onClose, ...rest }: TagProps) => {
  return (
    <span
      aria-disabled={disabled}
      className={cx(className, { '--disabled': disabled }, { '--active': isActive })}
      {...(onClickProp && { role: 'button', tabIndex: 0 })}
      onClick={onClickProp}
      {...rest}
    >
      {children}
      {onClose && (
        <Right onClick={onClose}>
          <Cancel size='sm' />
        </Right>
      )}
    </span>
  );
};

const MIN_HEIGHT_IN_PX = 32;

const TagWrapper = styled(Tag, { label: 'houston-tag' })(({ theme }) => {
  return css`
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing.inline.nano};
    outline: ${theme.border.width.xs} solid ${theme.neutralColor.low.pure};
    border-radius: ${theme.border.radius.pill};
    padding: ${theme.spacing.stack.quarck} ${theme.spacing.inline.nano};
    line-height: 0;
    transition-duration: 0.5s;
    transition-property: background-color, color;
    min-height: ${theme.pxToRem(MIN_HEIGHT_IN_PX)}rem;

    :hover,
    &.--active {
      background-color: ${theme.brandColor.primary.pure};
      color: ${theme.neutralColor.high.pure};
      outline: none;
    }

    :focus {
      outline: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
    }

    &.--disabled {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      opacity: ${theme.opacity.level[6]};
      pointer-events: none;
    }
  `;
});

export default nestedComponent(TagWrapper, {
  Left,
  Right,
  Text,
  Category,
  Highlight
});
