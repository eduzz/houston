import { createContext } from 'use-context-selector';

export interface ISelectOption {
  value: any;
  text: string;
}

export interface ISelectContext {
  registerOption(option: ISelectOption): () => void;
  onSelect(value: any): void;
}

const SelectContext = createContext<ISelectContext>({
  registerOption: () => () => null,
  onSelect: () => null
});

export default SelectContext;
