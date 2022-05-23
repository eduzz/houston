import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import { cx } from '@eduzz/houston-styles';
import styled, { IStyledProp } from '@eduzz/houston-styles/styled';

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

  return (
    <div
      {...rest}
      className={cx(className, {
        '--inside': inside,
        '--collapsed': collapsed && !inside,
        '--has-collapsed-image': !!imageCollapsed
      })}
    >
      <div className='__wrapper'>
        <figure className='__main-image'>
          <Image image={image} alt={alt} />
        </figure>

        {!!imageCollapsed && (
          <figure className='__collapsed-image'>
            <Image image={imageCollapsed} alt={alt} />
          </figure>
        )}
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
  transition-delay: 0s;
  transition-property: padding;

  & > .__wrapper {
    max-height: 80px;
    position: relative;

    & > .__collapsed-image {
      opacity: 0;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
    }

    img {
      max-width: 108px;
      max-height: 80px;
    }

    & > .__main-image,
    & > .__collapsed-image {
      transition: 0s 0s ease-in;
    }
  }

  &.--inside {
    width: 100%;
    padding: 16px;
    transition: 0s 0.3s ease-in;

    & > .__wrapper {
      & > .__main-image,
      & > .__collapsed-image {
        transition: 0s 0.3s ease-in;
      }
    }
  }

  &.--collapsed {
    padding: 16px 4px;
    width: 56px;
  }

  &.--collapsed.--has-collapsed-image {
    .__main-image {
      opacity: 0;
    }

    .__collapsed-image {
      opacity: 1;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
      .__main-image {
        opacity: 1;
      }

      .__collapsed-image {
        opacity: 0;
      }
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
