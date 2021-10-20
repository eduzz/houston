"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const usePromise_1 = (0, tslib_1.__importDefault)(require("../usePromise"));
// eslint-disable-next-line @typescript-eslint/no-require-imports
const isEqual = require('lodash/isEqual');
/**
 * Hooks to simplify the use of an observable paginated
 * @param options `IUsePaginatedOptions`
 * @param deps React deps
 * @returns `IUsePaginatedPromise`
 */
function usePromisePaginated(options, deps) {
    const { infintyScroll, initialParams: initialParamsOption, onChangeParams } = options;
    const [data, setData] = React.useState({ total: 0, result: [], hasMore: true });
    const [isLoading, setIsLoading] = React.useState(true);
    const [isLoadingMore, setIsLoadingMore] = React.useState(false);
    const [initialParams] = React.useState(() => (Object.assign({ page: 1, perPage: 25 }, (initialParamsOption !== null && initialParamsOption !== void 0 ? initialParamsOption : {}))));
    const [params, setParams] = React.useState(() => (Object.assign({}, initialParams)));
    const mergeParams = React.useCallback((newParams, reset) => {
        setParams(params => {
            if (typeof newParams === 'function') {
                newParams = newParams(params);
            }
            if (newParams.page > params.page && (!data.hasMore || isLoading || isLoadingMore)) {
                newParams.page = params.page;
            }
            const newState = Object.assign(Object.assign({}, (reset ? initialParams : params)), newParams);
            if (isEqual(newState, params)) {
                return params;
            }
            return Object.assign(Object.assign({}, newState), { _retry: null });
        });
    }, [data.hasMore, initialParams, isLoading, isLoadingMore]);
    const [, error] = (0, usePromise_1.default)(() => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        try {
            setIsLoading(!infintyScroll || params.page === initialParams.page);
            setIsLoadingMore(params.page !== initialParams.page);
            const sendParams = Object.assign({}, params);
            delete sendParams._retry;
            const response = yield onChangeParams(sendParams);
            setIsLoading(false);
            setIsLoadingMore(false);
            setData(data => {
                var _a, _b;
                const total = (_a = response.total) !== null && _a !== void 0 ? _a : data.total;
                const result = (_b = (params.page === initialParams.page || !infintyScroll
                    ? response.result
                    : [...data.result, ...response.result])) !== null && _b !== void 0 ? _b : [];
                return { total, result, hasMore: result.length < total };
            });
        }
        catch (err) {
            setIsLoading(false);
            setIsLoadingMore(false);
            throw err;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [params, ...deps]);
    const retry = React.useCallback(() => {
        setIsLoading(true);
        mergeParams({ page: 0, _retry: Date.now() });
    }, [mergeParams]);
    const handleChangePage = React.useCallback((page) => mergeParams({ page }), [mergeParams]);
    const handleChangePerPage = React.useCallback((perPage) => mergeParams({ perPage }), [mergeParams]);
    const handleSort = React.useCallback((sort) => mergeParams({ sort, page: initialParams.page }), [initialParams.page, mergeParams]);
    return {
        params,
        initialParams,
        isLoading,
        isLoadingMore,
        total: data.total,
        result: data.result,
        hasMore: data.hasMore,
        error,
        retry,
        mergeParams,
        handleSort,
        handleChangePage,
        handleChangePerPage
    };
}
exports.default = usePromisePaginated;
