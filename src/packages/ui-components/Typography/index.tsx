import * as React from 'react';

import createUseStyles from '../styles/createUseStyles';
import { FontSizes, FontWeight, LineHeights } from '../styles/ThemeProvider/_default/variables';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';

export interface ITypographyProps {
  id?: string;
  className?: string;
  size?: FontSizes;
  lineHeight?: LineHeights;
  fontWeight?: FontWeight;
  marginBottom?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const useStyles = createUseStyles(theme => ({
  text: (props: ITypographyProps) => ({
    margin: 0,
    fontSize: theme.textSize(props.size ?? 'normal'),
    lineHeight: theme.lineHeight(props.lineHeight ?? 'normal'),
    fontWeight: theme.fontWeight(props.fontWeight ?? 'regular'),
    marginBottom: props.marginBottom ? theme.spacing(2) : null
  })
}));

const Typography: React.FC<ITypographyProps> = props => {
  const classes = useStyles(props);

  const typographyProps = React.useMemo(
    () => ({ id: props?.id, children: props?.children }),
    [props?.children, props?.id]
  );

  return <p {...typographyProps} className={`${classes.text} ${props?.className ?? ''}`} />;
};

export default withHoustonTheme(React.memo(Typography));
