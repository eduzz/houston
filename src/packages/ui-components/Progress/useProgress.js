import { __read } from "tslib";
import * as React from 'react';
var useProgress = function () {
    var _a = __read(React.useState(0), 2), currentStep = _a[0], setCurrentStep = _a[1];
    var nextStep = React.useCallback(function () { return setCurrentStep(function (prevState) { return prevState + 1; }); }, []);
    var backStep = React.useCallback(function () { return setCurrentStep(function (prevState) { return prevState - 1; }); }, []);
    return { nextStep: nextStep, backStep: backStep, setCurrentStep: setCurrentStep, currentStep: currentStep };
};
export default useProgress;
