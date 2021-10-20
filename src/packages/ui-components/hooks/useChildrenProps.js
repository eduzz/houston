import * as React from 'react';
import { getReactChildrenProps, getReactFirstChildrenProps } from '../Helpers/functions';
export function useChildrenProps(children, componentType) {
    return React.useMemo(function () {
        return getReactChildrenProps(children, componentType);
    }, [children, componentType]);
}
export function useFirstChildrenProps(children, componentType) {
    return React.useMemo(function () {
        return getReactFirstChildrenProps(children, componentType);
    }, [children, componentType]);
}
