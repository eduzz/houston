import { __read } from "tslib";
import * as React from 'react';
var useShowcase = function (initialStep) {
    var _a = __read(React.useState(initialStep ? initialStep : 1), 2), currentStep = _a[0], setCurrentStep = _a[1];
    var nextStep = React.useCallback(function () { return setCurrentStep(function (prevState) { return prevState + 1; }); }, []);
    var previousStep = React.useCallback(function () { return setCurrentStep(function (prevState) { return prevState - 1; }); }, []);
    return { nextStep: nextStep, previousStep: previousStep, setCurrentStep: setCurrentStep, currentStep: currentStep };
};
export default useShowcase;
