export type SpacingFn = (mult: number) => string;

export type Color = {
  pure: string;
  light: string;
  medium: string;
  dark: string;
};

export type Spacing = {
  /**
   * A helper function that returns a value following our spacing ratio
   *
   * Example: If you provide 1 we'll return you 0.25rem
   *
   * Note: Our spacing ratio is 4px/0.25rem
   */
  fn: SpacingFn;
  quarck: '4px';
  nano: '8px';
  xxxs: '16px';
  xxs: '24px';
  xs: '32px';
  sm: '40px';
  md: '48px';
  lg: '56px';
  xl: '64px';
  xxl: '80px';
  xxxl: '120px';
  huge: '160px';
  giant: '200px';
  inset: {
    quarck: '4px';
    nano: '8px';
    xxxs: '16px';
    xxs: '24px';
    xs: '32px';
    sm: '40px';
    md: '48px';
    lg: '56px';
    xl: '64px';
    xxl: '80px';
    xxxl: '120px';
    huge: '160px';
    giant: '200px';
  };
  stack: {
    quarck: '4px';
    nano: '8px';
    xxxs: '16px';
    xxs: '24px';
    xs: '32px';
    sm: '40px';
    md: '48px';
    lg: '56px';
    xl: '64px';
    xxl: '80px';
    xxxl: '120px';
    huge: '160px';
    giant: '200px';
  };
  squish: {
    xxs: '8px 16px 8px 16px';
    xs: '16px 24px 16px 24px';
    sm: '16px 32px 16px 32px';
  };
};

export type Border = Readonly<{
  width: {
    none: '0px';
    xs: '1px';
    sm: '2px';
    md: '4px';
    lg: '8px';
  };
  radius: {
    none: '0px';
    xs: '4px';
    sm: '8px';
    md: '16px';
    pill: '500px';
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
    1: '0px 4px 8px #000000 16%';
    2: '0px 8px 24px #000000 16%';
    3: '0px 16px 32px #000000 16%';
    4: '0px 16px 48px #000000 24%';
  };
};

export type Font = {
  size: {
    xxxs: '12px';
    xxs: '14px';
    xs: '16px';
    sm: '20px';
    md: '24px';
    lg: '32px';
    xl: '40px';
    xxl: '48px';
    xxxl: '64px';
    display: '80px';
    giant: '96px';
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

/**
 * A helper function to transform pixels into rem
 *
 * Note: We consider 1rem as 16px by default
 */
export type PxToRem = (value: number | string, rate?: number) => string;

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
  pxToRem: PxToRem;
};
