import * as React from 'react';

import { HexColorPicker } from 'react-colorful';

import { useFormValue, useFormError, useFormSetValue, useFormIsSubmitting } from '@eduzz/houston-forms/context';
import styled, { IStyledProp } from '@eduzz/houston-styles';

import Popover from '../../Popover';
import usePopover from '../../Popover/usePopover';
import Input, { IInputProps } from '../Input';

export interface IColorProps
  extends IStyledProp,
    Omit<IInputProps<string>, 'type' | 'multiline' | 'mask' | 'rows' | 'disableAutoResize' | 'onChange'> {
  onChange(value: string): void;
}

const Color: React.FC<IColorProps> = ({
  className,
  name,
  value: valueProp,
  errorMessage: errorMessageProp,
  disabled,
  loading,
  onChange,
  ...props
}) => {
  const { openPopover, popoverTargetProps, popoverProps } = usePopover();

  const isSubmitting = useFormIsSubmitting();
  const value = useFormValue(name, valueProp);
  const errorMessage = useFormError(name, errorMessageProp);
  const setFormValue = useFormSetValue(name);

  const handleChange = React.useCallback(
    (value: string) => {
      onChange && onChange(value);
      setFormValue && setFormValue(value);
    },
    [onChange, setFormValue]
  );

  return (
    <div>
      <Popover {...popoverProps} placement='bottom-start'>
        <div className={className}>
          <HexColorPicker color={value} onChange={handleChange} />
        </div>
      </Popover>

      <Input
        {...props}
        value={value}
        {...popoverTargetProps}
        disabled={disabled}
        loading={loading}
        errorMessage={errorMessage}
        onChange={handleChange}
        onClick={!disabled && !loading && !isSubmitting ? openPopover : null}
      />
    </div>
  );
};

export default styled(React.memo(Color))`
  & .react-colorful {
    width: 170px;
    height: 170px;
  }

  & .react-colorful__saturation {
    border-radius: 0;
  }

  & .react-colorful__pointer {
    width: 20px;
    height: 20px;
  }

  & .react-colorful__hue {
    height: 22px;
  }

  & .react-colorful__last-control {
    border-radius: 0 0 4px 4px;
  }
`;
