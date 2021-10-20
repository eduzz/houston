import * as React from 'react';
export declare type ReactChildrenOrNode = React.ReactChildren | React.ReactNode;
export declare type ReactChild = React.ReactElement;
export declare function useChildrenProps<T = any>(children: ReactChildrenOrNode, componentType: React.ReactElement['type']): T[];
export declare function useFirstChildrenProps<T>(children: ReactChildrenOrNode, componentType: React.ReactElement['type']): T;
