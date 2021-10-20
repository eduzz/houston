import { __assign } from "tslib";
import * as React from 'react';
import clsx from 'clsx';
import createUseStyles from '../styles/createUseStyles';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
var useStyles = createUseStyles(function (theme) { return ({
    text: function (props) {
        var _a, _b, _c;
        return ({
            margin: 0,
            fontSize: theme.textSize((_a = props.size) !== null && _a !== void 0 ? _a : 'normal'),
            lineHeight: theme.lineHeight((_b = props.lineHeight) !== null && _b !== void 0 ? _b : 'normal'),
            fontWeight: theme.fontWeight((_c = props.fontWeight) !== null && _c !== void 0 ? _c : 'regular'),
            marginBottom: props.marginBottom ? theme.spacing(2) : null
        });
    },
    secondary: {
        color: theme.colors.grey[500],
        fontSize: theme.textSize('small')
    }
}); });
var Typography = function (props) {
    var _a;
    var classes = useStyles(props);
    var typographyProps = React.useMemo(function () { return ({ id: props === null || props === void 0 ? void 0 : props.id, children: props === null || props === void 0 ? void 0 : props.children, onClick: props === null || props === void 0 ? void 0 : props.onClick }); }, [props === null || props === void 0 ? void 0 : props.children, props === null || props === void 0 ? void 0 : props.id, props === null || props === void 0 ? void 0 : props.onClick]);
    var variantClasses = React.useMemo(function () { return ({
        secondary: classes.secondary
    }); }, [classes.secondary]);
    return React.createElement((_a = props === null || props === void 0 ? void 0 : props.component) !== null && _a !== void 0 ? _a : 'p', __assign(__assign({}, typographyProps), { className: clsx(classes.text, props === null || props === void 0 ? void 0 : props.className, variantClasses[props === null || props === void 0 ? void 0 : props.variant]) }));
};
export default withHoustonTheme(React.memo(Typography));
