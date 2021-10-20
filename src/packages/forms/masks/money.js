"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moneyMask = {
    apply: function (value) {
        if (value === null || value === undefined || value === '')
            return '';
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(Number(value) || 0);
    },
    clean: function (value) {
        value = (value || '').toString().replace(/[^\d,]/gi, '');
        if (!value.includes(',')) {
            value = '0,' + padStart(value, 2, '0');
        }
        var _a = value.split(','), cents = _a[1];
        if (cents && cents.length !== 2) {
            value = value
                .replace(',', '')
                .replace(/(\d+)?(\d{2})/gi, '$1,$2')
                .replace(/^,/gi, '0,');
        }
        return parseFloat(value.replace(/\./gi, '').replace(',', '.'));
    }
};
function padStart(string, length, chars) {
    var strLength = length ? string.length : 0;
    return strLength < length ? createPadding(length - strLength, chars) + string : string || '';
}
function createPadding(length, chars) {
    return new Array(length).fill(chars).join('');
}
exports.default = moneyMask;
