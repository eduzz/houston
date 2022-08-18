import * as React from 'react';

import { useAccordion } from '../context';

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: any;
}

type ReceivedFromParentProps = {
  index?: number;
};

const AccordionItem = ({ children, index }: ItemProps & ReceivedFromParentProps) => {
  const { setTheExpandedItems } = useAccordion();

  const onClick = () => {
    setTheExpandedItems && typeof index !== 'undefined' && setTheExpandedItems(index);
  };

  const mappedChildren = React.Children.map(children, (child: React.ReactElement) => {
    return React.cloneElement(child as React.ReactElement, {
      index
    });
  });

  return <div onClick={onClick}>{mappedChildren}</div>;
};

export default AccordionItem;
