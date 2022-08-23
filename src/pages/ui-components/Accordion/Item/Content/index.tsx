import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

import Collapse from '../../../Collapse';
import { useAccordion } from '../../context';
import { useItemId } from '../context';

export interface ContentProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const AccordionContent = ({ children, ...rest }: ContentProps) => {
  const { expandedItems, cachedItems, destroyOnClose } = useAccordion();
  const { itemId } = useItemId();

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
    background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
    padding: ${theme.spacing.inset.xs};
  `;
});
