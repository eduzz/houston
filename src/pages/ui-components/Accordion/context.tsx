import * as React from 'react';

import { createContext, useContextSelector } from 'use-context-selector';

interface AccordionContextProps {
  expandedItems: number[];
  setTheExpandedItems: (index: number) => void;
}

const AccordionContext = createContext<AccordionContextProps | null>(null);

interface AccordionProviderProps {
  children: React.ReactNode;
  expandedItems: number[];
  setTheExpandedItems: (index: number) => void;
}

const AccordionProvider = ({ children, expandedItems, setTheExpandedItems }: AccordionProviderProps) => {
  const value = React.useMemo(() => ({ expandedItems, setTheExpandedItems }), [expandedItems, setTheExpandedItems]);
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
