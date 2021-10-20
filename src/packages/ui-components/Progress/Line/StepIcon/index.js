import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Check from '@mui/icons-material/Check';
import Warning from '@mui/icons-material/Warning';
import clsx from 'clsx';
import createUseStyles from '../../../styles/createUseStyles';
var useStyles = createUseStyles(function (theme) { return ({
    root: {
        width: 40,
        height: 40,
        color: theme.colors.grey[300],
        backgroundColor: theme.colors.grey[200],
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
        fontSize: theme.textSize('default'),
        fontWeight: theme.fontWeight('semibold')
    },
    finished: {
        backgroundColor: theme.colors.success.main,
        fontWeight: theme.fontWeight('semibold'),
        color: '#fff'
    },
    check: {
        fontSize: theme.textSize('default')
    },
    warning: {
        color: theme.colors.error.main
    }
}); });
var StepIcon = function (_a) {
    var _b;
    var icon = _a.icon, active = _a.active, completed = _a.completed, error = _a.error;
    var classes = useStyles();
    return (_jsxs(_Fragment, { children: [error && _jsx(Warning, { className: classes.warning }, void 0), !error && (_jsxs("div", __assign({ className: clsx(classes.root, (_b = {},
                    _b[classes.finished] = active || completed,
                    _b)) }, { children: [completed && _jsx(Check, { className: classes.check }, void 0), !completed && icon] }), void 0))] }, void 0));
};
export default StepIcon;
