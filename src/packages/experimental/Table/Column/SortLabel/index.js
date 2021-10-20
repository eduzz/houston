"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const clsx_1 = (0, tslib_1.__importDefault)(require("clsx"));
const use_context_selector_1 = require("use-context-selector");
const ArrowUp_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-icons/ArrowUp"));
const createUseStyles_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/styles/createUseStyles"));
const context_1 = (0, tslib_1.__importDefault)(require("../../context"));
const useStyles = (0, createUseStyles_1.default)(theme => ({
    root: ({ size }) => ({
        fontSize: theme.textSize(size === 'small' ? 'small' : 'normal'),
        fontWeight: theme.fontWeight('semibold'),
        color: theme.colors.grey[600],
        '&.--disabled': {
            color: theme.colors.grey[400],
            cursor: 'no-drop'
        },
        '&.--sortable': {
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center'
        },
        '& .icon': {
            lineHeight: 0,
            transition: '0.2s linear',
            '&.--desc': {
                transform: 'rotate(-180deg)'
            }
        }
    })
}));
const SortLabel = ({ children, sortable, active, direction, disabled, onClick }) => {
    const tableSize = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.size);
    const classes = useStyles({ size: tableSize });
    if (!sortable) {
        return React.createElement("span", { className: (0, clsx_1.default)(classes.root) }, children);
    }
    return (React.createElement("div", { className: (0, clsx_1.default)(classes.root, disabled && '--disabled', '--sortable'), onClick: onClick },
        children,
        active && (React.createElement("div", { className: (0, clsx_1.default)(direction === 'desc' && '--desc', 'icon') },
            React.createElement(ArrowUp_1.default, null)))));
};
exports.default = React.memo(SortLabel);
