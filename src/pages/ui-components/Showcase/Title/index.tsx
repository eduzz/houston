import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Typography from '@eduzz/houston-ui/Typography';

const Title = ({ children, className }: React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return (
    <Typography as='h6' size='sm' className={className}>
      {children}
    </Typography>
  );
};

export default styled(Title, { label: 'hst-showcase-title' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.sm};

    padding-bottom: 0;
  `}
`;
