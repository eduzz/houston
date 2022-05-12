/* eslint-disable no-restricted-imports */

import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import IFormMask from '@eduzz/houston-core/maskAdapter';
import styled, { css, cx } from '@eduzz/houston-styles';

import useMask from '../../hooks/useMask';
import Spinner from '../../Spinner';
import { FormFieldsContext } from '../Form';

interface IOwnProperties {
  label?: string;
  loading?: boolean;
  errorMessage?: string;
  mask?: IFormMask;
  margin?: 'none' | 'dense' | 'normal';
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  maxLength?: number;
  size?: 'normal' | 'small';
  fullWidth?: boolean;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  onChange?: (value: any, event: React.ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (value: any, event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
  onPressEnter?: (value: any) => any;
  InputProps?: any; // remove
}

export interface ITextFieldProps
  extends IOwnProperties,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof IOwnProperties>,
    React.RefAttributes<HTMLInputElement> {}

const TextField = React.forwardRef<HTMLInputElement, ITextFieldProps>(
  (
    {
      label,
      mask,
      value,
      name,
      loading,
      onChange,
      onBlur,
      errorMessage: errorMessageProp,
      fullWidth,
      margin,
      endAdornment,
      startAdornment,
      maxLength,
      multiline,
      className,
      size,
      readOnly,
      onPressEnter,
      onKeyPress,
      helperText,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
    const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
    const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
    const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

    if (!name && setFieldValue) {
      throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }

    value = formValue ?? value;

    const { maskClean, maskedValue } = useMask(mask, value);

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        let cleanValue = maskClean(e.currentTarget.value);

        if (maxLength) {
          cleanValue = (cleanValue as string).substring(0, maxLength);
        }

        onChange && onChange(cleanValue, e);
        setFieldValue && setFieldValue(name, cleanValue);
      },
      [onChange, maskClean, setFieldValue, name, maxLength]
    );

    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onBlur && onBlur(maskClean(e.currentTarget.value), e);
      },
      [onBlur, maskClean]
    );

    const handlePressEnter = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;

        if (e.key === 'Enter') {
          e.preventDefault();
          onPressEnter(maskClean(target.value));
        }
      },
      [onPressEnter, maskClean]
    );

    const isDisabled = isSubmitting || disabled;
    const hasError = !!errorMessageProp || !!formError;

    helperText = errorMessageProp || formError || helperText;
    endAdornment = loading ? <Spinner color='inherit' size={20} /> : endAdornment;

    return (
      <fieldset
        className={cx(className, `--size-${size ?? 'normal'}`, `--margin-${margin ?? 'normal'}`, {
          '--fullWidth': fullWidth,
          '--error': hasError,
          '--disabled': isDisabled,
          '--loading': loading
        })}
      >
        <label className='__label'>{label}</label>
        <div className='__container'>
          {!!startAdornment && !loading && <span className='__startAdornment'>{startAdornment}</span>}

          <div className='__wrapperAutoSizer'>
            {!!multiline && <div className='__autoSizer'>{value + ' '}</div>}
            {React.createElement(multiline ? 'textarea' : 'input', {
              ref,
              ...props,
              disabled: isDisabled,
              className: cx('__input', {
                // '--fixedLabel': !!startAdornment,
                '--error': hasError,
                '--textarea': multiline,
                '--start-adornment': !!startAdornment
              }),
              name,
              value: maskedValue ?? '',
              readOnly: readOnly ?? loading,
              onChange: handleChange,
              onBlur: handleBlur,
              onKeyPress: onPressEnter ? handlePressEnter : onKeyPress
            })}
          </div>

          {!!endAdornment && <span className='__endAdornment'>{endAdornment}</span>}
        </div>

        {!!helperText && <span className='__message'>{helperText}</span>}
      </fieldset>
    );
  }
);

export default styled(TextField, { label: 'houston-textfield' })(
  ({ theme, multiline, rows }) => css`
    border: none;
    position: relative;
    padding: 0;
    margin-top: ${theme.spacing.quarck};
    margin-bottom: ${theme.spacing.xxxs};
    min-width: auto;

    & .__wrapperAutoSizer {
      display: grid;
      min-height: ${multiline ? (rows ?? 4) * 22 : 45}px;
      grid-template-columns: 100%;
      width: 100%;

      & .__autoSizer {
        pointer-events: none;
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-all;
        visibility: hidden;
        grid-area: 1 / 1 / 2 / 2;
      }

      & .__input {
        grid-area: 1 / 1 / 2 / 2;
      }

      & .__autoSizer,
      & .__input {
        padding: ${theme.spacing.xxxs};
        font-size: ${theme.font.size.xs};
        font-family: ${theme.font.family.base};
        font-weight: ${theme.font.weight.regular};
        line-height: ${theme.line.height.default};
      }
    }

    & .__container {
      display: flex;
      align-items: ${multiline ? 'flex-start' : 'center'};
      justify-content: center;
      position: relative;
      border: 1px solid ${theme.neutralColor.low.pure};
      border-radius: ${theme.border.radius.sm};
      transition: 0.3s;

      & .__startAdornment,
      & .__endAdornment {
        display: flex;
        justify-content: center;
        align-items: ${multiline ? 'flex-start' : 'center'};
        margin-top: ${multiline ? theme.spacing.xxxs : 'none'};

        & > svg {
          font-size: 24px;
        }
      }

      & .__startAdornment {
        margin-left: ${theme.spacing.xxxs};
      }

      & .__endAdornment {
        margin-right: ${theme.spacing.xxxs};
      }
    }

    & .__label {
      font-size: ${theme.font.size.xs};
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.default};
      margin-bottom: ${theme.spacing.quarck};
      color: ${theme.neutralColor.low.pure};
      display: flex;
      align-items: center;
    }

    & .__input {
      height: 100%;
      width: 100%;
      background-color: transparent;
      outline: none;
      color: ${theme.neutralColor.low.pure};
      border: none;

      &.--textarea {
        resize: none;
        overflow: hidden;
      }

      &::placeholder {
        color: ${theme.neutralColor.low.medium};
      }
    }

    & .__message {
      display: block;
      font-size: ${theme.font.size.xxs};
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.default};
      color: ${theme.neutralColor.low.pure};
      margin-top: ${theme.spacing.nano};
    }

    &.--disabled {
      opacity: ${theme.opacity.level[6]};
      cursor: not-allowed;

      & .__label,
      & .__input {
        cursor: not-allowed;
      }
    }

    &.--loading {
      cursor: progress;

      & .__label,
      & .__input {
        cursor: progress;
      }
    }

    &.--error {
      & .__container {
        background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
        border-color: ${theme.feedbackColor.negative.pure};
      }
    }
  `
);
