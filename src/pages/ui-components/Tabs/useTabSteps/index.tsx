import * as React from 'react';

const useTabSteps = () => {
  const tabsRefs = React.useRef<any[]>([]);
  const [steps, setSteps] = React.useState<number[]>([]);
  const [widths, setWidths] = React.useState<number[]>([]);

  React.useLayoutEffect(() => {
    const widths = tabsRefs?.current.map((tab: HTMLDivElement) => tab.getBoundingClientRect().width);

    let sum = 0;
    const steps = widths.map((width: number) => {
      sum = sum + width;
      return sum;
    });

    setWidths(widths);
    setSteps([0, ...steps]);
  }, []);

  return { tabsRefs, steps, widths };
};

export default useTabSteps;
