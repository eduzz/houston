import { __assign, __read } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { useTableContext } from '../../context';
import CollapseContextProvider from './context';
import Collapse from './Desktop';
import CollapseMobile from './Mobile';
var CollapseBase = React.memo(function (_a) {
    var collapse = _a.collapse, row = _a.row;
    var isMobile = useTableContext().isMobile;
    var _b = __read(React.useState([]), 2), options = _b[0], setOptions = _b[1];
    var _c = __read(React.useState(null), 2), currentRow = _c[0], setCurrentRow = _c[1];
    var _d = __read(React.useState(null), 2), anchorEl = _d[0], setAnchorEl = _d[1];
    var handleSetCurrentRow = React.useCallback(function (event, row) {
        if (row === void 0) { row = null; }
        if (!(row === null || row === void 0 ? void 0 : row.data)) {
            console.error('@eduzz/houston-ui: when the share component is used, the line must offer the property `data`');
        }
        setCurrentRow(row);
        setAnchorEl(event.currentTarget);
        setOptions(row === null || row === void 0 ? void 0 : row.options);
    }, [setAnchorEl]);
    var handleCloseActions = React.useCallback(function () {
        setAnchorEl(null);
        setTimeout(function () {
            setOptions([]);
            setCurrentRow(null);
        }, 200);
    }, [setAnchorEl]);
    if (!(row === null || row === void 0 ? void 0 : row.collapse)) {
        return null;
    }
    return (_jsxs(CollapseContextProvider, __assign({ value: { row: row, collapse: collapse, currentRow: currentRow, options: options, anchorEl: anchorEl, handleCloseActions: handleCloseActions, handleSetCurrentRow: handleSetCurrentRow } }, { children: [isMobile && _jsx(CollapseMobile, {}, void 0), !isMobile && _jsx(Collapse, {}, void 0)] }), void 0));
});
export default CollapseBase;
