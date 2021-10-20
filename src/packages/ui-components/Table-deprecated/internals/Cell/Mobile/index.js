import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import clsx from 'clsx';
import Column from '../../../../Grid/Column';
import createUseStyles from '../../../../styles/createUseStyles';
import themeVariable from '../../../../styles/ThemeProvider/_default/variables';
import Typography from '../../../../Typography';
import { useTableContext } from '../../../context';
var useStyles = createUseStyles(function (theme) { return ({
    column: {
        color: theme.colors.grey[500]
    },
    root: {
        lineHeight: 1.3,
        '&:last-child': {
            marginBottom: 0
        },
        '& .content-cell-truncate': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: themeVariable.textSize('normal')
        }
    },
    alignLeft: {
        textAlign: 'left'
    },
    alignCenter: {
        textAlign: 'center'
    },
    alignRight: {
        textAlign: 'right'
    }
}); });
var CellMobile = React.memo(function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var classes = useStyles();
    var columns = useTableContext().columns;
    var currentColumns = React.useMemo(function () { var _a; return (_a = props === null || props === void 0 ? void 0 : props.columns) !== null && _a !== void 0 ? _a : columns; }, [props.columns, columns]);
    var cellAlign = React.useMemo(function () { return ({
        left: classes.alignLeft,
        center: classes.alignCenter,
        right: classes.alignRight
    }); }, [classes.alignRight, classes.alignCenter, classes.alignLeft]);
    var cellProps = React.useMemo(function () { return ({
        id: props === null || props === void 0 ? void 0 : props.id,
        onClick: props === null || props === void 0 ? void 0 : props.onClick,
        onDoubleClick: props === null || props === void 0 ? void 0 : props.onDoubleClick
    }); }, [props === null || props === void 0 ? void 0 : props.id, props === null || props === void 0 ? void 0 : props.onClick, props === null || props === void 0 ? void 0 : props.onDoubleClick]);
    var currentColumn = React.useMemo(function () { return currentColumns[props.index].label; }, [currentColumns, props.index]);
    var currentAlign = React.useMemo(function () { var _a, _b; return (_b = (_a = props === null || props === void 0 ? void 0 : props.xs) === null || _a === void 0 ? void 0 : _a.align) !== null && _b !== void 0 ? _b : props === null || props === void 0 ? void 0 : props.align; }, [props === null || props === void 0 ? void 0 : props.align, (_a = props === null || props === void 0 ? void 0 : props.xs) === null || _a === void 0 ? void 0 : _a.align]);
    if (((_b = props === null || props === void 0 ? void 0 : props.xs) === null || _b === void 0 ? void 0 : _b.size) === 0) {
        return null;
    }
    return (_jsxs(Column, __assign({}, cellProps, { xs: (_d = (_c = props === null || props === void 0 ? void 0 : props.xs) === null || _c === void 0 ? void 0 : _c.size) !== null && _d !== void 0 ? _d : 12, className: clsx(currentAlign && cellAlign[currentAlign], classes.root, (props === null || props === void 0 ? void 0 : props.className) && props.className), style: { margin: (_e = props === null || props === void 0 ? void 0 : props.xs) === null || _e === void 0 ? void 0 : _e.margin, order: (_f = props === null || props === void 0 ? void 0 : props.xs) === null || _f === void 0 ? void 0 : _f.order } }, { children: [_jsx(Typography, __assign({ size: 'x-small', fontWeight: 'regular', lineHeight: 'compact', className: classes.column }, { children: currentColumn }), void 0), _jsx("div", __assign({ className: "" + (((_g = props === null || props === void 0 ? void 0 : props.xs) === null || _g === void 0 ? void 0 : _g.truncate) ? 'content-cell-truncate' : '') }, { children: props.children }), void 0)] }), void 0));
});
export default CellMobile;
