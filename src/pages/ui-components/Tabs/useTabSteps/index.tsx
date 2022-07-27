import * as React from 'react';

const useTabSteps = () => {
  const tabsRefs = React.useRef<any>([]);
  const [steps, setSteps] = React.useState<number[]>([]);
  const [widths, setWidths] = React.useState<number[]>([]);

  React.useEffect(() => {
    const widths = tabsRefs?.current.map((tab: HTMLDivElement) => tab.offsetWidth);

    let sum = 0;
    const steps = widths.map((width: any) => {
      sum = sum + width - 2; // -2 because of the negative margin
      return sum;
    });

    setWidths(widths);
    setSteps([0, ...steps]);
  }, []);

  return { tabsRefs, steps, widths };
};

export default useTabSteps;
