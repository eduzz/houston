import { useTheme } from '../../../styled';

export interface LogoProps {
  logo?: string;
  logoMobile?: string;
  logoDarkMode?: string;
  logoMobileDarkMode?: string;
}

const Logo = ({ logo, logoMobile, logoDarkMode, logoMobileDarkMode }: LogoProps) => {
  const theme = useTheme();

  if (theme.mode === 'dark') {
    return (
      <>
        <img
          className='hst-topbar-logo-default'
          src={logoDarkMode ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz-white.svg'}
        />
        <img
          className='hst-topbar-logo-mobile'
          src={logoMobileDarkMode ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz-mobile.svg'}
        />
      </>
    );
  }

  return (
    <>
      <img
        className='hst-topbar-logo-default'
        src={logo ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz.svg'}
      />
      <img
        className='hst-topbar-logo-mobile'
        src={logoMobile ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz-mobile.svg'}
      />
    </>
  );
};

export default Logo;
