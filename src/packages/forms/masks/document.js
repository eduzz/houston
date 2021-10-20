"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cnpj_1 = require("./cnpj");
var cpf_1 = require("./cpf");
var documentMask = {
    apply: function (value) {
        if (!value)
            return '';
        return value.length > 11 ? cnpj_1.default.apply(value) : cpf_1.default.apply(value);
    },
    clean: function (value) {
        if (!value)
            return '';
        return value.length > 11 ? cnpj_1.default.clean(value) : cpf_1.default.clean(value);
    }
};
exports.default = documentMask;
