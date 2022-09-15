import * as React from 'react';

import BoxMUI, { BoxProps as BoxPropsMui } from '@mui/material/Box';

import { cx } from '@eduzz/houston-styles';

import useStyles from './styles';

type BoxSpacement = {
  margin?: number | string;
  padding?: number | string;
};

type BoxPropsExtends = 'id' | 'className' | 'children';

export interface BoxProps extends Pick<BoxPropsMui, BoxPropsExtends> {
  xs?: BoxSpacement;
  sm?: BoxSpacement;
  md?: BoxSpacement;
  lg?: BoxSpacement;
  xl?: BoxSpacement;
  paper?: boolean;
  /**
   * Shadow depth, corresponds to `dp` in the spec. It accepts values between 0 and 24 inclusive.
   */
  boxShadow?: number;
}

const Box = (props: BoxProps) => {
  const { children, className, paper, ...rest } = props;
  const classes = useStyles(props);

  return (
    <BoxMUI {...rest} className={cx(className, classes.box, paper && classes.paper)}>
      {children}
    </BoxMUI>
  );
};

export default React.memo(Box);
