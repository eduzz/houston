import { __assign, __read, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';
import createUseStyles from '../../styles/createUseStyles';
import TableContext from '../context';
var cellKeyIncremeter = 0;
var useStyles = createUseStyles(function (theme) { return ({
    root: {
        padding: '12px 20px',
        borderTop: "1px solid " + theme.colors.grey[200],
        fontSize: theme.textSize('normal'),
        color: theme.colors.grey[600],
        fontWeight: theme.fontWeight('regular'),
        lineHeight: theme.lineHeight('normal')
    },
    rootSmall: {
        padding: '8px 12px',
        fontSize: theme.textSize('small')
    }
}); });
var TableCell = React.memo(function (_a) {
    var children = _a.children, className = _a.className, mobileSize = _a.mobileSize, mobileAlign = _a.mobileAlign, columnLabel = _a.columnLabel, onClick = _a.onClick, onDoubleClick = _a.onDoubleClick, align = _a.align, props = __rest(_a, ["children", "className", "mobileSize", "mobileAlign", "columnLabel", "onClick", "onDoubleClick", "align"]);
    var classes = useStyles();
    var _b = __read(React.useState(function () { return "cell-" + ++cellKeyIncremeter; }), 1), cellKey = _b[0];
    var cellRef = React.useRef();
    var label = useContextSelector(TableContext, function (context) { return context.rowMapLabel[cellKey]; });
    var tableSize = useContextSelector(TableContext, function (context) { return context.size; });
    React.useEffect(function () {
        cellRef.current.setAttribute('cell-key', cellKey);
    }, [cellKey]);
    return (_jsxs("td", __assign({}, props, { onClick: onClick, onDoubleClick: onDoubleClick, className: clsx(classes.root, tableSize === 'small' && classes.rootSmall, className, "cell-size-" + (mobileSize !== null && mobileSize !== void 0 ? mobileSize : 'auto'), "cell-align-" + (align !== null && align !== void 0 ? align : 'left'), mobileAlign && "cell-mobile-align-" + mobileAlign), ref: cellRef }, { children: [_jsx("span", __assign({ className: 'table-label-mobile' }, { children: columnLabel !== null && columnLabel !== void 0 ? columnLabel : label }), void 0), children] }), void 0));
});
export default TableCell;
