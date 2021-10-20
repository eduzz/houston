import * as React from 'react';
import { useContextSelector } from 'use-context-selector';
import TableRowContext from '../Row/context';
var TableActionOption = React.memo(function (_a) {
    var children = _a.children, disabled = _a.disabled, onClick = _a.onClick, icon = _a.icon;
    var registerAction = useContextSelector(TableRowContext, function (context) { return context.registerAction; });
    React.useEffect(function () {
        var unregister = registerAction({ disabled: disabled, onClick: onClick, icon: icon, content: children });
        return function () { return unregister(); };
    }, [children, disabled, onClick, icon, registerAction]);
    return null;
});
export default TableActionOption;
