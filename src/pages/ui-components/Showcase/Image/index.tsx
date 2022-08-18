import styled, { StyledProp } from '@eduzz/houston-styles';

export interface ShowcaseImageProps {
  src: string;
}

const Image = ({ src, className }: ShowcaseImageProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return <div className={className} style={{ backgroundImage: `url('${src}')` }} />;
};

export default styled(Image, { label: 'hst-showcase-image' })`
  width: 100%;
  height: 235px;
  border-radius: 0.5rem 0.5rem 0 0;
  background-size: cover;
  background-position: center;
`;
