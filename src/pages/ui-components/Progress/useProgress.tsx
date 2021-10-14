import * as React from 'react';

const useProgress = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const nextStep = React.useCallback(() => setCurrentStep(prevState => prevState + 1), []);
  const backStep = React.useCallback(() => setCurrentStep(prevState => prevState - 1), []);

  return { nextStep, backStep, setCurrentStep, currentStep };
};

export default useProgress;
