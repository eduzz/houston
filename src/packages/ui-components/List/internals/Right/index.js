"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const ListItemIcon_1 = tslib_1.__importDefault(require("@material-ui/core/ListItemIcon"));
const clsx_1 = tslib_1.__importDefault(require("clsx"));
const ButtonIcon_1 = tslib_1.__importDefault(require("../../../ButtonIcon"));
const createUseStyles_1 = tslib_1.__importDefault(require("../../../styles/createUseStyles"));
const Typography_1 = tslib_1.__importDefault(require("../../../Typography"));
const useStyles = createUseStyles_1.default(theme => ({
    iconRootRight: {
        minWidth: 20,
        marginRight: 0,
        paddingLeft: 16,
        '& svg': {
            width: 20,
            height: 20
        }
    },
    rightRoot: {
        color: theme.colors.grey[500],
        marginLeft: 'auto'
    },
    rightText: {
        color: theme.colors.grey[600]
    },
    clickable: {
        cursor: 'pointer'
    }
}));
const Right = (_a) => {
    var { icon, text, onClick } = _a, rest = tslib_1.__rest(_a, ["icon", "text", "onClick"]);
    const classes = useStyles();
    const componentProps = {
        className: clsx_1.default([classes.rightRoot, classes.iconRootRight, onClick && classes.clickable]),
        onClick: !!onClick && onClick
    };
    if (icon && onClick) {
        return (React.createElement(ButtonIcon_1.default, Object.assign({}, componentProps, { size: 'small' }), icon));
    }
    if (icon) {
        return React.createElement(ListItemIcon_1.default, { className: clsx_1.default([classes.rightRoot, classes.iconRootRight]) }, icon);
    }
    if (text) {
        return (React.createElement(Typography_1.default, Object.assign({}, rest, componentProps, { size: 'xx-small' }), text));
    }
    return null;
};
exports.default = React.memo(Right);
