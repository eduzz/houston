import Input, { InputProps } from '../Input';

export interface TextareaProps extends Omit<InputProps, 'multiline'> {}

/**
 * @deprecated Use Textarea from @eduzz/houston-forms or Antd
 */
const Textarea = (props: TextareaProps) => {
  return <Input {...props} multiline />;
};

export default Textarea;
