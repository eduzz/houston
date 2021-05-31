import * as React from 'react';

import CardMUI, { CardProps } from '@material-ui/core/Card';
import CardActionsMUI from '@material-ui/core/CardActions';
import CardContentMUI from '@material-ui/core/CardContent';
import ModalMUI from '@material-ui/core/Modal';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import { getReactFirstChildrenProps, isReactComponent } from '../Helpers/functions';
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
import useBreakpoint from './useBreakpoint';
import useStepHandler from './useStepHandler';

const Showcase = React.forwardRef<CardProps, IShowcaseProps>((props, ref) => {
  const { id, className, children, stepCounter, open, initialStep, size, onNext, onPrevious, onFinish, onClose } =
    props;

  const widthSizes = {
    small: 296,
    medium: 468,
    large: 530
  };

  const breakpoint = useBreakpoint(size);

  const useStyles = makeStyles(() =>
    createStyles({
      modal: {
        width: widthSizes[breakpoint],

        position: 'fixed',
        top: '50%',
        left: '50%',
        maxWidth: 'calc(100% - 24px)',
        background: 'white',
        borderRadius: 4,
        transform: 'translate(-50%, -50%)',
        maxHeight: '85vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& .card-mui': {
          width: '100%',
          boxShadow: 'none',

          '& .card-content-mui': {
            boxSizing: 'border-box',
            width: widthSizes[breakpoint],
            padding: '16px 24px 0'
          },

          '& .card-actions-mui': {
            width: '100%',
            padding: 0,
            position: 'fixed',
            bottom: 0,
            background: '#fff'
          }
        }
      }
    })
  );

  const classes = useStyles();

  const { currentStep, setCurrentStep, nextStep, previousStep } = useStepHandler(initialStep);

  const [modalState, setModalState] = React.useState<boolean>(true);

  const setModalOpen = React.useCallback((modalState: boolean) => {
    setModalState(modalState);

    return;
  }, []);

  const title = useFirstChildrenProps<IShowcaseTitleProps>(children, ShowcaseTitle);
  const genericButtons: IShowcaseButtons = React.useMemo(() => {
    return React.Children.map(children, (child: React.ReactElement) => {
      if (!isReactComponent(child, ShowcaseGenericButtons)) return;

      const closeButton = getReactFirstChildrenProps<IShowcaseImageProps>(child?.props?.children, ShowcaseCloseButton);
      const lastButton = getReactFirstChildrenProps<IShowcaseImageProps>(child?.props?.children, ShowcaseLastButton);
      const nextButton = getReactFirstChildrenProps<IShowcaseTextProps>(child?.props?.children, ShowcaseNextButton);
      const previousButton = getReactFirstChildrenProps<IShowcaseTextProps>(
        child?.props?.children,
        ShowcasePreviousButton
      );

      return { ...child.props, lastButton, nextButton, previousButton, closeButton };
    });
  }, [children])[0];

  const steps: IShowcaseStep[] = React.useMemo(() => {
    return React.Children.map(children, (step: React.ReactElement) => {
      if (!isReactComponent(step, ShowcaseStep)) return;

      const images = getReactFirstChildrenProps<IShowcaseImageProps>(step?.props?.children, ShowcaseImage);
      const text = getReactFirstChildrenProps<IShowcaseTextProps>(step?.props?.children, ShowcaseText);
      const stepButtons = getReactFirstChildrenProps<IShowcaseButtons>(step?.props?.children, ShowcaseStepButtons);

      return { ...step.props, images, text, stepButtons };
    });
  }, [children]);

  const onNextStep = React.useCallback(() => {
    if (onNext) {
      onNext(currentStep);
    }

    nextStep();
  }, [nextStep, onNext, currentStep]);

  const onPreviousStep = React.useCallback(() => {
    if (onPrevious) {
      onPrevious(currentStep);
    }

    previousStep();
  }, [previousStep, onPrevious, currentStep]);

  const handleFinish = React.useCallback(() => {
    if (onFinish) {
      onFinish();
    }

    setModalState(false);
  }, [onFinish, setModalState]);

  const handleClose = React.useCallback(() => {
    if (onClose) {
      onClose(currentStep);
    }

    setModalState(false);
  }, [setModalState, onClose, currentStep]);

  const contextValue = React.useMemo(
    () => ({
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

  React.useEffect(() => {
    if (open === undefined) {
      setModalOpen(true);
      return;
    }

    setModalOpen(open);
  }, [open, setModalOpen]);

  return (
    <WrapperTheme>
      <ModalMUI
        open={modalState}
        onClose={handleClose}
        aria-labelledby='showcase-modal-title'
        aria-describedby='showcase-modal-description'
        id={id}
        ref={ref}
      >
        <ShowcaseContextProvider value={contextValue}>
          <div className={clsx(className, classes.modal)}>
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
