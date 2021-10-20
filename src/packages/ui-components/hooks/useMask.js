import * as React from 'react';
export default function useMask(mask, value) {
    var _a = React.useMemo(function () {
        return mask !== null && mask !== void 0 ? mask : { apply: function (v) { return v; }, clean: function (v) { return v; } };
    }, [mask]), maskApply = _a.apply, maskClean = _a.clean;
    var maskedValue = React.useMemo(function () { return (maskApply ? maskApply(value) : value); }, [value, maskApply]);
    var cleanedValue = React.useMemo(function () { return (maskClean ? maskClean(value) : value); }, [value, maskClean]);
    return { maskApply: maskApply, maskClean: maskClean, maskedValue: maskedValue, cleanedValue: cleanedValue };
}
