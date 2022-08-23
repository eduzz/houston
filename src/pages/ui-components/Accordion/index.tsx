import * as React from 'react';

import { StyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import { AccordionProvider } from './context';
import Item, { ItemProps } from './Item';
import Content from './Item/Content';
import Title from './Item/Title';

interface AccordionProps extends StyledProp, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactElement<ItemProps>[];
  destroyOnClose?: boolean;
  allowMultiple?: boolean;
  values?: number[];
  onChange?: (values: number[]) => void;
}

const Accordion = ({
  children,
  values,
  onChange,
  destroyOnClose = false,
  allowMultiple = true,
  ...rest
}: AccordionProps) => {
  const [expandedItems, setExpandedItems] = React.useState<number[]>(values ?? []);
  const [cachedItems, setCachedItems] = React.useState<number[]>(values ?? []);

  const controlled = typeof values !== 'undefined';

  const setTheExpandedItems = React.useCallback(
    (index: number) => {
      let newExpandedItems = new Set(expandedItems);

      if (allowMultiple) {
        newExpandedItems.has(index) ? newExpandedItems.delete(index) : newExpandedItems.add(index);
      } else {
        newExpandedItems = newExpandedItems.has(index) ? new Set([]) : new Set([index]);
      }

      onChange && onChange([...newExpandedItems]);
      setExpandedItems([...newExpandedItems]);

      const newCachedItems = new Set(cachedItems);
      newCachedItems.add(index);
      !destroyOnClose && setCachedItems([...newCachedItems]);
    },
    [expandedItems, cachedItems, onChange, allowMultiple, destroyOnClose]
  );

  React.useEffect(() => {
    if (controlled) {
      setExpandedItems(values);

      !destroyOnClose &&
        setCachedItems(prev => {
          const newCachedItems = new Set([...prev, ...values]);
          return [...newCachedItems];
        });
    }
  }, [controlled, destroyOnClose, values]);

  const mappedChildren = React.Children.map(children, (child, i: number) => {
    return React.cloneElement(child, {
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
      <div className='hst-accordion' {...rest}>
        {mappedChildren}
      </div>
    </AccordionProvider>
  );
};

export default nestedComponent(React.memo(Accordion), {
  Item,
  Content,
  Title
});
