import * as React from 'react';

import BoxMUI, { BoxProps } from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import WrapperTheme from '../ThemeProvider/WrapperTheme';

export type ISpacement = {
  margin?: number | string;
  padding?: number | string;
};

type BoxPropsExtends = 'id' | 'className' | 'style' | 'children';

interface IProps extends Pick<BoxProps, BoxPropsExtends> {
  style?: React.CSSProperties;
  xs?: ISpacement;
  sm?: ISpacement;
  md?: ISpacement;
  lg?: ISpacement;
  xl?: ISpacement;
}

const Box = React.forwardRef<HTMLDivElement, IProps>((props: IProps) => {
  const { children, xs, sm, md, lg, xl, className } = props;

  const useStyles = makeStyles(theme =>
    createStyles({
      box: {
        [theme.breakpoints.up('xs')]: {
          padding: xs && xs?.padding,
          margin: xs && xs?.margin ? xs?.margin : '16px 0'
        },

        [theme.breakpoints.up('sm')]: {
          padding: sm && sm?.padding,
          margin: sm && sm?.margin ? sm?.margin : '16px 0'
        },

        [theme.breakpoints.up('md')]: {
          padding: md && md?.padding,
          margin: md && md?.margin ? md?.margin : '16px 0'
        },

        [theme.breakpoints.up('lg')]: {
          padding: lg && lg?.padding,
          margin: lg && lg?.margin ? lg?.margin : '16px 0'
        },

        [theme.breakpoints.up('xl')]: {
          padding: xl && xl?.padding,
          margin: xl && xl?.margin ? xl?.margin : '16px 0'
        }
      }
    })
  );

  const classes = useStyles();
  const divProps = React.useMemo(() => (({ id, style }) => ({ id, style }))(props), [props]);

  return (
    <WrapperTheme>
      <BoxMUI {...divProps} className={clsx(className && className, classes.box)}>
        {children}
      </BoxMUI>
    </WrapperTheme>
  );
});

export default React.memo(Box);
