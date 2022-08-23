import * as React from 'react';

import { useAccordion } from '../context';
import { ItemProvider } from './context';

type ReceivedFromParentProps = {
  index?: number;
};
export interface ItemProps extends React.HTMLAttributes<HTMLDivElement>, ReceivedFromParentProps {
  children: React.ReactNode;
}

const AccordionItem = ({ children, index }: ItemProps) => {
  const { setTheExpandedItems } = useAccordion();

  const onClick = React.useCallback(() => {
    typeof index !== 'undefined' && setTheExpandedItems(index);
  }, [index, setTheExpandedItems]);

  return (
    <ItemProvider itemId={index as number}>
      <div onClick={onClick}>{children}</div>
    </ItemProvider>
  );
};

export default AccordionItem;
