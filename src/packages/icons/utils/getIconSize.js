"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizeMap = void 0;
exports.sizeMap = {
    small: 20,
    medium: 32,
    large: 48
};
exports.default = (size = 'medium') => {
    if (typeof size === 'number') {
        return size;
    }
    return exports.sizeMap[size];
};
