import * as React from 'react';

import { Theme, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import FinishIcon from '@eduzz/houston-icons/Done';

import Button from '../../../Button';
import ButtonIcon from '../../../ButtonIcon';
import { useFirstChildrenProps } from '../../../hooks/useChildrenProps';
import createUseStyles from '../../../styles/createUseStyles';
import ShowcaseCloseButton from '../../CloseButton';
import { useShowcaseContext } from '../../context';
import ShowcaseLastStep, { IShowcaseLastStepProps } from '../../LastButton';
import ShowcaseNextStep, { IShowcaseNextStepProps } from '../../NextButton';
import ShowcasePreviousStep, { IShowcasePreviousStepProps } from '../../PreviousButton';

const useStyles = createUseStyles({
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
      position: 'relative',
      display: 'flex',
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
        cursor: 'pointer',
        marginLeft: 'auto'
      },

      '& .finish-button': {
        cursor: 'pointer',
        marginLeft: 'auto'
      },

      '& .step-counter': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    }
  }
});

const StepButtons = (buttons: React.ReactNode[] = [], hideCloseButton?: boolean) => {
  const { steps, currentStep, size, onNextStep, onPreviousStep, handleClose, handleFinish } = useShowcaseContext();
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery<Theme>(theme.breakpoints.down('xs'));

  const lastButton = useFirstChildrenProps<IShowcaseLastStepProps>(buttons, ShowcaseLastStep);
  const nextButton = useFirstChildrenProps<IShowcaseNextStepProps>(buttons, ShowcaseNextStep);
  const previousButton = useFirstChildrenProps<IShowcasePreviousStepProps>(buttons, ShowcasePreviousStep);
  const closeButton = useFirstChildrenProps<IShowcasePreviousStepProps>(buttons, ShowcaseCloseButton);
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === steps.length;
  const isSingleStep = steps.length === 1;

  if (size === 'small' || isMobile) {
    return (
      <div className={classes.ctas}>
        {isSingleStep ? (
          <div className='standard-buttons'>
            <Button variant='contained' onClick={handleFinish}>
              {lastButton?.label ? lastButton.label : 'Ok, entendi!'}
            </Button>
          </div>
        ) : (
          <div className='mobile-buttons'>
            {!isFirstStep && <div className='arrow-left' onClick={onPreviousStep} />}
            <span className='step-counter'>
              {currentStep}/{steps.length}
            </span>
            {isLastStep ? (
              <ButtonIcon className='finish-button' size='small' onClick={handleFinish}>
                <FinishIcon size={24} />
              </ButtonIcon>
            ) : (
              <div className='arrow-right' onClick={onNextStep} />
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={classes.ctas}>
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

  const specificButtons =
    (steps[currentStep - 1]?.stepButtons?.children as React.ReactNode[]) || ([] as React.ReactNode[]);
  const nonSpecificButtons = (genericButtons?.children as React.ReactNode[]) || ([] as React.ReactNode[]);

  const options = [genericButtons?.hideCloseButton, steps[currentStep - 1]?.stepButtons?.hideCloseButton];

  const strategyPattern = (accumulator: boolean, currentValue: boolean) => (currentValue ? currentValue : accumulator);

  const hideCloseButton = options.reduce(strategyPattern, false);

  if (!!specificButtons?.length) {
    return StepButtons(specificButtons, hideCloseButton);
  }

  if (!!nonSpecificButtons?.length) {
    return StepButtons(nonSpecificButtons, hideCloseButton);
  }

  return StepButtons();
});

export default CallToActions;
