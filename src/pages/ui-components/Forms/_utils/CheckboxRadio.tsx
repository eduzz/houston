import * as React from 'react';

import Bullet from '@eduzz/houston-icons/Bullet';
import Done from '@eduzz/houston-icons/Done';
import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import Typography from '../../Typography';
import withForm, { WithFormProps } from '../Form/withForm';

interface IOwnProperties extends IStyledProp, WithFormProps {
  children?: React.ReactNode;
  errorMessage?: string;
  helperText?: React.ReactNode;
  /**
   * @deprecated use children instead
   */
  label?: string;
  /**
   * @deprecated use helperText instead
   */
  description?: string;
  /**
   * Value of checked. Ex. true, 1, 'value'
   */
  value?: any;
  /**
   * If checked or the state value
   */
  checked?: boolean | any[];
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
  value,
  label,
  children,
  value: checkedValue,
  errorMessage,
  helperText,
  description,
  disabled,
  multiple,
  checked: checkedProp,
  type,
  onChange,
  className,
  ...props
}) => {
  value = !multiple ? value : Array.isArray(value) ? value : [];

  checkedValue = checkedValue ?? true;
  multiple = type === 'checkbox' ? multiple : false;
  children = children ?? label;
  helperText = helperText ?? description;

  const isChecked: boolean = React.useMemo(() => {
    if (typeof checkedProp === 'boolean') return checkedProp ?? false;
    return value ? (Array.isArray(value) ? value.includes(checkedValue) : value === checkedValue) : false;
  }, [checkedProp, checkedValue, value]);

  const handleChange = React.useCallback(() => {
    if (disabled) return;

    const justChecked = !isChecked;
    const returnValue = justChecked ? checkedValue ?? true : checkedValue ? null : false;

    if (!multiple) {
      onChange && onChange(returnValue);
      return;
    }

    const setValue = new Set(value ?? []);

    if (justChecked) {
      setValue.add(checkedValue);
    } else {
      setValue.delete(checkedValue);
    }

    onChange && onChange(Array.from(setValue));
  }, [checkedValue, disabled, isChecked, multiple, onChange, value]);

  const message = errorMessage ?? helperText;

  return (
    <div
      className={cx(className, {
        '--empty': !children,
        '--checked': isChecked,
        '--error': !!errorMessage,
        '--disabled': disabled,
        [`--type-${type}`]: true
      })}
      onClick={handleChange}
    >
      <input
        type={type}
        className='__input'
        value={checkedValue ?? true}
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />

      <div className='__check'>
        {type === 'checkbox' ? <Done size={18} className='__icon' /> : <Bullet size={16} className='__icon' />}
      </div>

      {!!children && (
        <div className='__label'>
          {typeof children === 'string' ? <Typography size='xs'>{children}</Typography> : children}
          {!!message && <span className='__message'>{message}</span>}
        </div>
      )}
    </div>
  );
};

export default styled(withForm(React.memo(CheckboxRadioField)), { label: 'houston-form-checkbox-radio' })(
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
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
      transition: 0.3s, color 0s;
      position: relative;

      & + .__label {
        margin-left: ${theme.spacing.nano};
      }

      & > .__icon {
        position: absolute;
        transition: 0.5s;
        transform: scale(0);
        opacity: 0;
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

    &.--type-checkbox {
      & > .__check {
        border-radius: ${theme.border.radius.xs};

        & > .__icon {
          top: -2px;
          left: -2px;
        }
      }

      &.--checked > .__check {
        color: white;
        background-color: ${theme.brandColor.primary.pure};
        border-color: ${theme.brandColor.primary.pure};

        & > .__icon {
          opacity: 1;
          transform: scale(1);
        }
      }

      &.--error:not(.--checked) > .__check {
        background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
        border-color: ${theme.feedbackColor.negative.pure};
      }

      &.--error.--checked > .__check {
        background-color: ${theme.feedbackColor.negative.pure};
        border-color: ${theme.feedbackColor.negative.pure};
      }
    }

    &.--type-radio {
      & > .__check {
        border-radius: 50%;
        box-shadow: 0 0 0 1px transparent;

        & > .__icon {
          top: -1px;
          left: -1px;
        }
      }

      &.--checked > .__check {
        color: ${theme.brandColor.primary.pure};
        background-color: white;
        border-color: ${theme.brandColor.primary.pure};
        box-shadow: 0 0 0 1px ${theme.brandColor.primary.pure};

        & > .__icon {
          opacity: 1;
          transform: scale(1);
        }
      }

      &.--error:not(.--checked) > .__check {
        background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
        border-color: ${theme.feedbackColor.negative.pure};
      }

      &.--error.--checked > .__check {
        color: ${theme.feedbackColor.negative.pure};
        background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
        border-color: ${theme.feedbackColor.negative.pure};
        box-shadow: 0 0 0 1px ${theme.feedbackColor.negative.pure};
      }
    }

    &.--disabled {
      cursor: not-allowed;
      opacity: ${theme.opacity.level[6]};
    }
  `
);
