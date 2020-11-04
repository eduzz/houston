import React, { memo, Props, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

interface IProps extends Props<{}> {
  minWidth?: number;
}

const useStyle = makeStyles({
  root: {
    position: 'relative',
    overflow: 'hidden'
  },
  scrollable: {
    overflow: 'auto',
    width: '100%'
  },
  shadow: {
    position: 'absolute',
    right: '-1px',
    top: '0',
    bottom: '0',
    width: '1px',
    boxShadow: '0px 0px 15px 4px rgba(0, 0, 0, 0.3)',
    transition: '0.3s'
  },
  noShadow: {
    opacity: 0
  }
});

const TableWrapper = memo((props: IProps) => {
  const classes = useStyle(props);
  const root = useRef<HTMLDivElement>();

  const [scrollEnded, setScrollEnded] = useState(true);

  const onScroll = useCallback(() => {
    const endScroll = root.current.scrollWidth - root.current.clientWidth - 10;
    setScrollEnded(root.current.scrollLeft >= endScroll);
  }, [root]);

  useEffect(() => {
    setScrollEnded(root.current.clientWidth === root.current.scrollWidth);

    root.current.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      root.current && root.current.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [onScroll]);

  const style = useMemo(() => ({ minWidth: props.minWidth || 650 }), [props.minWidth]);

  return (
    <div className={classes.root}>
      <div className={`${classes.shadow} ${scrollEnded ? classes.noShadow : ''}`} />
      <div className={classes.scrollable} ref={root}>
        <div style={style}>{props.children}</div>
      </div>
    </div>
  );
});

export default TableWrapper;
