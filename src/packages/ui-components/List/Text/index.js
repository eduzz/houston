import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Typography from '../../Typography';
var ListText = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, props = __rest(_a, ["title", "subtitle"]);
    return (_jsxs("div", __assign({ className: 'list-item-text' }, { children: [typeof title === 'string' ? (_jsx(Typography, __assign({}, props, { size: 'default', fontWeight: 'regular', lineHeight: 'compact' }, { children: title }), void 0)) : (title), typeof subtitle === 'string' ? (_jsx(Typography, __assign({}, props, { size: 'small', fontWeight: 'regular', lineHeight: 'compact' }, { children: subtitle }), void 0)) : (subtitle)] }), void 0));
};
export default React.memo(ListText);
