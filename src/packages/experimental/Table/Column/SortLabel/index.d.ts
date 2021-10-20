import * as React from 'react';
interface ISortLabelProps {
    sortable?: boolean;
    active?: boolean;
    disabled?: boolean;
    direction?: 'asc' | 'desc';
    onClick?: () => void;
    children?: React.ReactNode;
}
declare const _default: React.NamedExoticComponent<ISortLabelProps>;
export default _default;
