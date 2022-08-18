import * as React from 'react';

import { StyledProp, cx } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import { AccordionProvider } from './context';
import Item from './Item';
import Content from './Item/Content';
import Title from './Item/Title';

interface AccordionProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children?: any;
  destroyOnClose?: boolean;
}

const Accordion = ({ children, className, destroyOnClose = false, ...rest }: AccordionProps) => {
  const [expandedItems, setExpandedItems] = React.useState<number[]>([]);
  const [cachedItems, setCachedItems] = React.useState<number[]>([]);

  const setTheExpandedItems = (index: number) => {
    setExpandedItems(
      expandedItems.includes(index) ? expandedItems.filter(item => item !== index) : [...expandedItems, index]
    );
    !destroyOnClose && setCachedItems([...cachedItems, index]);
  };

  const mappedChildren = React.Children.map(children, (child: React.ReactElement, i: number) => {
    return React.cloneElement(child as React.ReactElement, {
      index: i
    });
  });

  return (
    <AccordionProvider
      setTheExpandedItems={setTheExpandedItems}
      expandedItems={expandedItems}
      cachedItems={cachedItems}
      destroyOnClose={destroyOnClose}
    >
      <div className={cx(className, 'hst-accordion')} {...rest}>
        {mappedChildren}
      </div>
    </AccordionProvider>
  );
};

export default nestedComponent(Accordion, {
  Item,
  Content,
  Title
});
