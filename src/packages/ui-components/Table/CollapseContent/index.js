import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import CollapseMUI from '@mui/material/Collapse';
import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';
import TableRowContext from '../Row/context';
import TableCollapseContext from './context';
var CollapseContent = React.memo(function (_a) {
    var visible = _a.visible;
    var data = useContextSelector(TableRowContext, function (context) { return context.data; });
    var index = useContextSelector(TableRowContext, function (context) { return context.index; });
    var collapse = useContextSelector(TableRowContext, function (context) { return context.collapse; });
    var onCollapseEnter = React.useCallback(function () { return collapse.onOpen && collapse.onOpen(data, index); }, [collapse, data, index]);
    var onCollapseClose = React.useCallback(function () { return collapse.onClose && collapse.onClose(data, index); }, [collapse, data, index]);
    return (_jsx("tr", __assign({ className: clsx('table-collapse', visible && 'table-collapse-opened', (collapse === null || collapse === void 0 ? void 0 : collapse.disableBackground) && 'table-collapse-no-background', (collapse === null || collapse === void 0 ? void 0 : collapse.disabledPadding) && 'table-collapse-no-padding') }, { children: _jsx("td", __assign({ colSpan: 1000 }, { children: _jsx(CollapseMUI, __assign({ in: visible && !(collapse === null || collapse === void 0 ? void 0 : collapse.disabled), timeout: 350, onEntered: onCollapseEnter, onExited: onCollapseClose, unmountOnExit: true }, { children: _jsx("div", __assign({ className: 'table-collapse-content' }, { children: _jsx(TableCollapseContext.Provider, __assign({ value: { isCollapseContent: collapse !== null } }, { children: collapse === null || collapse === void 0 ? void 0 : collapse.content }), void 0) }), void 0) }), void 0) }), void 0) }), void 0));
});
export default CollapseContent;
