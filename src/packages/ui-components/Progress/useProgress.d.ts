import * as React from 'react';
declare const useProgress: () => {
    nextStep: () => void;
    backStep: () => void;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    currentStep: number;
};
export default useProgress;
