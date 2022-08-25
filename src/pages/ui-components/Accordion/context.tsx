import * as React from 'react';

import { createContext } from 'use-context-selector';

interface AccordionContextProps {
  expandedItems: number[];
  setTheExpandedItems: (index: number) => void;
  destroyOnClose: boolean;
  mountOnEnter: boolean;
}

const AccordionContext = createContext<AccordionContextProps>({} as AccordionContextProps);

type AccordionProviderProps = AccordionContextProps & {
  children: React.ReactNode;
};

const AccordionProvider = ({
  children,
  expandedItems,
  setTheExpandedItems,
  destroyOnClose,
  mountOnEnter
}: AccordionProviderProps) => {
  const value = React.useMemo(
    () => ({ expandedItems, setTheExpandedItems, destroyOnClose, mountOnEnter }),
    [expandedItems, setTheExpandedItems, destroyOnClose, mountOnEnter]
  );
  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
};

export { AccordionContext, AccordionProvider };
