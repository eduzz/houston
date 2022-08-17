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
     * Value of checked. Ex. true, 1, 'value'
     */
    value?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, value?: any) => void;
    error?: boolean;
  };

export type CheckboxRadioProps = OwnProperties &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof OwnProperties | 'type'>;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxRadioProps>(
  ({ value, label, error, helperText, disabled, checked, onChange, className, ...props }: CheckboxRadioProps, ref) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      onChange && onChange(e, value);
    }

    return (
      <label
        className={cx(className, {
          '--hst-empty': !label,
          '--hst-checked': checked,
          '--hst-error': !!error,
          '--hst-disabled': disabled
        })}
        htmlFor={props.id}
      >
        <input
          ref={ref}
          type='checkbox'
          className='hst-checkbox-input'
          value={value}
          checked={checked}
          onChange={handleChange}
          {...props}
        />

        <div className='hst-checkbox-icon-container'>
          <Done size='sm' className='hst-checkbox-icon' />
        </div>

        {!!label && (
          <div className='hst-checkbox-label'>
            {typeof label === 'string' ? <Typography size='xs'>{label}</Typography> : label}
            {!!helperText && <span className='hst-checkbox-helper-text'>{helperText}</span>}
          </div>
        )}
      </label>
    );
  }
);

const StyledCheckbox = styled(withForm(React.memo(Checkbox)), { label: 'hst-checkbox' })(
  ({ theme }) => css`
    display: flex;
    cursor: pointer;

    &.--hst-empty {
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

    &.--hst-checked > .hst-checkbox-icon-container {
      color: white;
      background-color: ${theme.brandColor.primary.pure};
      border-color: ${theme.brandColor.primary.pure};

      & > .hst-checkbox-icon {
        opacity: 1;
        transform: scale(1);
      }
    }

    &.--hst-error:not(.--hst-checked) > .hst-checkbox-icon-container {
      background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
      border-color: ${theme.feedbackColor.negative.pure};
    }

    &.--hst-error.--hst-checked > .hst-checkbox-icon-container {
      background-color: ${theme.feedbackColor.negative.pure};
      border-color: ${theme.feedbackColor.negative.pure};
    }

    &.--hst-disabled {
      cursor: not-allowed;
      opacity: ${theme.opacity.level[6]};
    }
  `
);

export default nestedComponent(StyledCheckbox, {
  Group
});
