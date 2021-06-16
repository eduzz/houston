import * as React from 'react';

import CardMUI, { CardProps } from '@material-ui/core/Card';
import CardActionsMUI from '@material-ui/core/CardActions';
import CardContentMUI from '@material-ui/core/CardContent';
import ModalMUI from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import { getReactChildrenComponent, getReactFirstChildrenProps } from '../Helpers/functions';
import { useFirstChildrenProps } from '../hooks/useChildrenProps';
import WrapperTheme from '../styles/ThemeProvider/WrapperTheme';
import ShowcaseCloseButton from './CloseButton';
import ShowcaseContextProvider from './context';
import ShowcaseGenericButtons from './GenericButtons';
import ShowcaseImage, { IShowcaseImageProps } from './Image';
import { IShowcaseComponent, IShowcaseProps, IShowcaseStep, IShowcaseButtons } from './interfaces';
import CallToActions from './internals/CallToActions';
import Header from './internals/Header/indext';
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

const useStyles = makeStyles(theme => ({
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

    [theme.breakpoints.down('md')]: {
      width: modalSizes.medium
    },

    [theme.breakpoints.down('xs')]: {
      width: modalSizes.small
    },

    '& .card-mui': {
      width: '100%',
      boxShadow: 'none',

      '& .card-content-mui': {
        boxSizing: 'border-box',
        width: '100%',
        padding: 0
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

const Showcase = React.forwardRef<CardProps, IShowcaseProps>((props, ref) => {
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

  const { currentStep, setCurrentStep, nextStep, previousStep } = useShowcase(initialStep);

  const classes = useStyles();

  const [modalState, setModalState] = React.useState<boolean>(true);

  const setModalOpen = React.useCallback((modalState: boolean) => setModalState(modalState), []);

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

  const handleClose = React.useCallback(() => {
    onClose && onClose(currentStep);
    setModalState(false);
  }, [setModalState, onClose, currentStep]);

  React.useEffect(() => {
    if (open === undefined) {
      setModalOpen(true);
      return;
    }

    setModalOpen(open);
  }, [open, setModalOpen]);

  const contextValue = React.useMemo(
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
    <WrapperTheme>
      <ModalMUI {...rest} disableBackdropClick={disableBackdropClick} open={modalState} onClose={handleClose} ref={ref}>
        <ShowcaseContextProvider value={contextValue}>
          <div className={clsx(className, size && classes[size], classes.modalContent)}>
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
    </WrapperTheme>
  );
}) as IShowcaseComponent;

Showcase.Title = ShowcaseTitle;
Showcase.Step = ShowcaseStep;
Showcase.Image = ShowcaseImage;
Showcase.Text = ShowcaseText;
Showcase.GenericButtons = ShowcaseGenericButtons;
Showcase.StepButtons = ShowcaseStepButtons;
Showcase.LastButton = ShowcaseLastButton;
Showcase.NextButton = ShowcaseNextButton;
Showcase.PreviousButton = ShowcasePreviousButton;
Showcase.CloseButton = ShowcaseCloseButton;

export default Showcase;
