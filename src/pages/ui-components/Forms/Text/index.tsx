import Input, { InputProps } from '../Input';

export interface TextProps extends InputProps {}

/**
 * @deprecated Migrate to Input
 */
const Text = (props: TextProps) => {
  return <Input {...props} />;
};

export default Text;
