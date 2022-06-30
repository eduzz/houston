import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import createUseStyles from '@eduzz/houston-styles/createUseStyles';

const useStyles = createUseStyles(theme => ({
  root: {
    background: theme.neutralColor.low.pure
  }
}));

function useOverlay() {
  const element = React.useRef<HTMLDivElement>(null);
  const classes = useStyles();

  const [visible, toggle] = useBoolean(false);

  React.useEffect(() => {
    if (visible) {
      element.current = document.createElement('div');
      element.current.classList.add(classes.root);
      document.body.appendChild(element.current);
      return;
    }

    if (!visible) {
    }
  }, [classes.root, visible]);

  return { visible, toggle };
}

export default useOverlay;
