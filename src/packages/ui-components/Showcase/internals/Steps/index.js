import { __assign, __read } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import clsx from 'clsx';
import createUseStyles from '../../../styles/createUseStyles';
import Typography from '../../../Typography';
import { useShowcaseContext } from '../../context';
var useStyles = createUseStyles(function (theme) {
    var _a;
    return ({
        root: function (_a) {
            var _b;
            var margin = _a.margin, modalSizes = _a.modalSizes, size = _a.size;
            return ({
                overflow: 'hidden',
                '& .steps': (_b = {
                        display: 'flex',
                        marginLeft: margin * -modalSizes[size !== null && size !== void 0 ? size : 'large'],
                        transition: 'ease margin 1s'
                    },
                    _b[theme.breakpoints.down('lg')] = {
                        marginLeft: margin * -modalSizes[size !== null && size !== void 0 ? size : 'medium']
                    },
                    _b[theme.breakpoints.down('sm')] = {
                        marginLeft: margin * -modalSizes[size !== null && size !== void 0 ? size : 'small']
                    },
                    _b)
            });
        },
        stepContent: (_a = {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px 24px'
            },
            _a[theme.breakpoints.down('sm')] = {
                padding: '12px 16px'
            },
            _a),
        contentImage: function (props) {
            var _a;
            return (_a = {
                    width: props.imageSizes.large,
                    marginBottom: 24,
                    display: 'flex',
                    justifyContent: 'center'
                },
                _a[theme.breakpoints.down('lg')] = {
                    width: props.imageSizes.medium
                },
                _a[theme.breakpoints.down('sm')] = {
                    width: props.imageSizes.small
                },
                _a['& img'] = {
                    maxWidth: '100%',
                    borderRadius: 4
                },
                _a);
        },
        contentText: function (_a) {
            var _b;
            var imageSizes = _a.imageSizes;
            return (_b = {
                    width: imageSizes.large,
                    alignSelf: 'baseline',
                    fontWeight: 400,
                    fontSize: 16,
                    textAlign: 'left',
                    margin: 0,
                    lineHeight: '24px',
                    letterSpacing: '0.3px',
                    maxHeight: '29vh',
                    overflow: 'auto'
                },
                _b[theme.breakpoints.down('md')] = {
                    width: imageSizes.medium
                },
                _b[theme.breakpoints.down('xs')] = {
                    width: imageSizes.small
                },
                _b);
        },
        mobilePadding: {
            padding: '12px 16px'
        },
        small: function (props) { return ({
            width: props.imageSizes.small
        }); },
        medium: function (props) { return ({
            width: props.imageSizes.medium
        }); }
    });
});
var Steps = React.memo(function () {
    var _a = __read(React.useState(0), 2), margin = _a[0], setMargin = _a[1];
    var _b = useShowcaseContext(), steps = _b.steps, currentStep = _b.currentStep, size = _b.size, modalSizes = _b.modalSizes, imageSizes = _b.imageSizes;
    var classes = useStyles({ margin: margin, imageSizes: imageSizes, modalSizes: modalSizes, size: size });
    React.useEffect(function () {
        setMargin(currentStep - 1);
    }, [currentStep, setMargin, size, modalSizes]);
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsx("div", __assign({ className: 'steps' }, { children: steps.map(function (step, key) {
                var image = step.image, text = step.text;
                return (_jsxs("div", __assign({ className: clsx(size === 'small' && classes.mobilePadding, classes.stepContent) }, { children: [image && (_jsx("div", __assign({ className: clsx(size === 'small' && classes.small, size === 'medium' && classes.medium, classes.contentImage) }, { children: _jsx("img", { src: image.src, alt: image.alt }, void 0) }), void 0)), _jsx(Typography, __assign({ className: clsx(size === 'small' && classes.small, classes.contentText) }, { children: text === null || text === void 0 ? void 0 : text.children }), void 0)] }), key));
            }) }), void 0) }), void 0));
});
export default Steps;
