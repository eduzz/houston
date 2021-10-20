import { __assign, __read } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import PaginationMUI from '@mui/material/Pagination';
import { useContextSelector } from 'use-context-selector';
import SelectField from '../../Forms/Select';
import TextField from '../../Forms/Text';
import Column from '../../Grid/Column';
import Row from '../../Grid/Row';
import createUseStyles from '../../styles/createUseStyles';
import Typography from '../../Typography';
import TableContext from '../context';
var useStyles = createUseStyles(function (theme) {
    var _a, _b;
    return ({
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
        labels: (_a = {
                display: 'inline-flex',
                alignItems: 'center',
                '& > p': {
                    whiteSpace: 'nowrap',
                    marginRight: theme.spacing(2),
                    color: theme.colors.grey[600]
                }
            },
            _a[theme.breakpoints.down('sm')] = {
                display: 'none'
            },
            _a),
        input: {
            maxWidth: 50
        },
        pages: (_b = {
                display: 'flex',
                justifyContent: 'flex-end',
                height: '100%',
                alignItems: 'center'
            },
            _b[theme.breakpoints.down('sm')] = {
                marginTop: theme.spacing(2),
                justifyContent: 'center'
            },
            _b)
    });
});
var Pagination = React.memo(function (_a) {
    var page = _a.page, optionsPerPageProp = _a.optionsPerPage, onChangePerPage = _a.onChangePerPage, onChangePage = _a.onChangePage, total = _a.total, perPage = _a.perPage, labelGoToPage = _a.labelGoToPage, labelItensPerPage = _a.labelItensPerPage;
    var classes = useStyles();
    var loading = useContextSelector(TableContext, function (context) { return context.loading; });
    var _b = __read(React.useState(page === null || page === void 0 ? void 0 : page.toString()), 2), pageInput = _b[0], setPageInput = _b[1];
    var optionsPerPage = React.useMemo(function () {
        if (optionsPerPageProp === false) {
            return null;
        }
        if (typeof optionsPerPageProp === 'string') {
            return optionsPerPageProp.split(',').map(function (value) { return ({ label: value, value: Number(value) }); });
        }
        return (optionsPerPageProp !== null && optionsPerPageProp !== void 0 ? optionsPerPageProp : [5, 10, 25, 50]).map(function (value) { return ({ label: String(value), value: value }); });
    }, [optionsPerPageProp]);
    var handlePageInputChange = React.useCallback(function (valueOrEvent, event) {
        var _a;
        var enterPressed = false;
        var value = '';
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
        var currentPage = Math.floor(Number(value));
        var maxPage = Math.ceil(total / perPage);
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
    var handleChangePerPage = React.useCallback(function (value) { return onChangePerPage(Number(value)); }, [onChangePerPage]);
    var handleChangePage = React.useCallback(function (e, page) { return onChangePage(page); }, [onChangePage]);
    React.useEffect(function () {
        var timeout = setTimeout(function () { return setPageInput(page === null || page === void 0 ? void 0 : page.toString()); }, 500);
        return function () { return clearTimeout(timeout); };
    }, [page]);
    return (_jsx("tfoot", { children: _jsx("tr", { children: _jsx("td", __assign({ colSpan: 1000, className: classes.td }, { children: _jsxs(Row, { children: [_jsx(Column, __assign({ xs: 12, sm: 'auto' }, { children: _jsxs(Row, __assign({ justifyContent: 'center' }, { children: [_jsxs(Column, __assign({ xs: 'auto', className: classes.perPage }, { children: [_jsx(Typography, __assign({ size: 'small', fontWeight: 'semibold' }, { children: labelItensPerPage !== null && labelItensPerPage !== void 0 ? labelItensPerPage : 'Itens por página:' }), void 0), _jsx(SelectField, { disabled: loading, size: 'small', margin: 'none', options: optionsPerPage, value: perPage, onChange: handleChangePerPage }, void 0)] }), void 0), _jsxs(Column, __assign({ xs: 'auto', className: classes.labels }, { children: [_jsx(Typography, __assign({ size: 'small', fontWeight: 'semibold' }, { children: labelGoToPage !== null && labelGoToPage !== void 0 ? labelGoToPage : 'Ir para:' }), void 0), _jsx(TextField, { margin: 'none', size: 'small', disabled: loading, value: pageInput, className: classes.input, onChange: handlePageInputChange, onKeyUp: handlePageInputChange, onBlur: handlePageInputChange }, void 0)] }), void 0)] }), void 0) }), void 0), _jsx(Column, __assign({ xs: 12, sm: true }, { children: _jsx("div", __assign({ className: classes.pages }, { children: _jsx(PaginationMUI, { count: Math.ceil(total / perPage), page: page !== null && page !== void 0 ? page : 1, disabled: loading, shape: 'rounded', size: 'medium', onChange: handleChangePage }, void 0) }), void 0) }), void 0)] }, void 0) }), void 0) }, void 0) }, void 0));
});
export default Pagination;
