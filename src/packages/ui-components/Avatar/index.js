import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import AvatarMUI from '@mui/material/Avatar';
import clsx from 'clsx';
import AvatarOutline from '@eduzz/houston-icons/AvatarOutline';
import AvatarSolid from '@eduzz/houston-icons/AvatarSolid';
import createUseStyles from '../styles/createUseStyles';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
var sizes = { small: 40, middle: 60, large: 80 };
var useStyles = createUseStyles(function (theme) { return ({
    root: function (_a) {
        var size = _a.size;
        return ({
            display: 'inline-flex',
            background: 'none',
            border: "2px solid " + theme.colors.grey[500],
            color: theme.colors.grey[500],
            fontWeight: theme.fontWeight('semibold'),
            width: size,
            height: size,
            '&.--icon': {
                alignItems: 'flex-end',
                borderWidth: 2,
                '& span.houston-icon': {
                    position: 'relative',
                    top: 5
                }
            },
            '&.--filled': {
                background: theme.colors.grey[500],
                color: 'white',
                borderWidth: 4,
                '& span.houston-icon': {
                    color: 'white',
                    top: '7px !important'
                }
            },
            '&.--image': {
                borderWidth: 1
            }
        });
    },
    small: function (_a) {
        var size = _a.size;
        return ({
            width: size !== null && size !== void 0 ? size : sizes.small,
            height: size !== null && size !== void 0 ? size : sizes.small,
            fontSize: theme.textSize('small'),
            borderWidth: 2
        });
    },
    middle: function (_a) {
        var size = _a.size;
        return ({
            width: size !== null && size !== void 0 ? size : sizes.middle,
            height: size !== null && size !== void 0 ? size : sizes.middle,
            fontSize: theme.textSize('medium')
        });
    },
    large: function (_a) {
        var size = _a.size;
        return ({
            width: size !== null && size !== void 0 ? size : sizes.large,
            height: size !== null && size !== void 0 ? size : sizes.large,
            fontSize: theme.textSize('x-large')
        });
    }
}); });
var Avatar = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.size, size = _b === void 0 ? 'middle' : _b, _c = _a.type, type = _c === void 0 ? 'icon' : _c, filled = _a.filled, src = _a.src, rest = __rest(_a, ["children", "className", "size", "type", "filled", "src"]);
    var hasIcon = type === 'icon';
    var sizeIsNumber = typeof size === 'number';
    var classes = useStyles({ size: sizeIsNumber ? size : null });
    var sizeClasses = React.useMemo(function () { return ({ small: classes.small, middle: classes.middle, large: classes.large }); }, [classes.large, classes.middle, classes.small]);
    var iconRender = React.useMemo(function () {
        var currentSize = (sizeIsNumber ? size : sizes[size]) - 4;
        if (filled) {
            return _jsx(AvatarSolid, { size: currentSize }, void 0);
        }
        return _jsx(AvatarOutline, { size: currentSize }, void 0);
    }, [filled, size, sizeIsNumber]);
    var styles = React.useMemo(function () {
        return clsx(classes.root, !sizeIsNumber && sizeClasses[size], hasIcon && '--icon', filled && '--filled', src && '--image', className);
    }, [className, classes.root, filled, hasIcon, size, sizeClasses, sizeIsNumber, src]);
    return (_jsxs(AvatarMUI, __assign({}, rest, { src: src, className: styles }, { children: [hasIcon && iconRender, type === 'text' && children] }), void 0));
};
export default withHoustonTheme(React.memo(Avatar));
