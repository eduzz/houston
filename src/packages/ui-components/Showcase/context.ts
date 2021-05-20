import * as React from 'react';

import { IShowcaseStep } from './interfaces';
import { IShowcaseButtonProps } from './ShowcaseButton';

interface IShowcaseContext {
  steps: IShowcaseStep[];
  button: IShowcaseButtonProps;

  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export const ShowcaseContext = React.createContext<IShowcaseContext>({} as IShowcaseContext);
export const ShowcaseContextProvider = ShowcaseContext.Provider;

export function useShowcaseContext() {
  const context = React.useContext(ShowcaseContext);
  return context;
}

export default ShowcaseContextProvider;
