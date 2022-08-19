import * as React from 'react';

export interface ShowcaseContextProps {
  currentStep: number;
  totalSteps: number;
  maxWidth: number;
  stepSize: number;
}

export const ShowcaseContext = React.createContext<ShowcaseContextProps>({} as ShowcaseContextProps);
export const ShowcaseContextProvider = ShowcaseContext.Provider;

export const useShowcaseContext = () => {
  return React.useContext(ShowcaseContext);
};

export default ShowcaseContextProvider;
