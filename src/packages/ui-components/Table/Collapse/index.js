import * as React from 'react';
import { useContextSelector } from 'use-context-selector';
import TableRowContext from '../Row/context';
var TableCollapse = React.memo(function (_a) {
    var onOpen = _a.onOpen, onClose = _a.onClose, disabled = _a.disabled, disableBackground = _a.disableBackground, disabledPadding = _a.disabledPadding, children = _a.children;
    var registerCollapse = useContextSelector(TableRowContext, function (context) { return context.registerCollapse; });
    React.useEffect(function () {
        var unregister = registerCollapse({
            disabled: disabled,
            onOpen: onOpen,
            onClose: onClose,
            disableBackground: disableBackground,
            disabledPadding: disabledPadding,
            content: children
        });
        return function () { return unregister(); };
    }, [children, disabled, registerCollapse, onOpen, onClose, disableBackground, disabledPadding]);
    return null;
});
export default TableCollapse;
