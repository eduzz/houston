import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import TypographyMUI from '@material-ui/core/Typography';

import clsx from 'clsx';

import { IListTitleProps } from '../../Title';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      fontSize: 16,
      lineHeight: 1.3,
      color: theme.palette.grey[600]
    }
  })
);

interface IProps extends IListTitleProps {}

const Title = ({ children, ...props }: IProps) => {
  const classes = useStyles();

  return (
    <TypographyMUI {...props} className={clsx([classes.root])}>
      {children}
    </TypographyMUI>
  );
};

export default React.memo(Title);
