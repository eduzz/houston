import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import Bullet from '@eduzz/houston-icons/Bullet';
import Done from '@eduzz/houston-icons/Done';
import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import Typography from '../../Typography';
import { FormFieldsContext } from '../Form';

interface IOwnProperties extends IStyledProp {
  children?: React.ReactNode;
  errorMessage?: string;
  helperText?: string;
  /**
   * Value of checked. Ex. true, 1, 'value'
   */
  value?: any;
  /**
   * If checked or the state value
   */
  checked: boolean | any[];
  /**
   * Value will be an array and checkedValue will be add/remove from this array
   */
  multiple?: boolean;
  onChange?: (checked: any) => any;
}

export interface ICheckboxRadioProps
  extends IOwnProperties,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof IOwnProperties | 'type'> {}

interface IInternalCheckboxRadioProps extends ICheckboxRadioProps {
  type: 'checkbox' | 'radio';
}

const CheckboxRadioField: React.FC<IInternalCheckboxRadioProps> = ({
  name,
  children,
  value: checkedValue,
  errorMessage: errorMessageProp,
  helperText,
  disabled,
  multiple,
  checked,
  type,
  onChange,
  className
}) => {
  const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
  const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
  const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
  const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

  if (!name && setFieldValue) {
    throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
  }

  checkedValue = checkedValue ?? true;
  multiple = type === 'checkbox' ? multiple : false;

  let value = formValue ?? checked;
  value = !multiple ? value : Array.isArray(value) ? value : [];

  const isChecked: boolean = React.useMemo(() => {
    if (typeof checked === 'boolean') return checked;
    return value && (Array.isArray(value) ? value.includes(value) : value === checkedValue);
  }, [checked, checkedValue, value]);

  const handleChange = React.useCallback(() => {
    if (!multiple) {
      setFieldValue && setFieldValue(name, !checked);
      onChange && onChange(!checked);
      return;
    }

    const setValue = new Set(formValue ?? []);

    if (checked) {
      setValue.add(value);
    } else {
      setValue.delete(value);
    }

    setFieldValue && setFieldValue(name, Array.from(setValue));
  }, [checked, formValue, multiple, name, onChange, setFieldValue, value]);

  const errorMessage = errorMessageProp ?? formError;
  const message = errorMessage ?? helperText;

  return (
    <div
      className={cx(className, {
        '--empty': !children,
        '--checked': isChecked,
        '--error': !!errorMessage,
        '--disabled': disabled
      })}
      onClick={handleChange}
    >
      <input
        type={type}
        className='__input'
        disabled
        value={checkedValue ?? true}
        checked={isChecked}
        onChange={handleChange}
      />

      <div className='__check'>
        {isChecked &&
          (type === 'checkbox' ? <Done size={18} className='__icon' /> : <Bullet size={18} className='__icon' />)}
      </div>

      {!!children && (
        <div className='__label'>
          {typeof children === 'string' ? (
            <Typography size='xs'>
              {children} {isChecked ? 'S' : 'N'}
            </Typography>
          ) : (
            children
          )}
          {!!message && <span className='__message'>{message}</span>}
        </div>
      )}
    </div>
  );
};

export default styled(React.memo(CheckboxRadioField), { label: 'houston-form-checkbox-radio' })(
  ({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacing.quarck};
    margin-bottom: ${theme.spacing.xxxs};
    cursor: pointer;

    &.--empty {
      display: inline-block;
      margin: 0;
    }

    & > .__input {
      display: none;

      &[type='radio'] + .__check {
        border-radius: 50%;
      }

      &:focus + .__check {
        box-shadow: 0 0 0 2px ${theme.feedbackColor.informative.pure};
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }
    }

    & > .__check {
      width: 16px;
      height: 16px;
      line-height: 0;
      border: 1px solid ${theme.neutralColor.low.light};
      border-radius: ${theme.border.radius.xs};
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
      transition: 0.3s;
      position: relative;

      & + .__label {
        margin-left: ${theme.spacing.nano};
      }

      & > .__icon {
        position: absolute;
        top: -2px;
        left: -2px;
      }
    }

    & > .__label {
      margin-top: -2px;

      & > .__message {
        display: block;
        font-size: ${theme.font.size.xxs};
        font-family: ${theme.font.family.base};
        font-weight: ${theme.font.weight.regular};
        line-height: ${theme.line.height.default};
        color: ${theme.neutralColor.low.pure};
        margin-top: ${theme.spacing.quarck};
      }
    }

    &:hover > .__check {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
    }

    &.--checked > .__check {
      color: white;
      background-color: ${theme.brandColor.primary.pure};
      border-color: ${theme.brandColor.primary.pure};
    }

    &.--error > .__check {
      background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
      border-color: ${theme.feedbackColor.negative.pure};
    }
  `
);
