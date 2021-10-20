import { __assign, __read } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import * as React from 'react';
import AlertMUI from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import useBoolean from '@eduzz/houston-hooks/useBoolean';
import Button from '../Button';
import nestedComponent from '../Helpers/nestedComponent';
import { useChildrenProps } from '../hooks/useChildrenProps';
import AlertAction from './Action';
import useStyles from './styles';
import AlertTitle from './Title';
var alertActionIncrementer = 0;
var Alert = function (props) {
    var id = props.id, className = props.className, children = props.children, _a = props.type, type = _a === void 0 ? 'success' : _a, icon = props.icon, onClose = props.onClose, closable = props.closable, multiline = props.multiline;
    var alertProps = { id: id, className: className, severity: type, icon: icon, onClose: onClose };
    var classes = useStyles();
    var _b = __read(useBoolean(false), 4), hide = _b[0], setHide = _b[3];
    var actions = useChildrenProps(children, AlertAction).map(function (props) { return (__assign(__assign({}, props), { id: "action-" + alertActionIncrementer++ })); });
    var buttonActions = React.useMemo(function () {
        return actions === null || actions === void 0 ? void 0 : actions.map(function (act, index) {
            var buttonProps = __assign({}, act);
            delete buttonProps.label;
            return (_createElement(Button, __assign({}, buttonProps, { key: "alert-action-" + index }), act.label));
        });
    }, [actions]);
    var renderActions = React.useMemo(function () {
        if (multiline)
            return false;
        if (!!actions.length)
            return _jsx("div", __assign({ className: classes.controlButtons }, { children: buttonActions }), void 0);
        return null;
    }, [multiline, actions, classes, buttonActions]);
    return (_jsx(Collapse, __assign({ in: !hide, timeout: 500 }, { children: _jsxs(AlertMUI, __assign({}, alertProps, { onClose: closable ? setHide : onClose, action: renderActions }, { children: [children, multiline && buttonActions.length > 0 && (_jsx("div", __assign({ className: classes.controlButtonsMultiline }, { children: buttonActions }), void 0))] }), void 0) }), void 0));
};
export default nestedComponent(React.memo(Alert), { Title: AlertTitle, Action: AlertAction });
