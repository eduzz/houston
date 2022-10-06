import * as React from 'react';

import Done from '@eduzz/houston-icons/Done';
import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import Typography from '../../Typography';
import nestedComponent from '../../utils/nestedComponent';
import withForm, { WithFormProps } from '../Form/withForm';
import Group from './Group';

type OwnProperties = StyledProp &
  WithFormProps<never> & {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    /**
     * Value when checked. Ex. true, 1, 'value'
     * Only works if you use with Checkbox.Group
     */
    value?: any;
    onChange?: (value: any, e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
  };

export type CheckboxRadioProps = OwnProperties &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof OwnProperties | 'type'>;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxRadioProps>(
  (
    {
      value,
      label,
      error,
      helperText,
      disabled,
      checked: checkedProp,
      onChange,
      className,
      errorMessage,
      defaultChecked,
      ...props
    }: CheckboxRadioProps,
    ref
  ) => {
    const [checkedState, setCheckedState] = React.useState(defaultChecked);
    const isCheckedControlled = checkedProp !== undefined;
    const isChecked = React.useMemo(() => {
      if (isCheckedControlled) return checkedProp;
      if (typeof value === 'undefined') return checkedState;
      return !!value;
    }, [checkedProp, checkedState, value, isCheckedControlled]);

    function onInternalChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (isCheckedControlled) {
        const isValueControlled = value !== undefined;
        if (isValueControlled) {
          onChange && onChange(typeof value === 'boolean' ? !value : value, e);
          return;
        }
        onChange && onChange(!checkedProp, e);
        return;
      }
      setCheckedState(state => !state);
      onChange && onChange(!isChecked, e);
    }

    const feedbackMessage = errorMessage ?? helperText;
    const hasError = !!errorMessage || !!error;

    return (
      <label
        className={cx(className, {
          'hst-checkbox-empty': !label,
          'hst-checkbox-checked': isChecked,
          'hst-checkbox-error': hasError,
          'hst-checkbox-disabled': disabled
        })}
        htmlFor={props.id}
      >
        <input
          ref={ref}
          type='checkbox'
          className='hst-checkbox-input'
          value={value}
          checked={isChecked}
          onChange={onInternalChange}
          {...props}
        />

        <div className='hst-checkbox-icon-container'>
          <Done size='sm' className='hst-checkbox-icon' />
        </div>

        {!!label && (
          <div className='hst-checkbox-label'>
            {typeof label === 'string' ? <Typography size='xs'>{label}</Typography> : label}
            {!!feedbackMessage && <span className='hst-checkbox-helper-text'>{feedbackMessage}</span>}
          </div>
        )}
      </label>
    );
  }
);

const CheckboxWrapper = styled(withForm(React.memo(Checkbox)), { label: 'hst-checkbox' })(
  ({ theme }) => css`
    display: flex;
    cursor: pointer;

    &.hst-checkbox-empty {
      display: inline-block;
      margin: 0;
    }

    & > .hst-checkbox-input {
      display: none;

      &:focus + .hst-checkbox-icon-container {
        box-shadow: 0 0 0 2px ${theme.feedbackColor.informative.pure};
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }
    }

    & > .hst-checkbox-icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      line-height: 0;
      border: 1px solid ${theme.neutralColor.low.light};
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
      transition: 0.3s, color 0s;
      position: relative;

      & + .hst-checkbox-label {
        margin-left: ${theme.spacing.nano};
      }

      & > .hst-checkbox-icon {
        transition: 0.5s;
        transform: scale(0);
        opacity: 0;
      }
    }

    & > .hst-checkbox-label {
      margin-top: -2px;

      & > .hst-checkbox-helper-text {
        display: block;
        font-size: ${theme.font.size.xxs};
        font-family: ${theme.font.family.base};
        font-weight: ${theme.font.weight.regular};
        line-height: ${theme.line.height.default};
        color: ${theme.neutralColor.low.pure};
        margin-top: ${theme.spacing.quarck};
      }
    }

    &:hover > .hst-checkbox-icon-container {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
    }

    & > .hst-checkbox-icon-container {
      border-radius: ${theme.border.radius.xs};
    }

    &.hst-checkbox-checked > .hst-checkbox-icon-container {
      color: white;
      background-color: ${theme.brandColor.primary.pure};
      border-color: ${theme.brandColor.primary.pure};

      & > .hst-checkbox-icon {
        opacity: 1;
        transform: scale(1);
      }
    }

    &.hst-checkbox-error:not(.hst-checkbox-checked) > .hst-checkbox-icon-container {
      background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
      border-color: ${theme.feedbackColor.negative.pure};
    }

    &.hst-checkbox-error.hst-checkbox-checked > .hst-checkbox-icon-container {
      background-color: ${theme.feedbackColor.negative.pure};
      border-color: ${theme.feedbackColor.negative.pure};
    }

    &.hst-checkbox-disabled {
      cursor: not-allowed;
      opacity: ${theme.opacity.level[6]};
    }
  `
);

/**
 * @deprecated
 */
export default nestedComponent(CheckboxWrapper, {
  Group
});
