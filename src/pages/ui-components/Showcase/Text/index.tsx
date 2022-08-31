import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Paragraph from '@eduzz/houston-ui/Typography/Paragraph';

const Text = ({ children, className }: React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return (
    <Paragraph className={className} size='sm' color='neutralColor.low.medium'>
      {children}
    </Paragraph>
  );
};

export default styled(Text, { label: 'hst-showcase-text' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.sm};
  `}
`;
