import * as React from 'react';

import { cx } from '@emotion/css';
import { useContextSelector } from 'use-context-selector';

import styled, { IStyledProp } from '../../../styles/styled';
import SidebarContext from '../context';
import Image from './Image';

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
  const collapsed = useContextSelector(SidebarContext, context => context.collapsed);
  const inside = useContextSelector(SidebarContext, context => context.insideComponent);

  const mainImage = React.useMemo(
    () => (
      <figure className='main-image'>
        <Image image={image} alt={alt} />
      </figure>
    ),
    [alt, image]
  );

  const collapsedImage = React.useMemo(
    () =>
      imageCollapsed && (
        <figure className='collapsed-image'>
          <Image image={imageCollapsed} alt={alt} />
        </figure>
      ),
    [alt, imageCollapsed]
  );

  return (
    <div
      {...rest}
      className={cx(
        className,
        inside && '--inside',
        collapsed && !inside && '--collapsed',
        imageCollapsed && '--has-image-collapsed'
      )}
    >
      <div className='wrapper'>
        {mainImage}
        {collapsedImage}
      </div>
    </div>
  );
};

export default styled(React.memo(SidebarLogo), { label: 'houston-sidebar-logo' })`
  padding: 16px;
  overflow: hidden;
  min-height: 70px;
  max-height: 70px;
  position: relative;

  &.--inside {
    width: 100%;
    padding: 16px;
  }

  &.--collapsed {
    padding: 16px 4px;
    text-align: center;
    width: 56px;
  }

  &.--collapsed.--has-image-collapsed {
    .main-image {
      opacity: 0;
    }

    .collapsed-image {
      opacity: 1;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
      .main-image {
        opacity: 1;
      }

      .collapsed-image {
        opacity: 0;
      }
    }
  }

  .wrapper {
    max-height: 80px;
    position: relative;

    .collapsed-image {
      opacity: 0;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    img {
      max-width: 108px;
      max-height: 80px;
    }
  }

  // i'm not using breakpoint do be equal to the app toolbar menu icon
  @media screen and (max-width: 900px) {
    &.--collapsed {
      padding: 16px;
      text-align: left;
      width: 100%;
    }
  }
`;
