import { __assign, __read, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import CardMUI from '@mui/material/Card';
import CardActionsMUI from '@mui/material/CardActions';
import CardContentMUI from '@mui/material/CardContent';
import ModalMUI from '@mui/material/Modal';
import clsx from 'clsx';
import { getReactChildrenComponent, getReactFirstChildrenProps } from '../Helpers/functions';
import nestedComponent from '../Helpers/nestedComponent';
import { useFirstChildrenProps } from '../hooks/useChildrenProps';
import createUseStyles from '../styles/createUseStyles';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
import ShowcaseCloseButton from './CloseButton';
import ShowcaseContextProvider from './context';
import ShowcaseGenericButtons from './GenericButtons';
import ShowcaseImage from './Image';
import CallToActions from './internals/CallToActions';
import Header from './internals/Header';
import Steps from './internals/Steps';
import ShowcaseLastButton from './LastButton';
import ShowcaseNextButton from './NextButton';
import ShowcasePreviousButton from './PreviousButton';
import ShowcaseStep from './Step';
import ShowcaseStepButtons from './StepButtons';
import ShowcaseText from './Text';
import ShowcaseTitle from './Title';
import useShowcase from './useShowcase';
var modalSizes = {
    small: 296,
    medium: 468,
    large: 530
};
var imageSizes = {
    small: 264,
    medium: 420,
    large: 482
};
var useStyles = createUseStyles(function (theme) {
    var _a;
    return ({
        modalContent: (_a = {
                width: modalSizes.large,
                position: 'fixed',
                top: '50%',
                left: '50%',
                maxWidth: '100%',
                background: 'white',
                borderRadius: 4,
                transform: 'translate(-50%, -50%)',
                maxHeight: '85vh',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            _a[theme.breakpoints.down('lg')] = {
                width: modalSizes.medium
            },
            _a[theme.breakpoints.down('sm')] = {
                width: modalSizes.small
            },
            _a['& .card-mui'] = {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                boxShadow: 'none',
                '& .card-content-mui': {
                    boxSizing: 'border-box',
                    width: '100%',
                    padding: 0,
                    overflow: 'auto'
                },
                '& .card-actions-mui': {
                    width: '100%',
                    padding: 0,
                    position: 'relative',
                    zIndex: 1000,
                    background: '#fff'
                }
            },
            _a),
        medium: {
            width: modalSizes.medium
        },
        small: {
            width: modalSizes.small
        }
    });
});
var Showcase = function (props) {
    var _a;
    var open = props.open, size = props.size, children = props.children, className = props.className, initialStep = props.initialStep, _b = props.stepCounter, stepCounter = _b === void 0 ? true : _b, _c = props.disableBackdropClick, disableBackdropClick = _c === void 0 ? true : _c, onNext = props.onNext, onPrevious = props.onPrevious, onFinish = props.onFinish, onClose = props.onClose, rest = __rest(props, ["open", "size", "children", "className", "initialStep", "stepCounter", "disableBackdropClick", "onNext", "onPrevious", "onFinish", "onClose"]);
    var classes = useStyles();
    var _d = useShowcase(initialStep), currentStep = _d.currentStep, setCurrentStep = _d.setCurrentStep, nextStep = _d.nextStep, previousStep = _d.previousStep;
    var _e = __read(React.useState(true), 2), modalState = _e[0], setModalState = _e[1];
    var title = useFirstChildrenProps(children, ShowcaseTitle);
    var genericButtons = (_a = getReactChildrenComponent(children, ShowcaseGenericButtons).map(function (child) {
        var _a, _b, _c, _d;
        return (__assign(__assign({}, child.props), { lastButton: getReactFirstChildrenProps((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.children, ShowcaseLastButton), nextButton: getReactFirstChildrenProps((_b = child === null || child === void 0 ? void 0 : child.props) === null || _b === void 0 ? void 0 : _b.children, ShowcaseNextButton), previousButton: getReactFirstChildrenProps((_c = child === null || child === void 0 ? void 0 : child.props) === null || _c === void 0 ? void 0 : _c.children, ShowcasePreviousButton), closeButton: getReactFirstChildrenProps((_d = child === null || child === void 0 ? void 0 : child.props) === null || _d === void 0 ? void 0 : _d.children, ShowcaseCloseButton) }));
    })) === null || _a === void 0 ? void 0 : _a[0];
    var steps = getReactChildrenComponent(children, ShowcaseStep).map(function (child) {
        var _a, _b, _c;
        return (__assign(__assign({}, child === null || child === void 0 ? void 0 : child.props), { image: getReactFirstChildrenProps((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.children, ShowcaseImage), text: getReactFirstChildrenProps((_b = child === null || child === void 0 ? void 0 : child.props) === null || _b === void 0 ? void 0 : _b.children, ShowcaseText), stepButtons: getReactFirstChildrenProps((_c = child === null || child === void 0 ? void 0 : child.props) === null || _c === void 0 ? void 0 : _c.children, ShowcaseStepButtons) }));
    });
    var onNextStep = React.useCallback(function () {
        onNext && onNext(currentStep);
        nextStep();
    }, [nextStep, onNext, currentStep]);
    var onPreviousStep = React.useCallback(function () {
        onPrevious && onPrevious(currentStep);
        previousStep();
    }, [previousStep, onPrevious, currentStep]);
    var handleFinish = React.useCallback(function () {
        onFinish && onFinish();
        setModalState(false);
    }, [onFinish, setModalState]);
    var handleClose = React.useCallback(function (event, reason) {
        if (reason === 'backdropClick' && disableBackdropClick)
            return;
        onClose && onClose(currentStep);
        setModalState(false);
    }, [disableBackdropClick, onClose, currentStep]);
    React.useEffect(function () {
        if (open === undefined) {
            setModalState(true);
            return;
        }
        setModalState(open);
    }, [open]);
    var contextValue = React.useMemo(function () { return ({
        title: title,
        stepCounter: stepCounter,
        steps: steps,
        genericButtons: genericButtons,
        size: size,
        currentStep: currentStep,
        modalSizes: modalSizes,
        imageSizes: imageSizes,
        setCurrentStep: setCurrentStep,
        onNextStep: onNextStep,
        onPreviousStep: onPreviousStep,
        handleFinish: handleFinish,
        handleClose: handleClose
    }); }, [
        title,
        stepCounter,
        steps,
        genericButtons,
        size,
        currentStep,
        setCurrentStep,
        onNextStep,
        onPreviousStep,
        handleFinish,
        handleClose
    ]);
    return (_jsx(ModalMUI, __assign({}, rest, { open: modalState, onClose: handleClose }, { children: _jsx(ShowcaseContextProvider, __assign({ value: contextValue }, { children: _jsx("div", __assign({ className: clsx(className, size && classes[size], classes.modalContent) }, { children: _jsxs(CardMUI, __assign({ className: 'card-mui' }, { children: [_jsx(Header, {}, void 0), _jsx(CardContentMUI, __assign({ className: 'card-content-mui' }, { children: _jsx(Steps, {}, void 0) }), void 0), _jsx(CardActionsMUI, __assign({ disableSpacing: true, className: 'card-actions-mui' }, { children: _jsx(CallToActions, {}, void 0) }), void 0)] }), void 0) }), void 0) }), void 0) }), void 0));
};
export default nestedComponent(withHoustonTheme(React.memo(Showcase)), {
    Title: ShowcaseTitle,
    Step: ShowcaseStep,
    Image: ShowcaseImage,
    Text: ShowcaseText,
    GenericButtons: ShowcaseGenericButtons,
    StepButtons: ShowcaseStepButtons,
    LastButton: ShowcaseLastButton,
    NextButton: ShowcaseNextButton,
    PreviousButton: ShowcasePreviousButton,
    CloseButton: ShowcaseCloseButton
});
