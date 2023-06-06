/* eslint-disable max-lines */
/**
 * @deprecated
 */
export type Color = {
  /**
   * @deprecated
   */
  pure: string;
  /**
   * @deprecated
   */
  light: string;
  /**
   * @deprecated
   */
  medium: string;
  /**
   * @deprecated
   */
  dark: string;
};

/**
 * @deprecated
 */
export type BeltColor = {
  white: '#D9D9D9';
  red: '#FF4141';
  orange: '#FFA439';
  green: '#33DB7A';
  black: '#000000';
  golden: '#FFCE00';
};

/**
 * @deprecated
 */
export type Spacing = {
  /**
   * A helper function that returns a value following
   * our spacing ratio that is is 4px/0.25rem
   *
   * Example: If you provide 1 we'll return 0.25rem
   */
  fn: (mult: number) => string;
  /**
   * @deprecated
   */
  quarck: '0.25rem';
  /**
   * @deprecated
   */
  nano: '0.5rem';
  /**
   * @deprecated
   */
  xxxs: '1rem';
  /**
   * @deprecated
   */
  xxs: '1.5rem';
  /**
   * @deprecated
   */
  xs: '2rem';
  /**
   * @deprecated
   */
  sm: '2.5rem';
  /**
   * @deprecated
   */
  md: '3rem';
  /**
   * @deprecated
   */
  lg: '3.5rem';
  /**
   * @deprecated
   */
  xl: '4rem';
  /**
   * @deprecated
   */
  xxl: '5rem';
  /**
   * @deprecated
   */
  xxxl: '7.5rem';
  /**
   * @deprecated
   */
  huge: '10rem';
  /**
   * @deprecated
   */
  giant: '12.5rem';
  /**
   * @deprecated
   */
  inline: {
    /**
     * @deprecated
     */
    quarck: '0.25rem';
    /**
     * @deprecated
     */
    nano: '0.5rem';
    /**
     * @deprecated
     */
    xxxs: '1rem';
    /**
     * @deprecated
     */
    xxs: '1.5rem';
    /**
     * @deprecated
     */
    xs: '2rem';
    /**
     * @deprecated
     */
    sm: '2.5rem';
    /**
     * @deprecated
     */
    md: '3rem';
    /**
     * @deprecated
     */
    lg: '3.5rem';
    /**
     * @deprecated
     */
    xl: '4rem';
    /**
     * @deprecated
     */
    xxl: '5rem';
    /**
     * @deprecated
     */
    xxxl: '7.5rem';
    /**
     * @deprecated
     */
    huge: '10rem';
    /**
     * @deprecated
     */
    giant: '12.5rem';
  };
  /**
   * @deprecated
   */
  inset: {
    /**
     * @deprecated
     */
    xxxs: '0.25rem';
    /**
     * @deprecated
     */
    xxs: '0.5rem';
    /**
     * @deprecated
     */
    xs: '1rem';
    /**
     * @deprecated
     */
    sm: '1.5rem';
    /**
     * @deprecated
     */
    md: '2rem';
    /**
     * @deprecated
     */
    lg: '3rem';
  };
  /**
   * @deprecated
   */
  stack: {
    /**
     * @deprecated
     */
    quarck: '0.25rem';
    /**
     * @deprecated
     */
    nano: '0.5rem';
    /**
     * @deprecated
     */
    xxxs: '1rem';
    /**
     * @deprecated
     */
    xxs: '1.5rem';
    /**
     * @deprecated
     */
    xs: '2rem';
    /**
     * @deprecated
     */
    sm: '2.5rem';
    /**
     * @deprecated
     */
    md: '3rem';
    /**
     * @deprecated
     */
    lg: '3.5rem';
    /**
     * @deprecated
     */
    xl: '4rem';
    /**
     * @deprecated
     */
    xxl: '5rem';
    /**
     * @deprecated
     */
    xxxl: '7.5rem';
    /**
     * @deprecated
     */
    huge: '10rem';
    /**
     * @deprecated
     */
    giant: '12.5rem';
  };
  /**
   * @deprecated
   */
  squish: {
    /**
     * @deprecated
     */
    xxs: '0.5rem 1rem 0.5rem 1rem';
    /**
     * @deprecated
     */
    xs: '1rem 1.5rem 1rem 1.5rem';
    /**
     * @deprecated
     */
    sm: '1rem 2rem 1rem 2rem';
  };
};

