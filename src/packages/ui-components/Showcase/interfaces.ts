import { CardProps } from '@material-ui/core/Card';

import ShowcaseCloseButton, { IShowcaseCloseButtonProps } from './ShowcaseCloseButton';
import ShowcaseButtons, { IShowcaseButtonsProps } from './ShowcaseGenericButtons';
import ShowcaseImage, { IShowcaseImageProps } from './ShowcaseImage';
import ShowcaseLastButton, { IShowcaseLastStepProps } from './ShowcaseLastButton';
import ShowcaseNextButton, { IShowcaseNextStepProps } from './ShowcaseNextButton';
import ShowcasePreviousButton, { IShowcasePreviousStepProps } from './ShowcasePreviousButton';
import ShowcaseStep, { IShowcaseStepProps } from './ShowcaseStep';
import ShowcaseText, { IShowcaseTextProps } from './ShowcaseText';
import ShowcaseTitle from './ShowcaseTitle';

type ShowcasePropsExtends = 'id' | 'className' | 'children';

type IShowcaseSubcomponentes = {
  Title: typeof ShowcaseTitle;
  Step: typeof ShowcaseStep;
  Image: typeof ShowcaseImage;
  Text: typeof ShowcaseText;
  GenericButtons: typeof ShowcaseButtons;
  StepButtons: typeof ShowcaseButtons;
  LastButton: typeof ShowcaseLastButton;
  NextButton: typeof ShowcaseNextButton;
  PreviousButton: typeof ShowcasePreviousButton;
  CloseButton: typeof ShowcaseCloseButton;
};

export interface IShowcaseButtons extends IShowcaseButtonsProps {
  lastButton?: IShowcaseLastStepProps;
  nextButton?: IShowcaseNextStepProps;
  previousButton?: IShowcasePreviousStepProps;
  closeButton?: IShowcaseCloseButtonProps;
}

export interface IShowcaseStep extends IShowcaseStepProps {
  images?: IShowcaseImageProps;
  text?: IShowcaseTextProps;
  stepButtons?: IShowcaseButtons;
}

export interface IShowcaseProps extends Pick<CardProps, ShowcasePropsExtends> {
  size?: 'small' | 'medium' | 'large';
  open?: boolean;
  initialStep?: number;
  stepCounter?: boolean;
  onFinish?: () => void;
  onNext?: (currentStep: number) => void;
  onPrevious?: (currentStep: number) => void;
  onClose?: (currentStep: number) => void;
}

export interface IShowcaseComponent
  extends IShowcaseSubcomponentes,
    React.ForwardRefExoticComponent<IShowcaseProps & React.RefAttributes<CardProps>> {}
