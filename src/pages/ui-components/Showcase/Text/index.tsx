import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Paragraph from '@eduzz/houston-ui/Typography/Paragraph';

export interface ShowcaseTextProps {
  disableTypography?: boolean;
}

const Text = ({
  children,
  className,
  disableTypography
}: ShowcaseTextProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  if (disableTypography) {
    return <>{children}</>;
  }

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
