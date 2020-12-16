import * as React from 'react';

import TypographyMUI from '@material-ui/core/Typography';
import { TypographyProps } from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

import themeVariable, { FontSizes, FontWeight, LineHeights } from '../ThemeProvider/_default/variables';
import WrapperTheme from '../ThemeProvider/WrapperTheme';

type TypographyPropsExtends = 'className' | 'style' | 'children';

interface ITypographyProps extends Pick<TypographyProps, TypographyPropsExtends> {
  size?: FontSizes;
  lineHeight?: LineHeights;
  fontWeight?: FontWeight;
  marginBottom?: boolean;
}

const useStyle = makeStyles({
  text: (props: ITypographyProps) => ({
    fontFamily: themeVariable.fontFamily,
    fontSize: themeVariable.textSize(props.size ?? 'normal'),
    lineHeight: themeVariable.lineHeight(props.lineHeight ?? 'normal'),
    fontWeight: themeVariable.fontWeight(props.fontWeight ?? 'regular'),
    marginBottom: props.marginBottom ? themeVariable.spacing(3) : null
  })
});

const Typography = React.forwardRef<HTMLSpanElement, ITypographyProps>((props, ref) => {
  const { size, lineHeight, fontWeight, className, marginBottom, ...typographyProps } = props;
  const classes = useStyle({ size, lineHeight, fontWeight, marginBottom });

  return (
    <WrapperTheme>
      <TypographyMUI {...typographyProps} className={`${classes.text} ${className ?? ''}`} ref={ref} />
    </WrapperTheme>
  );
});

export default React.memo(Typography);
