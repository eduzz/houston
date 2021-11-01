export type IIconSize = 'small' | 'medium' | 'large' | number;

export interface IconWebBase {
  className?: string;
  id?: string;
  size?: IIconSize | number;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export type HoustonIcon = React.NamedExoticComponent<IconWebBase>;
