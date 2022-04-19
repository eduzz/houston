import * as React from 'react';

import { cx } from '@emotion/css';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper, { StepperProps } from '@mui/material/Stepper';

import createUseStyles from '../../styles/createUseStyles';
import ProgressBar from './ProgressBar';
import StepIcon from './StepIcon';

const useStyles = createUseStyles({
  root: {
    padding: '21px 20px 16px',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    justifyContent: 'space-between'
  }
});

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

const ProgressLine: React.FC<IProgressLineProps> = ({ steps, currentStep = 0, ...props }) => {
  const classes = useStyles();
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <>
      <Stepper
        className={cx([classes.root, !!props.className && props.className])}
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
    </>
  );
};

export default React.memo(ProgressLine);
