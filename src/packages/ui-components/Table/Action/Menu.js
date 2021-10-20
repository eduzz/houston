import { __assign } from "tslib";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import createUseStyles from '../../styles/createUseStyles';
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
    var open = _a.open, onClose = _a.onClose, optionsProp = _a.options, anchorEl = _a.anchorEl, rowData = _a.rowData, rowIndex = _a.rowIndex;
    var classes = useStyles();
    var options = React.useMemo(function () {
        return (optionsProp || []).map(function (option) { return (__assign(__assign({}, option), { onClick: function () {
                option.onClick(rowData, rowIndex);
                onClose();
            } })); });
    }, [onClose, optionsProp, rowData, rowIndex]);
    var menuOptions = React.useMemo(function () { return ({
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' }
    }); }, []);
    return (_jsx(Menu, __assign({ anchorEl: anchorEl, open: open, onClose: onClose, disableAutoFocusItem: true, disableAutoFocus: true, keepMounted: true, anchorOrigin: menuOptions.anchorOrigin, transformOrigin: menuOptions.transformOrigin, elevation: 3, PaperProps: { style: { maxHeight: 350 } } }, { children: options === null || options === void 0 ? void 0 : options.map(function (option) {
            return (_jsx(MenuItem, __assign({ onClick: option.onClick, disabled: option.disabled }, { children: _jsxs("div", __assign({ className: classes.option }, { children: [option.icon, option.content] }), void 0) }), option.key));
        }) }), void 0));
});
export default MenuActions;
