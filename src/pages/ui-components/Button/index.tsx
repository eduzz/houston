import * as React from 'react';

import { ButtonProps } from '@mui/material/Button';

import { getColorFallback } from '../Helpers/functions';
import styled from '../styles/styled';

type ButtonPropsExtends =
 ;

export type IButtonVariant = 'contained' | 'outlined' | 'text';
export type IButtonColor = 'primary' | 'success' | 'error' | 'info' | 'warning';

export interface IButtonProps extends ButtonProps, React.RefAttributes<HTMLButtonElement> {
  variant?: IButtonVariant;
  loading?: boolean;
  loadingText?: string;
  color?: IButtonColor;
  fullWidth?: boolean;
  startIcon?: string;
  endIcon?: string;
}

const Button: React.FC<IButtonProps> = props => {
  const { children, disabled = false, startIcon, variant, loading = false, loadingText, className, ...rest } = props;
  return (
    <button
      className={`${className} --${variant ?? 'contained'}`}
      {...rest}
      disabled={disabled || loading}
      // startIcon={loading ? <CircularProgress size={18} color='inherit' /> : startIcon}
    >
      {!loading && children}
      {loading && (loadingText ?? children)}
    </button>
  );
};

export default styled(Button, { label: 'houston-button' })`
  border: none;
  cursor: pointer;
  text-transform: none;
  padding: 10px 16px;
  height: 40px;
  border-radius: ${props => props.theme.radius()}px;
  font-weight: ${props => props.theme.fontWeight('semibold')};
  font-family: ${props => props.theme.fontFamily};
  line-height: ${props => props.theme.lineHeight('compact')};
  font-size: ${props => props.theme.textSize('small')}px;
  position: relative;
  transition: 0.3s;

  &.--contained {
    background-color: ${props => getColorFallback(props.theme, props.color).main};
    color: white;

    &:hover {
      background-color: ${props => getColorFallback(props.theme, props.color).light};
    }

    &:active {
      background-color: ${props => getColorFallback(props.theme, props.color).dark};
    }

    &:disabled {
      color: ${props => props.theme.colors.grey[500]};
      background-color: ${props => props.theme.colors.grey[300]};
    }
  }

  &.--outlined {
    background-color: transparent;
    color: ${props => getColorFallback(props.theme, props.color).main};
    border: 1px solid;
    border-color: ${props => getColorFallback(props.theme, props.color).light};
  }

  &.--text {
    background-color: white;
    color: ${props => getColorFallback(props.theme, props.color).main};
  }

  &:before {
    content: ' ';
    position: absolute;
    left: -4px;
    right: -4px;
    top: -4px;
    bottom: -4px;
    border: 2px solid transparent;
    transition: 0.3s;
    border-radius: ${props => props.theme.radius(2)}px;
  }

  &:focus:not(:active):not(:hover):before {
    border-color: ${props => props.theme.colors.grey[300]};
  }
`;
