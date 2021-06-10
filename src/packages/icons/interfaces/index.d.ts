export declare type IIconSize = 'small' | 'medium' | 'large' | number;
declare type IconWebExtends = 'className' | 'id';
export interface IconWebBase extends Pick<HTMLElement, IconWebExtends> {
    size: IIconSize;
}
export {};
