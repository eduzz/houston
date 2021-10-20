import { CardProps } from '@mui/material/Card';
import { IShowcaseCloseButtonProps } from './CloseButton';
import { IShowcaseButtonsProps } from './GenericButtons';
import { IShowcaseImageProps } from './Image';
import { IShowcaseLastStepProps } from './LastButton';
import { IShowcaseNextStepProps } from './NextButton';
import { IShowcasePreviousStepProps } from './PreviousButton';
import { IShowcaseStepProps } from './Step';
import { IShowcaseTextProps } from './Text';
declare type ShowcasePropsExtends = 'id' | 'className' | 'children';
export interface IWidthSizes {
    small: number;
    medium: number;
    large: number;
}
export interface IShowcaseButtons extends IShowcaseButtonsProps {
    lastButton?: IShowcaseLastStepProps;
    nextButton?: IShowcaseNextStepProps;
    previousButton?: IShowcasePreviousStepProps;
    closeButton?: IShowcaseCloseButtonProps;
}
export interface IShowcaseStep extends IShowcaseStepProps {
    image?: IShowcaseImageProps;
    text?: IShowcaseTextProps;
    stepButtons?: IShowcaseButtons;
}
export interface IShowcaseProps extends Pick<CardProps, ShowcasePropsExtends> {
    disableBackdropClick?: boolean;
    initialStep?: number;
    open?: boolean;
    size?: 'small' | 'medium' | 'large';
    stepCounter?: boolean;
    onClose?: (currentStep: number) => void;
    onFinish?: () => void;
    onNext?: (currentStep: number) => void;
    onPrevious?: (currentStep: number) => void;
}
export {};
