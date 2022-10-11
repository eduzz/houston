import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';
import { Spacing } from '@eduzz/houston-tokens';

import withForm, { WithFormProps } from '../Form/withForm';
import { RadioProps } from './Item';

export type RadioGroupProps = StyledProp &
  WithFormProps<never> &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactElement<RadioProps>[];
    name?: string;
    value?: any;
    onChange?: (value: any, e?: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
    /**
     * Spacing between radios
     * @default 'xxxs'
     */
    spacing?: keyof Omit<Spacing, 'fn'>;
  };

const RadioGroup = ({ children, value, onChange, className, errorMessage, ...rest }: RadioGroupProps) => {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, value: any) => {
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
    <div className={className} {...rest}>
      <div className='hst-radio-group-radios'>{mappedChildren}</div>
      <span className='hst-radio-group-error-message'>{errorMessage}</span>
    </div>
  );
};

/**
 * @deprecated Use Radio from Antd
 */
export default styled(withForm(React.memo(RadioGroup)), { label: 'hst-radio-group' })`
  ${({ theme, spacing = 'xxxs' }) => css`
    .hst-radio-group-options {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing[spacing]};
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
