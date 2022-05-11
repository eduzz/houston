import { createContext } from 'use-context-selector';

export interface IBreadcrumbContext {
  separator: React.ReactNode;
}

export const BreadcrumbContext = createContext<IBreadcrumbContext>({} as IBreadcrumbContext);
