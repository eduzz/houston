import * as React from 'react';

import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Button from '../../../Button';
import { useFirstChildrenProps } from '../../../hooks/useChildrenProps';
import { useShowcaseContext } from '../../context';
import ShowcaseCloseButton from '../../ShowcaseCloseButton';
import ShowcaseLastStep, { IShowcaseLastStepProps } from '../../ShowcaseLastButton';
import ShowcaseNextStep, { IShowcaseNextStepProps } from '../../ShowcaseNextButton';
import ShowcasePreviousStep, { IShowcasePreviousStepProps } from '../../ShowcasePreviousButton';

const useStyles = makeStyles(() =>
  createStyles({
    ctas: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      padding: '32px 24px 24px',

      '& button': {
        height: 'auto',
        width: 140,
        padding: '9.5px 24px',

        '&.--secondary-color': {
          color: '#546E7A'
        }
      },

      '& .close-button': {
        display: 'flex',
        justifyContent: 'flex-start',

        '& span': {
          display: 'flex',
          justifyContent: 'flex-start'
        }
      },

      '& .standard-buttons': {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
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

const StepButtons = (buttons?: any) => {
  const { steps, currentStep, onNextStep, onPreviousStep, handleClose } = useShowcaseContext();
  const classes = useStyles();

  const lastButton = useFirstChildrenProps<IShowcaseLastStepProps>(buttons, ShowcaseLastStep);
  const nextButton = useFirstChildrenProps<IShowcaseNextStepProps>(buttons, ShowcaseNextStep);
  const previousButton = useFirstChildrenProps<IShowcasePreviousStepProps>(buttons, ShowcasePreviousStep);
  const closeButton = useFirstChildrenProps<IShowcasePreviousStepProps>(buttons, ShowcaseCloseButton);
  const theme = useTheme();
  const isMobile = useMediaQuery<Theme>(theme.breakpoints.down('sm'));

  if (isMobile) {
    return (
      <div className={classes.ctas}>
        <div className='mobile-buttons'>
          <div>{currentStep !== 1 && <div className='arrow-left' onClick={() => onPreviousStep()} />}</div>
          <span>
            {currentStep}/{steps.length}
          </span>
          <div>{currentStep !== steps.length && <div className='arrow-right' onClick={() => onNextStep()} />}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.ctas}>
      {steps.length === 1 && (
        <div className='standard-buttons'>
          <Button variant='contained' onClick={() => handleClose()}>
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
            {currentStep !== 1 && (
              <Button className='--secondary-color' variant='text' onClick={() => onPreviousStep()}>
                {previousButton?.label ? previousButton.label : 'Anterior'}
              </Button>
            )}
            <Button variant='contained' onClick={() => onNextStep()}>
              {nextButton?.label ? nextButton.label : 'Próximo'}
            </Button>
          </div>
        ]}

      {steps.length > 1 && currentStep === steps.length && (
        <div className='standard-buttons'>
          {currentStep !== 1 && (
            <Button className='--secondary-color' variant='text' onClick={() => onPreviousStep()}>
              {previousButton?.label ? previousButton.label : 'Anterior'}
            </Button>
          )}
          <Button variant='contained' onClick={() => handleClose()}>
            {lastButton?.label ? lastButton.label : 'Ok, entendi!'}
          </Button>
        </div>
      )}
    </div>
  );
};

const CallToActions = () => {
  const { steps, currentStep, genericButtons } = useShowcaseContext();

  const specificButtons = steps[currentStep - 1]?.stepButtons?.children as React.ReactNode[];
  const nonspecificButtons = genericButtons.children as React.ReactNode[];

  if (!!specificButtons?.length) {
    return StepButtons(specificButtons);
  }

  if (!!nonspecificButtons?.length) {
    return StepButtons(nonspecificButtons);
  }

  return StepButtons();
};

export default CallToActions;
