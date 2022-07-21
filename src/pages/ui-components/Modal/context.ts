import { createContext } from 'use-context-selector';

interface ModalContextProps {
  onClose?: () => void;
  closeIcon?: boolean;
}

const ModalContext = createContext<ModalContextProps>({});

const ModalContextProvider = ModalContext.Provider;

export { ModalContext };

export default ModalContextProvider;
