import * as React from 'react';

import { Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import FinishIcon from '@eduzz/houston-icons/Done';
import styled, { css } from '@eduzz/houston-styles';

import Button from '../../../Button';
import { useFirstChildrenProps } from '../../../hooks/useChildrenProps';
import ShowcaseCloseButton from '../../CloseButton';
import { useShowcaseContext } from '../../context';
import ShowcaseLastStep, { ShowcaseLastStepProps } from '../../LastButton';
import ShowcaseNextStep, { ShowcaseNextStepProps } from '../../NextButton';
import ShowcasePreviousStep, { ShowcasePreviousStepProps } from '../../PreviousButton';

const StepButtons = (buttons: React.ReactNode[] = [], hideCloseButton?: boolean) => {
  const { steps, currentStep, size, onNextStep, onPreviousStep, handleClose, handleFinish } = useShowcaseContext();

  const theme = useTheme();
  const isMobile = useMediaQuery<Theme>(theme.breakpoints.down('sm'));

  const lastButton = useFirstChildrenProps<ShowcaseLastStepProps>(buttons, ShowcaseLastStep);
  const nextButton = useFirstChildrenProps<ShowcaseNextStepProps>(buttons, ShowcaseNextStep);
  const previousButton = useFirstChildrenProps<ShowcasePreviousStepProps>(buttons, ShowcasePreviousStep);
  const closeButton = useFirstChildrenProps<ShowcasePreviousStepProps>(buttons, ShowcaseCloseButton);
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === steps.length;
  const isSingleStep = steps.length === 1;

  if (size === 'small' || isMobile) {
    return (
      <div>
        {isSingleStep ? (
          <div className='standard-buttons'>
            <Button variant='contained' onClick={handleFinish}>
              {lastButton?.label || 'Ok, entendi!'}
            </Button>
          </div>
        ) : (
          <div className='mobile-buttons'>
            {!isFirstStep && <div className='arrow arrow-left' onClick={onPreviousStep} />}
            <span className='step-counter'>
              {currentStep}/{steps.length}
            </span>
            {isLastStep ? (
              <FinishIcon className='finish-button' size='md' onClick={handleFinish} />
            ) : (
              <div className='arrow arrow-right' onClick={onNextStep} />
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {isSingleStep && (
        <div className='standard-buttons'>
          <Button variant='contained' onClick={handleFinish}>
            {lastButton?.label || 'Ok, entendi!'}
          </Button>
        </div>
      )}

      {steps.length > 1 &&
        currentStep < steps.length && [
          <div key='close-button' className='close-button'>
            {!hideCloseButton && (
              <Button className='--secondary-color' variant='text' onClick={handleClose}>
                {closeButton?.label || 'Fechar'}
              </Button>
            )}
          </div>,
          <div key='standard-buttons' className='standard-buttons'>
            {!isFirstStep && (
              <Button className='--secondary-color' variant='text' onClick={onPreviousStep}>
                {previousButton?.label || 'Anterior'}
              </Button>
            )}
            <Button variant='contained' onClick={onNextStep}>
              {nextButton?.label || 'Próximo'}
            </Button>
          </div>
        ]}

      {steps.length > 1 && isLastStep && (
        <div className='standard-buttons'>
          {!isFirstStep && (
            <Button className='--secondary-color' variant='text' onClick={onPreviousStep}>
              {previousButton?.label || 'Anterior'}
            </Button>
          )}
          <Button variant='contained' onClick={handleFinish}>
            {lastButton?.label || 'Ok, entendi!'}
          </Button>
        </div>
      )}
    </div>
  );
};

const CallToActions = React.memo(() => {
  const { steps, currentStep, genericButtons } = useShowcaseContext();

  const formatChildrenToNodeArray = (children: React.ReactNode) => {
    const isNodeArray = Array.isArray(children);
    if (isNodeArray) return children;
    if (!isNodeArray && children) return [children];
    return [];
  };

  const specificButtons = formatChildrenToNodeArray(steps[currentStep - 1]?.stepButtons?.children);
  const nonSpecificButtons = formatChildrenToNodeArray(genericButtons?.children);
  const hideCloseButton = genericButtons?.hideCloseButton || steps[currentStep - 1]?.stepButtons?.hideCloseButton;
  let buttons: React.ReactNode[] = [];

  if (!!specificButtons?.length) {
    buttons = specificButtons;
  }
  if (!!nonSpecificButtons?.length) {
    buttons = nonSpecificButtons;
  }

  return StepButtons(buttons, hideCloseButton);
});

export default styled(CallToActions, { label: 'houston-showcase-call-to-actions' })`
  ${({ theme }) => {
    return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 32px 24px 24px;

    &.--padding-size-small: {
      padding: 32px 16px 16px;
    }

    ${theme.breakpoints.down('xs')} {
      padding: 12px 16px;
    }

    & button: {
      whiteSpace: nowrap;

      &.--secondary-color: {
        color: ${theme.neutralColor.high.dark};
      }
    }

    '& .close-button': {
      & span: {
        display: flex;
        justify-content: flex-start;
      }
    }

    & .standard-buttons: {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      & button: {
        marginLeft: 8px;
      }
    }

    & .mobile-buttons: {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height': 24px;

      & .arrow: {
        border-style: solid;
        border-color: ${theme.neutralColor.high.dark};
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        height: 0.5px;
        cursor: pointer;
      }

      & .arrow-left: {
        transform: rotate(135deg);
      }

      & .arrow-right: {
        transform: rotate(-45deg);
        margin-left: auto;
      }

      & .finish-button: {
        cursor: pointer;
        margin-left: auto;
      }

      & .step-counter: {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    `;
  }}
`;
