import { __awaiter, __generator } from "tslib";
import * as React from 'react';
export function useCreateTempInputDate() {
    var _this = this;
    var create = React.useCallback(function (options) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve) {
                        var input = document.createElement('input');
                        input.value = (options === null || options === void 0 ? void 0 : options.initialValue) ? options.initialValue.toJSON().slice(0, 10) : '';
                        input.setAttribute('type', 'date');
                        input.setAttribute('style', 'width: 0; height: 0; opacity: 0; position: absolute; top: -1000px; left: -1000px;');
                        input.addEventListener('blur', function (e) {
                            var event = e;
                            document.body.removeChild(input);
                            (options === null || options === void 0 ? void 0 : options.onClose) && (options === null || options === void 0 ? void 0 : options.onClose());
                            resolve(event);
                        });
                        document.body.appendChild(input);
                        setTimeout(function () {
                            input.click();
                            input.focus();
                        }, 0);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); }, []);
    return [create];
}
