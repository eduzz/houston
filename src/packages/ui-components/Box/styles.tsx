import { IBoxProps } from '.';
import createUseStyles from '../styles/createUseStyles';

const useStyles = createUseStyles(theme => ({
  box: {
    [theme.breakpoints.up('xs')]: ({ xs }: IBoxProps) => ({
      padding: xs && xs?.padding,
      margin: xs && xs?.margin
    }),

    [theme.breakpoints.up('sm')]: ({ sm }: IBoxProps) => ({
      padding: sm && sm?.padding,
      margin: sm && sm?.margin
    }),

    [theme.breakpoints.up('md')]: ({ md }: IBoxProps) => ({
      padding: md && md?.padding,
      margin: md && md?.margin
    }),

    [theme.breakpoints.up('lg')]: ({ lg }: IBoxProps) => ({
      padding: lg && lg?.padding,
      margin: lg && lg?.margin
    }),

    [theme.breakpoints.up('xl')]: ({ xl }: IBoxProps) => ({
      padding: xl && xl?.padding,
      margin: xl && xl?.margin
    })
  },
  paper: {
    background: '#fff',
    borderRadius: 4
  }
}));

export default useStyles;
