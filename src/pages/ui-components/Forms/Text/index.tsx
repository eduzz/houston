/* eslint-disable no-restricted-imports */

import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import IFormMask from '@eduzz/houston-core/maskAdapter';

import useMask from '../../hooks/useMask';
import Spinner from '../../Spinner';
import styled, { cx } from '../../styles/styled';
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
      onPressEnter,
      className,
      size,
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

          <input
            ref={ref}
            {...props}
            disabled={isDisabled}
            className={cx('__input', { '--fixedLabel': !!startAdornment, '--error': hasError })}
            name={name}
            value={maskedValue ?? ''}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyPress={onPressEnter ? handlePressEnter : onKeyPress}
          />
          <label className='__label'>{label}</label>

          <span className='__borders'>
            <span className='__borderStart' />
            <span className='__borderLabel'>
              <span className='__borderLabelText'>{label}</span>
            </span>
            <span className='__borderEnd' />
          </span>

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
  margin-top: ${props => props.theme.spacing(1)};
  margin-bottom: ${props => props.theme.spacing(3)};

  & .__container {
    display: flex;
    align-items: center;
    justify-content: center;

    & .__startAdornment,
    & .__endAdornment {
      display: flex;
      justify-content: center;
      align-items: center;

      & > svg {
        font-size: 24px;
      }
    }

    & .__startAdornment {
      margin-left: ${props => props.theme.spacing(3)};
    }

    & .__endAdornment {
      margin-right: ${props => props.theme.spacing(3)};
    }
  }

  & .__borders {
    display: flex;
    height: 100%;
    width: 100%;
    position: absolute;
    height: 45px;
    top: 0;
    left: 0;
    pointer-events: none;
    transition: 0.3s;

    & .__borderStart {
      flex: 1;
      max-width: 10px;
      color: inherit;
      border: 1px solid ${props => props.theme.colors.grey[300]};
      border-right: none;
      border-top-left-radius: ${props => props.theme.radius()}px;
      border-bottom-left-radius: ${props => props.theme.radius()}px;
      transition: 0.3s;
    }

    & .__borderLabel {
      flex: 1;
      flex-shrink: 0;
      flex-grow: 0;
      white-space: nowrap;
      padding: 0 4px;
      font-size: 11px;
      border: 1px solid ${props => props.theme.colors.grey[300]};
      border-left: none;
      border-right: none;
      transition: 0.3s;

      & > .__borderLabelText {
        visibility: hidden;
      }
    }

    & .__borderEnd {
      flex: 1;
      border: 1px solid ${props => props.theme.colors.grey[300]};
      border-left: none;
      border-top-right-radius: ${props => props.theme.radius()}px;
      border-bottom-right-radius: ${props => props.theme.radius()}px;
      transition: 0.3s;
    }
  }

  & .__input {
    height: 45px;
    padding: 4px 12px;
    width: 100%;
    background-color: transparent;
    outline: none;
    font-size: ${props => props.theme.textSize('normal')}px;
    border: none;
    border-radius: ${props => props.theme.radius()}px;
    font-family: ${props => props.theme.fontFamily};

    &:placeholder-shown,
    &:focus,
    &:not([value='']),
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
        color: ${props => props.theme.colors.primary.main};

        & + .__borders .__borderStart,
        & + .__borders .__borderLabel,
        & + .__borders .__borderEnd {
          border-width: 2px;
          border-color: ${props => props.theme.colors.primary.main};
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
    font-size: ${props => props.theme.textSize('normal')}px;
    font-family: ${props => props.theme.fontFamily};
    top: 0;
    left: 0;
    transform-origin: top left;
    transform: translate(16px, 12px) scale(1);
    display: flex;
    align-items: center;
    transition: 0.3s;
  }

  & .__message {
    display: block;
    font-size: ${props => props.theme.textSize('x-small')}px;
    font-family: ${props => props.theme.fontFamily};
    margin-top: ${props => props.theme.spacing(0.5)};
  }

  &.--disabled {
    background-color: ${props => props.theme.colors.grey[100]};

    & .__input,
    & .__label {
      color: ${props => props.theme.colors.grey[300]};
      text-fill-color: ${props => props.theme.colors.grey[300]};
    }
  }

  &.--error {
    & .__message,
    & .__label {
      color: ${props => props.theme.colors.error.main};
    }

    & .__borderStart,
    & .__borderLabel,
    & .__borderEnd {
      border-color: ${props => props.theme.colors.error.main};
    }
  }
`;
