import * as React from 'react';

import { useAccordion } from '../context';
import { ItemProvider } from './context';

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: any;
}

type ReceivedFromParentProps = {
  index?: number;
};

const AccordionItem = ({ children, index }: ItemProps & ReceivedFromParentProps) => {
  const { setTheExpandedItems } = useAccordion();

  const onClick = () => {
    typeof index !== 'undefined' && setTheExpandedItems(index);
  };

  return <ItemProvider itemId={index as number}>{<div onClick={onClick}>{children}</div>}</ItemProvider>;
};

export default AccordionItem;
