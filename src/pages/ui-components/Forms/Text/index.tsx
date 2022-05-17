/* eslint-disable no-restricted-imports */

import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import IFormMask from '@eduzz/houston-core/maskAdapter';
import styled, { css, cx } from '@eduzz/houston-styles';

import useMask from '../../hooks/useMask';
import { FormFieldsContext } from '../Form';
import Fieldset from '../internals/Fieldset';

const ROWS: Array<IOwnProperties['rows']> = [2, 4, 6, 8, 10, 14, 18, 24];

interface IOwnProperties {
  label?: string;
  loading?: boolean;
  errorMessage?: string;
  mask?: IFormMask;
  size?: 'small' | 'normal';
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
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
      errorMessage,
      fullWidth,
      endAdornment,
      startAdornment,
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
        const cleanValue = maskClean(e.currentTarget.value);

        onChange && onChange(cleanValue, e);
        setFieldValue && setFieldValue(name, cleanValue);
      },
      [onChange, maskClean, setFieldValue, name]
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

    return (
      <Fieldset
        label={label}
        loading={loading}
        focused={focused}
        errorMessage={errorMessage || formError}
        fullWidth={fullWidth}
        endAdornment={endAdornment}
        startAdornment={startAdornment}
        helperText={helperText}
        disabled={isSubmitting || disabled}
        className={cx(className, {
          '--multiline': multiline,
          [`--multiline-rows-${rows ?? 4}`]: multiline,
          '--disable-auto-resize': disableAutoResize,
          [`--size-${size ?? 'normal'}`]: true
        })}
      >
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
      </Fieldset>
    );
  }
);

export default styled(React.memo(TextField), { label: 'houston-form-text' })(
  ({ theme }) => css`
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
        height: 100%;
        width: 100%;
        background-color: transparent;
        outline: none;
        color: ${theme.neutralColor.low.pure};
        border: none;
        transition: 0.3s;

        &::placeholder {
          color: ${theme.neutralColor.low.medium};
        }
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
      & .__label,
      & .__input {
        cursor: not-allowed;
      }
    }

    &.--loading {
      & .__label,
      & .__input {
        cursor: progress;
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
