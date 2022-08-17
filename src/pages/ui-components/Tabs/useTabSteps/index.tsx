import * as React from 'react';

const useTabSteps = (type: 'horizontal' | 'vertical') => {
  const tabsRefs = React.useRef<HTMLDivElement[]>([]);
  const [steps, setSteps] = React.useState<number[]>([]);
  const [sizes, setSizes] = React.useState<number[]>([]);

  const passRefsToArray = React.useCallback(
    (index: number) => (el: HTMLDivElement) => {
      tabsRefs.current[index] = el;
    },
    [tabsRefs]
  );

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const sizes = tabsRefs?.current?.map((tab: HTMLDivElement) =>
        type === 'horizontal' ? tab.getBoundingClientRect().width : tab.getBoundingClientRect().height
      );

      let sum = 0;
      const steps = sizes?.map((size: number) => {
        sum = sum + size;
        return sum;
      });

      setSizes(sizes);
      setSteps([0, ...(steps ?? [])]);
    }, 400);

    return () => clearTimeout(timer);
  }, [type]);

  return { passRefsToArray, steps, sizes };
};

export default useTabSteps;
