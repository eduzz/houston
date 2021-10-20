import { __assign, __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import clsx from 'clsx';
import createUseStyles from '../../styles/createUseStyles';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import ProgressBar from './ProgressBar';
import StepIcon from './StepIcon';
var useStyles = createUseStyles({
    root: {
        padding: '21px 20px 16px',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        justifyContent: 'space-between'
    }
});
var ProgressLine = function (_a) {
    var steps = _a.steps, _b = _a.currentStep, currentStep = _b === void 0 ? 0 : _b, props = __rest(_a, ["steps", "currentStep"]);
    var classes = useStyles();
    var progress = ((currentStep + 1) / steps.length) * 100;
    return (_jsxs(_Fragment, { children: [_jsx(Stepper, __assign({ className: clsx([classes.root, !!props.className && props.className]), activeStep: currentStep, connector: null }, { children: steps.map(function (step, index) { return (_jsx(Step, { children: _jsx(StepLabel, __assign({ icon: step.icon || index + 1, StepIconComponent: StepIcon, error: step.error }, { children: step.label }), void 0) }, "progress-step-" + index)); }) }), void 0), _jsx(ProgressBar, { progress: progress }, void 0)] }, void 0));
};
export default withHoustonTheme(React.memo(ProgressLine));
