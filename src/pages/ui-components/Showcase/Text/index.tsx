import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Paragraph, { ParagraphProps } from '@eduzz/houston-ui/Typography/Paragraph';

const Text = ({ children, className, ...rest }: Omit<ParagraphProps, 'size' | 'color'> & StyledProp) => {
  return (
    <Paragraph className={className} size='sm' color='neutralColor.low.medium' {...rest}>
      {children}
    </Paragraph>
  );
};

export default styled(Text, { label: 'hst-showcase-text' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.sm};
  `}
`;
