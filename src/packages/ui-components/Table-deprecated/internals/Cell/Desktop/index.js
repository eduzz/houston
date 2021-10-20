import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import clsx from 'clsx';
import { truncateText } from '../../../../Helpers/functions';
import createUseStyles from '../../../../styles/createUseStyles';
var useStyles = createUseStyles(function (theme) { return ({
    list: {
        borderBottom: 0
    },
    hasEndAdornment: {
        borderBottom: 0
    },
    fixed: {
        position: 'sticky',
        top: 0,
        right: 0,
        left: 0,
        background: theme.colors.grey[100]
    }
}); });
var Cell = React.memo(function (props) {
    var classes = useStyles();
    var cellProps = React.useMemo(function () { return ({
        id: props === null || props === void 0 ? void 0 : props.id,
        padding: props === null || props === void 0 ? void 0 : props.padding,
        colSpan: props === null || props === void 0 ? void 0 : props.colSpan,
        align: props === null || props === void 0 ? void 0 : props.align,
        onClick: props === null || props === void 0 ? void 0 : props.onClick,
        onDoubleClick: props === null || props === void 0 ? void 0 : props.onDoubleClick
    }); }, [props === null || props === void 0 ? void 0 : props.id, props === null || props === void 0 ? void 0 : props.padding, props === null || props === void 0 ? void 0 : props.colSpan, props === null || props === void 0 ? void 0 : props.align, props === null || props === void 0 ? void 0 : props.onClick, props === null || props === void 0 ? void 0 : props.onDoubleClick]);
    var children = props.children, _a = props.truncate, truncate = _a === void 0 ? false : _a, _b = props.list, list = _b === void 0 ? false : _b, _c = props.fixed, fixed = _c === void 0 ? false : _c, _d = props.hasEndAdornment, hasEndAdornment = _d === void 0 ? false : _d;
    return (_jsxs(TableCell, __assign({}, cellProps, { className: clsx(list && classes.list, fixed && classes.fixed, hasEndAdornment && classes.hasEndAdornment, props === null || props === void 0 ? void 0 : props.className) }, { children: [truncate && _jsx("span", __assign({ title: String(children) }, { children: truncateText(String(children), truncate) }), void 0), !truncate && children] }), void 0));
});
export default Cell;
