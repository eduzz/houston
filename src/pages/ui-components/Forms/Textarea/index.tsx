import * as React from 'react';

import Input, { IInputProps } from '../Input';

export interface ITextarea extends Omit<IInputProps, 'multiline'> {}

const Textarea: React.FC<ITextarea> = props => {
  return <Input {...props} multiline />;
};

export default Textarea;
