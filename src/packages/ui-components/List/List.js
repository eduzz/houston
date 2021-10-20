import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import ListMUI from '@mui/material/List';
import clsx from 'clsx';
import nestedComponent from '../Helpers/nestedComponent';
import createUseStyles from '../styles/createUseStyles';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
import Item from './Item';
import Left from './Left';
import Right from './Right';
import Text from './Text';
var useStyles = createUseStyles(function (theme) { return ({
    root: {
        '& > li': {
            padding: '12px 16px',
            borderRadius: 4
        },
        '& > li > div': {
            display: 'flex',
            alignItems: 'flex-start',
            width: '100%'
        },
        '& > li > div > .list-item-text': {
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            flex: 1
        }
    },
    stripedRows: {
        '& > li:nth-child(even)': {
            backgroundColor: theme.colors.grey[100]
        }
    }
}); });
var List = function (_a) {
    var children = _a.children, stripedRows = _a.stripedRows, props = __rest(_a, ["children", "stripedRows"]);
    var classes = useStyles();
    return (_jsx(ListMUI, __assign({ component: 'ul' }, props, { className: clsx([classes.root, stripedRows && classes.stripedRows]) }, { children: children }), void 0));
};
export default nestedComponent(withHoustonTheme(React.memo(List)), {
    Item: Item,
    Text: Text,
    Left: Left,
    Right: Right
});
