import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FinishIcon from '@eduzz/houston-icons/Done';
import Button from '../../../Button';
import { useFirstChildrenProps } from '../../../hooks/useChildrenProps';
import createUseStyles from '../../../styles/createUseStyles';
import ShowcaseCloseButton from '../../CloseButton';
import { useShowcaseContext } from '../../context';
import ShowcaseLastStep from '../../LastButton';
import ShowcaseNextStep from '../../NextButton';
import ShowcasePreviousStep from '../../PreviousButton';
var useStyles = createUseStyles(function (theme) { return ({
    ctas: function (props) {
        var _a;
        return (_a = {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: (props === null || props === void 0 ? void 0 : props.size) === 'small' ? '32px 16px 16px' : '32px 24px 24px'
            },
            _a[theme.breakpoints.down('xs')] = {
                padding: '12px 16px'
            },
            _a['& button'] = {
                whiteSpace: 'nowrap',
                '&.--secondary-color': {
                    color: theme.colors.grey[500]
                }
            },
            _a['& .close-button'] = {
                '& span': {
                    display: 'flex',
                    justifyContent: 'flex-start'
                }
            },
            _a['& .standard-buttons'] = {
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                '& button': {
                    marginLeft: 8
                }
            },
            _a['& .mobile-buttons'] = {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: 24,
                '& .arrow': {
                    borderStyle: 'solid',
                    borderColor: theme.colors.grey[500],
                    borderWidth: '0 3px 3px 0',
                    display: 'inline-block',
                    padding: 3,
                    height: '0.5px',
                    cursor: 'pointer'
                },
                '& .arrow-left': {
                    transform: 'rotate(135deg)'
                },
                '& .arrow-right': {
                    transform: 'rotate(-45deg)',
                    marginLeft: 'auto'
                },
                '& .finish-button': {
                    cursor: 'pointer',
                    marginLeft: 'auto'
                },
                '& .step-counter': {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }
            },
            _a);
    }
}); });
var StepButtons = function (buttons, hideCloseButton) {
    if (buttons === void 0) { buttons = []; }
    var _a = useShowcaseContext(), steps = _a.steps, currentStep = _a.currentStep, size = _a.size, onNextStep = _a.onNextStep, onPreviousStep = _a.onPreviousStep, handleClose = _a.handleClose, handleFinish = _a.handleFinish;
    var classes = useStyles({ size: size });
    var theme = useTheme();
    var isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    var lastButton = useFirstChildrenProps(buttons, ShowcaseLastStep);
    var nextButton = useFirstChildrenProps(buttons, ShowcaseNextStep);
    var previousButton = useFirstChildrenProps(buttons, ShowcasePreviousStep);
    var closeButton = useFirstChildrenProps(buttons, ShowcaseCloseButton);
    var isFirstStep = currentStep === 1;
    var isLastStep = currentStep === steps.length;
    var isSingleStep = steps.length === 1;
    if (size === 'small' || isMobile) {
        return (_jsx("div", __assign({ className: classes.ctas }, { children: isSingleStep ? (_jsx("div", __assign({ className: 'standard-buttons' }, { children: _jsx(Button, __assign({ variant: 'contained', onClick: handleFinish }, { children: (lastButton === null || lastButton === void 0 ? void 0 : lastButton.label) || 'Ok, entendi!' }), void 0) }), void 0)) : (_jsxs("div", __assign({ className: 'mobile-buttons' }, { children: [!isFirstStep && _jsx("div", { className: 'arrow arrow-left', onClick: onPreviousStep }, void 0), _jsxs("span", __assign({ className: 'step-counter' }, { children: [currentStep, "/", steps.length] }), void 0), isLastStep ? (_jsx(FinishIcon, { className: 'finish-button', size: 24, onClick: handleFinish }, void 0)) : (_jsx("div", { className: 'arrow arrow-right', onClick: onNextStep }, void 0))] }), void 0)) }), void 0));
    }
    return (_jsxs("div", __assign({ className: classes.ctas }, { children: [isSingleStep && (_jsx("div", __assign({ className: 'standard-buttons' }, { children: _jsx(Button, __assign({ variant: 'contained', onClick: handleFinish }, { children: (lastButton === null || lastButton === void 0 ? void 0 : lastButton.label) || 'Ok, entendi!' }), void 0) }), void 0)), steps.length > 1 &&
                currentStep < steps.length && [
                _jsx("div", __assign({ className: 'close-button' }, { children: !hideCloseButton && (_jsx(Button, __assign({ className: '--secondary-color', variant: 'text', onClick: handleClose }, { children: (closeButton === null || closeButton === void 0 ? void 0 : closeButton.label) || 'Fechar' }), void 0)) }), 'close-button'),
                _jsxs("div", __assign({ className: 'standard-buttons' }, { children: [!isFirstStep && (_jsx(Button, __assign({ className: '--secondary-color', variant: 'text', onClick: onPreviousStep }, { children: (previousButton === null || previousButton === void 0 ? void 0 : previousButton.label) || 'Anterior' }), void 0)), _jsx(Button, __assign({ variant: 'contained', onClick: onNextStep }, { children: (nextButton === null || nextButton === void 0 ? void 0 : nextButton.label) || 'Próximo' }), void 0)] }), 'standard-buttons')
            ], steps.length > 1 && isLastStep && (_jsxs("div", __assign({ className: 'standard-buttons' }, { children: [!isFirstStep && (_jsx(Button, __assign({ className: '--secondary-color', variant: 'text', onClick: onPreviousStep }, { children: (previousButton === null || previousButton === void 0 ? void 0 : previousButton.label) || 'Anterior' }), void 0)), _jsx(Button, __assign({ variant: 'contained', onClick: handleFinish }, { children: (lastButton === null || lastButton === void 0 ? void 0 : lastButton.label) || 'Ok, entendi!' }), void 0)] }), void 0))] }), void 0));
};
var CallToActions = React.memo(function () {
    var _a, _b, _c, _d;
    var _e = useShowcaseContext(), steps = _e.steps, currentStep = _e.currentStep, genericButtons = _e.genericButtons;
    var formatChildrenToNodeArray = function (children) {
        var isNodeArray = Array.isArray(children);
        if (isNodeArray)
            return children;
        if (!isNodeArray && children)
            return [children];
        return [];
    };
    var specificButtons = formatChildrenToNodeArray((_b = (_a = steps[currentStep - 1]) === null || _a === void 0 ? void 0 : _a.stepButtons) === null || _b === void 0 ? void 0 : _b.children);
    var nonSpecificButtons = formatChildrenToNodeArray(genericButtons === null || genericButtons === void 0 ? void 0 : genericButtons.children);
    var hideCloseButton = (genericButtons === null || genericButtons === void 0 ? void 0 : genericButtons.hideCloseButton) || ((_d = (_c = steps[currentStep - 1]) === null || _c === void 0 ? void 0 : _c.stepButtons) === null || _d === void 0 ? void 0 : _d.hideCloseButton);
    var buttons = [];
    if (!!(specificButtons === null || specificButtons === void 0 ? void 0 : specificButtons.length)) {
        buttons = specificButtons;
    }
    if (!!(nonSpecificButtons === null || nonSpecificButtons === void 0 ? void 0 : nonSpecificButtons.length)) {
        buttons = nonSpecificButtons;
    }
    return StepButtons(buttons, hideCloseButton);
});
export default CallToActions;
