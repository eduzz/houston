import * as React from 'react';

import { IShowcaseStep, IShowcaseButtons } from './interfaces';
import { IShowcaseTitleProps } from './ShowcaseTitle';

interface IShowcaseContext {
  title: IShowcaseTitleProps;
  stepCounter: boolean;
  steps: IShowcaseStep[];
  genericButtons: IShowcaseButtons;
  size: 'small' | 'medium' | 'large';
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  onNextStep: () => void;
  onPreviousStep: () => void;
  handleClose: () => void;
}

export const ShowcaseContext = React.createContext<IShowcaseContext>({} as IShowcaseContext);
export const ShowcaseContextProvider = ShowcaseContext.Provider;

export function useShowcaseContext() {
  const context = React.useContext(ShowcaseContext);
  return context;
}

export default ShowcaseContextProvider;
