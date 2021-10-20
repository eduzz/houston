"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zipcodeMask = {
    apply: function (value) {
        if (!value)
            return '';
        return value.replace(/^(\d{0,5})(\d{0,3}).*/, '$1-$2').replace(/-$/, '');
    },
    clean: function (value) { return (value || '').replace(/\D/gi, '').substr(0, 8); }
};
exports.default = zipcodeMask;
