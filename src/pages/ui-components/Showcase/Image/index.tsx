import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface ShowcaseImageProps {
  src: string;
}

const IMAGE_HEIGHT = 235;

const Image = ({ src, className }: ShowcaseImageProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return <div className={className} style={{ backgroundImage: `url('${src}')` }} />;
};

export default styled(Image, { label: 'hst-showcase-image' })`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.pxToRem(IMAGE_HEIGHT)}rem;
    border-radius: ${theme.border.radius.sm} ${theme.border.radius.sm} 0 0;
    background-size: cover;
    background-position: center;
  `}
`;
