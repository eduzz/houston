"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const Menu_1 = (0, tslib_1.__importDefault)(require("@mui/material/Menu"));
const MenuItem_1 = (0, tslib_1.__importDefault)(require("@mui/material/MenuItem"));
const createUseStyles_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/styles/createUseStyles"));
const useStyles = (0, createUseStyles_1.default)(() => ({
    option: {
        display: 'flex',
        alignItems: 'center',
        '& svg, span': {
            marginRight: 8,
            fontSize: 24
        }
    }
}));
const MenuActions = React.memo(({ open, onClose, options: optionsProp, anchorEl, rowData, rowIndex }) => {
    const classes = useStyles();
    const options = React.useMemo(() => {
        return (optionsProp || []).map(option => (Object.assign(Object.assign({}, option), { onClick: () => {
                option.onClick(rowData, rowIndex);
                onClose();
            } })));
    }, [onClose, optionsProp, rowData, rowIndex]);
    const menuOptions = React.useMemo(() => ({
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' }
    }), []);
    return (React.createElement(Menu_1.default, { anchorEl: anchorEl, open: open, onClose: onClose, disableAutoFocusItem: true, disableAutoFocus: true, keepMounted: true, anchorOrigin: menuOptions.anchorOrigin, transformOrigin: menuOptions.transformOrigin, elevation: 3, PaperProps: {
            style: {
                maxHeight: 350
            }
        } }, options === null || options === void 0 ? void 0 : options.map(option => {
        return (React.createElement(MenuItem_1.default, { key: option.key, onClick: option.onClick, disabled: option.disabled },
            React.createElement("div", { className: classes.option },
                option.icon,
                option.content)));
    })));
});
exports.default = MenuActions;
