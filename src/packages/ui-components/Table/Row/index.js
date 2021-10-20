import { __assign, __read, __rest, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';
import useBoolean from '@eduzz/houston-hooks/useBoolean';
import IconChevronDown from '@eduzz/houston-icons/ChevronDown';
import IconDotsHorizontal from '@eduzz/houston-icons/DotsHorizontal';
import CollapseContent from '../CollapseContent';
import TableContext from '../context';
import TableRowContext from './context';
import useStyles from './styles';
var tableActionIncremeter = 0;
var TableRow = React.memo(function (_a) {
    var _b;
    var data = _a.data, index = _a.index, children = _a.children, className = _a.className, props = __rest(_a, ["data", "index", "children", "className"]);
    var stripedRows = useContextSelector(TableContext, function (context) { return context.stripedRows; });
    var onShowAction = useContextSelector(TableContext, function (context) { return context.onShowAction; });
    var registerRow = useContextSelector(TableContext, function (context) { return context.registerRow; });
    var tableSize = useContextSelector(TableContext, function (context) { return context.size; });
    var hasCollapseInRows = useContextSelector(TableContext, function (context) { return context.hasCollapseInRows; });
    var hasActionInRows = useContextSelector(TableContext, function (context) { return context.hasActionInRows; });
    var isCollapseContent = useContextSelector(TableContext, function (context) { return context.isCollapseContent; });
    var classes = useStyles();
    var _c = __read(useBoolean(false), 2), showCollapse = _c[0], toogleShowCollapse = _c[1];
    var _d = __read(React.useState(null), 2), collapse = _d[0], setCollapse = _d[1];
    var _e = __read(React.useState([]), 2), actions = _e[0], setActions = _e[1];
    var oneAction = actions.length === 1 ? actions[0] : null;
    var hasActions = actions.length > 0;
    var hasCollapse = collapse !== null;
    var onClickAction = React.useCallback(function (e) {
        if (oneAction) {
            oneAction.onClick(data, index);
            return;
        }
        onShowAction({ anchorEl: e.currentTarget, rowData: data, rowIndex: index, actions: actions });
    }, [oneAction, onShowAction, data, index, actions]);
    var registerCollapse = React.useCallback(function (content) {
        setCollapse(content);
        return function () { return setCollapse(null); };
    }, []);
    var registerAction = React.useCallback(function (action) {
        var key = "table-action-option-" + ++tableActionIncremeter;
        setActions(function (actions) { return __spreadArray(__spreadArray([], __read(actions), false), [__assign({ key: key }, action)], false); });
        return function () { return setActions(function (actions) { return actions.filter(function (o) { return o.key !== key; }); }); };
    }, []);
    React.useEffect(function () {
        var unregister = registerRow({ hasActions: hasActions, hasCollapse: hasCollapse });
        return function () { return unregister(); };
    }, [hasActions, hasCollapse, registerRow]);
    var contextValue = React.useMemo(function () { return ({ registerAction: registerAction, registerCollapse: registerCollapse, data: data, index: index, collapse: collapse }); }, [collapse, data, index, registerAction, registerCollapse]);
    var classesColumnAction = React.useMemo(function () { return clsx(classes.cellAction, tableSize === 'small' && '--small', 'table-action-cell', className); }, [className, classes.cellAction, tableSize]);
    var classesColumnCollapse = React.useMemo(function () { return clsx(classes.cellCollapse, tableSize === 'small' && '--small', 'table-collapse-cell', className); }, [className, classes.cellCollapse, tableSize]);
    return (_jsxs(TableRowContext.Provider, __assign({ value: contextValue }, { children: [_jsxs("tr", __assign({}, props, { className: clsx(hasActions && 'table-row-has-action', !isCollapseContent && hasCollapse && 'table-row-has-collapse', !isCollapseContent && stripedRows && (index % 2 == 0 ? 'table-row-even' : 'table-row-odd'), className) }, { children: [children, hasActions && (_jsx("td", __assign({ align: 'right', className: classesColumnAction }, { children: hasActions && (_jsx("div", __assign({ onClick: onClickAction, className: classes.iconAction }, { children: (_b = oneAction === null || oneAction === void 0 ? void 0 : oneAction.icon) !== null && _b !== void 0 ? _b : _jsx(IconDotsHorizontal, { size: 24 }, void 0) }), void 0)) }), void 0)), !hasActions && hasActionInRows && _jsx("td", { className: classesColumnAction }, void 0), !isCollapseContent && hasCollapse && (_jsx("td", __assign({ align: 'right', className: classesColumnCollapse }, { children: _jsx("div", __assign({ onClick: toogleShowCollapse, className: clsx(classes.iconAction, 'table-collapse-button', showCollapse && 'table-collapse-button-opened') }, { children: _jsx(IconChevronDown, { size: 24 }, void 0) }), void 0) }), void 0)), !hasCollapse && hasCollapseInRows && _jsx("td", { className: classesColumnCollapse }, void 0)] }), void 0), !isCollapseContent && hasCollapse && _jsx(CollapseContent, { visible: showCollapse }, void 0)] }), void 0));
});
export default TableRow;
