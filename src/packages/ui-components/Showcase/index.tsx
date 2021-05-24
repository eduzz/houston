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
import ShowcaseContextProvider from './context';
import { IShowcaseComponent, IShowcaseProps, IShowcaseStep, IShowcaseButtons } from './interfaces';
import CallToActions from './internals/CallToActions';
import Header from './internals/Header/indext';
import Steps from './internals/Steps';
import ShowcaseCloseButton from './ShowcaseCloseButton';
import ShowcaseGenericButtons from './ShowcaseGenericButtons';
import ShowcaseImage, { IShowcaseImageProps } from './ShowcaseImage';
import ShowcaseLastButton from './ShowcaseLastButton';
import ShowcaseNextButton from './ShowcaseNextButton';
import ShowcasePreviousButton from './ShowcasePreviousButton';
import ShowcaseStep from './ShowcaseStep';
import ShowcaseStepButtons from './ShowcaseStepButtons';
import ShowcaseText, { IShowcaseTextProps } from './ShowcaseText';
import ShowcaseTitle, { IShowcaseTitleProps } from './ShowcaseTitle';
import useStepHandler from './useStepHandler';

const Showcase = React.forwardRef<CardProps, IShowcaseProps>((props, ref) => {
  const { id, className, children, stepCounter, open, initialStep, size, onNext, onPrevious, onFinish, onClose } =
    props;

  const widthSizes = {
    small: 296,
    medium: 468
  };

  const heightSizes = {
    small: 479,
    medium: 555
  };

  const useStyles = makeStyles(theme =>
    createStyles({
      modal: {
        [theme.breakpoints.up('xs')]: {
          width: 296
        },

        [theme.breakpoints.up('md')]: {
          width: size === 'small' ? widthSizes[size] : 468
        },

        [theme.breakpoints.up('lg')]: {
          width: size === 'small' || size === 'medium' ? widthSizes[size] : 530
        },

        position: 'fixed',
        top: '50%',
        left: '50%',
        maxWidth: 'calc(100% - 24px)',
        background: 'white',
        borderRadius: 4,
        transform: 'translate(-50%, -50%)',
        maxHeight: '75vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& .card-mui': {
          width: '100%',
          boxShadow: 'none',

          '& .card-content-mui': {
            [theme.breakpoints.up('xs')]: {
              width: 248
            },

            [theme.breakpoints.up('md')]: {
              width: size === 'small' ? heightSizes[size] : 420
            },

            [theme.breakpoints.up('lg')]: {
              width: size === 'small' || size === 'medium' ? widthSizes[size] : 482
            },

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

  const [modalState, setModalState] = React.useState<boolean>(open ? open : true);

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

  const handleClose = React.useCallback(() => {
    if (currentStep < steps.length && onClose) {
      onClose(currentStep);
    }

    if (currentStep === steps.length && onFinish) {
      onFinish();
    }

    setModalState(false);
  }, [setModalState, onClose, onFinish, currentStep, steps]);

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
      onFinish,
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
      onFinish,
      handleClose
    ]
  );

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
