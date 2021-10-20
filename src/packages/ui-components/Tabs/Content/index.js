import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import MUITab from '@mui/material/Tab';
import { useContextSelector } from 'use-context-selector';
import TabsContext from '../context';
var Content = function (_a) {
    var icon = _a.icon, id = _a.id, className = _a.className, children = _a.children, rest = __rest(_a, ["icon", "id", "className", "children"]);
    var registerTabs = useContextSelector(TabsContext, function (context) { return context.registerTabs; });
    React.useEffect(function () {
        var unregister = registerTabs({ id: id, children: children, className: className });
        return function () { return unregister(); };
    }, [children, className, id, registerTabs]);
    return _jsx(MUITab, __assign({ disableRipple: true, icon: icon, id: id ? "tab-" + id : null }, rest), void 0);
};
export default React.memo(Content);
