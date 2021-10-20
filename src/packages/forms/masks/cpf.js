"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cpfMask = {
    apply: function (value) {
        if (!value)
            return '';
        var regexp = /^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2}).*/;
        var result = '$1.$2.$3-$4';
        return value
            .replace(regexp, result)
            .replace(/[-./]$/, '')
            .replace(/[-./]$/, '')
            .replace(/[-./]$/, '');
    },
    clean: function (value) { return (value || '').replace(/\D/gi, '').substr(0, 11); }
};
exports.default = cpfMask;
