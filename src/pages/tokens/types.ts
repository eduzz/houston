/* eslint-disable max-lines */
export type Color = {
  pure: string;
  light: string;
  medium: string;
  dark: string;
};

export type Spacing = {
  /**
   * A helper function that returns a value following
   * our spacing ratio that is is 4px/0.25rem
   *
   * Example: If you provide 1 we'll return 0.25rem
   */
  fn: (mult?: number) => string;
  quarck: '0.25rem';
  nano: '0.5rem';
  xxxs: '1rem';
  xxs: '1.5rem';
  xs: '2rem';
  sm: '2.5rem';
  md: '3rem';
  lg: '3.5rem';
  xl: '4rem';
  xxl: '5rem';
  xxxl: '7.5rem';
  huge: '10rem';
  giant: '12.5rem';
  inline: {
    quarck: '0.25rem';
    nano: '0.5rem';
    xxxs: '1rem';
    xxs: '1.5rem';
    xs: '2rem';
    sm: '2.5rem';
    md: '3rem';
    lg: '3.5rem';
    xl: '4rem';
    xxl: '5rem';
    xxxl: '7.5rem';
    huge: '10rem';
    giant: '12.5rem';
  };
  inset: {
    xxxs: '0.25rem';
    xxs: '0.5rem';
    xs: '1rem';
    sm: '1.5rem';
    md: '2rem';
    lg: '3rem';
  };
  stack: {
    quarck: '0.25rem';
    nano: '0.5rem';
    xxxs: '1rem';
    xxs: '1.5rem';
    xs: '2rem';
    sm: '2.5rem';
    md: '3rem';
    lg: '3.5rem';
    xl: '4rem';
    xxl: '5rem';
    xxxl: '7.5rem';
    huge: '10rem';
    giant: '12.5rem';
  };
  squish: {
    xxs: '0.5rem 1rem 0.5rem 1rem';
    xs: '1rem 1.5rem 1rem 1.5rem';
    sm: '1rem 2rem 1rem 2rem';
  };
};

export type Border = Readonly<{
  width: {
    none: '0';
    xs: '1px';
    sm: '2px';
    md: '4px';
    lg: '8px';
  };
  radius: {
    none: '0';
    xs: '0.25rem';
    sm: '0.5rem';
    md: '1rem';
    pill: '31.25rem';
    circular: '50%';
  };
}>;

export type Opacity = {
  level: {
    0: 0;
    1: 0.04;
    2: 0.08;
    3: 0.12;
    4: 0.16;
    5: 0.24;
    6: 0.32;
    7: 0.64;
    8: 0.72;
  };
};

export type Shadow = {
  level: {
    1: '0px 4px 8px rgba(0, 0, 0, 0.16)';
    2: '0px 8px 24px rgba(0, 0, 0, 0.16)';
    3: '0px 16px 32px rgba(0, 0, 0, 0.16)';
    4: '0px 16px 48px rgba(0, 0, 0, 0.24)';
  };
};

export type Font = {
  size: {
    xxxs: '0.75rem';
    xxs: '0.875rem';
    xs: '1rem';
    sm: '1.25rem';
    md: '1.5rem';
    lg: '2rem';
    xl: '2.5rem';
    xxl: '3rem';
    xxxl: '4rem';
    display: '5rem';
    giant: '6rem';
  };
  family: {
    base: 'Open Sans, "Helvetica Neue", Arial, sans-serif';
  };
  weight: {
    regular: 400;
    semibold: 600;
    bold: 700;
  };
};

export type Line = {
  height: {
    default: '100%';
    xs: '115%';
    sm: '120%';
    md: '133%';
    lg: '150%';
    xl: '170%';
    xxl: '200%';
  };
};

export type NeutralColor = {
  low: {
    pure: '#000000';
    light: '#A3A3A3';
    medium: '#666666';
    dark: '#292929';
  };
  high: {
    pure: '#FFFFFF';
    light: '#F5F5F5';
    medium: '#E0E0E0';
    dark: '#CCCCCC';
  };
};

export type FeedbackColor = {
  positive: {
    pure: '#4CAF50';
    light: '#D2EBD3';
    medium: '#66D26A';
    dark: '#2D8D31';
  };
  negative: {
    pure: '#F44336';
    light: '#FDD9D7';
    medium: '#FF8179';
    dark: '#D72518';
  };
  warning: {
    pure: '#FFCA28';
    light: '#FFF4D4';
    medium: '#FFDD76';
    dark: '#E2AD08';
  };
  informative: {
    pure: '#039BE5';
    light: '#CDEBFA';
    medium: '#71D0FF';
    dark: '#0077B1';
  };
};

export type BrandColor = {
  primary: Color;
};

export type BrandColors = {
  eduzz: {
    primary: {
      pure: '#0D2772';
      light: '#6C88D9';
      medium: '#000540';
      dark: '#000540';
    };
    secondary: {
      pure: '#FFBC00';
      light: '#FFF4BF';
      medium: '#FFDB4D';
      dark: '#996600';
    };
  };
  alumy: {
    primary: {
      pure: '#6200EE';
      light: '#D4CCFF';
      medium: '#8E66FF';
      dark: '#440087';
    };
  };
  blinket: {
    primary: {
      pure: '#D81B60';
      light: '#F48FB1 ';
      medium: '#EC407A';
      dark: '#AD1457';
    };
  };
  jobzz: {
    primary: {
      pure: '#01579B';
      light: '#99BCD7';
      medium: '#3479AF';
      dark: '#002F6C';
    };
  };
  nutror: {
    primary: {
      pure: '#00A526';
      light: '#99E9BA';
      medium: '#00C853';
      dark: '#00801D';
    };
  };
  orbita: {
    primary: {
      pure: '#0D47A1';
      light: '#9EB5D9';
      medium: '#265AAB';
      dark: '#072D83';
    };
  };
  safevideo: {
    primary: {
      pure: '#E39837';
      light: '#FEC92D';
      medium: '#F5B431';
      dark: '#804306';
    };
  };
  telescope: {
    primary: {
      pure: '#8E24AA';
      light: '#D2A7DD';
      medium: '#9A3AB3';
      dark: '#560877';
    };
  };
};

export type Brands = keyof BrandColors;

export type Breakpoints = {
  xs: '320px';
  sm: '576px';
  md: '768px';
  lg: '992px';
  xlg: '1400px';
};

export type BreakpointsUtils = {
  down(key: keyof Breakpoints): string;
  up(key: keyof Breakpoints): string;
};

export type HoustonTokens = {
  spacing: Spacing;
  border: Border;
  opacity: Opacity;
  shadow: Shadow;
  font: Font;
  line: Line;
  neutralColor: NeutralColor;
  feedbackColor: FeedbackColor;
  brandColor: BrandColor;
  breakpoints: Breakpoints & BreakpointsUtils;
  /**
   * A helper function to convert pixel into rem
   * @param {number} rate - Rem to pixel rate with default value to 16
   */
  pxToRem: (value: number, rate?: number) => number;
  /**
   * A helper function to convert rem into pixel
   * @param {number} rate - Rem to pixel rate with default value to 16
   */
  remToPx: (value: number, rate?: number) => number;
  /**
   * A helper function to convert hex colors into rgba
   * @param {number} opacity - Default value to 1
   */
  hexToRgba: (hexColor: string, opacity?: number) => string;
  /**
   * A helper function to convert string measurement units to numbers
   * @param {string} value
   * @example '0.5rem' => 0.5
   */
  cleanUnit: (value: string) => number;
};
