import { __assign } from "tslib";
import * as React from 'react';
export function truncateText(value, crop) {
    if ((value === null || value === void 0 ? void 0 : value.length) <= crop) {
        return value;
    }
    return value.slice(0, crop) + "...";
}
export function getReactChildrenComponent(children, componentType) {
    return React.Children.map(children, function (child) {
        return isReactComponent(child, componentType) ? child : null;
    }).filter(function (result) { return !!result; });
}
export function getReactChildrenProps(children, componentType) {
    return React.Children.map(children, function (child) {
        if (!isReactComponent(child, componentType))
            return null;
        return __assign({}, child.props);
    }).filter(function (result) { return !!result; });
}
export function getReactFirstChildrenProps(children, componentType) {
    var result = getReactChildrenProps(children, componentType);
    return result && result[0];
}
export function isReactComponent(child, componentType) {
    if (componentType) {
        return child && React.isValidElement(child) && (child === null || child === void 0 ? void 0 : child.type) === componentType;
    }
    return child && React.isValidElement(child);
}
