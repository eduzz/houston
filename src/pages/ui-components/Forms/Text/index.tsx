import Input, { InputProps } from '../Input';

export interface TextProps extends InputProps {}

/**
 * @deprecated Migrar para o Input
 */
const Text = (props: TextProps) => {
  return <Input {...props} />;
};

export default Text;
