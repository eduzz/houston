import { CardProps } from '@mui/material/Card';

import { ShowcaseCloseButtonProps } from './CloseButton';
import { ShowcaseButtonsProps } from './GenericButtons';
import { ShowcaseImageProps } from './Image';
import { ShowcaseLastStepProps } from './LastButton';
import { ShowcaseNextStepProps } from './NextButton';
import { ShowcasePreviousStepProps } from './PreviousButton';
import { ShowcaseStepProps } from './Step';
import { ShowcaseTextProps } from './Text';

type ShowcasePropsExtends = 'id' | 'className' | 'children';

export interface WidthSizes {
  small: number;
  medium: number;
  large: number;
}

export interface ShowcaseButtons extends ShowcaseButtonsProps {
  lastButton?: ShowcaseLastStepProps;
  nextButton?: ShowcaseNextStepProps;
  previousButton?: ShowcasePreviousStepProps;
  closeButton?: ShowcaseCloseButtonProps;
}

export interface ShowcaseStepPropsInternal extends ShowcaseStepProps {
  image?: ShowcaseImageProps;
  text?: ShowcaseTextProps;
  stepButtons?: ShowcaseButtons;
}

export interface ShowcaseProps extends Pick<CardProps, ShowcasePropsExtends> {
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
