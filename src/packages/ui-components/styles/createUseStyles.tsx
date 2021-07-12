import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Styles } from '@material-ui/styles/withStyles';

import { HoustonTheme } from './useHoustonTheme';

export default function createUseStyles<Props extends Record<string, any>, ClassKey extends string = string>(
  style: Styles<HoustonTheme & { breakpoints: Theme['breakpoints'] }, Props, ClassKey>
): (props?: Partial<Props>) => Record<ClassKey, string> {
  const useStyle = makeStyles<Theme, Props, ClassKey>(theme => {
    return typeof style === 'function' ? style({ ...theme.houston, breakpoints: theme.breakpoints }) : style;
  });

  return useStyle;
}
