import * as React from 'react';

const useCheckDisabledArrows = (parentDiv: HTMLDivElement) => {
  const [isDisabledLeftArrow, setIsDisabledLeftArrow] = React.useState(false);
  const [isDisabledRightArrow, setIsDisabledRightArrow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const howMuchHasScrolled = parentDiv?.scrollLeft as number;
      const parentWidth = parentDiv?.clientWidth as number;

      if (howMuchHasScrolled === 0) {
        setIsDisabledLeftArrow(true);
      }

      if (howMuchHasScrolled > 0) {
        setIsDisabledLeftArrow(false);
      }

      if (howMuchHasScrolled > parentWidth) {
        setIsDisabledRightArrow(true);
      }

      if (howMuchHasScrolled < parentWidth) {
        setIsDisabledRightArrow(false);
      }
    };

    handleScroll();
    parentDiv?.addEventListener('scroll', handleScroll);

    return () => parentDiv?.removeEventListener('scroll', handleScroll);
  }, [parentDiv]);

  return { isDisabledLeftArrow, isDisabledRightArrow };
};

export default useCheckDisabledArrows;
