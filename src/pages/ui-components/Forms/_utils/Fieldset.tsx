/* eslint-disable no-restricted-imports */

import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import Spinner from '../../Loaders/Spinner';

export interface FieldsetProps extends StyledProp {
  id?: string;
  label?: string;
  loading?: boolean;
  size?: 'sm' | 'default';
  disabled?: boolean;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  fullWidth?: boolean;
  errorMessage?: string;
  helperText?: React.ReactNode;
  hidden?: boolean;
}

interface InternalFieldsetProps extends FieldsetProps {
  focused?: boolean;
  onClickContainer?: () => void;
  containerRef?: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

const Fieldset = React.forwardRef<HTMLFieldSetElement, InternalFieldsetProps>(
  (
    {
      id,
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
      onClickContainer,
      hidden
    },
    ref
  ) => {
    helperText = errorMessage || helperText;
    endAdornment = loading ? <Spinner color='inherit' size={20} /> : endAdornment;

    return (
      <fieldset
        id={id}
        ref={ref}
        className={cx(className, {
          'hst-fieldset-hidden': hidden,
          'hst-fieldset-full-width': fullWidth ?? true,
          'hst-fieldset-error': !!errorMessage,
          'hst-fieldset-disabled': disabled,
          'hst-fieldset-loading': loading,
          'hst-fieldset-focused': focused,
          'hst-fieldset-clickable': !!onClickContainer,
          [`hst-fieldset-size-${size ?? 'default'}`]: true
        })}
      >
        {!!label && <label className='hst-fieldset-label'>{label}</label>}

        <div className='hst-fieldset-container' ref={containerRef} onClick={onClickContainer}>
          {!!startAdornment && <span className='hst-fieldset-start-adornment'>{startAdornment}</span>}
          <div className='hst-fieldset-content'>{children}</div>
          {!!endAdornment && <span className='hst-fieldset-end-adornment'>{endAdornment}</span>}
        </div>

        {!!helperText && <span className='hst-fieldset-message'>{helperText}</span>}
      </fieldset>
    );
  }
);

/**
 * @deprecated
 */
export default styled(Fieldset, { label: 'hst-fieldset' })(
  ({ theme }) => css`
    border: none;
    position: relative;
    padding: 0;
    min-width: auto;
    transition: 0.3s;
    display: inline-block;
    vertical-align: top;

    & > .hst-fieldset-container {
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

      & > .hst-fieldset-start-adornment,
      & > .hst-fieldset-end-adornment {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: none;

        & > svg {
          font-size: ${theme.pxToRem(24)};
        }
      }

      & > .hst-fieldset-content {
        width: 100%;
      }

      & > .hst-fieldset-start-adornment {
        margin-left: ${theme.spacing.xxxs};
      }

      & > .hst-fieldset-end-adornment {
        margin-right: ${theme.spacing.xxxs};
      }

      & .hst-input-text {
        padding: ${theme.spacing.squish.xxs};
        font-size: ${theme.font.size.xs};
        font-family: ${theme.font.family.base};
        font-weight: ${theme.font.weight.regular};
        line-height: ${theme.line.height.sm};
        text-align: left;
      }
    }

    & > .hst-fieldset-label {
      font-size: ${theme.font.size.xs};
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.sm};
      margin-bottom: ${theme.spacing.stack.quarck};
      color: ${theme.neutralColor.low.pure};
      display: flex;
      align-items: center;
    }

    & > .hst-fieldset-message {
      display: block;
      font-size: ${theme.font.size.xxs};
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.default};
      color: ${theme.neutralColor.low.pure};
      margin-top: ${theme.spacing.nano};
    }

    &.hst-fieldset-clickable:not(.hst-fieldset-disabled) > .hst-fieldset-container {
      cursor: pointer;
      user-select: none;
    }

    &.hst-fieldset-disabled {
      opacity: ${theme.opacity.level[6]};
      cursor: not-allowed;
    }

    &.hst-fieldset-hidden {
      display: none;
    }

    &:not(.hst-fieldset-disabled) > .hst-fieldset-container:hover {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
    }

    &.hst-fieldset-loading {
      cursor: progress;
    }

    &.hst-fieldset-focused {
      & > .hst-fieldset-container {
        box-shadow: 0 0 0 2px ${theme.feedbackColor.informative.pure};
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }
    }

    &.hst-fieldset-error > .hst-fieldset-container {
      background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
      border-color: ${theme.feedbackColor.negative.pure};
    }

    &.hst-fieldset-full-width {
      width: 100%;
    }

    &.hst-fieldset-size-sm {
      margin: 0;

      & .hst-fieldset-container {
        height: 35px;

        & > .hst-fieldset-start-adornment {
          margin-left: ${theme.spacing.nano};
        }

        & > .hst-fieldset-end-adornment {
          margin-right: ${theme.spacing.nano};
        }
      }

      & .hst-input-text,
      & > .hst-fieldset-label {
        font-size: ${theme.font.size.xxs};
      }
    }
  `
);
