import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { useContextSelector } from 'use-context-selector';
import TableContext from '../context';
import TableLoading from '../Loading';
var TableBody = React.memo(function (_a) {
    var children = _a.children;
    var loading = useContextSelector(TableContext, function (context) { return context.loading; });
    var loadingText = useContextSelector(TableContext, function (context) { return context.loadingText; });
    return _jsx("tbody", { children: loading ? _jsx(TableLoading, { text: loadingText }, void 0) : children }, void 0);
});
export default TableBody;
