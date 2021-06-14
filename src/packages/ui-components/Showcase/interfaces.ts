import { CardProps } from '@material-ui/core/Card';

import ShowcaseCloseButton, { IShowcaseCloseButtonProps } from './CloseButton';
import ShowcaseButtons, { IShowcaseButtonsProps } from './GenericButtons';
import ShowcaseImage, { IShowcaseImageProps } from './Image';
import ShowcaseLastButton, { IShowcaseLastStepProps } from './LastButton';
import ShowcaseNextButton, { IShowcaseNextStepProps } from './NextButton';
import ShowcasePreviousButton, { IShowcasePreviousStepProps } from './PreviousButton';
import ShowcaseStep, { IShowcaseStepProps } from './Step';
import ShowcaseText, { IShowcaseTextProps } from './Text';
import ShowcaseTitle from './Title';

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
  disableBackdropClick?: boolean;
}

export interface IShowcaseComponent
  extends IShowcaseSubcomponentes,
    React.ForwardRefExoticComponent<IShowcaseProps & React.RefAttributes<CardProps>> {}
