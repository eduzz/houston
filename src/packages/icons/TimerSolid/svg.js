"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getIconSize_1 = require("../utils/getIconSize");
exports.default = ({ width = getIconSize_1.sizeMap.medium }) => (React.createElement("svg", { width: width, viewBox: '0 0 192 192', fill: '#546E7A', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M96 176C140.183 176 176 140.183 176 96C176 51.8172 140.183 16 96 16C51.8172 16 16 51.8172 16 96C16 140.183 51.8172 176 96 176ZM86 99C86 100.137 86.3162 101.2 86.8654 102.106C87.1569 102.885 87.616 103.616 88.2426 104.243L115.113 131.113C117.456 133.456 121.255 133.456 123.598 131.113C125.941 128.77 125.941 124.971 123.598 122.627L98 97.0294V61C98 57.6863 95.3137 55 92 55C88.6863 55 86 57.6863 86 61V99Z' })));
