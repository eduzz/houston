import * as React from 'react';

import Bullet from '@eduzz/houston-icons/Bullet';
import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import Typography from '../../Typography';

type OwnProperties = StyledProp & {
  children?: React.ReactNode;
  helperText?: React.ReactNode;
  /**
   * Value of checked. Ex. true, 1, 'value'
   */
  value?: any;
  checked?: boolean;
  onChange?: (value: any, e?: React.MouseEvent<HTMLDivElement>) => void;
  error?: boolean;
};

export type RadioProps = OwnProperties &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof OwnProperties | 'type' | 'name'>;

const RadioItem = ({
  value,
  children,
  helperText,
  disabled,
  checked,
  onChange,
  className,
  error,
  ...props
}: RadioProps) => {
  return (
    <div
      className={cx(className, {
        '--hst-empty': !children,
        '--hst-checked': checked,
        '--hst-error': !!error,
        '--hst-disabled': disabled
      })}
      onClick={e => onChange && !disabled && onChange(value, e)}
    >
      <input type='radio' className='hst-radio-item-input' checked={checked} {...props} />

      <div className='hst-radio-item-icon-container'>
        <Bullet size='sm' className='hst-radio-item-icon' />
      </div>

      {!!children && (
        <div className='hst-radio-item-label'>
          {typeof children === 'string' ? <Typography size='xs'>{children}</Typography> : children}
          {!!helperText && <span className='hst-radio-item-input-helper-text'>{helperText}</span>}
        </div>
      )}
    </div>
  );
};

export default styled(React.memo(RadioItem), { label: 'hst-radio-item' })(
  ({ theme }) => css`
    display: flex;
    cursor: pointer;

    &.--hst-empty {
      display: inline-block;
      margin: 0;
    }

    & > .hst-radio-item-input {
      display: none;

      &:focus + .hst-radio-item-icon-container {
        box-shadow: 0 0 0 2px ${theme.feedbackColor.informative.pure};
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }
    }

    & > .hst-radio-item-icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      line-height: 0;
      border: 1px solid ${theme.neutralColor.low.light};
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
      transition: 0.3s, color 0s;
      position: relative;

      & + .hst-radio-item-label {
        margin-left: ${theme.spacing.nano};
      }

      & > .hst-radio-item-icon {
        transition: 0.5s;
        transform: scale(0);
        opacity: 0;
      }
    }

    & > .hst-radio-item-label {
      margin-top: -2px;
    }

    &:hover > .hst-radio-item-icon-container {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
    }

    & > .hst-radio-item-icon-container {
      border-radius: 50%;
      box-shadow: 0 0 0 1px transparent;
    }

    &.--hst-checked > .hst-radio-item-icon-container {
      color: ${theme.brandColor.primary.pure};
      background-color: white;
      border-color: ${theme.brandColor.primary.pure};
      box-shadow: 0 0 0 1px ${theme.brandColor.primary.pure};

      & > .hst-radio-item-icon {
        opacity: 1;
        transform: scale(1);
      }
    }

    &.--hst-error:not(.--hst-checked) > .hst-radio-item-icon-container {
      background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
      border-color: ${theme.feedbackColor.negative.pure};
    }

    &.--hst-error.--hst-checked > .hst-radio-item-icon-container {
      color: ${theme.feedbackColor.negative.pure};
      background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
      border-color: ${theme.feedbackColor.negative.pure};
      box-shadow: 0 0 0 1px ${theme.feedbackColor.negative.pure};
    }

    &.--hst-disabled {
      cursor: not-allowed;
      opacity: ${theme.opacity.level[6]};

      .hst-radio-item-label {
        user-select: none;
      }
    }
  `
);
