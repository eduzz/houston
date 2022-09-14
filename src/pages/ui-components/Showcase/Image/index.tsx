import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface ShowcaseImageProps {
  src: string;
  alt: string;
}

const IMAGE_CONTAINER = 235;

const Image = ({ src, alt, ...rest }: ShowcaseImageProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return (
    <div {...rest}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default styled(Image, { label: 'hst-showcase-image' })`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.pxToRem(IMAGE_CONTAINER)}rem;
    border-radius: ${theme.border.radius.sm} ${theme.border.radius.sm} 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      max-width: 100%;
    }
  `}
`;
