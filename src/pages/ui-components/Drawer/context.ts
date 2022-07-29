import { createContext } from 'use-context-selector';

interface DrawerContextProps {
  onClose?: () => void;
  closeIcon: boolean;
}

const DrawerContext = createContext<DrawerContextProps>({} as DrawerContextProps);
const DrawerContextProvider = DrawerContext.Provider;

export { DrawerContext };

export default DrawerContextProvider;
