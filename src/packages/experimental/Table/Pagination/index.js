"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const Pagination_1 = (0, tslib_1.__importDefault)(require("@mui/material/Pagination"));
const use_context_selector_1 = require("use-context-selector");
const Select_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/Forms/Select"));
const Text_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/Forms/Text"));
const Column_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/Grid/Column"));
const Row_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/Grid/Row"));
const createUseStyles_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/styles/createUseStyles"));
const Typography_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/Typography"));
const context_1 = (0, tslib_1.__importDefault)(require("../context"));
const useStyles = (0, createUseStyles_1.default)(theme => ({
    td: {
        padding: '12px 0'
    },
    perPage: {
        display: 'inline-flex',
        alignItems: 'center',
        '& > p': {
            whiteSpace: 'nowrap',
            marginRight: theme.spacing(2),
            color: theme.colors.grey[600]
        }
    },
    labels: {
        display: 'inline-flex',
        alignItems: 'center',
        '& > p': {
            whiteSpace: 'nowrap',
            marginRight: theme.spacing(2),
            color: theme.colors.grey[600]
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    input: {
        maxWidth: 50
    },
    pages: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: '100%',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(2),
            justifyContent: 'center'
        }
    }
}));
const Pagination = React.memo(({ page, optionsPerPage: optionsPerPageProp, onChangePerPage, onChangePage, total, perPage, labelGoToPage, labelItensPerPage }) => {
    const classes = useStyles();
    const columnsLen = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.columns.length);
    const loading = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.loading);
    const [pageInput, setPageInput] = React.useState(page === null || page === void 0 ? void 0 : page.toString());
    const optionsPerPage = React.useMemo(() => {
        if (optionsPerPageProp === false) {
            return null;
        }
        if (typeof optionsPerPageProp === 'string') {
            return optionsPerPageProp.split(',').map(value => ({ label: value, value: Number(value) }));
        }
        return (optionsPerPageProp !== null && optionsPerPageProp !== void 0 ? optionsPerPageProp : [5, 10, 25, 50]).map(value => ({ label: String(value), value }));
    }, [optionsPerPageProp]);
    const handlePageInputChange = React.useCallback((valueOrEvent, event) => {
        var _a;
        let enterPressed = false;
        let value = '';
        if (typeof valueOrEvent === 'object') {
            event = valueOrEvent;
            enterPressed = ((_a = valueOrEvent.key) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'enter';
            value = valueOrEvent.target.value;
        }
        else {
            value = valueOrEvent;
        }
        setPageInput(value);
        if (event.type === 'change' || (event.type === 'keyup' && !enterPressed)) {
            return;
        }
        let currentPage = Math.floor(Number(value));
        const maxPage = Math.ceil(total / perPage);
        if (!currentPage) {
            currentPage = 1;
        }
        if (currentPage > maxPage) {
            currentPage = maxPage;
        }
        if (currentPage != Number(value)) {
            setPageInput(currentPage.toString());
        }
        if (currentPage === page) {
            return;
        }
        onChangePage(currentPage);
    }, [onChangePage, page, perPage, total]);
    const handleChangePerPage = React.useCallback((value) => onChangePerPage(Number(value)), [onChangePerPage]);
    const handleChangePage = React.useCallback((_, page) => onChangePage(page), [onChangePage]);
    React.useEffect(() => {
        const timeout = setTimeout(() => setPageInput(page === null || page === void 0 ? void 0 : page.toString()), 500);
        return () => clearTimeout(timeout);
    }, [page]);
    return (React.createElement("tfoot", null,
        React.createElement("tr", null,
            React.createElement("td", { colSpan: columnsLen, className: classes.td },
                React.createElement(Row_1.default, null,
                    React.createElement(Column_1.default, { xs: 12, sm: 'auto' },
                        React.createElement(Row_1.default, { justifyContent: 'center' },
                            React.createElement(Column_1.default, { xs: 'auto', className: classes.perPage },
                                React.createElement(Typography_1.default, { size: 'small', fontWeight: 'semibold' }, labelItensPerPage !== null && labelItensPerPage !== void 0 ? labelItensPerPage : 'Itens por página:'),
                                React.createElement(Select_1.default, { disabled: loading, size: 'small', margin: 'none', options: optionsPerPage, value: perPage, onChange: handleChangePerPage })),
                            React.createElement(Column_1.default, { xs: 'auto', className: classes.labels },
                                React.createElement(Typography_1.default, { size: 'small', fontWeight: 'semibold' }, labelGoToPage !== null && labelGoToPage !== void 0 ? labelGoToPage : 'Ir para:'),
                                React.createElement(Text_1.default, { margin: 'none', size: 'small', disabled: loading, value: pageInput, className: classes.input, onChange: handlePageInputChange, onKeyUp: handlePageInputChange, onBlur: handlePageInputChange })))),
                    React.createElement(Column_1.default, { xs: 12, sm: true },
                        React.createElement("div", { className: classes.pages },
                            React.createElement(Pagination_1.default, { count: Math.ceil(total / perPage), page: page !== null && page !== void 0 ? page : 1, disabled: loading, shape: 'rounded', size: 'medium', onChange: handleChangePage }))))))));
});
exports.default = Pagination;
