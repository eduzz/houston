import * as React from 'react';

import Input, { InputProps } from '../Input';

export interface IText extends InputProps {}

/**
 * @deprecated Migrar para o Input
 */
const Text: React.FC<IText> = props => {
  return <Input {...props} />;
};

export default Text;
