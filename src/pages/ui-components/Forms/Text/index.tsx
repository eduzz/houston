/* eslint-disable no-restricted-imports */

import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import IFormMask from '@eduzz/houston-core/maskAdapter';
import styled, { css, cx } from '@eduzz/houston-styles';

import useMask from '../../hooks/useMask';
import Spinner from '../../Spinner';
import { FormFieldsContext } from '../Form';

const ROWS: Array<IOwnProperties['rows']> = [2, 4, 6, 8, 10, 14, 18, 24];

interface IOwnProperties {
  label?: string;
  loading?: boolean;
  errorMessage?: string;
  mask?: IFormMask;
  size?: 'small' | 'normal';
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  maxLength?: number;
  fullWidth?: boolean;
  helperText?: string;
  multiline?: boolean;
  rows?: 2 | 4 | 6 | 8 | 10 | 14 | 18 | 24;
  disableAutoResize?: boolean;
  onChange?: (value: any, event: React.ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (value: any, event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
  onPressEnter?: (value: any) => any;
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
      onFocus,
      onChange,
      onBlur,
      errorMessage: errorMessageProp,
      fullWidth,
      endAdornment,
      startAdornment,
      maxLength,
      multiline,
      size,
      rows,
      disableAutoResize,
      className,
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

    const [focused, setFocus] = React.useState(false);

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

    const handleFocus = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onFocus && onFocus(e as any);
        setFocus(true);
      },
      [onFocus]
    );

    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onBlur && onBlur(maskClean(e.currentTarget.value), e);
        setFocus(false);
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
        className={cx(className, {
          '--fullWidth': fullWidth,
          '--error': hasError,
          '--disabled': isDisabled,
          '--loading': loading,
          '--multiline': multiline,
          [`--multiline-rows-${rows ?? 4}`]: multiline,
          '--disable-auto-resize': disableAutoResize,
          '--focused': focused,
          [`--size-${size ?? 'normal'}`]: true
        })}
      >
        {!!label && <label className='__label'>{label}</label>}
        <div className='__container'>
          {!!startAdornment && !loading && <span className='__startAdornment'>{startAdornment}</span>}

          <div className='__wrapperAutoSizer'>
            {!!multiline && !disableAutoResize && <div className='__autoSizer'>{value + ' '}</div>}
            {React.createElement(multiline ? 'textarea' : 'input', {
              ref,
              ...props,
              name,
              disabled: isDisabled,
              className: '__input',
              value: maskedValue ?? '',
              readOnly: readOnly ?? loading,
              onChange: handleChange,
              onFocus: handleFocus,
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
  ({ theme }) => css`
    border: none;
    position: relative;
    padding: 0;
    margin-top: ${theme.spacing.quarck};
    margin-bottom: ${theme.spacing.xxxs};
    min-width: auto;
    transition: 0.3s;
    outline: 2px solid transparent;

    & .__container {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border: 1px solid ${theme.neutralColor.low.light};
      border-radius: ${theme.border.radius.sm};
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
      transition: 0.3s;
      height: 48px;

      &:hover {
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }

      & .__startAdornment,
      & .__endAdornment {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: none;

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

      & .__wrapperAutoSizer {
        display: grid;
        grid-template-columns: 100%;
        width: 100%;
        min-height: 100%;

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
          padding: ${theme.spacing.squish.xxs};
          font-size: ${theme.font.size.xs};
          font-family: ${theme.font.family.base};
          font-weight: ${theme.font.weight.regular};
          line-height: ${theme.line.height.sm};
        }
      }
    }

    & .__label {
      font-size: ${theme.font.size.xs};
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.default};
      margin-bottom: ${theme.spacing.stack.quarck};
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

    &.--multiline {
      & .__container {
        align-items: flex-start;
        height: auto;

        & .__startAdornment,
        & .__endAdornment {
          align-items: flex-start;
          margin-top: ${theme.spacing.xxxs};
        }

        & .__input {
          resize: none;
          overflow: hidden;
        }

        & .__autoSizer,
        & .__input {
          padding: ${theme.spacing.xxxs};
        }
      }

      &.--disable-auto-resize {
        & .__input {
          overflow: auto;
        }
      }

      ${ROWS.map(
        n => css`
          &.--multiline-rows-${n} .__wrapperAutoSizer {
            min-height: calc(${n * 19}px + ${theme.spacing.xs});
          }
        `
      )}
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

    &.--focused {
      outline-color: ${theme.feedbackColor.informative.pure};

      & .__container {
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }
    }

    &.--error {
      & .__container {
        background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
        border-color: ${theme.feedbackColor.negative.pure};
      }
    }

    &.--size-small {
      margin: 0;

      & .__container {
        height: 35px;
      }
    }
  `
);
