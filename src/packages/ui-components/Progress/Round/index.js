import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CircularProgressMUI from '@mui/material/CircularProgress';
import clsx from 'clsx';
import createUseStyles from '../../styles/createUseStyles';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import Typography from '../../Typography';
var useStyles = createUseStyles(function (theme) { return ({
    root: {
        position: 'relative',
        display: 'inline-flex'
    },
    circularProgressBackground: {
        opacity: 0.2
    },
    circularProgress: {
        '& svg': {
            color: theme.colors.success.main
        }
    },
    progress: {
        position: 'absolute'
    },
    progressError: {
        '& svg': {
            color: theme.colors.error.main
        }
    },
    progressIndicator: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        '& p': {
            color: theme.colors.grey[500]
        }
    }
}); });
var ProgressRound = function (_a) {
    var _b = _a.currentStep, currentStep = _b === void 0 ? 0 : _b, maxSteps = _a.maxSteps, type = _a.type, error = _a.error;
    var classes = useStyles();
    var value = (currentStep / maxSteps) * 100;
    var progress = type === 'percentage' ? value + "%" : currentStep + "/" + maxSteps;
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(CircularProgressMUI, { variant: 'determinate', size: 90, value: 100, className: clsx(classes.circularProgress, classes.circularProgressBackground, error && classes.progressError), color: 'primary' }, void 0), _jsx(CircularProgressMUI, { variant: 'determinate', size: 90, value: value, className: clsx(classes.circularProgress, classes.progress, error && classes.progressError) }, void 0), _jsx("div", __assign({ className: classes.progressIndicator }, { children: _jsx(Typography, __assign({ size: 'default' }, { children: progress }), void 0) }), void 0)] }), void 0));
};
export default withHoustonTheme(ProgressRound);
