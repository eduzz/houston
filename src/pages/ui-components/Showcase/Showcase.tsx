import * as React from 'react';

import styled, { cx, css } from '@eduzz/houston-styles';

import { useFirstChildrenProps } from '../hooks/useChildrenProps';
import ModalBase from '../Modal/__utils/ModalBase';
import Overlay from '../Overlay';
import Portal from '../Portal';
import { getReactChildrenComponent, getReactFirstChildrenProps } from '../utils/children';
import nestedComponent from '../utils/nestedComponent';
import ShowcaseCloseButton from './CloseButton';
import ShowcaseContextProvider, { ShowcaseContextProps } from './context';
import ShowcaseGenericButtons from './GenericButtons';
import ShowcaseImage, { ShowcaseImageProps } from './Image';
import { ShowcaseProps, ShowcaseButtons, ShowcaseStepPropsInternal } from './interfaces';
import CallToActions from './internals/CallToActions';
import Header from './internals/Header';
import Steps from './internals/Steps';
import ShowcaseLastButton from './LastButton';
import ShowcaseNextButton from './NextButton';
import ShowcasePreviousButton from './PreviousButton';
import ShowcaseStep from './Step';
import ShowcaseStepButtons from './StepButtons';
import ShowcaseText, { ShowcaseTextProps } from './Text';
import ShowcaseTitle, { ShowcaseTitleProps } from './Title';
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

const Showcase = (props: ShowcaseProps) => {
  const {
    open,
    size = 'large',
    children,
    className,
    initialStep,
    stepCounter = true,
    disableBackdropClick = true,
    onNext,
    onPrevious,
    onFinish,
    onClose
  } = props;

  const { currentStep, setCurrentStep, nextStep, previousStep } = useShowcase(initialStep);
  const [modalState, setModalState] = React.useState<boolean>(true);

  const title = useFirstChildrenProps<ShowcaseTitleProps>(children, ShowcaseTitle);

  const genericButtons = getReactChildrenComponent(children, ShowcaseGenericButtons).map(child => ({
    ...child.props,
    lastButton: getReactFirstChildrenProps<ShowcaseImageProps>(child?.props?.children, ShowcaseLastButton),
    nextButton: getReactFirstChildrenProps<ShowcaseTextProps>(child?.props?.children, ShowcaseNextButton),
    previousButton: getReactFirstChildrenProps<ShowcaseTextProps>(child?.props?.children, ShowcasePreviousButton),
    closeButton: getReactFirstChildrenProps<ShowcaseImageProps>(child?.props?.children, ShowcaseCloseButton)
  }))?.[0] as ShowcaseButtons;

  const steps = getReactChildrenComponent(children, ShowcaseStep).map(child => ({
    ...child?.props,
    image: getReactFirstChildrenProps<ShowcaseImageProps>(child?.props?.children, ShowcaseImage),
    text: getReactFirstChildrenProps<ShowcaseTextProps>(child?.props?.children, ShowcaseText),
    stepButtons: getReactFirstChildrenProps<ShowcaseButtons>(child?.props?.children, ShowcaseStepButtons)
  })) as ShowcaseStepPropsInternal[];

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

  const contextValue = React.useMemo<ShowcaseContextProps>(
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

  if (!modalState) {
    return null;
  }

  return (
    <Portal target='houston-showcase'>
      <Overlay visible>
        <ModalBase aria-modal className={cx(className, size && `--showcase-size-${size}`)}>
          <ShowcaseContextProvider value={contextValue}>
            <div className='__card'>
              <Header />

              <div className='__card-content'>
                <Steps />
              </div>

              <div className='__card-actions'>
                <CallToActions />
              </div>
            </div>
          </ShowcaseContextProvider>
        </ModalBase>
      </Overlay>
    </Portal>
  );
};

const ShowcaseWrapper = styled(Showcase, { label: 'houston-showcase' })`
  ${({ theme }) => {
    return css`
      width: ${modalSizes.large}px;

      ${theme.breakpoints.down('lg')} {
        width: ${modalSizes.medium}px;
      }

      ${theme.breakpoints.down('sm')} {
        width: ${modalSizes.small}px;
      }

      & .__card: {
        display: 'flex';
        flexDirection: column;
        width: 100%;
        box-shadow': none;

        & .__card-content: {
          box-sizing: border-box;
          width: 100%;
          padding: 0;
          overflow: auto;
        }

        & .__card-actions: {
          width: 100%;
          padding: 0;
          position: relative;
          z-index: 1000;
          background: #fff;
        }
      }

      &.--showcase-size-medium: {
        width: ${modalSizes.medium}px;
      }

      &.--showcase-size-small: {
        width: ${modalSizes.small}px;
      }
    `;
  }}
`;

export default nestedComponent(React.memo(ShowcaseWrapper), {
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
