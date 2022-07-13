import { createContext } from 'use-context-selector';

export interface HoustonToolbarUser {
  id?: number;
  name: string;
  email?: string;
  avatar?: string;
  belt?: string;
  isSupport?: boolean;
  supportId?: number;
  /*
    If `true`, the toolbar will have a black background.
  */
  isClubeBlack?: boolean;
}

export interface ToolbarContextType {
  user?: HoustonToolbarUser;
  currentApplication?: string;
}

const ToolbarContext = createContext<ToolbarContextType>({});

export default ToolbarContext;
