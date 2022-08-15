import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

import withForm, { WithFormProps } from '../Form/withForm';
import { RadioProps } from './Item';

type OwnProperties = StyledProp &
  WithFormProps<never> & {
    children: React.ReactElement<RadioProps>[];
    value?: any;
    name?: string;
    onChange?: (value: any, e?: React.MouseEvent<HTMLDivElement>) => void;
    errorMessage?: string;
  };

export type RadioGroupProps = OwnProperties &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof OwnProperties | 'type'>;

const RadioGroup = ({ children, value, onChange, className, errorMessage }: RadioGroupProps) => {
  const handleChange = React.useCallback(
    (value: any, e: React.MouseEvent<HTMLDivElement>) => {
      onChange && onChange(value, e);
    },
    [onChange]
  );

  const mappedChildren = React.Children.map(children, (child: React.ReactElement<RadioProps>) => {
    return React.cloneElement(child as React.ReactElement, {
      onChange: handleChange,
      checked: value === child.props.value,
      error: !!errorMessage
    });
  });

  return (
    <div className={className}>
      <div className='hst-radio-group-radios'>{mappedChildren}</div>
      <span className='hst-radio-group-error-message'>{errorMessage}</span>
    </div>
  );
};

export default styled(withForm(React.memo(RadioGroup)), { label: 'hst-radio-group' })`
  ${({ theme }) => css`
    .hst-radio-group-radios {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing.xxxs};
    }

    .hst-radio-group-error-message {
      display: block;
      font-size: ${theme.font.size.xxs};
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.default};
      color: ${theme.neutralColor.low.pure};
      margin-top: ${theme.spacing.stack.nano};
    }
  `}
`;
