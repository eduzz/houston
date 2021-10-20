"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const useObservable_1 = tslib_1.__importDefault(require("../useObservable"));
// eslint-disable-next-line @typescript-eslint/no-require-imports
const isEqual = require('lodash/isEqual');
function usePaginatedObservable(observableGenerator, initialParams, deps) {
    const [data, setData] = React.useState({ total: 0, result: [], hasMore: true });
    const [isLoading, setIsLoading] = React.useState(true);
    const [isLoadingMore, setIsLoadingMore] = React.useState(false);
    const [params, setParams] = React.useState(Object.assign({ page: 0, perPage: 30 }, initialParams));
    const mergeParams = React.useCallback((newParams, reset = false) => {
        setParams(params => {
            if (newParams.page > params.page && (!data.hasMore || isLoading || isLoadingMore)) {
                newParams.page = params.page;
            }
            const newState = Object.assign(Object.assign({}, (reset ? initialParams : params)), newParams);
            if (isEqual(newState, params)) {
                return params;
            }
            return Object.assign(Object.assign({}, newState), { _retry: null });
        });
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data.hasMore, isLoading, isLoadingMore]);
    const [, error] = useObservable_1.default(() => {
        return rxjs_1.of(true).pipe(operators_1.tap(() => (params.page === 0 ? setIsLoading(true) : setIsLoadingMore(true))), operators_1.delay(1000), operators_1.switchMap(() => {
            const sendParams = Object.assign({}, params);
            delete sendParams._retry;
            return observableGenerator(sendParams);
        }), operators_1.tap({
            next: response => {
                setIsLoading(false);
                setIsLoadingMore(false);
                setData(data => {
                    var _a, _b;
                    const total = (_a = response.total) !== null && _a !== void 0 ? _a : data.total;
                    const result = (_b = (params.page === 0 ? response.result : [...data.result, ...response.result])) !== null && _b !== void 0 ? _b : [];
                    return { total, result, hasMore: result.length < total };
                });
            },
            error: () => {
                setIsLoading(false);
                setIsLoadingMore(false);
            }
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params, ...deps]);
    const retry = React.useCallback(() => {
        setIsLoading(true);
        mergeParams({ page: 0, _retry: Date.now() });
    }, [mergeParams]);
    return {
        params,
        mergeParams,
        initialParams,
        isLoading,
        isLoadingMore,
        total: data.total,
        result: data.result,
        hasMore: data.hasMore,
        error,
        retry
    };
}
exports.default = usePaginatedObservable;
