import * as React from 'react';

const useTabDragScroller = (scrollableElement: HTMLElement) => {
  const [scrolledPosition, setScrolledPosition] = React.useState({ scrollLeft: 0, x: 0 });

  const touchStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    const position = {
      scrollLeft: scrollableElement.scrollLeft,
      x: e.touches[0].clientX
    };

    setScrolledPosition(position);

    window.addEventListener('touchmove', touchMoveHandler as any);
    window.addEventListener('touchend', touchEndHandler);
  };

  const touchMoveHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    const { scrollLeft, x } = scrolledPosition;
    const howMuchMoved = e.touches[0].clientX - x;
    scrollableElement.scrollLeft = scrollLeft - howMuchMoved;
  };

  const touchEndHandler = () => {
    window.removeEventListener('touchmove', touchMoveHandler as any);
    window.removeEventListener('touchend', touchEndHandler);
  };

  return { touchStartHandler };
};

export default useTabDragScroller;
