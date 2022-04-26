import * as React from 'react';

import { cx } from '@emotion/css';
import CardMUI from '@mui/material/Card';
import CardActionsMUI from '@mui/material/CardActions';
import CardContentMUI from '@mui/material/CardContent';
import ModalMUI from '@mui/material/Modal';

import createUseStyles from '@eduzz/houston-style/createUseStyles';

import { getReactChildrenComponent, getReactFirstChildrenProps } from '../Helpers/functions';
import nestedComponent from '../Helpers/nestedComponent';
import { useFirstChildrenProps } from '../hooks/useChildrenProps';
import ShowcaseCloseButton from './CloseButton';
import ShowcaseContextProvider, { IShowcaseContext } from './context';
import ShowcaseGenericButtons from './GenericButtons';
import ShowcaseImage, { IShowcaseImageProps } from './Image';
import { IShowcaseProps, IShowcaseStep, IShowcaseButtons } from './interfaces';
import CallToActions from './internals/CallToActions';
import Header from './internals/Header';
import Steps from './internals/Steps';
import ShowcaseLastButton from './LastButton';
import ShowcaseNextButton from './NextButton';
import ShowcasePreviousButton from './PreviousButton';
import ShowcaseStep from './Step';
import ShowcaseStepButtons from './StepButtons';
import ShowcaseText, { IShowcaseTextProps } from './Text';
import ShowcaseTitle, { IShowcaseTitleProps } from './Title';
import useShowcase from './useShowcase';

const modalSizes = {
  small: 296,
  medium: 468,
  large: 530
};

const imageSizes = {
  small: 264,
  medium: 420,
  large: 482
};

const useStyles = createUseStyles(theme => ({
  modalContent: {
    width: modalSizes.large,
    position: 'fixed',
    top: '50%',
    left: '50%',
    maxWidth: '100%',
    background: 'white',
    borderRadius: 4,
    transform: 'translate(-50%, -50%)',
    maxHeight: '85vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.down('lg')]: {
      width: modalSizes.medium
    },

    [theme.breakpoints.down('sm')]: {
      width: modalSizes.small
    },

    '& .card-mui': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxShadow: 'none',

      '& .card-content-mui': {
        boxSizing: 'border-box',
        width: '100%',
        padding: 0,
        overflow: 'auto'
      },

      '& .card-actions-mui': {
        width: '100%',
        padding: 0,
        position: 'relative',
        zIndex: 1000,
        background: '#fff'
      }
    }
  },
  medium: {
    width: modalSizes.medium
  },
  small: {
    width: modalSizes.small
  }
}));

const Showcase: React.FC<IShowcaseProps> = props => {
  const {
    open,
    size,
    children,
    className,
    initialStep,
    stepCounter = true,
    disableBackdropClick = true,
    onNext,
    onPrevious,
    onFinish,
    onClose,
    ...rest
  } = props;

  const classes = useStyles();

  const { currentStep, setCurrentStep, nextStep, previousStep } = useShowcase(initialStep);
  const [modalState, setModalState] = React.useState<boolean>(true);

  const title = useFirstChildrenProps<IShowcaseTitleProps>(children, ShowcaseTitle);

  const genericButtons = getReactChildrenComponent(children, ShowcaseGenericButtons).map(child => ({
    ...child.props,
    lastButton: getReactFirstChildrenProps<IShowcaseImageProps>(child?.props?.children, ShowcaseLastButton),
    nextButton: getReactFirstChildrenProps<IShowcaseTextProps>(child?.props?.children, ShowcaseNextButton),
    previousButton: getReactFirstChildrenProps<IShowcaseTextProps>(child?.props?.children, ShowcasePreviousButton),
    closeButton: getReactFirstChildrenProps<IShowcaseImageProps>(child?.props?.children, ShowcaseCloseButton)
  }))?.[0] as IShowcaseButtons;

  const steps = getReactChildrenComponent(children, ShowcaseStep).map(child => ({
    ...child?.props,
    image: getReactFirstChildrenProps<IShowcaseImageProps>(child?.props?.children, ShowcaseImage),
    text: getReactFirstChildrenProps<IShowcaseTextProps>(child?.props?.children, ShowcaseText),
    stepButtons: getReactFirstChildrenProps<IShowcaseButtons>(child?.props?.children, ShowcaseStepButtons)
  })) as IShowcaseStep[];

  const onNextStep = React.useCallback(() => {
    onNext && onNext(currentStep);
    nextStep();
  }, [nextStep, onNext, currentStep]);

  const onPreviousStep = React.useCallback(() => {
    onPrevious && onPrevious(currentStep);
    previousStep();
  }, [previousStep, onPrevious, currentStep]);

  const handleFinish = React.useCallback(() => {
    onFinish && onFinish();
    setModalState(false);
  }, [onFinish, setModalState]);

  const handleClose = React.useCallback(
    (event?: React.SyntheticEvent, reason?: 'backdropClick' | 'escapeKeyDown') => {
      if (reason === 'backdropClick' && disableBackdropClick) return;

      onClose && onClose(currentStep);
      setModalState(false);
    },
    [disableBackdropClick, onClose, currentStep]
  );

  React.useEffect(() => {
    if (open === undefined) {
      setModalState(true);
      return;
    }

    setModalState(open);
  }, [open]);

  const contextValue = React.useMemo<IShowcaseContext>(
    () => ({
      title,
      stepCounter,
      steps,
      genericButtons,
      size,
      currentStep,
      modalSizes,
      imageSizes,
      setCurrentStep,
      onNextStep,
      onPreviousStep,
      handleFinish,
      handleClose
    }),
    [
      title,
      stepCounter,
      steps,
      genericButtons,
      size,
      currentStep,
      setCurrentStep,
      onNextStep,
      onPreviousStep,
      handleFinish,
      handleClose
    ]
  );

  return (
    <ModalMUI {...rest} open={modalState} onClose={handleClose}>
      <ShowcaseContextProvider value={contextValue}>
        <div className={cx(className, size && classes[size], classes.modalContent)}>
          <CardMUI className='card-mui'>
            <Header />

            <CardContentMUI className='card-content-mui'>
              <Steps />
            </CardContentMUI>

            <CardActionsMUI disableSpacing className='card-actions-mui'>
              <CallToActions />
            </CardActionsMUI>
          </CardMUI>
        </div>
      </ShowcaseContextProvider>
    </ModalMUI>
  );
};

export default nestedComponent(React.memo(Showcase), {
  Title: ShowcaseTitle,
  Step: ShowcaseStep,
  Image: ShowcaseImage,
  Text: ShowcaseText,
  GenericButtons: ShowcaseGenericButtons,
  StepButtons: ShowcaseStepButtons,
  LastButton: ShowcaseLastButton,
  NextButton: ShowcaseNextButton,
  PreviousButton: ShowcasePreviousButton,
  CloseButton: ShowcaseCloseButton
});
