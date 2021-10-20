"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getIconSize_1 = require("../utils/getIconSize");
exports.default = ({ width = getIconSize_1.sizeMap.small }) => (React.createElement("svg", { width: width, viewBox: '0 0 192 192', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement("path", { d: 'M24 96C24 84.9543 32.9543 76 44 76C55.0457 76 64 84.9543 64 96C64 107.046 55.0457 116 44 116C32.9543 116 24 107.046 24 96Z' }),
    React.createElement("path", { d: 'M76 96C76 84.9543 84.9543 76 96 76C107.046 76 116 84.9543 116 96C116 107.046 107.046 116 96 116C84.9543 116 76 107.046 76 96Z' }),
    React.createElement("path", { d: 'M128 96C128 84.9543 136.954 76 148 76C159.046 76 168 84.9543 168 96C168 107.046 159.046 116 148 116C136.954 116 128 107.046 128 96Z' })));
