import * as React from 'react';

import { HexColorPicker } from 'react-colorful';

import styled, { IStyledProp } from '@eduzz/houston-styles';

import Popover from '../../Popover';
import usePopover from '../../Popover/usePopover';
import withForm, { WithFormProps } from '../Form/withForm';
import Input, { InputProps } from '../Input';

export interface IColorProps
  extends IStyledProp,
    Omit<InputProps<string>, 'type' | 'multiline' | 'mask' | 'rows' | 'disableAutoResize' | 'onChange'>,
    WithFormProps<HTMLInputElement> {
  onChange?(value: string): void;
}

const Color: React.FC<IColorProps> = ({ className, value, errorMessage, disabled, loading, onChange, ...props }) => {
  const { openPopover, popoverTargetProps, popoverProps } = usePopover();

  const handleChange = React.useCallback((value: string) => onChange && onChange(value), [onChange]);

  return (
    <div>
      <Popover {...popoverProps} placement='bottom-start'>
        <div className={className}>
          <HexColorPicker color={value ?? ''} onChange={handleChange} />
        </div>
      </Popover>

      <Input
        {...props}
        value={value}
        ref={popoverTargetProps.ref}
        disabled={disabled}
        loading={loading}
        errorMessage={errorMessage}
        onChange={handleChange}
        onClick={!disabled && !loading ? openPopover : undefined}
      />
    </div>
  );
};

export default styled(withForm(React.memo(Color)))`
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
