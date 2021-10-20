"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const Collapse_1 = (0, tslib_1.__importDefault)(require("@mui/material/Collapse"));
const clsx_1 = (0, tslib_1.__importDefault)(require("clsx"));
const use_context_selector_1 = require("use-context-selector");
const useBoolean_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-hooks/useBoolean"));
const ChevronDown_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-icons/ChevronDown"));
const DotsHorizontal_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-icons/DotsHorizontal"));
const createUseStyles_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/styles/createUseStyles"));
const context_1 = (0, tslib_1.__importDefault)(require("../context"));
const context_2 = (0, tslib_1.__importDefault)(require("./context"));
let tableActionIncremeter = 0;
const useStyles = (0, createUseStyles_1.default)(theme => ({
    cellAction: ({ size }) => ({
        padding: '6px 12px',
        borderBottom: `1px solid ${theme.colors.grey[200]}`,
        fontSize: theme.textSize(size === 'small' ? 'small' : 'normal')
    }),
    cellCollapse: ({ size }) => ({
        paddingRight: 8,
        borderBottom: `1px solid ${theme.colors.grey[200]}`,
        fontSize: theme.textSize(size === 'small' ? 'small' : 'normal')
    }),
    iconAction: {
        display: 'inline-flex',
        padding: 4,
        transition: 'background 0.2s linear',
        borderRadius: '50%',
        cursor: 'pointer',
        '&:hover': {
            background: theme.colors.grey[200]
        },
        '&:focus': {
            background: theme.colors.grey[300]
        },
        '& .houston-icon': {
            '& svg': {
                fill: theme.colors.grey[600]
            }
        }
    }
}));
const TableRow = React.memo((_a) => {
    var _b;
    var { data, index, children, className } = _a, props = (0, tslib_1.__rest)(_a, ["data", "index", "children", "className"]);
    const stripedRows = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.stripedRows);
    const onShowAction = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.onShowAction);
    const registerRow = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.registerRow);
    const columnSpan = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.columns.length);
    const tableSize = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.size);
    const hasCollapseInRows = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.hasCollapseInRows);
    const hasActionInRows = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.hasActionInRows);
    const classes = useStyles({ size: tableSize });
    const [showCollapse, toogleShowCollapse] = (0, useBoolean_1.default)(false);
    const [collapse, setCollapse] = React.useState(null);
    const [actions, setActions] = React.useState([]);
    const oneAction = actions.length === 1 ? actions[0] : null;
    const hasActions = actions.length > 0;
    const hasCollapse = collapse != null;
    const onClickAction = React.useCallback((e) => {
        if (oneAction) {
            oneAction.onClick(data, index);
            return;
        }
        onShowAction({ anchorEl: e.currentTarget, rowData: data, rowIndex: index, actions });
    }, [oneAction, onShowAction, data, index, actions]);
    const registerCollapse = React.useCallback((content) => {
        setCollapse(content);
        return () => setCollapse(null);
    }, []);
    const registerAction = React.useCallback((action) => {
        const key = `table-action-option-${++tableActionIncremeter}`;
        setActions(actions => [...actions, Object.assign({ key }, action)]);
        return () => setActions(actions => actions.filter(o => o.key !== key));
    }, []);
    const onCollapseEnter = React.useCallback(() => collapse.onOpen && collapse.onOpen(data, index), [collapse, data, index]);
    const onCollapseClose = React.useCallback(() => collapse.onClose && collapse.onClose(data, index), [collapse, data, index]);
    React.useEffect(() => {
        const unregister = registerRow({ hasActions, hasCollapse });
        return () => unregister();
    }, [hasActions, hasCollapse, registerRow]);
    const contextValue = React.useMemo(() => ({ registerAction, registerCollapse }), [registerAction, registerCollapse]);
    return (React.createElement(context_2.default.Provider, { value: contextValue },
        React.createElement("tr", Object.assign({}, props, { className: (0, clsx_1.default)(hasActions && 'table-row-has-action', hasCollapse && 'table-row-has-collapse', stripedRows ? (index % 2 == 0 ? 'table-row-even' : 'table-row-odd') : null, className) }),
            children,
            hasActions && (React.createElement("td", { align: 'right', className: (0, clsx_1.default)(classes.cellAction, 'table-action-cell', className) }, hasActions && (React.createElement("div", { onClick: onClickAction, className: classes.iconAction }, (_b = oneAction === null || oneAction === void 0 ? void 0 : oneAction.icon) !== null && _b !== void 0 ? _b : React.createElement(DotsHorizontal_1.default, { size: 24 }))))),
            !hasActions && hasActionInRows && React.createElement("td", { className: (0, clsx_1.default)(classes.cellAction, 'table-action-cell', className) }),
            hasCollapse && (React.createElement("td", { align: 'right', className: (0, clsx_1.default)(classes.cellCollapse, 'table-collapse-cell', className) },
                React.createElement("div", { onClick: toogleShowCollapse, className: (0, clsx_1.default)(classes.iconAction, 'table-collapse-button', showCollapse && 'table-collapse-button-opened') },
                    React.createElement(ChevronDown_1.default, { size: 24 })))),
            !hasCollapse && hasCollapseInRows && (React.createElement("td", { className: (0, clsx_1.default)(classes.cellCollapse, 'table-collapse-cell', className) }))),
        hasCollapse && (React.createElement("tr", { className: (0, clsx_1.default)('table-collapse', showCollapse && 'table-collapse-opened', collapse.disableBackground && 'table-collapse-no-background', collapse.disabledPadding && 'table-collapse-no-padding') },
            React.createElement("td", { colSpan: columnSpan },
                React.createElement(Collapse_1.default, { in: showCollapse && !collapse.disabled, timeout: 350, onEntered: onCollapseEnter, onExited: onCollapseClose, unmountOnExit: true },
                    React.createElement("div", { className: 'table-collapse-content' }, collapse.content)))))));
});
exports.default = TableRow;
