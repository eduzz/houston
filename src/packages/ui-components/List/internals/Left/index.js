"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const Avatar_1 = tslib_1.__importDefault(require("@material-ui/core/Avatar"));
const ListItemIcon_1 = tslib_1.__importDefault(require("@material-ui/core/ListItemIcon"));
const clsx_1 = tslib_1.__importDefault(require("clsx"));
const createUseStyles_1 = tslib_1.__importDefault(require("../../../styles/createUseStyles"));
const useStyles = createUseStyles_1.default(theme => ({
    iconRoot: {
        color: theme.colors.grey[500],
        minWidth: 20,
        lineHeight: 1.5,
        marginRight: 8,
        '& > svg': {
            width: 20,
            height: 20
        }
    },
    imageRoot: {
        color: theme.colors.grey[600],
        backgroundColor: theme.colors.grey[200],
        marginRight: 8,
        '& > svg': {
            width: 20,
            height: 20
        }
    },
    striped: {
        backgroundColor: '#fff'
    }
}));
const Left = (_a) => {
    var { icon, image, striped = false } = _a, rest = tslib_1.__rest(_a, ["icon", "image", "striped"]);
    const classes = useStyles();
    if (icon) {
        return (React.createElement(ListItemIcon_1.default, Object.assign({}, rest, { className: classes.iconRoot }), icon));
    }
    if (typeof image === 'string') {
        return React.createElement(Avatar_1.default, Object.assign({}, rest, { src: image, className: clsx_1.default([classes.imageRoot, striped && classes.striped]) }));
    }
    return (React.createElement(Avatar_1.default, Object.assign({}, rest, { className: clsx_1.default([classes.imageRoot, striped && classes.striped]) }), image));
};
exports.default = React.memo(Left);
