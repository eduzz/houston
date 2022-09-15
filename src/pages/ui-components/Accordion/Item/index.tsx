import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { cx, css } from '@eduzz/houston-styles';

import { AccordionContext } from '../context';
import { ItemProvider } from './context';

type ReceivedFromParentProps = {
  index?: number;
};

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement>, ReceivedFromParentProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const AccordionItem = ({ children, className, disabled, index, ...rest }: ItemProps) => {
  const setTheExpandedItems = useContextSelector(AccordionContext, context => context.setTheExpandedItems);

  const onClick = React.useCallback(() => {
    typeof index !== 'undefined' && setTheExpandedItems(index);
  }, [index, setTheExpandedItems]);

  return (
    <ItemProvider itemId={index as number}>
      <div className={cx(className, { 'hst-accordion-disabled': disabled })} {...rest} onClick={onClick}>
        {children}
      </div>
    </ItemProvider>
  );
};

const AccordionItemWrapper = styled(AccordionItem, { label: 'hst-accordion-item' })(({ theme }) => {
  return css`
    &.hst-accordion-disabled {
      opacity: ${theme.opacity.level[6]};
      pointer-events: none;
    }
  `;
});

export default AccordionItemWrapper;
