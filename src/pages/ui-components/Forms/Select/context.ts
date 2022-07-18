import { createContext } from 'use-context-selector';

import { SelectFieldProps } from '.';

export interface SelectOptionProps {
  value: any;
  text: string | undefined | null;
}

export interface SelectContextProps {
  inputSize: SelectFieldProps['size'];
  multiple: boolean;
  inputValue: any;
  registerOption(option: SelectOptionProps): () => void;
  onSelect(value: any): void;
}

const SelectContext = createContext<SelectContextProps>({
  inputSize: 'default',
  multiple: false,
  inputValue: null,
  registerOption: () => () => null,
  onSelect: () => null
});

export default SelectContext;
