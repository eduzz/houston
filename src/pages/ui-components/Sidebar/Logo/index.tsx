import * as React from 'react';

import { cx } from '@emotion/css';
import { useContextSelector } from 'use-context-selector';

import styled, { IStyledProp } from '../../styles/styled';
import SidebarContext from '../context';

export interface ISidebarLogoProps extends IStyledProp {
  id?: string;
  image: React.ReactNode;
  /**
   * Image when sidebar is collapsed.
   */
  imageCollapsed?: React.ReactNode;
  alt?: string;
}

const SidebarLogo: React.FC<ISidebarLogoProps> = ({ className, image, imageCollapsed, alt, ...rest }) => {
  const isMobile = useContextSelector(SidebarContext, context => context.isMobile);
  const collapsed = useContextSelector(SidebarContext, context => context.collapsed);
  const inside = useContextSelector(SidebarContext, context => context.insideComponent);

  const currentImage = React.useMemo(() => {
    if (isMobile) {
      return image;
    }

    if (inside || isMobile || !imageCollapsed || !collapsed) {
      return image;
    }

    return imageCollapsed;
  }, [collapsed, image, imageCollapsed, inside, isMobile]);

  return (
    <figure {...rest} className={cx(className, inside && '--inside', collapsed && !inside && '--collapsed')}>
      <div className='image'>
        {typeof currentImage === 'string' && <img src={currentImage} alt={alt ?? 'Logo Plataforma'} />}
        {typeof currentImage !== 'string' && currentImage}
      </div>
    </figure>
  );
};

export default styled(React.memo(SidebarLogo), { label: 'houston-sidebar-logo' })`
  padding: 16px;
  overflow: hidden;
  min-height: 70px;
  max-height: 70px;

  &.--inside {
    width: 100%;
    padding: 16px;
  }

  &.--collapsed {
    padding: 16px 4px;
    text-align: center;
    width: 56px;
  }

  .image {
    max-height: 80px;

    img {
      max-width: 108px;
      max-height: 80px;
    }
  }
`;
