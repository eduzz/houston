import { createContext } from 'use-context-selector';

import { ISelectFieldProps } from '.';

export interface ISelectOption {
  value: any;
  text: string;
}

export interface ISelectContext {
  registerOption(option: ISelectOption): () => void;
  onSelect(value: any): void;
  inputSize: ISelectFieldProps['size'];
  multiple: boolean;
  inputValue: any;
}

const SelectContext = createContext<ISelectContext>({
  registerOption: () => () => null,
  onSelect: () => null,
  inputSize: 'default',
  multiple: false,
  inputValue: null
});

export default SelectContext;
