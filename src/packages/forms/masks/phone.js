"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var phoneMask = {
    apply: function (value) {
        if (!value)
            return '';
        var regexp = value.length > 10 ? /^(\d{0,2})(\d{0,5})(\d{0,4}).*/ : /^(\d{0,2})(\d{0,4})(\d{0,4}).*/;
        var result = value.length > 2 ? '($1) $2-$3' : '($1$2$3';
        return value.replace(regexp, result).replace(/-$/, '');
    },
    clean: function (value) { return (value || '').replace(/\D/gi, '').substr(0, 11); }
};
exports.default = phoneMask;
