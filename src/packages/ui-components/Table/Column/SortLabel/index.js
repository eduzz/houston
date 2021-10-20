import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';
import IconArrowUp from '@eduzz/houston-icons/ArrowUp';
import createUseStyles from '../../../styles/createUseStyles';
import TableContext from '../../context';
var useStyles = createUseStyles(function (theme) { return ({
    root: {
        fontSize: theme.textSize('normal'),
        fontWeight: theme.fontWeight('semibold'),
        color: theme.colors.grey[600],
        '&.--small': {
            fontSize: theme.textSize('small')
        },
        '&.--collapse-content': {
            fontSize: theme.textSize('small'),
            color: theme.colors.grey[500]
        },
        '&.--disabled': {
            color: theme.colors.grey[400],
            cursor: 'no-drop'
        },
        '&.--sortable': {
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center'
        },
        '& .icon': {
            lineHeight: 0,
            transition: '0.2s linear',
            '&.--desc': {
                transform: 'rotate(-180deg)'
            }
        }
    }
}); });
var SortLabel = function (_a) {
    var children = _a.children, sortable = _a.sortable, active = _a.active, direction = _a.direction, disabled = _a.disabled, onClick = _a.onClick;
    var tableSize = useContextSelector(TableContext, function (context) { return context.size; });
    var isCollapseContent = useContextSelector(TableContext, function (context) { return context.isCollapseContent; });
    var classes = useStyles();
    if (!sortable || isCollapseContent) {
        return (_jsx("span", __assign({ className: clsx(classes.root, disabled && '--disabled', tableSize === 'small' && '--small', isCollapseContent && '--collapse-content') }, { children: children }), void 0));
    }
    return (_jsxs("div", __assign({ className: clsx(classes.root, disabled && '--disabled', tableSize === 'small' && '--small', '--sortable'), onClick: onClick }, { children: [children, active && (_jsx("div", __assign({ className: clsx(direction === 'desc' && '--desc', 'icon') }, { children: _jsx(IconArrowUp, {}, void 0) }), void 0))] }), void 0));
};
export default React.memo(SortLabel);
