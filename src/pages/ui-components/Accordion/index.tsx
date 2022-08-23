import * as React from 'react';

import { StyledProp, cx } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import { AccordionProvider } from './context';
import Item from './Item';
import Content from './Item/Content';
import Title from './Item/Title';

interface AccordionProps extends StyledProp, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children?: any;
  destroyOnClose?: boolean;
  allowMultiple?: boolean;
  values?: number[];
  onChange?: (values: number[]) => void;
}

const Accordion = ({
  children,
  className,
  values,
  onChange,
  destroyOnClose = false,
  allowMultiple = true,
  ...rest
}: AccordionProps) => {
  const [expandedItems, setExpandedItems] = React.useState<number[]>(values ?? []);
  const [cachedItems, setCachedItems] = React.useState<number[]>(values ?? []);

  const controlled = typeof values !== 'undefined';

  const setTheExpandedItems = (index: number) => {
    const newExpandedItems = expandedItems.includes(index)
      ? expandedItems.filter(item => item !== index)
      : [...expandedItems, index];

    onChange && onChange(newExpandedItems);

    !allowMultiple && setExpandedItems([index]);
    allowMultiple && setExpandedItems(newExpandedItems);
    !destroyOnClose && setCachedItems([...cachedItems, index]);
  };

  React.useEffect(() => {
    if (controlled) {
      setExpandedItems(values);
      !destroyOnClose && setCachedItems(prev => [...prev, ...values]);
    }
  }, [controlled, destroyOnClose, values]);

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
