import * as React from 'react';

const useShowcase = (initialStep?: number) => {
  const [currentStep, setCurrentStep] = React.useState<number>(initialStep ? initialStep : 1);

  const nextStep = React.useCallback(() => setCurrentStep(prevState => prevState + 1), []);
  const previousStep = React.useCallback(() => setCurrentStep(prevState => prevState - 1), []);

  return { nextStep, previousStep, setCurrentStep, currentStep };
};

export default useShowcase;
