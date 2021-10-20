import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';
import createUseStyles from '../../styles/createUseStyles';
import TableContext from '../context';
import SortLabel from './SortLabel';
var useStyles = createUseStyles(function (theme) { return ({
    root: {
        padding: '8px 20px',
        borderBottom: "1px solid " + theme.colors.grey[200],
        '&.--collapse': {
            borderBottomColor: theme.colors.grey[300]
        }
    },
    rootSmall: {
        padding: '8px 12px'
    }
}); });
var TableColumn = React.memo(function (_a) {
    var sortableField = _a.sortableField, children = _a.children, className = _a.className, align = _a.align, rest = __rest(_a, ["sortableField", "children", "className", "align"]);
    var registerColumn = useContextSelector(TableContext, function (context) { return context.registerColumn; });
    var onSort = useContextSelector(TableContext, function (context) { return context.onSort; });
    var sort = useContextSelector(TableContext, function (context) { return context.sort; });
    var loading = useContextSelector(TableContext, function (context) { return context.loading; });
    var tableSize = useContextSelector(TableContext, function (context) { return context.size; });
    var isCollapseContent = useContextSelector(TableContext, function (context) { return context.isCollapseContent; });
    var classes = useStyles();
    var cellRef = React.useRef();
    var isSorted = (sort === null || sort === void 0 ? void 0 : sort.field) === sortableField;
    var handleSort = React.useCallback(function () {
        if (!onSort) {
            throw new Error('@eduzz/houston-ui: add the onSort prop to the Table to filter the fields');
        }
        onSort({
            field: sortableField,
            direction: !isSorted || (sort === null || sort === void 0 ? void 0 : sort.direction) === 'desc' ? 'asc' : 'desc'
        });
    }, [onSort, sortableField, isSorted, sort === null || sort === void 0 ? void 0 : sort.direction]);
    React.useEffect(function () {
        var unregister = registerColumn();
        return function () { return unregister(); };
    }, [registerColumn]);
    return (_jsx("th", __assign({ ref: cellRef, className: clsx(classes.root, tableSize === 'small' && classes.rootSmall, className, "column-align-" + (align !== null && align !== void 0 ? align : 'left'), isCollapseContent && '--collapse') }, rest, { children: _jsx(SortLabel, __assign({ sortable: !!sortableField && !isCollapseContent, active: isSorted, disabled: loading, direction: isSorted ? sort === null || sort === void 0 ? void 0 : sort.direction : 'asc', onClick: handleSort }, { children: children }), void 0) }), void 0));
});
export default TableColumn;
