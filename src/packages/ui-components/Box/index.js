import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import BoxMUI from '@mui/material/Box';
import clsx from 'clsx';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
import useStyles from './styles';
var Box = function (props) {
    var children = props.children, className = props.className, paper = props.paper, rest = __rest(props, ["children", "className", "paper"]);
    var classes = useStyles(props);
    return (_jsx(BoxMUI, __assign({}, rest, { className: clsx(className, classes.box, paper && classes.paper) }, { children: children }), void 0));
};
export default withHoustonTheme(React.memo(Box));
