/* eslint-disable no-restricted-imports */

import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import Spinner from '../../Spinner';

export interface IFieldsetProps extends IStyledProp {
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  fullWidth?: boolean;
  errorMessage?: string;
  helperText?: string;
  focused?: boolean;
  children: React.ReactNode;
}

const Fieldset: React.FC<IFieldsetProps> = ({
  label,
  loading,
  focused,
  errorMessage,
  fullWidth,
  endAdornment,
  startAdornment,
  className,
  helperText,
  disabled,
  children
}) => {
  helperText = errorMessage || helperText;
  endAdornment = loading ? <Spinner color='inherit' size={20} /> : endAdornment;

  return (
    <fieldset
      className={cx(className, {
        '--fullWidth': fullWidth,
        '--error': !!errorMessage,
        '--disabled': disabled,
        '--loading': loading,
        '--focused': focused
      })}
    >
      {!!label && <label className='__label'>{label}</label>}
      <div className='__container'>
        {!!startAdornment && !loading && <span className='__startAdornment'>{startAdornment}</span>}
        {children}
        {!!endAdornment && <span className='__endAdornment'>{endAdornment}</span>}
      </div>

      {!!helperText && <span className='__message'>{helperText}</span>}
    </fieldset>
  );
};

export default styled(Fieldset, { label: 'houston-form-fieldset' })(
  ({ theme }) => css`
    border: none;
    position: relative;
    padding: 0;
    margin-top: ${theme.spacing.quarck};
    margin-bottom: ${theme.spacing.xxxs};
    min-width: auto;
    transition: 0.3s;

    & > .__container {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border: 1px solid ${theme.neutralColor.low.light};
      border-radius: ${theme.border.radius.xs};
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
      transition: 0.3s;
      height: 48px;
      box-shadow: 0 0 0 2px tranparent;

      &:hover {
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }

      & > .__startAdornment,
      & > .__endAdornment {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: none;

        & > svg {
          font-size: 24px;
        }
      }

      & > .__startAdornment {
        margin-left: ${theme.spacing.xxxs};
      }

      & > .__endAdornment {
        margin-right: ${theme.spacing.xxxs};
      }
    }

    & > .__label {
      font-size: ${theme.font.size.xs};
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.default};
      margin-bottom: ${theme.spacing.stack.quarck};
      color: ${theme.neutralColor.low.pure};
      display: flex;
      align-items: center;
    }

    & > .__message {
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
    }

    &.--loading {
      cursor: progress;
    }

    &.--focused {
      & > .__container {
        box-shadow: 0 0 0 2px ${theme.feedbackColor.informative.pure};
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }
    }

    &.--error > .__container {
      background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure, theme.opacity.level[2])};
      border-color: ${theme.feedbackColor.negative.pure};
    }
  `
);
