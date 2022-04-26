import { css, CSSInterpolation } from '@emotion/css';

import { HoustonTokens } from '@eduzz/houston-tokens';

import useHoustonTheme from './useHoustonTheme';

type StyleResult<Props, ClassKey extends string> = Record<
  ClassKey,
  CSSInterpolation | ((props: Props) => CSSInterpolation)
>;

type Style<Props, ClassKey extends string> =
  | StyleResult<Props, ClassKey>
  | ((theme: HoustonTokens) => StyleResult<Props, ClassKey>);

export default function createUseStyles<Props extends Record<string, any>, ClassKey extends string = string>(
  generator: Style<Props, ClassKey>
): (props?: Partial<Props>) => Record<ClassKey, string> {
  return props => {
    let styles: StyleResult<Props, ClassKey>;

    if (typeof generator === 'function') {
      const theme = useHoustonTheme();
      styles = generator(theme);
    } else {
      styles = generator;
    }

    return Object.keys(styles).reduce((acc, key) => {
      return {
        ...acc,
        [key]: css(typeof styles[key] === 'function' ? styles[key](props) : styles[key])
      };
    }, {} as Record<ClassKey, string>);
  };
}
