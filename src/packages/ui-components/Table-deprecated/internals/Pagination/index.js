import { __assign, __read } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import MUIPagination from '@mui/material/Pagination';
import SelectField from '../../../Forms/Select';
import TextField from '../../../Forms/Text';
import Column from '../../../Grid/Column';
import Row from '../../../Grid/Row';
import createUseStyles from '../../../styles/createUseStyles';
import Typography from '../../../Typography';
import { useTableContext } from '../../context';
var useStyles = createUseStyles(function (theme) {
    var _a, _b, _c;
    return ({
        pagination: {
            marginTop: 12,
            display: 'flex',
            alignItems: 'center',
            width: '100%'
        },
        perPage: (_a = {
                display: 'inline-flex',
                alignItems: 'center',
                marginRight: 24
            },
            _a[theme.breakpoints.down('sm')] = {
                justifyContent: 'center',
                margin: '0 0 12px 0',
                display: 'flex'
            },
            _a['& p'] = {
                whiteSpace: 'nowrap',
                marginRight: 12,
                color: theme.colors.grey[600]
            },
            _a),
        selectPerPage: {
            height: 35,
            padding: '8px 12px'
        },
        goTo: (_b = {
                maxWidth: 120,
                display: 'inline-flex',
                alignItems: 'center'
            },
            _b[theme.breakpoints.down('sm')] = {
                margin: '0 auto 12px auto',
                display: 'flex'
            },
            _b['& p'] = {
                whiteSpace: 'nowrap',
                marginRight: 12,
                color: theme.colors.grey[600]
            },
            _b),
        inputGoTo: {
            '& input': {
                height: 35,
                padding: '4px 12px'
            }
        },
        pages: (_c = {
                display: 'flex',
                justifyContent: 'flex-end',
                height: '100%',
                alignItems: 'center'
            },
            _c[theme.breakpoints.down('sm')] = {
                justifyContent: 'center'
            },
            _c)
    });
});
var Pagination = React.memo(function () {
    var _a, _b, _c, _d;
    var _e = useTableContext(), loading = _e.loading, pagination = _e.pagination;
    var classes = useStyles();
    var _f = __read(React.useState((pagination === null || pagination === void 0 ? void 0 : pagination.page) || 1), 2), currentPage = _f[0], setCurrentPage = _f[1];
    var defaultOptionsPerPage = React.useMemo(function () { var _a; return (_a = pagination === null || pagination === void 0 ? void 0 : pagination.optionsPerPage) !== null && _a !== void 0 ? _a : [5, 10, 25, 50, 100]; }, [pagination]);
    var handleChangePerPage = React.useCallback(function (value) {
        (pagination === null || pagination === void 0 ? void 0 : pagination.onChangeRowsPerPage) && (pagination === null || pagination === void 0 ? void 0 : pagination.onChangeRowsPerPage(Number(value)));
    }, [pagination]);
    var handleChangeGoToPage = React.useCallback(function (value) {
        setCurrentPage(Number(value));
    }, []);
    var handleBlurGoToPage = React.useCallback(function (value) {
        var currentPage = Number(value);
        var maxPage = Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / (pagination === null || pagination === void 0 ? void 0 : pagination.perPage));
        if (currentPage === (pagination === null || pagination === void 0 ? void 0 : pagination.page)) {
            return;
        }
        if (!currentPage) {
            currentPage = 1;
        }
        if (currentPage > maxPage) {
            currentPage = maxPage;
        }
        setCurrentPage(currentPage);
        (pagination === null || pagination === void 0 ? void 0 : pagination.onChangeGoToPage) && (pagination === null || pagination === void 0 ? void 0 : pagination.onChangeGoToPage(currentPage));
    }, [pagination]);
    var handleChangePage = React.useCallback(function (e, page) {
        (pagination === null || pagination === void 0 ? void 0 : pagination.onChangePage) && (pagination === null || pagination === void 0 ? void 0 : pagination.onChangePage(page));
    }, [pagination]);
    if (!pagination || loading) {
        return null;
    }
    if (!loading && (!(pagination === null || pagination === void 0 ? void 0 : pagination.perPage) || (!(pagination === null || pagination === void 0 ? void 0 : pagination.total) && (pagination === null || pagination === void 0 ? void 0 : pagination.total) !== 0))) {
        console.error('@eduzz/houston-ui: the paging component needs three properties (perPage and total)');
        return null;
    }
    return (_jsx("div", __assign({ className: classes.pagination }, { children: _jsxs(Row, { children: [((pagination === null || pagination === void 0 ? void 0 : pagination.onChangeRowsPerPage) || (pagination === null || pagination === void 0 ? void 0 : pagination.onChangeGoToPage)) && (_jsxs(Column, __assign({ xs: 12, sm: 8 }, { children: [(pagination === null || pagination === void 0 ? void 0 : pagination.onChangeRowsPerPage) && (_jsxs("div", __assign({ className: classes.perPage }, { children: [_jsx(Typography, __assign({ size: 'small', fontWeight: 'semibold' }, { children: (_a = pagination === null || pagination === void 0 ? void 0 : pagination.labelItensPerPage) !== null && _a !== void 0 ? _a : 'Itens por página:' }), void 0), _jsx("div", { children: _jsx(SelectField, { size: 'small', margin: 'none', options: defaultOptionsPerPage.map(function (value) { return ({ label: String(value), value: value }); }), value: (_b = pagination === null || pagination === void 0 ? void 0 : pagination.perPage) !== null && _b !== void 0 ? _b : 15, onChange: handleChangePerPage }, void 0) }, void 0)] }), void 0)), (pagination === null || pagination === void 0 ? void 0 : pagination.onChangeGoToPage) && (_jsxs("div", __assign({ className: classes.goTo }, { children: [_jsx(Typography, __assign({ size: 'small', fontWeight: 'semibold' }, { children: (_c = pagination === null || pagination === void 0 ? void 0 : pagination.labelGoToPage) !== null && _c !== void 0 ? _c : 'Ir para:' }), void 0), _jsx(TextField, { size: 'small', margin: 'none', value: currentPage !== null && currentPage !== void 0 ? currentPage : '', onChange: handleChangeGoToPage, onBlur: handleBlurGoToPage }, void 0)] }), void 0))] }), void 0)), (pagination === null || pagination === void 0 ? void 0 : pagination.onChangePage) && (_jsx(Column, __assign({ xs: 12, sm: true }, { children: _jsx("div", __assign({ className: classes.pages }, { children: _jsx(MUIPagination, { count: Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / (pagination === null || pagination === void 0 ? void 0 : pagination.perPage)), page: (_d = pagination === null || pagination === void 0 ? void 0 : pagination.page) !== null && _d !== void 0 ? _d : 1, shape: 'rounded', size: 'medium', onChange: handleChangePage }, void 0) }), void 0) }), void 0))] }, void 0) }), void 0));
});
export default Pagination;
