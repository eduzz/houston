import * as React from 'react';

interface ISidebarLogoImageProps {
  image: React.ReactNode;
  alt?: string;
}

const SidebarLogoImage: React.FC<ISidebarLogoImageProps> = ({ image, alt }) => {
  if (typeof image === 'string') {
    return <img src={image} alt={alt ?? 'Logo Plataforma'} />;
  }

  return <>{image}</>;
};

export default SidebarLogoImage;