/**
 * @deprecated
 */
export type Border = {
  /**
   * @deprecated
   */
  width: {
    /**
     * @deprecated
     */
    none: '0';
    /**
     * @deprecated
     */
    xs: '1px';
    /**
     * @deprecated
     */
    sm: '2px';
    /**
     * @deprecated
     */
    md: '4px';
    /**
     * @deprecated
     */
    lg: '8px';
  };
  /**
   * @deprecated
   */
  radius: {
    /**
     * @deprecated
     */
    none: '0';
    /**
     * @deprecated
     */
    xs: '0.25rem';
    /**
     * @deprecated
     */
    sm: '0.5rem';
    /**
     * @deprecated
     */
    md: '1rem';
    /**
     * @deprecated
     */
    pill: '31.25rem';
    /**
     * @deprecated
     */
    circular: '50%';
  };
};

/**
 * @deprecated
 */
export type Opacity = {
  /**
   * @deprecated
   */
  level: {
    /**
     * @deprecated
     */
    0: 0;
    /**
     * @deprecated
     */
    1: 0.04;
    /**
     * @deprecated
     */
    2: 0.08;
    /**
     * @deprecated
     */
    3: 0.12;
    /**
     * @deprecated
     */
    4: 0.16;
    /**
     * @deprecated
     */
    5: 0.24;
    /**
     * @deprecated
     */
    6: 0.32;
    /**
     * @deprecated
     */
    7: 0.64;
    /**
     * @deprecated
     */
    8: 0.72;
  };
};

/**
 * @deprecated
 */
export type Shadow = {
  /**
   * @deprecated
   */
  level: {
    /**
     * @deprecated
     */
    1: '0px 4px 8px rgba(0, 0, 0, 0.16)';
    /**
     * @deprecated
     */
    2: '0px 8px 24px rgba(0, 0, 0, 0.16)';
    /**
     * @deprecated
     */
    3: '0px 16px 32px rgba(0, 0, 0, 0.16)';
    /**
     * @deprecated
     */
    4: '0px 16px 48px rgba(0, 0, 0, 0.24)';
  };
};

/**
 * @deprecated
 */
export type Font = {
  /**
   * @deprecated
   */
  size: {
    /**
     * @deprecated
     */
    xxxs: '0.75rem';
    /**
     * @deprecated
     */
    xxs: '0.875rem';
    /**
     * @deprecated
     */
    xs: '1rem';
    /**
     * @deprecated
     */
    sm: '1.25rem';
    /**
     * @deprecated
     */
    md: '1.5rem';
    /**
     * @deprecated
     */
    lg: '2rem';
    /**
     * @deprecated
     */
    xl: '2.5rem';
    /**
     * @deprecated
     */
    xxl: '3rem';
    /**
     * @deprecated
     */
    xxxl: '4rem';
    /**
     * @deprecated
     */
    display: '5rem';
    /**
     * @deprecated
     */
    giant: '6rem';
  };
  /**
   * @deprecated
   */
  family: {
    /**
     * @deprecated
     */
    base: 'Open Sans, "Helvetica Neue", Arial, sans-serif';
  };
  /**
   * @deprecated
   */
  weight: {
    /**
     * @deprecated
     */
    regular: 400;
    /**
     * @deprecated
     */
    semibold: 600;
    /**
     * @deprecated
     */
    bold: 700;
  };
};

/**
 * @deprecated
 */
