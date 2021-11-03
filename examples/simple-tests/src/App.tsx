import React from 'react';

import ThemeProvider from '@eduzz/houston-ui/styles/ThemeProvider';
import createUseStyles from '@eduzz/houston-ui/styles/createUseStyles';

interface IProps {
  foo?: string;
}

const useStyles = createUseStyles(theme => ({
  root: {
    background: theme.colors.grey[400]
  }
}));

function App({ foo }: IProps) {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <div className={classes.root}>
        {foo}
      </div>
    </ThemeProvider>
  );
}

export default App;
