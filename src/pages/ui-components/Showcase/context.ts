import * as React from 'react';

export interface ShowcaseContextProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  nextStep: () => void;
  previousStep: () => void;
}

export const ShowcaseContext = React.createContext<ShowcaseContextProps>({} as ShowcaseContextProps);
export const ShowcaseContextProvider = ShowcaseContext.Provider;

export const useShowcaseContext = () => {
  return React.useContext(ShowcaseContext);
};

export default ShowcaseContextProvider;
