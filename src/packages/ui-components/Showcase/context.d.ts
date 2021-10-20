import * as React from 'react';
import { IShowcaseStep, IShowcaseButtons, IWidthSizes } from './interfaces';
import { IShowcaseTitleProps } from './Title';
export interface IShowcaseContext {
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
export declare const ShowcaseContext: React.Context<IShowcaseContext>;
export declare const ShowcaseContextProvider: React.Provider<IShowcaseContext>;
export declare const useShowcaseContext: () => IShowcaseContext;
export default ShowcaseContextProvider;
