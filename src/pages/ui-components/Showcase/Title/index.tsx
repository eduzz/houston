import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Heading, { HeadingProps } from '@eduzz/houston-ui/Typography/Heading';

export interface ShowcaseTitleProps extends Omit<HeadingProps, 'size' | 'as' | 'color'> {
  disableTypography?: boolean;
}

const Title = ({
  children,
  className,
  disableTypography,
  ...rest
}: ShowcaseTitleProps & Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'> & StyledProp) => {
  if (disableTypography) {
    return <>{children}</>;
  }

  return (
    <Heading size='sm' as='h6' className={className} color='neutralColor.low.dark' {...rest}>
      {children}
    </Heading>
  );
};

export default styled(Title, { label: 'hst-showcase-title' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.sm};
    padding-bottom: 0;
  `}
`;
