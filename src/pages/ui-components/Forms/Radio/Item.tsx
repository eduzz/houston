import * as React from 'react';

import Bullet from '@eduzz/houston-icons/Bullet';
import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import Typography from '../../Typography';

type OwnProperties = StyledProp & {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  /**
   * Value of checked. Ex. true, 1, 'value'
   */
  value?: any;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: any) => void;
  error?: boolean;
};

export type RadioProps = OwnProperties &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof OwnProperties | 'type' | 'name'>;

const RadioItem = ({
  value,
  label,
  helperText,
  disabled,
  checked,
  onChange,
  className,
  error,
  ...props
}: RadioProps) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange && onChange(e, value);
  }

  return (
    <label
      className={cx(className, {
        'hst-radio-item-empty': !label,
        'hst-radio-item-checked': checked,
        'hst-radio-item-error': !!error,
        'hst-radio-item-disabled': disabled
      })}
      htmlFor={props.id}
    >
      <input type='radio' className='hst-radio-item-input' checked={checked} onChange={handleChange} {...props} />

      <div className='hst-radio-item-icon-container'>
        <Bullet size='sm' className='hst-radio-item-icon' />
      </div>

      {!!label && (
        <div className='hst-radio-item-label'>
          {typeof label === 'string' ? <Typography size='xs'>{label}</Typography> : label}
          {!!helperText && <span className='hst-radio-item-input-helper-text'>{helperText}</span>}
        </div>
      )}
    </label>
  );
};

/**
 * @deprecated Use Radio from Antd
 */
export default styled(React.memo(RadioItem), { label: 'hst-radio-item' })(
  ({ theme }) => css`
    display: flex;
    cursor: pointer;

    &.hst-radio-item-empty {
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
      width: ${theme.pxToRem(16)}rem;
      height: ${theme.pxToRem(16)}rem;
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

    &.hst-radio-item-checked > .hst-radio-item-icon-container {
      color: ${theme.brandColor.primary.pure};
      background-color: white;
      border-color: ${theme.brandColor.primary.pure};
      box-shadow: 0 0 0 1px ${theme.brandColor.primary.pure};

      & > .hst-radio-item-icon {
        opacity: 1;
        transform: scale(1);
      }
    }

    &.hst-radio-item-error:not(.hst-radio-item-checked) > .hst-radio-item-icon-container {
      background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
      border-color: ${theme.feedbackColor.negative.pure};
    }

    &.hst-radio-item-error.hst-radio-item-checked > .hst-radio-item-icon-container {
      color: ${theme.feedbackColor.negative.pure};
      background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
      border-color: ${theme.feedbackColor.negative.pure};
      box-shadow: 0 0 0 1px ${theme.feedbackColor.negative.pure};
    }

    &.hst-radio-item-disabled {
      cursor: not-allowed;
      opacity: ${theme.opacity.level[6]};

      .hst-radio-item-label {
        user-select: none;
      }
    }
  `
);
