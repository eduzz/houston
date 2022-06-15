/* eslint-disable no-restricted-imports */

import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import Spinner from '../../Spinner';

export interface IFieldsetProps extends IStyledProp {
  label?: string;
  loading?: boolean;
  size?: 'sm' | 'default';
  disabled?: boolean;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  fullWidth?: boolean;
  errorMessage?: string;
  helperText?: React.ReactNode;
}

interface IInternalFieldsetProps extends IFieldsetProps {
  focused?: boolean;
  onClickContainer?: () => void;
  containerRef?: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

const Fieldset = React.forwardRef<HTMLFieldSetElement, IInternalFieldsetProps>(
  (
    {
      label,
      loading,
      size,
      focused,
      errorMessage,
      fullWidth,
      endAdornment,
      startAdornment,
      className,
      helperText,
      disabled,
      children,
      containerRef,
      onClickContainer
    },
    ref
  ) => {
    helperText = errorMessage || helperText;
    endAdornment = loading ? <Spinner color='inherit' size={20} /> : endAdornment;

    return (
      <fieldset
        ref={ref}
        className={cx(className, {
          '--full-width': fullWidth ?? true,
          '--error': !!errorMessage,
          '--disabled': disabled,
          '--loading': loading,
          '--focused': focused,
          '--clickable': !!onClickContainer,
          [`--size-${size ?? 'default'}`]: true
        })}
      >
        {!!label && <label className='__label'>{label}</label>}

        <div className='__container' ref={containerRef} onClick={onClickContainer}>
          {!!startAdornment && !loading && <span className='__startAdornment'>{startAdornment}</span>}
          <div className='__content'>{children}</div>
          {!!endAdornment && <span className='__endAdornment'>{endAdornment}</span>}
        </div>

        {!!helperText && <span className='__message'>{helperText}</span>}
      </fieldset>
    );
  }
);

export default styled(Fieldset, { label: 'houston-form-fieldset' })(
  ({ theme }) => css`
    border: none;
    position: relative;
    padding: 0;
    min-width: auto;
    transition: 0.3s;

    & > .__container {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border: ${theme.border.width.xs} solid ${theme.neutralColor.low.light};
      border-radius: ${theme.border.radius.xs};
      background-color: ${theme.neutralColor.high.pure};
      transition: 0.3s;
      height: 48px;
      box-shadow: 0 0 0 2px transparent;

      & > .__startAdornment,
      & > .__endAdornment {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: none;

        & > svg {
          font-size: ${theme.pxToRem(24)};
        }
      }

      & > .__content {
        width: 100%;
      }

      & > .__startAdornment {
        margin-left: ${theme.spacing.xxxs};
      }

      & > .__endAdornment {
        margin-right: ${theme.spacing.xxxs};
      }

      & .__text {
        padding: ${theme.spacing.squish.xxs};
        font-size: ${theme.font.size.xs};
        font-family: ${theme.font.family.base};
        font-weight: ${theme.font.weight.regular};
        line-height: ${theme.line.height.sm};
      }
    }

    & > .__label {
      font-size: ${theme.font.size.xs};
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.sm};
      margin-bottom: ${theme.spacing.stack.quarck};
      color: ${theme.neutralColor.low.pure};
      display: flex;
      align-items: center;
    }

    & > .__message {
      display: block;
      font-size: ${theme.font.size.xxs};
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.default};
      color: ${theme.neutralColor.low.pure};
      margin-top: ${theme.spacing.nano};
    }

    &.--clickable:not(.--disabled) > .__container {
      cursor: pointer;
      user-select: none;
    }

    &.--disabled {
      opacity: ${theme.opacity.level[6]};
      cursor: not-allowed;
    }

    &:not(.--disabled) > .__container:hover {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
    }

    &.--loading {
      cursor: progress;
    }

    &.--focused {
      & > .__container {
        box-shadow: 0 0 0 2px ${theme.feedbackColor.informative.pure};
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }
    }

    &.--error > .__container {
      background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
      border-color: ${theme.feedbackColor.negative.pure};
    }

    &.--full-width {
      width: 100%;
    }

    &.--size-sm {
      margin: 0;

      & .__container {
        height: 35px;

        & > .__startAdornment {
          margin-left: ${theme.spacing.nano};
        }

        & > .__endAdornment {
          margin-right: ${theme.spacing.nano};
        }
      }

      & .__text,
      & > .__label {
        font-size: ${theme.font.size.xxs};
      }
    }
  `
);
