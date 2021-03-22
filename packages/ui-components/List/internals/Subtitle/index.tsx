import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import TypographyMUI from '@material-ui/core/Typography';

import clsx from 'clsx';

import { IListTitleProps } from '../../Title';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      fontSize: 14,
      lineHeight: 1.3,
      color: theme.palette.grey[500]
    }
  })
);

interface IProps extends IListTitleProps {}

const Subtitle = ({ children, ...props }: IProps) => {
  const classes = useStyles();

  return (
    <TypographyMUI {...props} className={clsx([classes.root])}>
      {children}
    </TypographyMUI>
  );
};

export default React.memo(Subtitle);
