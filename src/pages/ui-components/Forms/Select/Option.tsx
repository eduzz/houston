import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { css, IStyledProp } from '@eduzz/houston-styles';

import Typography from '../../Typography';
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
  const registerOption = useContextSelector(SelectContext, context => context.registerOption);
  const onSelect = useContextSelector(SelectContext, context => context.onSelect);

  React.useEffect(() => {
    return registerOption({ value, text: label ?? divRef.current?.textContent });
  }, [label, registerOption, value]);

  const handleClick = React.useCallback(() => {
    onSelect(value);
  }, [onSelect, value]);

  children = children ?? label;

  return (
    <div ref={divRef} className={className} onClick={handleClick}>
      {typeof children === 'string' ? <Typography size='xs'>{children}</Typography> : children}
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

    &:hover {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[1])};
    }

    &:not(:last-child):after {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 20px;
      right: 20px;
      border-bottom: ${theme.border.width.xs} solid ${theme.neutralColor.high.medium};
    }
  `
);
