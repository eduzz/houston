import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import ListItemIconMUI from '@mui/material/ListItemIcon';
import clsx from 'clsx';
import IconButton from '../../ButtonIcon';
import createUseStyles from '../../styles/createUseStyles';
import Typography from '../../Typography';
var useStyles = createUseStyles(function (theme) { return ({
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
}); });
var ListRight = function (_a) {
    var icon = _a.icon, text = _a.text, onClick = _a.onClick, rest = __rest(_a, ["icon", "text", "onClick"]);
    var classes = useStyles();
    var componentProps = {
        className: clsx([classes.rightRoot, classes.iconRootRight, onClick && classes.clickable]),
        onClick: !!onClick && onClick
    };
    if (icon && onClick) {
        return (_jsx(IconButton, __assign({}, componentProps, { size: 'small' }, { children: icon }), void 0));
    }
    if (icon) {
        return _jsx(ListItemIconMUI, __assign({ className: clsx([classes.rightRoot, classes.iconRootRight]) }, { children: icon }), void 0);
    }
    if (text) {
        return (_jsx(Typography, __assign({}, rest, componentProps, { size: 'xx-small' }, { children: text }), void 0));
    }
    return null;
};
export default React.memo(ListRight);
