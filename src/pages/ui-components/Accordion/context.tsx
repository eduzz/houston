import * as React from 'react';

import { createContext, useContext } from 'use-context-selector';

interface AccordionContextProps {
  expandedItems: number[];
  setTheExpandedItems: (index: number) => void;
  cachedItems: number[];
  destroyOnClose: boolean;
}

const AccordionContext = createContext<AccordionContextProps>({} as AccordionContextProps);

type AccordionProviderProps = AccordionContextProps & {
  children: React.ReactNode;
};

const AccordionProvider = ({
  children,
  expandedItems,
  setTheExpandedItems,
  cachedItems,
  destroyOnClose
}: AccordionProviderProps) => {
  const value = React.useMemo(
    () => ({ expandedItems, setTheExpandedItems, cachedItems, destroyOnClose }),
    [expandedItems, setTheExpandedItems, cachedItems, destroyOnClose]
  );
  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
};

export { AccordionContext, AccordionProvider };
