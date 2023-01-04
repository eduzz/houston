import styled, { css, StyledProp } from '@eduzz/houston-styles';

import Paragraph, { ParagraphProps } from '../../Typography/Paragraph';

export interface ShowcaseTextProps extends Omit<ParagraphProps, 'size' | 'color'> {
  disableTypography?: boolean;
}

const Text = ({
  children,
  className,
  disableTypography,
  ...rest
}: ShowcaseTextProps & Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'> & StyledProp) => {
  if (disableTypography) {
    return <>{children}</>;
  }

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
