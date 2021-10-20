"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const use_context_selector_1 = require("use-context-selector");
const Button_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/Button"));
const createUseStyles_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/styles/createUseStyles"));
const Typography_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/Typography"));
const context_1 = (0, tslib_1.__importDefault)(require("../context"));
const useStyle = (0, createUseStyles_1.default)(theme => ({
    text: {
        opacity: 0.8,
        fontStyle: 'italic',
        '& + button': { marginTop: theme.spacing(3) }
    }
}));
const TableError = React.memo(({ children, error, onRetry, formater }) => {
    const columnsLen = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.columns.length);
    const classes = useStyle();
    const errorMessage = React.useMemo(() => {
        var _a;
        if (formater) {
            return (_a = formater(error)) !== null && _a !== void 0 ? _a : 'Algo inesperado aconteceu...';
        }
        return typeof error === 'string' ? error : 'Algo inesperado aconteceu...';
    }, [error, formater]);
    if (error)
        return null;
    children = children !== null && children !== void 0 ? children : errorMessage;
    return (React.createElement("tr", { className: 'table-error-message' },
        React.createElement("td", { align: 'center', colSpan: columnsLen }, typeof children === 'string' ? (React.createElement(React.Fragment, null,
            React.createElement(Typography_1.default, { size: 'normal', fontWeight: 'regular', lineHeight: 'comfortable', className: classes.text }, children),
            onRetry && (React.createElement(Button_1.default, { variant: 'text', onClick: onRetry }, "Tentar Novamente")))) : (children))));
});
exports.default = TableError;
