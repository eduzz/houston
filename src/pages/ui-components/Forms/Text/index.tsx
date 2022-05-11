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

export default styled(TextField, { label: 'houston-textfield' })`
  border: none;
  position: relative;
  padding: 0;
  margin-top: ${props => props.theme.spacing.quarck};
  margin-bottom: ${props => props.theme.spacing.xxxs};
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
      font-family: ${props => props.theme.font.family.base};
      font-size: ${props => props.theme.font.size.xs};
      line-height: ${props => props.theme.line.height.md};
    }

    & .__input {
      grid-area: 1 / 1 / 2 / 2;
    }
  }

  & .__container {
    height: 48px;
    display: flex;
    align-items: ${props => (props.multiline ? 'flex-start' : 'center')};
    justify-content: center;
    position: relative;
    border: 1px solid ${props => props.theme.neutralColor.low.pure};
    border-radius: ${props => props.theme.border.radius.sm};
    transition: 0.3s;

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
      margin-left: ${props => props.theme.spacing.xxxs};
    }

    & .__endAdornment {
      margin-right: ${props => props.theme.spacing.xxxs};
    }
  }

  & .__label {
    font-size: ${props => props.theme.font.size.xs};
    font-family: ${props => props.theme.font.family.base};
    font-weight: ${props => props.theme.font.weight.regular};
    line-height: ${props => props.theme.line.height.default};
    margin-bottom: ${props => props.theme.spacing.quarck};
    color: ${props => props.theme.neutralColor.low.pure};
    display: flex;
    align-items: center;
  }

  & .__input {
    height: 100%;
    padding: ${props => props.theme.spacing.xxxs};
    width: 100%;
    background-color: transparent;
    outline: none;
    font-size: ${props => props.theme.font.size.xs};
    font-family: ${props => props.theme.font.family.base};
    font-weight: ${props => props.theme.font.weight.regular};
    line-height: ${props => props.theme.line.height.default};
    color: ${props => props.theme.neutralColor.low.pure};
    border: none;

    &.--textarea {
      resize: none;
      overflow: hidden;
    }
  }

  & .__message {
    display: block;
    font-size: ${props => props.theme.font.size.xxs};
    font-family: ${props => props.theme.font.family.base};
    font-weight: ${props => props.theme.font.weight.regular};
    line-height: ${props => props.theme.line.height.default};
    color: ${props => props.theme.neutralColor.low.pure};
    margin-top: ${props => props.theme.spacing.nano};
  }

  &.--disabled {
    opacity: ${props => props.theme.opacity.level[6]};
  }

  &.--error {
    & .__message {
      color: ${props => props.theme.feedbackColor.negative.pure};
    }

    & .__container {
      background-color: ${props => props.theme.feedbackColor.negative.pure};
      border-color: ${props => props.theme.feedbackColor.negative.pure};
    }
  }
`;
