import * as React from 'react';

import { createContext, useContextSelector } from 'use-context-selector';

interface AccordionContextProps {
  expandedItems: number[];
  setTheExpandedItems: (index: number) => void;
  cachedItems: number[];
  destroyOnClose: boolean;
}

const AccordionContext = createContext<AccordionContextProps | null>(null);

interface AccordionProviderProps {
  children: React.ReactNode;
  expandedItems: number[];
  setTheExpandedItems: (index: number) => void;
  cachedItems: number[];
  destroyOnClose: boolean;
}

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

function useAccordion() {
  const ctx = useContextSelector(AccordionContext, context => context);
  if (!ctx) {
    throw new Error('You must provide a `AccordionProvider` in order to use `useAccordion`');
  }
  return ctx;
}

export { AccordionContext, AccordionProvider, useAccordion };
