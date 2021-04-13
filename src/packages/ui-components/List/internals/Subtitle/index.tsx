import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '../../../Typography';
import { IListTitleProps } from '../../Title';

interface IProps extends IListTitleProps {}

const useStyles = makeStyles(theme => ({
  text: {
    color: theme.palette.grey[500]
  }
}));

const Subtitle = ({ children, ...props }: IProps) => {
  const classes = useStyles();

  return (
    <Typography {...props} className={classes.text} size='small' fontWeight='regular' lineHeight='compact'>
      {children}
    </Typography>
  );
};

export default React.memo(Subtitle);
