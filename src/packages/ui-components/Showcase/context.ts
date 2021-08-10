import * as React from 'react';

import { IShowcaseStep, IShowcaseButtons, IWidthSizes } from './interfaces';
import { IShowcaseTitleProps } from './Title';

interface IShowcaseContext {
  title: IShowcaseTitleProps;
  stepCounter: boolean;
  steps: IShowcaseStep[];
  genericButtons: IShowcaseButtons;
  modalSizes: IWidthSizes;
  imageSizes: IWidthSizes;
  currentStep: number;
  size: 'small' | 'medium' | 'large';
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  onNextStep: () => void;
  onPreviousStep: () => void;
  handleFinish: () => void;
  handleClose: () => void;
}

export const ShowcaseContext = React.createContext<IShowcaseContext>({} as IShowcaseContext);
export const ShowcaseContextProvider = ShowcaseContext.Provider;

export const useShowcaseContext = () => {
  return React.useContext(ShowcaseContext);
};

export default ShowcaseContextProvider;
