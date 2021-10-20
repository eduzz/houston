"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const clsx_1 = (0, tslib_1.__importDefault)(require("clsx"));
const use_context_selector_1 = require("use-context-selector");
const createUseStyles_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/styles/createUseStyles"));
const context_1 = (0, tslib_1.__importDefault)(require("../context"));
let cellKeyIncremeter = 0;
const useStyles = (0, createUseStyles_1.default)(theme => ({
    root: ({ size }) => ({
        padding: size === 'small' ? '8px 12px' : '12px 20px',
        borderBottom: `1px solid ${theme.colors.grey[200]}`,
        fontSize: theme.textSize(size === 'small' ? 'small' : 'normal'),
        color: theme.colors.grey[600],
        fontWeight: theme.fontWeight('regular'),
        lineHeight: theme.lineHeight('normal')
    })
}));
const TableCell = React.memo((_a) => {
    var { children, className, mobileSize, mobileAlign, columnLabel, onClick, onDoubleClick, align } = _a, props = (0, tslib_1.__rest)(_a, ["children", "className", "mobileSize", "mobileAlign", "columnLabel", "onClick", "onDoubleClick", "align"]);
    const [cellKey] = React.useState(() => `cell-${++cellKeyIncremeter}`);
    const cellRef = React.useRef();
    const label = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.rowMapLabel[cellKey]);
    const tableSize = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.size);
    const classes = useStyles({ size: tableSize });
    React.useEffect(() => {
        cellRef.current.setAttribute('cell-key', cellKey);
    }, [cellKey]);
    return (React.createElement("td", Object.assign({}, props, { onClick: onClick, onDoubleClick: onDoubleClick, className: (0, clsx_1.default)(classes.root, className, `cell-size-${mobileSize !== null && mobileSize !== void 0 ? mobileSize : 'auto'}`, `cell-align-${align !== null && align !== void 0 ? align : 'left'}`, mobileAlign && `cell-mobile-align-${mobileAlign}`), ref: cellRef }),
        React.createElement("span", { className: 'table-label-mobile' }, columnLabel !== null && columnLabel !== void 0 ? columnLabel : label),
        children));
});
exports.default = TableCell;
