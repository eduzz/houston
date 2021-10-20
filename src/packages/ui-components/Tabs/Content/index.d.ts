import * as React from 'react';
export interface ITabsContentProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    label: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    disablePadding?: boolean;
}
declare const _default: React.NamedExoticComponent<ITabsContentProps>;
export default _default;
