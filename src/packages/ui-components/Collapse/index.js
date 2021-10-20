import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import CollapseMUI from '@mui/material/Collapse';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
var Collapse = function (_a) {
    var children = _a.children, visibled = _a.visibled, _b = _a.destroyOnClose, destroyOnClose = _b === void 0 ? false : _b, onEnter = _a.onEnter, _c = _a.mountOnEnter, mountOnEnter = _c === void 0 ? false : _c;
    return (_jsx(CollapseMUI, __assign({ in: visibled, timeout: 500, unmountOnExit: destroyOnClose, onEnter: !!onEnter && onEnter, mountOnEnter: mountOnEnter }, { children: children }), void 0));
};
export default withHoustonTheme(React.memo(Collapse));
