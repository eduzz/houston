import { createContext } from 'use-context-selector';

interface ModalContextProps {
  onClose?: () => void;
  closeIcon?: boolean;
}

<<<<<<< HEAD
const ModalContext = createContext<ModalContextProps>({
  hasHeader: false,
  hasFooter: false
});

const ModalContext = createContext<ModalContextProps>({
  hasHeader: false,
  hasFooter: false
});

const ModalContextProvider = ModalContext.Provider;

export { ModalContext };
export default ModalContextProvider;
