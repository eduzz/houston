export type IIconSize = 'small' | 'medium' | 'large' | number;

type IconWebExtends = 'className' | 'id';

export interface IconWebBase extends Pick<HTMLElement, IconWebExtends> {
  size: IIconSize;
}
