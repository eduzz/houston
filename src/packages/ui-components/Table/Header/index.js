import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { useContextSelector } from 'use-context-selector';
import TableColumn from '../Column';
import TableContext from '../context';
var TableHeader = React.memo(function (_a) {
    var children = _a.children, disabledActionsColumn = _a.disabledActionsColumn;
    var hasActions = useContextSelector(TableContext, function (context) { return context.rows.some(function (r) { return r.hasActions; }); });
    var hasCollapse = useContextSelector(TableContext, function (context) { return context.rows.some(function (r) { return r.hasCollapse; }); });
    var columnActionTitle = useContextSelector(TableContext, function (context) { return context.columnActionTitle; });
    return (_jsx("thead", { children: _jsxs("tr", { children: [children, hasActions && !disabledActionsColumn && (_jsx(TableColumn, __assign({ width: 30, align: 'right' }, { children: columnActionTitle !== null && columnActionTitle !== void 0 ? columnActionTitle : 'Ações' }), void 0)), hasCollapse && _jsx(TableColumn, { width: 30 }, void 0)] }, void 0) }, void 0));
});
export default TableHeader;
