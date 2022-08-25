import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

import Collapse from '../../../Collapse';
import { AccordionContext } from '../../context';
import { ItemContext } from '../context';

export interface ContentProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const AccordionContent = ({ children, ...rest }: ContentProps) => {
  const expandedItems = useContextSelector(AccordionContext, context => context.expandedItems);
  const cachedItems = useContextSelector(AccordionContext, context => context.cachedItems);
  const destroyOnClose = useContextSelector(AccordionContext, context => context.destroyOnClose);

  const itemId = useContextSelector(ItemContext, context => context.itemId);

  const isExpanded = expandedItems.includes(itemId);
  const isCached = cachedItems.includes(itemId);

  if (destroyOnClose) {
    return (
      <Collapse timeout={350} visibled={isExpanded} destroyOnClose={destroyOnClose}>
        <div {...rest}>{children}</div>
      </Collapse>
    );
  }

  return (
    <Collapse timeout={350} visibled={isExpanded}>
      {isCached && <div {...rest}>{children}</div>}
    </Collapse>
  );
};

export default styled(AccordionContent, { label: 'hst-accordion-content' })(({ theme }) => {
  return css`
    background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[1])};
    padding: ${theme.spacing.inset.xs};
  `;
});
