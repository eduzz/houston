import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Typography from '@eduzz/houston-ui/Typography';

const Text = ({ children, className }: React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return (
    <Typography as='p' size='sm' className={className}>
      {children}
    </Typography>
  );
};

export default styled(Text, { label: 'hst-showcase-text' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.sm};

    padding-bottom: 0;
  `}
`;