export type Line = {
  /**
   * @deprecated
   */
  height: {
    /**
     * @deprecated
     */
    default: '100%';
    /**
     * @deprecated
     */
    xs: '115%';
    /**
     * @deprecated
     */
    sm: '120%';
    /**
     * @deprecated
     */
    md: '133%';
    /**
     * @deprecated
     */
    lg: '150%';
    /**
     * @deprecated
     */
    xl: '170%';
    /**
     * @deprecated
     */
    xxl: '200%';
  };
};

/**
 * @deprecated
 */
export type NeutralColor = {
  /**
   * @deprecated
   */
  low: {
    /**
     * @deprecated
     */
    pure: '#000000';
    /**
     * @deprecated
     */
    light: '#A3A3A3';
    /**
     * @deprecated
     */
    medium: '#666666';
    /**
     * @deprecated
     */
    dark: '#292929';
  };
  /**
   * @deprecated
   */
  high: {
    /**
     * @deprecated
     */
    pure: '#FFFFFF';
    /**
     * @deprecated
     */
    light: '#F5F5F5';
    /**
     * @deprecated
     */
    medium: '#E0E0E0';
    /**
     * @deprecated
     */
    dark: '#CCCCCC';
  };
};

/**
 * @deprecated
 */
export type FeedbackColor = {
  /**
   * @deprecated
   */
  positive: {
    /**
     * @deprecated
     */
    pure: '#4CAF50';
    /**
     * @deprecated
     */
    light: '#D2EBD3';
    /**
     * @deprecated
     */
    medium: '#66D26A';
    /**
     * @deprecated
     */
    dark: '#2D8D31';
  };
  /**
   * @deprecated
   */
  negative: {
    /**
     * @deprecated
     */
    pure: '#F44336';
    /**
     * @deprecated
     */
    light: '#FDD9D7';
    /**
     * @deprecated
     */
    medium: '#FF8179';
    /**
     * @deprecated
     */
    dark: '#D72518';
  };
  /**
   * @deprecated
   */
  warning: {
    /**
     * @deprecated
     */
    pure: '#FFCA28';
    /**
     * @deprecated
     */
    light: '#FFF4D4';
    /**
     * @deprecated
     */
    medium: '#FFDD76';
    /**
     * @deprecated
     */
    dark: '#E2AD08';
  };
  /**
   * @deprecated
   */
  informative: {
    /**
     * @deprecated
     */
    pure: '#039BE5';
    /**
     * @deprecated
     */
    light: '#CDEBFA';
    /**
     * @deprecated
     */
    medium: '#71D0FF';
    /**
     * @deprecated
     */
    dark: '#0077B1';
  };
};

/**
 * @deprecated
 */
export type BrandColor = {
  /**
   * @deprecated
   */
  primary: Color;
  /**
   * @deprecated
   */
  secondary: Color;
};

/**
 * @deprecated
 */
