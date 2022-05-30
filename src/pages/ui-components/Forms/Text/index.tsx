import * as React from 'react';

import Input, { IInputProps } from '../Input';

export interface IText extends IInputProps {}

/**
 * @deprecated Migrar para o Input
 */
const Text: React.FC<IText> = props => {
  return <Input {...props} multiline />;
};

export default Text;
