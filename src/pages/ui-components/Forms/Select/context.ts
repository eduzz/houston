import { createContext } from 'use-context-selector';

import { ISelectFieldProps } from '.';

export interface ISelectOption {
  value: any;
  text: string | undefined | null;
}

export interface ISelectContext {
  inputSize: ISelectFieldProps['size'];
  multiple: boolean;
  inputValue: any;
  registerOption(option: ISelectOption): () => void;
  onSelect(value: any): void;
}

const SelectContext = createContext<ISelectContext>({
  inputSize: 'default',
  multiple: false,
  inputValue: null,
  registerOption: () => () => null,
  onSelect: () => null
});

export default SelectContext;