export type BrandColors = {
  /**
   * @deprecated
   */
  eduzz: {
    /**
     * @deprecated
     */
    primary: {
      /**
       * @deprecated
       */
      pure: '#0D2772';
      /**
       * @deprecated
       */
      light: '#6C88D9';
      /**
       * @deprecated
       */
      medium: '#000540';
      /**
       * @deprecated
       */
      dark: '#000540';
    };
    /**
     * @deprecated
     */
    secondary: {
      /**
       * @deprecated
       */
      pure: '#FFBC00';
      /**
       * @deprecated
       */
      light: '#FFF4BF';
      /**
       * @deprecated
       */
      medium: '#FFDB4D';
      /**
       * @deprecated
       */
      dark: '#996600';
    };
  };
  alumy: {
    /**
     * @deprecated
     */
    primary: {
      /**
       * @deprecated
       */
      pure: '#6200EE';
      /**
       * @deprecated
       */
      light: '#D4CCFF';
      /**
       * @deprecated
       */
      medium: '#8E66FF';
      /**
       * @deprecated
       */
      dark: '#440087';
    };
    /**
     * @deprecated
     */
    secondary: {
      /**
       * @deprecated
       */
      pure: '#6200EE';
      /**
       * @deprecated
       */
      light: '#D4CCFF';
      /**
       * @deprecated
       */
      medium: '#8E66FF';
      /**
       * @deprecated
       */
      dark: '#440087';
    };
  };
  /**
   * @deprecated
   */
  blinket: {
    /**
     * @deprecated
     */
    primary: {
      /**
       * @deprecated
       */
      pure: '#D81B60';
      /**
       * @deprecated
       */
      light: '#F48FB1 ';
      /**
       * @deprecated
       */
      medium: '#EC407A';
      /**
       * @deprecated
       */
      dark: '#AD1457';
    };
    /**
     * @deprecated
     */
    secondary: {
      /**
       * @deprecated
       */
      pure: '#D81B60';
      /**
       * @deprecated
       */
      light: '#F48FB1 ';
      /**
       * @deprecated
       */
      medium: '#EC407A';
      /**
       * @deprecated
       */
      dark: '#AD1457';
    };
  };
  /**
   * @deprecated
   */
  jobzz: {
    /**
     * @deprecated
     */
    primary: {
      /**
       * @deprecated
       */
      pure: '#01579B';
      /**
       * @deprecated
       */
      light: '#99BCD7';
      /**
       * @deprecated
       */
      medium: '#3479AF';
      /**
       * @deprecated
       */
      dark: '#002F6C';
    };
    /**
     * @deprecated
     */
    secondary: {
      /**
       * @deprecated
       */
      pure: '#01579B';
      /**
       * @deprecated
       */
      light: '#99BCD7';
      /**
       * @deprecated
       */
      medium: '#3479AF';
      /**
       * @deprecated
       */
      dark: '#002F6C';
    };
  };
  /**
   * @deprecated
   */
  nutror: {
    /**
     * @deprecated
     */
    primary: {
      /**
       * @deprecated
       */
      pure: '#00A526';
      /**
       * @deprecated
       */
      light: '#99E9BA';
      /**
       * @deprecated
       */
      medium: '#00C853';
      /**
       * @deprecated
       */
      dark: '#00801D';
    };
    /**
     * @deprecated
     */
    secondary: {
      /**
       * @deprecated
       */
      pure: '#00A526';
      /**
       * @deprecated
       */
      light: '#99E9BA';
      /**
       * @deprecated
       */
      medium: '#00C853';
      /**
       * @deprecated
       */
      dark: '#00801D';
    };
  };
  /**
   * @deprecated
   */
  orbita: {
    /**
     * @deprecated
     */
    primary: {
      /**
       * @deprecated
       */
      pure: '#0D47A1';
      /**
       * @deprecated
       */
      light: '#9EB5D9';
      /**
       * @deprecated
       */
      medium: '#265AAB';
      /**
       * @deprecated
       */
      dark: '#072D83';
    };
    /**
     * @deprecated
     */
    secondary: {
      /**
       * @deprecated
       */
      pure: '#FFBC00';
      /**
       * @deprecated
       */
      light: '#FFF4BF';
      /**
       * @deprecated
       */
      medium: '#FFDB4D';
      /**
       * @deprecated
       */
      dark: '#996600';
    };
  };
  /**
   * @deprecated
   */
  safevideo: {
    /**
     * @deprecated
     */
    primary: {
      /**
       * @deprecated
       */
      pure: '#E39837';
      /**
       * @deprecated
       */
      light: '#FEC92D';
      /**
       * @deprecated
       */
      medium: '#F5B431';
      /**
       * @deprecated
       */
      dark: '#804306';
    };
    /**
     * @deprecated
     */
    secondary: {
      /**
       * @deprecated
       */
      pure: '#E39837';
      /**
       * @deprecated
       */
      light: '#FEC92D';
      /**
       * @deprecated
       */
      medium: '#F5B431';
      /**
       * @deprecated
       */
      dark: '#804306';
    };
  };
  /**
   * @deprecated
   */
  telescope: {
    /**
     * @deprecated
     */
    primary: {
      /**
       * @deprecated
       */
      pure: '#8E24AA';
      /**
       * @deprecated
       */
      light: '#D2A7DD';
      /**
       * @deprecated
       */
      medium: '#9A3AB3';
      /**
       * @deprecated
       */
      dark: '#560877';
    };
    /**
     * @deprecated
     */
    secondary: {
      /**
       * @deprecated
       */
      pure: '#8E24AA';
      /**
       * @deprecated
       */
      light: '#D2A7DD';
      /**
       * @deprecated
       */
      medium: '#9A3AB3';
      /**
       * @deprecated
       */
      dark: '#560877';
    };
  };
  /**
   * @deprecated
   */
  next: {
    /**
     * @deprecated
     */
    primary: {
      /**
       * @deprecated
       */
      pure: '#6063AB';
      /**
       * @deprecated
       */
      light: '#A2A4DF';
      /**
       * @deprecated
       */
      medium: '#8184C7';
      /**
       * @deprecated
       */
      dark: '#3C4194';
    };
    /**
     * @deprecated
     */
    secondary: {
      /**
       * @deprecated
       */
      pure: '#6063AB';
      /**
       * @deprecated
       */
      light: '#A2A4DF';
      /**
       * @deprecated
       */
      medium: '#8184C7';
      /**
       * @deprecated
       */
      dark: '#3C4194';
    };
  };
};

