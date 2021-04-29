import * as React from 'react';

import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper, { StepperProps } from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import WrapperTheme from '../../ThemeProvider/WrapperTheme';
import ProgressBar from './ProgressBar';
import StepIcon from './StepIcon';

const useStyles = makeStyles(() => ({
  root: {
    padding: '21px 20px 16px',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    justifyContent: 'space-between'
  }
}));

interface IStep {
  label?: string;
  icon?: React.ReactNode;
  error?: boolean;
}

export type ProgressLinePropsExtends = 'id' | 'className';

export interface IProgressLineProps extends Pick<StepperProps, ProgressLinePropsExtends> {
  steps: IStep[];
  currentStep?: number;
}

const ProgressLine = ({ steps, currentStep = 0, ...props }: IProgressLineProps) => {
  const classes = useStyles();
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <WrapperTheme>
      <Stepper
        className={clsx([classes.root, props.className && props.className])}
        activeStep={currentStep}
        connector={null}
      >
        {steps.map((step, index) => (
          <Step key={`progress-step-${index}`}>
            <StepLabel icon={step.icon || index + 1} StepIconComponent={StepIcon} error={step.error}>
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <ProgressBar progress={progress} />
    </WrapperTheme>
  );
};

export default ProgressLine;
