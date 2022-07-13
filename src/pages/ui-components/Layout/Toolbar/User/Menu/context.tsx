import { createContext } from 'use-context-selector';

export interface UserMenuContextType {
  close: () => void;
}

const UserMenuContext = createContext({
  close: () => null
});

export default UserMenuContext;
