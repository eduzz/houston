import * as React from 'react';
import { IShowcaseImageProps } from './Image';
import { IShowcaseProps } from './interfaces';
import { IShowcaseTextProps } from './Text';
import { IShowcaseTitleProps } from './Title';
declare const _default: React.FC<IShowcaseProps> & {
    Title: React.FC<IShowcaseTitleProps>;
    Step: React.FC<import("./Step").IShowcaseStepProps>;
    Image: React.FC<IShowcaseImageProps>;
    Text: React.FC<IShowcaseTextProps>;
    GenericButtons: React.FC<import("./GenericButtons").IShowcaseButtonsProps>;
    StepButtons: React.FC<import("./StepButtons").IShowcaseButtonsProps>;
    LastButton: React.FC<import("./LastButton").IShowcaseLastStepProps>;
    NextButton: React.FC<import("./NextButton").IShowcaseNextStepProps>;
    PreviousButton: React.FC<import("./PreviousButton").IShowcasePreviousStepProps>;
    CloseButton: React.FC<import("./CloseButton").IShowcaseCloseButtonProps>;
};
export default _default;
