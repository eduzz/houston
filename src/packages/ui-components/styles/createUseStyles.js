import { __assign } from "tslib";
import { css } from '@emotion/css';
import useHoustonTheme from './useHoustonTheme';
export default function createUseStyles(generator) {
    return function (props) {
        var styles;
        if (typeof generator === 'function') {
            var theme = useHoustonTheme();
            styles = generator(theme);
        }
        else {
            styles = generator;
        }
        return Object.keys(styles).reduce(function (acc, key) {
            var _a;
            return __assign(__assign({}, acc), (_a = {}, _a[key] = css(typeof styles[key] === 'function' ? styles[key](props) : styles[key]), _a));
        }, {});
    };
}