/**
 * @deprecated
 */
export type Brands = keyof BrandColors;

/**
 * @deprecated
 */
export type Breakpoints = {
  /**
   * @deprecated
   */
  xs: '320px';
  /**
   * @deprecated
   */
  sm: '576px';
  /**
   * @deprecated
   */
  md: '768px';
  /**
   * @deprecated
   */
  lg: '992px';
  /**
   * @deprecated
   */
  xlg: '1400px';
};

/**
 * @deprecated
 */
export type BreakpointsUtils = {
  /**
   * @deprecated
   */
  down(key: keyof Breakpoints): string;
  /**
   * @deprecated
   */
  up(key: keyof Breakpoints): string;
};

/**
 * @deprecated
 */
export type HoustonTokens = {
  /**
   * @deprecated
   */
  spacing: Spacing;
  /**
   * @deprecated
   */
  border: Border;
  /**
   * @deprecated
   */
  opacity: Opacity;
  /**
   * @deprecated
   */
  shadow: Shadow;
  /**
   * @deprecated
   */
  font: Font;
  /**
   * @deprecated
   */
  line: Line;
  /**
   * @deprecated
   */
  beltColor: BeltColor;
  /**
   * @deprecated
   */
  neutralColor: NeutralColor;
  /**
   * @deprecated
   */
  feedbackColor: FeedbackColor;
  /**
   * @deprecated
   */
  brandColor: BrandColor;
  /**
   * @deprecated
   */
  breakpoints: Breakpoints & BreakpointsUtils;
  /**
   * @deprecated
   * A helper function to convert pixel into rem
   * @param {number} rate - Rem to pixel rate with default value to 16
   */
  pxToRem: (value: number, rate?: number) => number;
  /**
   * @deprecated
   * A helper function to convert rem into pixel
   * @param {number} rate - Rem to pixel rate with default value to 16
   */
  remToPx: (value: number, rate?: number) => number;
  /**
   * @deprecated
   * A helper function to convert hex colors into rgba
   * @param {number} opacity - Default value to 1
   */
  hexToRgba: (hexColor: string, opacity?: number) => string;
  /**
   * @deprecated
   * A helper function to convert string measurement units to numbers
   * @param {string} value
   * @example '0.5rem' => 0.5
   */
  cleanUnit: (value: string) => number;
};
