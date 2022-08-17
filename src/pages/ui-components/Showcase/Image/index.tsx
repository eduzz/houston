interface ImageProps {
  src: string;
}

const Image = ({ src }: ImageProps) => {
  return <img src={src}>Image</img>;
};

export default Image;
