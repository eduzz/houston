import { createContext } from 'use-context-selector';

interface ModalContextProps {
  onClose?: () => void;
  closeIcon?: boolean;
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);
const ModalContextProvider = ModalContext.Provider;

export { ModalContext };
export default ModalContextProvider;
