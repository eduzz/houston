import * as React from 'react';

import { useContext } from 'use-context-selector';

import Cancel from '@eduzz/houston-icons/Cancel';
import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import Typography from '../../Typography';
import Checkbox from '../Checkbox';
import SelectContext from './context';

export interface SelectOptionProps extends StyledProp {
  id?: string;
  disabled?: boolean;
  value?: any;
  /**
   * You can pass a complex children or a simple text by label, it will be used to fill the input
   * after select a value
   */
  label?: string;
  children?: React.ReactNode;
}

const SelectOption = ({ children, value, label, className, disabled, id }: SelectOptionProps) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const { registerOption, onSelect, inputSize, inputValue, multiple } = useContext(SelectContext);
  const isSelected = inputValue && (Array.isArray(inputValue) ? inputValue.includes(value) : inputValue === value);

  React.useEffect(() => {
    return registerOption({ value, text: label ?? divRef.current?.textContent });
  }, [registerOption, label, value, divRef.current?.textContent]);

  const handleClick = React.useCallback(() => {
    if (disabled) return;
    onSelect(value);
  }, [disabled, onSelect, value]);

  const isEmptyOption = value === null || value === undefined || value === '';
  children = children ?? label;

  return (
    <div
      id={id}
      ref={divRef}
      className={cx(className, {
        [`hst-select-option-size-${inputSize ?? 'default'}`]: true,
        'hst-select-option-disabled': disabled
      })}
      onClick={handleClick}
    >
      <div className='hst-select-option-content'>
        {multiple && !isEmptyOption && <Checkbox checked={isSelected} className='hst-select-option-checkbox' />}
        {multiple && isEmptyOption && <Cancel className='hst-select-option-icon' />}

        {typeof children === 'string' ? (
          <Typography size={inputSize === 'sm' ? 'xxs' : 'xs'} weight={isSelected ? 'semibold' : 'regular'}>
            {children}
          </Typography>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default styled(React.memo(SelectOption), { label: 'hst-select-option' })(
  ({ theme }) => css`
    cursor: pointer;
    padding: ${theme.spacing.squish.xs};
    background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
    transition: 0.3s;
    position: relative;

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

    & > .hst-select-option-content {
      display: flex;
      align-items: center;

      & > .hst-select-option-checkbox,
      & > .hst-select-option-icon {
        margin-right: ${theme.spacing.nano};
      }
    }

    &.hst-select-option-disabled {
      cursor: not-allowed;

      & > .hst-select-option-content {
        opacity: ${theme.opacity.level[6]};
        pointer-events: none;
      }
    }

    &.hst-select-option-size-sm {
      padding: ${theme.spacing.squish.xxs};

      &:not(:last-child):after {
        left: ${theme.spacing.nano};
        right: ${theme.spacing.nano};
      }
    }
  `
);
