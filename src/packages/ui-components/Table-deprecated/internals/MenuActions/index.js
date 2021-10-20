import { __assign } from "tslib";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import createUseStyles from '../../../styles/createUseStyles';
var useStyles = createUseStyles(function () { return ({
    option: {
        display: 'flex',
        alignItems: 'center',
        '& svg, span': {
            marginRight: 8,
            fontSize: 24
        }
    }
}); });
var MenuActions = React.memo(function (_a) {
    var onClose = _a.onClose, options = _a.options, anchorEl = _a.anchorEl, currentRow = _a.currentRow;
    var classes = useStyles();
    var handleClick = React.useCallback(function (callback) {
        callback && callback(currentRow === null || currentRow === void 0 ? void 0 : currentRow.data);
        onClose();
    }, [onClose, currentRow]);
    return (_jsx(Menu, __assign({ anchorEl: anchorEl, open: !!anchorEl, onClose: onClose, disableAutoFocusItem: true, disableAutoFocus: true, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center' }, elevation: 1 }, { children: options === null || options === void 0 ? void 0 : options.map(function (option, index) {
            var disabled = typeof (option === null || option === void 0 ? void 0 : option.disabled) === 'boolean'
                ? option === null || option === void 0 ? void 0 : option.disabled
                : (option === null || option === void 0 ? void 0 : option.disabled) && currentRow && option.disabled(currentRow === null || currentRow === void 0 ? void 0 : currentRow.data);
            var hide = typeof (option === null || option === void 0 ? void 0 : option.hide) === 'boolean'
                ? option === null || option === void 0 ? void 0 : option.hide
                : (option === null || option === void 0 ? void 0 : option.hide) && currentRow && option.hide(currentRow === null || currentRow === void 0 ? void 0 : currentRow.data);
            if (hide) {
                return null;
            }
            return (_jsx(MenuItem, __assign({ id: "menu-option-" + option.id, className: option.className, onClick: function () { return handleClick(option === null || option === void 0 ? void 0 : option.onClick); }, disabled: disabled }, { children: _jsxs("div", __assign({ className: classes.option }, { children: [!!(option === null || option === void 0 ? void 0 : option.icon) && (option === null || option === void 0 ? void 0 : option.icon), option === null || option === void 0 ? void 0 : option.children] }), void 0) }), "menu-option-" + index));
        }) }), void 0));
});
export default MenuActions;
