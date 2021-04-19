import * as React from 'react';

import TypographyMUI from '@material-ui/core/Typography';
import { TypographyProps } from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

import themeVariable, { FontSizes, FontWeight, LineHeights } from '../ThemeProvider/_default/variables';
import WrapperTheme from '../ThemeProvider/WrapperTheme';

type TypographyPropsExtends = 'className' | 'style' | 'children' | 'onClick' | 'variant';

export interface ITypographyProps extends Pick<TypographyProps, TypographyPropsExtends> {
  size?: FontSizes;
  lineHeight?: LineHeights;
  fontWeight?: FontWeight;
  marginBottom?: boolean;
}

const Typography = React.forwardRef<HTMLParagraphElement, ITypographyProps>((props, ref) => {
  const { className, lineHeight, fontWeight, marginBottom, size, ...typographyProps } = props;

  const classPrefix = React.useMemo(() => Math.random().toString(36).substring(5), []);

  const useStyles = makeStyles(() => ({
    [classPrefix]: {
      fontSize: themeVariable.textSize(size ?? 'normal'),
      lineHeight: themeVariable.lineHeight(lineHeight ?? 'normal'),
      fontWeight: themeVariable.fontWeight(fontWeight ?? 'regular'),
      marginBottom: marginBottom ? themeVariable.spacing(2) : null
    }
  }));

  const classes = useStyles();

  return (
    <WrapperTheme>
      <TypographyMUI className={`${classes[classPrefix]} ${className ?? ''}`} {...typographyProps} ref={ref} />
    </WrapperTheme>
  );
});

export default React.memo(Typography);
