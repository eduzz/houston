import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { createContext, useContext } from 'use-context-selector';
export var FormFieldsContext = createContext(null);
var Form = function (_a) {
    var context = _a.context, rest = __rest(_a, ["context"]);
    return (_jsx(FormFieldsContext.Provider, __assign({ value: context }, { children: _jsx("form", __assign({}, rest, { onReset: context.handleReset, onSubmit: context.handleSubmit }), void 0) }), void 0));
};
export function useFormContext() {
    return useContext(FormFieldsContext);
}
export default React.memo(Form);
