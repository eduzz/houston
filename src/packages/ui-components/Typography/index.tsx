import * as React from 'react';

import { Variant } from '@material-ui/core/styles/createTypography';
import TypographyMUI from '@material-ui/core/Typography';
import { TypographyProps } from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

import themeVariable, { FontSizes, FontWeight, LineHeights } from '../styles/ThemeProvider/_default/variables';
import WrapperTheme from '../styles/ThemeProvider/WrapperTheme';

type TypographyPropsExtends = 'className' | 'style' | 'children' | 'onClick';

export type ITypographyVariant = 'secondary';

type VariantMap = {
  [key: string]: Variant;
};

export interface ITypographyProps extends Pick<TypographyProps, TypographyPropsExtends> {
  size?: FontSizes;
  lineHeight?: LineHeights;
  fontWeight?: FontWeight;
  marginBottom?: boolean;
  variant?: ITypographyVariant;
}

const Typography = React.forwardRef<HTMLParagraphElement, ITypographyProps>((props, ref) => {
  const { className, lineHeight, fontWeight, marginBottom, size, variant, ...typographyProps } = props;

  const classPrefix = React.useMemo(() => Math.random().toString(36).substring(5), []);

  const useStyles = makeStyles(() => ({
    [classPrefix]: {
      fontSize: themeVariable.textSize(size ?? 'normal'),
      lineHeight: themeVariable.lineHeight(lineHeight ?? 'normal'),
      fontWeight: themeVariable.fontWeight(fontWeight ?? 'regular'),
      marginBottom: marginBottom ? themeVariable.spacing(2) : null
    }
  }));

  const variantMap: VariantMap = React.useMemo(
    () => ({
      secondary: 'body2'
    }),
    []
  );

  const classes = useStyles();

  return (
    <WrapperTheme>
      <TypographyMUI
        ref={ref}
        className={`${classes[classPrefix]} ${className ?? ''}`}
        {...typographyProps}
        variant={variantMap[variant]}
      />
    </WrapperTheme>
  );
});

export default React.memo(Typography);
