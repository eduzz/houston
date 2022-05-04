/* eslint-disable no-restricted-imports */

import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import IFormMask from '@eduzz/houston-core/maskAdapter';
import styled, { cx } from '@eduzz/houston-styles';

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

    const isDisabled = isSubmitting || disabled || loading;
    const hasError = !!errorMessageProp || !!formError;

    helperText = errorMessageProp || formError || helperText;
    endAdornment = loading ? <Spinner color='inherit' size={20} /> : endAdornment;

    return (
      <fieldset
        className={cx(className, `--size-${size ?? 'normal'}`, `--margin-${margin ?? 'normal'}`, {
          '--fullWidth': fullWidth,
          '--error': hasError,
          '--disabled': isDisabled
        })}
      >
        <div className='__container'>
          {!!startAdornment && !loading && <span className='__startAdornment'>{startAdornment}</span>}

          <div className='__wrapperAutoSizer'>
            {!!multiline && <div className='__autoSizer'>{value + ' '}</div>}
            {React.createElement(multiline ? 'textarea' : 'input', {
              ref,
              ...props,
              disabled: isDisabled,
              className: cx('__input', {
                '--fixedLabel': !!startAdornment,
                '--error': hasError,
                '--textarea': multiline
              }),
              name,
              value: maskedValue ?? '',
              onChange: handleChange,
              onBlur: handleBlur,
              onKeyPress: onPressEnter ? handlePressEnter : onKeyPress
            })}
            <label className='__label'>{label}</label>

            <span className='__borders'>
              <span className='__borderStart' />
              <span className='__borderLabel'>
                <span className='__borderLabelText'>{label}</span>
              </span>
              <span className='__borderEnd' />
            </span>
          </div>

          {!!endAdornment && <span className='__endAdornment'>{endAdornment}</span>}
        </div>

        <span className='__message'>{helperText}</span>
      </fieldset>
    );
  }
);

export default styled(TextField, { label: 'houston-textfield' })`
  border: none;
  position: relative;
  padding: 0;
  margin-top: ${props => props.theme.spacing.quarck};
  margin-bottom: ${props => props.theme.spacing.nano};
  min-width: auto;

  & .__wrapperAutoSizer {
    display: grid;
    min-height: ${prosp => (prosp.multiline ? (prosp.rows ?? 4) * 22 : 45)}px;
    grid-template-columns: 100%;
    width: 100%;

    & .__autoSizer {
      padding: 12px;
      pointer-events: none;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-all;
      visibility: hidden;
      grid-area: 1 / 1 / 2 / 2;
      font-family: ${props => props.theme.font.family};
      font-size: ${props => props.theme.font.size.xs};
      line-height: ${props => props.theme.line.height.md};
    }

    & .__input {
      grid-area: 1 / 1 / 2 / 2;
    }
  }

  & .__container {
    display: flex;
    align-items: ${props => (props.multiline ? 'flex-start' : 'center')};
    justify-content: center;
    position: relative;

    & .__startAdornment,
    & .__endAdornment {
      display: flex;
      justify-content: center;
      align-items: ${props => (props.multiline ? 'flex-start' : 'center')};
      margin-top: ${props => (props.multiline ? props.theme.spacing.xxxs : 'none')};

      & > svg {
        font-size: 24px;
      }
    }

    & .__startAdornment {
      margin-left: 12px;
    }

    & .__endAdornment {
      margin-right: 12px;
    }
  }

  & .__borders {
    display: flex;
    height: 100%;
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    transition: 0.3s;

    & .__borderStart {
      flex: 1;
      max-width: 10px;
      color: inherit;
      border: 1px solid ${props => props.theme.neutralColor.high.medium};
      border-right: none;
      border-top-left-radius: ${props => props.theme.border.radius.xs};
      border-bottom-left-radius: ${props => props.theme.border.radius.xs};
      transition: 0.3s;
    }

    & .__borderLabel {
      flex: 1;
      flex-shrink: 0;
      flex-grow: 0;
      white-space: nowrap;
      padding: 0 4px;
      font-size: 11px;
      border: 1px solid ${props => props.theme.neutralColor.high.medium};
      border-left: none;
      border-right: none;
      transition: 0.3s;

      & > .__borderLabelText {
        visibility: hidden;
      }
    }

    & .__borderEnd {
      flex: 1;
      border: 1px solid ${props => props.theme.neutralColor.high.medium};
      border-left: none;
      border-top-right-radius: ${props => props.theme.border.radius.xs};
      border-bottom-right-radius: ${props => props.theme.border.radius.xs};
      transition: 0.3s;
    }
  }

  & .__input {
    height: 100%;
    padding: 12px;
    width: 100%;
    background-color: transparent;
    outline: none;
    font-family: ${props => props.theme.font.family};
    font-size: ${props => props.theme.font.size.xs};
    border: none;
    border-radius: ${props => props.theme.border.radius.xs};
    line-height: ${props => props.theme.line.height.md};

    &.--textarea {
      resize: none;
      overflow: hidden;
    }

    &:placeholder-shown,
    &:focus,
    &:not(.--textarea):not([value='']),
    &.--textarea:not(:empty),
    &.--fixedLabel {
      & + .__label {
        transform: translate(16px, -6px) scale(0.7);

        & + .__borders > .__borderLabel {
          border-top: none;
        }
      }
    }

    &:focus {
      &:not(.--error) + .__label {
        color: ${props => props.theme.brandColor.primary.pure};

        & + .__borders .__borderStart,
        & + .__borders .__borderLabel,
        & + .__borders .__borderEnd {
          border-width: 2px;
          border-color: ${props => props.theme.brandColor.primary.pure};
        }
      }

      &.--error + .__label {
        & + .__borders .__borderStart,
        & + .__borders .__borderLabel,
        & + .__borders .__borderEnd {
          border-width: 2px;
        }
      }
    }
  }

  & .__label {
    pointer-events: none;
    position: absolute;
    font-size: ${props => props.theme.font.size.xs};
    font-family: ${props => props.theme.font.family};
    top: 0;
    left: 0;
    transform-origin: top left;
    transform: translate(16px, 10px) scale(1);
    display: flex;
    align-items: center;
    transition: 0.3s;
    color: ${props => props.theme.neutralColor.low.light};
  }

  & .__message {
    display: block;
    font-size: ${props => props.theme.font.size.xxxs};
    font-family: ${props => props.theme.font.family};
    margin-top: ${props => props.theme.spacing.quarck};
  }

  &.--disabled {
    background-color: ${props => props.theme.neutralColor.high.pure};

    & .__input,
    & .__label {
      color: ${props => props.theme.neutralColor.high.medium};
      text-fill-color: ${props => props.theme.neutralColor.high.medium};
    }
  }

  &.--error {
    & .__message,
    & .__label {
      color: ${props => props.theme.feedbackColor.negative.pure};
    }

    & .__borderStart,
    & .__borderLabel,
    & .__borderEnd {
      border-color: ${props => props.theme.feedbackColor.negative.pure};
    }
  }
`;
