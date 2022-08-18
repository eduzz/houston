import styled, { StyledProp } from '@eduzz/houston-styles';

const Step = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return <div {...rest}>{children}</div>;
};

export default styled(Step, { label: 'hst-showcase-step' })`
  min-width: 100%;
  display: flex;
  flex-direction: column;
`;
