import * as React from 'react';

import { Variant } from '@material-ui/core/styles/createTypography';
import TypographyMUI from '@material-ui/core/Typography';
import { TypographyProps } from '@material-ui/core/Typography';

import createUseStyles, { IUseStyleParam } from '../styles/createUseStyles';
import { FontSizes, FontWeight, LineHeights } from '../styles/ThemeProvider/_default/variables';
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
  lighter?: boolean;
}

const useStyles = createUseStyles({
  text: ({ props, theme }: IUseStyleParam<ITypographyProps>) => ({
    fontSize: theme.textSize(props.size ?? 'normal'),
    lineHeight: theme.lineHeight(props.lineHeight ?? 'normal'),
    fontWeight: theme.fontWeight(props.fontWeight ?? 'regular'),
    marginBottom: props.marginBottom ? theme.spacing(2) : null,
    color: props.lighter ? theme.colors.grey[500] : null
  })
});

const Typography = React.forwardRef<HTMLParagraphElement, ITypographyProps>((props, ref) => {
  const classes = useStyles(props);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className, variant, size, lineHeight, fontWeight, marginBottom, lighter, ...typographyProps } = props;

  const variantMap: VariantMap = React.useMemo(() => ({ secondary: 'body2' }), []);

  return (
    <WrapperTheme>
      <TypographyMUI
        ref={ref}
        className={`${classes.text} ${className ?? ''}`}
        {...typographyProps}
        variant={variantMap[variant]}
      />
    </WrapperTheme>
  );
});

export default React.memo(Typography);
