import * as React from 'react';

import { Input as AntdInput, InputRef } from 'antd';
import type { TextAreaProps as AntdTextAreaProps, TextAreaRef } from 'antd/lib/input/TextArea';

import withForm, { WithFormProps } from '../Form/withForm';

export interface TextAreaProps
  extends Omit<AntdTextAreaProps, 'onChange' | 'onBlur' | 'onPressEnter'>,
    WithFormProps<InputRef> {
  onChange?: (value: string | number | null | undefined, event: React.ChangeEvent<HTMLTextAreaElement>) => any;
  onBlur?: (value: string | number | null | undefined, event: React.FocusEvent<HTMLTextAreaElement>) => any;
}

const Textarea = React.forwardRef<TextAreaRef, TextAreaProps>(({ value, onChange, onBlur, ...props }, ref) => {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange && onChange(e.target.value, e);
    },
    [onChange]
  );

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement>) => {
      onBlur && onBlur(e.target.value, e);
    },
    [onBlur]
  );

  return <AntdInput.TextArea ref={ref} value={value} onChange={handleChange} onBlur={handleBlur} rows={4} {...props} />;
});

export default withForm(Textarea);
