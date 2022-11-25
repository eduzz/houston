import { createContext } from 'use-context-selector';

export interface TopbarActionsContextType {
  (action: { badgeDot: boolean; badgeCount: number }): () => void;
}

const TopbarActionsContext = createContext<TopbarActionsContextType>(() => () => null);

export default TopbarActionsContext;
