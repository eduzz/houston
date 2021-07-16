import * as React from 'react';

import TypographyMUI, { TypographyProps } from '@material-ui/core/Typography';

import createUseStyles from '../styles/createUseStyles';
import { FontSizes, FontWeight, LineHeights } from '../styles/ThemeProvider/_default/variables';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';

type TypographyPropsExtends = 'className' | 'style' | 'children' | 'onClick';

export type ITypographyVariant = 'secondary';

export interface ITypographyProps extends Pick<TypographyProps, TypographyPropsExtends> {
  size?: FontSizes;
  lineHeight?: LineHeights;
  fontWeight?: FontWeight;
  marginBottom?: boolean;
  variant?: ITypographyVariant;
  lighter?: boolean;
}

const useStyles = createUseStyles(theme => ({
  text: (props: ITypographyProps) => ({
    fontSize: theme.textSize(props.size ?? 'normal'),
    lineHeight: theme.lineHeight(props.lineHeight ?? 'normal'),
    fontWeight: theme.fontWeight(props.fontWeight ?? 'regular'),
    marginBottom: props.marginBottom ? theme.spacing(2) : null,
    color: props.lighter ? theme.colors.grey[500] : null
  })
}));

const variantMap = { secondary: 'body2' as const };
const Typography = React.forwardRef<HTMLParagraphElement, ITypographyProps>((props, ref) => {
  const classes = useStyles(props);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className, variant, size, lineHeight, fontWeight, marginBottom, lighter, ...typographyProps } = props;

  return (
    <TypographyMUI
      ref={ref}
      className={`${classes.text} ${className ?? ''}`}
      {...typographyProps}
      variant={variantMap[variant]}
    />
  );
});

export default withHoustonTheme(Typography);
