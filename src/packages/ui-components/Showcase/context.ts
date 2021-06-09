import * as React from 'react';

import { IShowcaseStep, IShowcaseButtons, IWidthSizes } from './interfaces';
import { IShowcaseTitleProps } from './Title';

interface IShowcaseContext {
  title: IShowcaseTitleProps;
  stepCounter: boolean;
  steps: IShowcaseStep[];
  genericButtons: IShowcaseButtons;
  breakpoint: 'small' | 'medium' | 'large';
  modalSizes: IWidthSizes;
  imageSizes: IWidthSizes;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  onNextStep: () => void;
  onPreviousStep: () => void;
  handleFinish: () => void;
  handleClose: () => void;
}

export const ShowcaseContext = React.createContext<IShowcaseContext>({} as IShowcaseContext);
export const ShowcaseContextProvider = ShowcaseContext.Provider;

export const useShowcaseContext = () => {
  const context = React.useContext(ShowcaseContext);
  return context;
};

export default ShowcaseContextProvider;
