import * as React from 'react';

import BoxMUI, { BoxProps } from '@material-ui/core/Box';
import clsx from 'clsx';

import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
import useStyles from './styles';

type IBoxSpacement = {
  margin?: number | string;
  padding?: number | string;
};

type BoxPropsExtends = 'id' | 'className' | 'children';

export interface IBoxProps extends Pick<BoxProps, BoxPropsExtends> {
  xs?: IBoxSpacement;
  sm?: IBoxSpacement;
  md?: IBoxSpacement;
  lg?: IBoxSpacement;
  xl?: IBoxSpacement;
  paper?: boolean;
}

const Box: React.FC<IBoxProps> = props => {
  const { children, className, paper, ...rest } = props;
  const classes = useStyles(props);

  return (
    <BoxMUI {...rest} className={clsx(className, classes.box, paper && classes.paper)}>
      {children}
    </BoxMUI>
  );
};

export default withHoustonTheme(React.memo(Box));
