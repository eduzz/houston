import * as React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import WrapperTheme from '../../ThemeProvider/WrapperTheme';
import Typography from '../../Typography';

const useStyles = makeStyles(theme =>
  createStyles({
    progressIndicator: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      '& p': {
        color: theme.palette.grey[500]
      }
    }
  })
);

interface IProps {
  progress: string;
}

const ProgressIndicator = React.memo<IProps>(({ progress }) => {
  const classes = useStyles();

  return (
    <WrapperTheme>
      <div className={classes.progressIndicator}>
        <Typography size='default'>{progress}</Typography>
      </div>
    </WrapperTheme>
  );
});

export default ProgressIndicator;
