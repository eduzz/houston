import * as React from 'react';

const useTabDragScroller = (scrollableElement: HTMLElement) => {
  const scrolledPosition = React.useRef({ scrollLeft: 0, x: 0 });

  const touchStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    const position = {
      scrollLeft: scrollableElement.scrollLeft,
      x: e.touches[0].clientX
    };
    scrolledPosition.current = position;
  };

  const touchMoveHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    const { scrollLeft, x } = scrolledPosition.current;
    const howMuchMoved = e.touches[0].clientX - x;
    scrollableElement.scrollLeft = scrollLeft - howMuchMoved;
  };

  return { touchStartHandler, touchMoveHandler };
};

export default useTabDragScroller;
