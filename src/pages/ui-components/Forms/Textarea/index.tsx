import Input, { InputProps } from '../Input';

export interface TextareaProps extends Omit<InputProps, 'multiline'> {}

const Textarea = (props: TextareaProps) => {
  return <Input {...props} multiline />;
};

export default Textarea;
