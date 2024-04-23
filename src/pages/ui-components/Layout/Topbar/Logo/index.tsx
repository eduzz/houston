import * as React from 'react';

import styled, { css, StyledProp, useTheme } from '../../../styled';

export interface LogoProps extends StyledProp {
  logo?: string;
  logoMobile?: string;
  logoDarkMode?: string;
  logoMobileDarkMode?: string;
  wrapper?: React.JSXElementConstructor<{ children: React.ReactNode; className: string }>;
}

const Logo = ({ logo, logoMobile, logoDarkMode, logoMobileDarkMode, className, wrapper: Wrapper }: LogoProps) => {
  const theme = useTheme();

  function getLogos() {
    if (theme.mode === 'dark') {
      return {
        desktop: logoDarkMode ?? '//cdn.eduzzcdn.com/topbar/myeduzz-white.svg',
        mobile: logoMobileDarkMode ?? '//cdn.eduzzcdn.com/topbar/myeduzz-mobile.svg'
      };
    }

    return {
      desktop: logo ?? '//cdn.eduzzcdn.com/topbar/myeduzz.svg',
      mobile: logoMobile ?? '//cdn.eduzzcdn.com/topbar/myeduzz-mobile.svg'
    };
  }

  const logos = getLogos();

  if (Wrapper) {
    return (
      <Wrapper className={className as string}>
        <img className='hst-topbar-logo-default' src={logos.desktop} />
        <img className='hst-topbar-logo-mobile' src={logos.mobile} />
      </Wrapper>
    );
  }

  return (
    <div className={className}>
      <img className='hst-topbar-logo-default' src={logos.desktop} />
      <img className='hst-topbar-logo-mobile' src={logos.mobile} />
    </div>
  );
};

export default styled(Logo, { label: 'hst-topbar-logo' })(
  ({ theme }) => css`
    height: 80%;
    width: auto;
    margin-inline: 0.5rem;

    & > img {
      max-width: 100%;
      max-height: 100%;
      height: ${theme.components.topBarHeight}px;
    }

    & > .hst-topbar-logo-mobile {
      display: none;
    }

    ${theme.mediaQuery.down('lg')} {
      width: ${theme.pxToRem(32)}rem;

      & .hst-topbar-logo-default {
        display: none;
      }

      & .hst-topbar-logo-mobile {
        display: block;
      }
    }
  `
);
