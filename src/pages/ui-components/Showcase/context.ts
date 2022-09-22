import { createContext } from 'use-context-selector';

export interface ShowcaseContextProps {
  currentStep: number;
  totalSteps: number;
  stepSize: number;
  controlDots: boolean;
}

export const ShowcaseContext = createContext<ShowcaseContextProps>({} as ShowcaseContextProps);
export const ShowcaseContextProvider = ShowcaseContext.Provider;

export default ShowcaseContextProvider;
