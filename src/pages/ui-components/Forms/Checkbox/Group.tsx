import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';
import { Spacing } from '@eduzz/houston-tokens';

import { CheckboxRadioProps } from '.';
import error from '../../utils/error';
import withForm, { WithFormProps } from '../Form/withForm';

export type CheckboxGroupProps = StyledProp &
  WithFormProps<never> & {
    children: React.ReactElement<CheckboxRadioProps>[];
    name?: string;
    value?: any[];
    onChange?: (value: any, e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
    /**
     * Spacing between checkboxes
     * @default 'xxxs'
     */
    spacing?: keyof Omit<Spacing, 'fn'>;
  };

const CheckboxGroup = ({ children, value: groupValue = [], onChange, className, errorMessage }: CheckboxGroupProps) => {
  React.useEffect(() => {
    if (!Array.isArray(groupValue)) {
      error(
        'CheckboxGroup',
        `In order to use CheckboxGroup, the provided value must be an array, type provided: ${typeof groupValue}`
      );
    }
  }, [groupValue]);

  const onInternalChange = React.useCallback(
    (value: any, e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = groupValue.includes(value)
        ? groupValue.filter(itemValue => itemValue !== value)
        : [...groupValue, value];
      onChange && onChange(newValue, e);
    },
    [onChange, groupValue]
  );

  const mappedChildren = React.Children.map(children, (child: React.ReactElement<CheckboxRadioProps>) => {
    return React.cloneElement(child as React.ReactElement, {
      onChange: onInternalChange,
      checked: Array.isArray(groupValue) && groupValue.includes(child.props.value),
      error: !!errorMessage
    });
  });

  return (
    <div className={className}>
      <div className='hst-checkbox-group-checkboxes'>{mappedChildren}</div>
      <span className='hst-checkbox-group-error-message'>{errorMessage}</span>
    </div>
  );
};

export default styled(withForm(React.memo(CheckboxGroup)), { label: 'hst-checkbox-group' })`
  ${({ theme, spacing = 'xxxs' }) => css`
    .hst-checkbox-group-checkboxes {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing[spacing]};
    }

    .hst-checkbox-group-error-message {
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
