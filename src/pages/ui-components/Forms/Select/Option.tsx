import * as React from 'react';

import { useContext } from 'use-context-selector';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import Typography from '../../Typography';
import Checkbox from '../Checkbox';
import SelectContext from './context';

export interface ISelectOptionProps extends IStyledProp {
  disabled?: boolean;
  value?: any;
  /**
   * You can pass a complex children or a simple text by label, it will be used to fill the input
   * after select a value
   */
  label?: string;
  children?: React.ReactNode;
}

const SelectOption: React.FC<ISelectOptionProps> = ({ children, value, label, className }) => {
  const divRef = React.useRef<HTMLDivElement>();
  const { registerOption, onSelect, inputSize, inputValue, multiple } = useContext(SelectContext);
  const isSelected = inputValue && (Array.isArray(inputValue) ? inputValue.includes(value) : inputValue === value);

  React.useEffect(() => {
    return registerOption({ value, text: label ?? divRef.current?.textContent });
  }, [registerOption, label, value, divRef.current?.textContent]);

  const handleClick = React.useCallback(() => {
    onSelect(value);
  }, [onSelect, value]);

  children = children ?? label;

  return (
    <div
      ref={divRef}
      className={cx(className, {
        [`--size-${inputSize ?? 'default'}`]: true,
        '--selected': isSelected,
        '--multiple': multiple
      })}
      onClick={handleClick}
    >
      {multiple && <Checkbox checked={isSelected} />}

      {typeof children === 'string' ? (
        <Typography size={inputSize === 'sm' ? 'xxs' : 'xs'} weight={isSelected ? 'semibold' : 'regular'}>
          {children}
        </Typography>
      ) : (
        children
      )}
    </div>
  );
};

export default styled(SelectOption, { label: 'houston-form-select-option' })(
  ({ theme }) => css`
    cursor: pointer;
    padding: ${theme.spacing.squish.xs};
    background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
    transition: 0.3s;
    position: relative;
    display: flex;
    align-items: center;

    &:hover {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[1])};
    }

    &:not(:last-child):after {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: ${theme.spacing.xxxs};
      right: ${theme.spacing.xxxs};
      border-bottom: ${theme.border.width.xs} solid ${theme.neutralColor.high.medium};
    }

    &.--size-sm {
      padding: ${theme.spacing.squish.xxs};

      &:not(:last-child):after {
        left: ${theme.spacing.nano};
        right: ${theme.spacing.nano};
      }
    }
  `
);
