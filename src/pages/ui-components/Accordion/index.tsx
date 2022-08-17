import styled, { StyledProp, cx } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import Panel from './Item/Panel';
import Title from './Item/Title';

interface AccordionProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Accordion = ({ children, className, ...rest }: AccordionProps) => (
  <div className={cx(className, 'hst-accordion')} {...rest}>
    {children}
  </div>
);

const AccordionWrapper = styled(Accordion, { label: 'hst-accordion' })``;

export default nestedComponent(AccordionWrapper, {
  Panel,
  Title
});
