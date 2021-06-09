import * as React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import Button from '../../../Button';
import { useFirstChildrenProps } from '../../../hooks/useChildrenProps';
import ShowcaseCloseButton from '../../CloseButton';
import { useShowcaseContext } from '../../context';
import ShowcaseLastStep, { IShowcaseLastStepProps } from '../../LastButton';
import ShowcaseNextStep, { IShowcaseNextStepProps } from '../../NextButton';
import ShowcasePreviousStep, { IShowcasePreviousStepProps } from '../../PreviousButton';

const useStyles = makeStyles(() =>
  createStyles({
    ctas: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '32px 24px 24px',

      '& button': {
        whiteSpace: 'nowrap',

        '&.--secondary-color': {
          color: '#546E7A'
        }
      },

      '& .close-button': {
        '& span': {
          display: 'flex',
          justifyContent: 'flex-start'
        }
      },

      '& .standard-buttons': {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',

        '& button': {
          marginLeft: 8
        }
      },

      '& .mobile-buttons': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',

        '& .arrow-left': {
          border: 'solid #546E7A',
          borderWidth: '0 3px 3px 0',
          display: 'inline-block',
          padding: 3,
          transform: 'rotate(135deg)',
          height: '0.5px',
          cursor: 'pointer'
        },

        '& .arrow-right': {
          border: 'solid #546E7A',
          borderWidth: '0 3px 3px 0',
          display: 'inline-block',
          padding: 3,
          transform: 'rotate(-45deg)',
          height: '0.5px',
          cursor: 'pointer'
        }
      }
    }
  })
);

const StepButtons = (buttons: React.ReactNode[] = []) => {
  const { steps, currentStep, breakpoint, onNextStep, onPreviousStep, handleClose, handleFinish } =
    useShowcaseContext();
  const classes = useStyles();

  const lastButton = useFirstChildrenProps<IShowcaseLastStepProps>(buttons, ShowcaseLastStep);
  const nextButton = useFirstChildrenProps<IShowcaseNextStepProps>(buttons, ShowcaseNextStep);
  const previousButton = useFirstChildrenProps<IShowcasePreviousStepProps>(buttons, ShowcasePreviousStep);
  const closeButton = useFirstChildrenProps<IShowcasePreviousStepProps>(buttons, ShowcaseCloseButton);
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === steps.length;
  const isSingleStep = steps.length === 1;

  if (breakpoint === 'small') {
    return (
      <div className={classes.ctas}>
        {isSingleStep ? (
          <div className='standard-buttons'>
            <Button variant='contained' onClick={() => handleFinish()}>
              {lastButton?.label ? lastButton.label : 'Ok, entendi!'}
            </Button>
          </div>
        ) : (
          <div className='mobile-buttons'>
            <div>{!isFirstStep && <div className='arrow-left' onClick={() => onPreviousStep()} />}</div>
            <span>
              {currentStep}/{steps.length}
            </span>
            <div>{!isLastStep && <div className='arrow-right' onClick={() => onNextStep()} />}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={classes.ctas}>
      {isSingleStep && (
        <div className='standard-buttons'>
          <Button variant='contained' onClick={() => handleFinish()}>
            {lastButton?.label ? lastButton.label : 'Ok, entendi!'}
          </Button>
        </div>
      )}

      {steps.length > 1 &&
        currentStep < steps.length && [
          <div key='close-button' className='close-button'>
            <Button className='--secondary-color' variant='text' onClick={() => handleClose()}>
              {closeButton?.label ? closeButton.label : 'Fechar'}
            </Button>
          </div>,
          <div key='standard-buttons' className='standard-buttons'>
            {!isFirstStep && (
              <Button className='--secondary-color' variant='text' onClick={() => onPreviousStep()}>
                {previousButton?.label ? previousButton.label : 'Anterior'}
              </Button>
            )}
            <Button variant='contained' onClick={() => onNextStep()}>
              {nextButton?.label ? nextButton.label : 'Próximo'}
            </Button>
          </div>
        ]}

      {steps.length > 1 && isLastStep && (
        <div className='standard-buttons'>
          {!isFirstStep && (
            <Button className='--secondary-color' variant='text' onClick={() => onPreviousStep()}>
              {previousButton?.label ? previousButton.label : 'Anterior'}
            </Button>
          )}
          <Button variant='contained' onClick={() => handleFinish()}>
            {lastButton?.label ? lastButton.label : 'Ok, entendi!'}
          </Button>
        </div>
      )}
    </div>
  );
};

const CallToActions = () => {
  const { steps, currentStep, genericButtons } = useShowcaseContext();

  const specificButtons =
    (steps[currentStep - 1]?.stepButtons?.children as React.ReactNode[]) || ([] as React.ReactNode[]);
  const nonspecificButtons = (genericButtons?.children as React.ReactNode[]) || ([] as React.ReactNode[]);

  if (!!specificButtons?.length) {
    return StepButtons(specificButtons);
  }

  if (!!nonspecificButtons?.length) {
    return StepButtons(nonspecificButtons);
  }

  return StepButtons();
};

export default CallToActions;
