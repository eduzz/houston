import * as React from 'react';

const useCheckDisabledArrows = (parentDiv: HTMLDivElement) => {
  const [isDisabledLeftArrow, setIsDisabledLeftArrow] = React.useState(false);
  const [isDisabledRightArrow, setIsDisabledRightArrow] = React.useState(false);

  const handleScrollArrows = React.useCallback(() => {
    if (!parentDiv) return;
    const howMuchHasScrolled = parentDiv.scrollLeft as number;
    const parentWidth = parentDiv.clientWidth as number;

    const maxScroll = parentDiv.scrollWidth - parentDiv.clientWidth;

    if (howMuchHasScrolled === 0) {
      setIsDisabledLeftArrow(true);
    }

    if (howMuchHasScrolled > 0) {
      setIsDisabledLeftArrow(false);
    }

    if (howMuchHasScrolled < parentWidth) {
      setIsDisabledRightArrow(false);
    }

    if (howMuchHasScrolled >= maxScroll) {
      setIsDisabledRightArrow(true);
    }
  }, [parentDiv]);

  React.useEffect(() => {
    handleScrollArrows();
  }, [handleScrollArrows]);

  return { isDisabledLeftArrow, isDisabledRightArrow, handleScrollArrows };
};

export default useCheckDisabledArrows;
