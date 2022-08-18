import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

import Collapse from '../../../Collapse';
import { useAccordion } from '../../context';

export interface ContentProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

type ReceivedFromParentProps = {
  index?: number;
};

const AccordionContent = ({ children, index, ...rest }: ContentProps & ReceivedFromParentProps) => {
  const { expandedItems, cachedItems, destroyOnClose } = useAccordion();

  const isExpanded = expandedItems.includes(index as number);
  const isCached = cachedItems.includes(index as number);

  return (
    <Collapse timeout={350} visibled={isExpanded}>
      {isCached && <div {...rest}>{children}</div>}
      {destroyOnClose && isExpanded && <div {...rest}>{children}</div>}
    </Collapse>
  );
};

export default styled(AccordionContent, { label: 'hst-accordion-content' })(({ theme }) => {
  return css`
    background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
    padding: ${theme.spacing.inset.xs};
  `;
});
