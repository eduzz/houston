import Input, { InputProps } from '../Input';

export interface TextProps extends InputProps {}

/**
 * @deprecated Use Input from @eduzz/houston-forms or Antd
 */
const Text = (props: TextProps) => {
  return <Input {...props} />;
};

export default Text;
