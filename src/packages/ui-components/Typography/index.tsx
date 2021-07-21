import * as React from 'react';

import clsx from 'clsx';

import createUseStyles from '../styles/createUseStyles';
import { FontSizes, FontWeight, LineHeights } from '../styles/ThemeProvider/_default/variables';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';

export type ITypographyVariant = 'secondary';

export type ITypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

export interface ITypographyProps {
  id?: string;
  className?: string;
  size?: FontSizes;
  lineHeight?: LineHeights;
  fontWeight?: FontWeight;
  marginBottom?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: ITypographyVariant;
  component?: ITypographyComponent;
}

const useStyles = createUseStyles(theme => ({
  text: (props: ITypographyProps) => ({
    margin: 0,
    fontSize: theme.textSize(props.size ?? 'normal'),
    lineHeight: theme.lineHeight(props.lineHeight ?? 'normal'),
    fontWeight: theme.fontWeight(props.fontWeight ?? 'regular'),
    marginBottom: props.marginBottom ? theme.spacing(2) : null
  }),

  secondary: {
    color: theme.colors.grey[500],
    fontSize: theme.textSize('small')
  }
}));

const Typography: React.FC<ITypographyProps> = props => {
  const classes = useStyles(props);

  const typographyProps = React.useMemo(
    () => ({ id: props?.id, children: props?.children }),
    [props?.children, props?.id]
  );

  const variantClasses = React.useMemo(
    () => ({
      secondary: classes.secondary
    }),
    [classes.secondary]
  );

  return React.createElement(props?.component ?? 'p', {
    ...typographyProps,
    className: clsx(classes.text, props?.className, variantClasses[props?.variant])
  });
};

export default withHoustonTheme(React.memo(Typography));
