import * as React from 'react';
export declare function truncateText(value: string, crop: number): string;
export declare function getReactChildrenComponent(children: any, componentType: React.ReactElement['type']): React.ReactElement[];
export declare function getReactChildrenProps<T>(children: any, componentType: React.ReactElement['type']): T[];
export declare function getReactFirstChildrenProps<T>(children: any, componentType: React.ReactElement['type']): T;
export declare function isReactComponent(child: any, componentType?: React.ReactElement['type']): boolean;
