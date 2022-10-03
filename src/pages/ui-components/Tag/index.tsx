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

const MIN_HEIGHT_IN_PX = 32;

/**
 * @deprecated Use Tag from Antd
 * https://ant.design/components/tag/
 */
const Tag = ({ children, disabled, isActive, onClick: onClickProp, className, onClose, ...rest }: TagProps) => {
  return (
    <span
      aria-disabled={disabled}
      className={cx(className, { 'hst-tag-disabled': disabled }, { 'hst-tag-active': isActive })}
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

const TagWrapper = styled(Tag, { label: 'hst-tag' })(({ theme }) => {
  return css`
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing.inline.nano};
    box-shadow: 0 0 0 ${theme.border.width.xs} ${theme.neutralColor.low.pure};
    border-radius: ${theme.border.radius.pill};
    box-sizing: border-box;
    padding: ${theme.spacing.stack.quarck} ${theme.spacing.inline.nano};
    line-height: 0;
    transition-duration: 0.5s;
    transition-property: background-color, color;
    min-height: ${theme.pxToRem(MIN_HEIGHT_IN_PX)}rem;
    outline: none;

    :hover,
    &.hst-tag-active {
      background-color: ${theme.brandColor.primary.pure};
      color: ${theme.neutralColor.high.pure};
    }

    :focus {
      box-shadow: 0 0 0 ${theme.border.width.sm} ${theme.feedbackColor.informative.pure};
    }

    &.hst-tag-disabled {
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
