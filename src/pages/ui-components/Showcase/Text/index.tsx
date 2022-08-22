import styled, { css, StyledProp } from '@eduzz/houston-styles';

const Text = ({ children, className }: React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return <p className={className}>{children}</p>;
};

export default styled(Text, { label: 'hst-showcase-text' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.sm};
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #666666;
  `}
`;
