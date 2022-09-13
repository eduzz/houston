import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Heading, { HeadingProps } from '@eduzz/houston-ui/Typography/Heading';

const Title = ({ children, className, ...rest }: Omit<HeadingProps, 'size' | 'as'> & StyledProp) => {
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
