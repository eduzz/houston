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
  const { expandedItems } = useAccordion();

  return (
    <Collapse timeout={350} visibled={expandedItems.includes(index as number)}>
      <div {...rest}>{children}</div>
    </Collapse>
  );
};

export default styled(AccordionContent, { label: 'hst-accordion-content' })(({ theme }) => {
  return css`
    background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
    padding: ${theme.spacing.inset.xs};
  `;
});
