import { createContext } from 'use-context-selector';

import { DialogTypes } from './Dialog';

interface DialogContextProps {
  type: DialogTypes;
  showTypeIcon: boolean;
  onClose?: () => void;
}

const DialogContext = createContext<DialogContextProps>({} as DialogContextProps);
const DialogContextProvider = DialogContext.Provider;

export { DialogContext };

export default DialogContextProvider;
