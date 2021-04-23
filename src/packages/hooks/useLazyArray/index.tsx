import * as React from 'react';

export interface IUseLazyArrayOptions {
  chunckSize?: number;
  intervalTime?: number;
}

/**
 * Create new array that will add the orignal array data progressively
 * @returns [observableValue, error, isCompleted]
 */
export default function useLazyArray<T>(data: T[], options?: IUseLazyArrayOptions) {
  const [lazyArray, setLazyArray] = React.useState<T[]>([]);

  React.useEffect(() => {
    const chunckSize = options?.chunckSize ?? 10;
    const intervalTime = options?.intervalTime ?? 100;
    const chunks = Math.ceil((data?.length ?? 0) / chunckSize);

    if (!data || !data.length || chunks === 1) {
      setLazyArray(data);
      return () => null;
    }

    setLazyArray([]);

    let index = 0;
    const interval = setInterval(() => {
      const start = index * chunckSize;
      const slice = data?.slice(start, start + chunckSize) ?? [];

      setLazyArray(rows => [...rows, ...slice]);
      index++;

      if (index >= chunks) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return lazyArray;
}
