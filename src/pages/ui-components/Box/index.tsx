import * as React from 'react';

import BoxMUI, { BoxProps } from '@mui/material/Box';
import clsx from 'clsx';

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
  /**
   * Shadow depth, corresponds to `dp` in the spec. It accepts values between 0 and 24 inclusive.
   */
  boxShadow?: number;
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

export default React.memo(Box);
