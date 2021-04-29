export type IIconSize = 'small' | 'medium' | 'large' | number;

type IIconWebExtends = 'className' | 'id';

export interface IIconWebBase extends Pick<HTMLElement, IIconWebExtends> {
  size: IIconSize;
}
