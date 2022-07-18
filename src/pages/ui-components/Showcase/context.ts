import * as React from 'react';

import { ShowcaseStepPropsInternal, ShowcaseButtons, WidthSizes } from './interfaces';
import { ShowcaseTitleProps } from './Title';

export interface ShowcaseContextProps {
  title: ShowcaseTitleProps;
  stepCounter: boolean;
  steps: ShowcaseStepPropsInternal[];
  genericButtons: ShowcaseButtons;
  modalSizes: WidthSizes;
  imageSizes: WidthSizes;
  currentStep: number;
  size?: 'small' | 'medium' | 'large';
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  onNextStep: () => void;
  onPreviousStep: () => void;
  handleFinish: () => void;
  handleClose: () => void;
}

export const ShowcaseContext = React.createContext<ShowcaseContextProps>({} as ShowcaseContextProps);
export const ShowcaseContextProvider = ShowcaseContext.Provider;

export const useShowcaseContext = () => {
  return React.useContext(ShowcaseContext);
};

export default ShowcaseContextProvider;
