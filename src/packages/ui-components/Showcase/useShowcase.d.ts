import * as React from 'react';
declare const useShowcase: (initialStep?: number) => {
    nextStep: () => void;
    previousStep: () => void;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    currentStep: number;
};
export default useShowcase;
