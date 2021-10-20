import { __assign, __read, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import MUITabs from '@mui/material/Tabs';
import clsx from 'clsx';
import createUseStyles from '../styles/createUseStyles';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
import TabsContext from './context';
var useStyles = createUseStyles(function (theme) { return ({
    containerPadding: {
        padding: theme.spacing(2)
    }
}); });
var tabsKeyIncrementer = 0;
var Tabs = function (_a) {
    var value = _a.value, onChange = _a.onChange, children = _a.children;
    var classes = useStyles();
    var _b = __read(React.useState(0), 2), position = _b[0], setPosition = _b[1];
    var _c = __read(React.useState(function () { return []; }), 2), tabs = _c[0], setTabs = _c[1];
    var controlled = value !== undefined;
    var currentValue = controlled ? value : position;
    var handleChange = React.useCallback(function (_, value) {
        if (controlled) {
            onChange && onChange(value);
            return;
        }
        setPosition(value);
    }, [controlled, onChange]);
    var registerTabs = React.useCallback(function (tab) {
        var key = "tab-" + ++tabsKeyIncrementer;
        setTabs(function (tabs) { return __spreadArray(__spreadArray([], __read(tabs), false), [__assign({ key: key }, tab)], false); });
        return function () { return setTabs(function (tabs) { return tabs.filter(function (t) { return t.key !== key; }); }); };
    }, []);
    var contextValue = React.useMemo(function () { return ({ tabs: tabs, registerTabs: registerTabs }); }, [tabs, registerTabs]);
    return (_jsxs(TabsContext.Provider, __assign({ value: contextValue }, { children: [_jsx(MUITabs, __assign({ scrollButtons: 'auto', variant: 'scrollable', textColor: 'primary', indicatorColor: 'primary', value: currentValue, onChange: handleChange }, { children: children }), void 0), tabs === null || tabs === void 0 ? void 0 : tabs.map(function (_a, index) {
                var id = _a.id, className = _a.className, children = _a.children, disablePadding = _a.disablePadding;
                var currentId = id ? id : "content-tab-" + index;
                return (_jsx("div", __assign({ role: 'tabpanel', id: currentId, className: clsx(!disablePadding && classes.containerPadding, className), hidden: index !== currentValue }, { children: children }), currentId));
            })] }), void 0));
};
export default withHoustonTheme(React.memo(Tabs));
