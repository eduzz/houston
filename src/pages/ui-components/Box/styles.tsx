import createUseStyles from '@eduzz/houston-styles/createUseStyles';

import { IBoxProps } from '.';

const useStyles = createUseStyles(theme => ({
  box: ({ xs, sm, md, lg, xl }: IBoxProps) => ({
    [theme.breakpoints.up('xs')]: {
      padding: xs?.padding,
      margin: xs?.margin
    },

    [theme.breakpoints.up('sm')]: {
      padding: sm?.padding,
      margin: sm?.margin
    },

    [theme.breakpoints.up('md')]: {
      padding: md?.padding,
      margin: md?.margin
    },

    [theme.breakpoints.up('lg')]: {
      padding: lg?.padding,
      margin: lg?.margin
    },

    [theme.breakpoints.up('xlg')]: {
      padding: xl?.padding,
      margin: xl?.margin
    }
  }),
  paper: {
    background: '#fff',
    borderRadius: 4
  }
}));

export default useStyles;
