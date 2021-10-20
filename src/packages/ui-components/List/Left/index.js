import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import AvatarMUI from '@mui/material/Avatar';
import ListItemIconMUI from '@mui/material/ListItemIcon';
import clsx from 'clsx';
import createUseStyles from '../../styles/createUseStyles';
var useStyles = createUseStyles(function (theme) { return ({
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
}); });
var ListLeft = function (_a) {
    var icon = _a.icon, image = _a.image, _b = _a.striped, striped = _b === void 0 ? false : _b, rest = __rest(_a, ["icon", "image", "striped"]);
    var classes = useStyles();
    if (icon) {
        return (_jsx(ListItemIconMUI, __assign({}, rest, { className: classes.iconRoot }, { children: icon }), void 0));
    }
    if (typeof image === 'string') {
        return _jsx(AvatarMUI, __assign({}, rest, { src: image, className: clsx([classes.imageRoot, striped && classes.striped]) }), void 0);
    }
    return (_jsx(AvatarMUI, __assign({}, rest, { className: clsx([classes.imageRoot, striped && classes.striped]) }, { children: image }), void 0));
};
export default React.memo(ListLeft);
