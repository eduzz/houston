import * as React from 'react';

import Input, { InputProps } from '../Input';

export interface ITextarea extends Omit<InputProps, 'multiline'> {}

const Textarea: React.FC<ITextarea> = props => {
  return <Input {...props} multiline />;
};

export default Textarea;
