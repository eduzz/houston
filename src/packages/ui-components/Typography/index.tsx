import * as React from 'react';

import TypographyMUI from '@material-ui/core/Typography';
import { TypographyProps } from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

import themeVariable, { FontSizes, FontWeight, LineHeights } from '../ThemeProvider/_default/variables';
import WrapperTheme from '../ThemeProvider/WrapperTheme';

type TypographyPropsExtends = 'className' | 'style' | 'children' | 'onClick';

export interface ITypographyProps extends Pick<TypographyProps, TypographyPropsExtends> {
  size?: FontSizes;
  lineHeight?: LineHeights;
  fontWeight?: FontWeight;
  marginBottom?: boolean;
}

const Typography = React.forwardRef<HTMLSpanElement, ITypographyProps>((props, ref) => {
  const { className, ...typographyProps } = props;

  const name = React.useMemo(() => Math.random().toString(36).substring(5), []);

  const useStyles = makeStyles(() => ({
    [name]: {
      fontSize: themeVariable.textSize(props.size ?? 'normal'),
      lineHeight: themeVariable.lineHeight(props.lineHeight ?? 'normal'),
      fontWeight: themeVariable.fontWeight(props.fontWeight ?? 'regular'),
      marginBottom: props.marginBottom ? themeVariable.spacing(2) : null
    }
  }));

  const classes = useStyles();

  return (
    <WrapperTheme>
      <TypographyMUI className={`${classes[name]} ${className ?? ''}`} {...typographyProps} ref={ref} />
    </WrapperTheme>
  );
});

export default React.memo(Typography);
