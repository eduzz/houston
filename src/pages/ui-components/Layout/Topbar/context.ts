import { createContext } from 'use-context-selector';

export interface HoustonTopbarUser {
  id?: number;
  name: string;
  email?: string;
  avatar?: string;
  belt?: string;
  isSupport?: boolean;
  supportId?: number;
  /*
    If `true`, the topbar will have a black background.
  */
  isClubeBlack?: boolean;
}

export interface TopbarContextType {
  user?: HoustonTopbarUser;
  currentApplication?: string;
  centerPortal?: React.RefObject<HTMLDivElement | null>;
}

const TopbarContext = createContext<TopbarContextType>({});

export default TopbarContext;
