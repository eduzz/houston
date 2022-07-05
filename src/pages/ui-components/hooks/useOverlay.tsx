import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import createUseStyles from '@eduzz/houston-styles/createUseStyles';

const useStyles = createUseStyles(theme => ({
  root: {
    background: theme.hexToRgba(theme.neutralColor.low.pure, 0.4),
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    animation: '0.15s linear'
  }
}));

function useOverlay(): [() => void, boolean] {
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

    const hasElementInDocument = document.body.contains(element.current);

    if (hasElementInDocument) {
      document.body.removeChild(element.current);
    }
  }, [classes.root, visible]);

  return [toggle, visible];
}

export default useOverlay;
