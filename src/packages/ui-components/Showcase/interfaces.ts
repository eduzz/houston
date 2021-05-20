import { CardProps } from '@material-ui/core/Card';

import ShowcaseButton from './ShowcaseButton';
import ShowcaseImage, { IShowcaseImageProps } from './ShowcaseImage';
import ShowcaseStep, { IShowcaseStepProps } from './ShowcaseStep';
import ShowcaseText, { IShowcaseTextProps } from './ShowcaseText';
import ShowcaseTitle from './ShowcaseTitle';

type ShowcasePropsExtends = 'id' | 'className' | 'children';

type IShowcaseSubcomponentes = {
  Title: typeof ShowcaseTitle;
  Step: typeof ShowcaseStep;
  Image: typeof ShowcaseImage;
  Text: typeof ShowcaseText;
  Button: typeof ShowcaseButton;
};

export interface IShowcaseStep extends IShowcaseStepProps {
  images?: IShowcaseImageProps[];
  text?: IShowcaseTextProps[];
}

export interface IShowcaseProps extends Pick<CardProps, ShowcasePropsExtends> {
  size?: 'small' | 'medium' | 'large';
  multiline?: boolean;
}

export interface IShowcaseComponent
  extends IShowcaseSubcomponentes,
    React.ForwardRefExoticComponent<IShowcaseProps & React.RefAttributes<CardProps>> {}
