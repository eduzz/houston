import { CSSInterpolation } from '@emotion/css';
import { IHoustonTheme } from './types';
declare type StyleResult<Props, ClassKey extends string> = Record<ClassKey, CSSInterpolation | ((props: Props) => CSSInterpolation)>;
declare type Style<Props, ClassKey extends string> = StyleResult<Props, ClassKey> | ((theme: IHoustonTheme) => StyleResult<Props, ClassKey>);
export default function createUseStyles<Props extends Record<string, any>, ClassKey extends string = string>(generator: Style<Props, ClassKey>): (props?: Partial<Props>) => Record<ClassKey, string>;
export {};
