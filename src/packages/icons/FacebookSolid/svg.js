"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getIconSize_1 = require("../utils/getIconSize");
exports.default = ({ width = getIconSize_1.sizeMap.small }) => (React.createElement("svg", { width: width, viewBox: '0 0 192 192', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M24 34C24 28.4771 28.4772 24 34 24H158C163.523 24 168 28.4772 168 34V158C168 163.523 163.523 168 158 168H122.388V112.374H139.003L142.164 91.6622H122.388V78.2277C122.388 72.56 125.146 67.0322 134.003 67.0322H143V49.3994C143 49.3994 134.839 48 127.04 48C110.745 48 100.105 57.922 100.105 75.8766V91.6622H82V112.374H100.105V168H34C28.4771 168 24 163.523 24 158V34Z' })));
