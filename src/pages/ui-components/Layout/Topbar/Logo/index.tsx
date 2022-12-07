import styled, { css, StyledProp, useTheme } from '../../../styled';

export interface LogoProps extends StyledProp {
  logo?: string;
  logoMobile?: string;
  logoDarkMode?: string;
  logoMobileDarkMode?: string;
}

const Logo = ({ logo, logoMobile, logoDarkMode, logoMobileDarkMode, className }: LogoProps) => {
  const theme = useTheme();

  if (theme.mode === 'dark') {
    return (
      <div className={className}>
        <img
          className='hst-topbar-logo-default'
          src={logoDarkMode ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz-white.svg'}
        />
        <img
          className='hst-topbar-logo-mobile'
          src={logoMobileDarkMode ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz-mobile.svg'}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <img
        className='hst-topbar-logo-default'
        src={logo ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz.svg'}
      />
      <img
        className='hst-topbar-logo-mobile'
        src={logoMobile ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz-mobile.svg'}
      />
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
