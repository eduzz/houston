/** @jsx jsx */
import { Image } from '@nejcm/docz-theme-extended/src/gatsby-theme-docz/components/Logo/custom-styles';
import { getPublicUrl } from '@nejcm/docz-theme-extended/src/gatsby-theme-docz/helpers';
import { Link, useConfig } from 'docz';
import * as styles from 'gatsby-theme-docz/src/components/Logo/styles';
import { Flex, useColorMode } from 'theme-ui';

export const Logo = () => {
  const config = useConfig();
  const [colorMode] = useColorMode();
  const { width = '100%', src = '' } = config.themeConfig.logo || {};

  const imagePath = typeof src === 'object' ? src[colorMode] : src;

  return (
    <div sx={styles.logo} data-testid='logo'>
      <Link to='/' sx={styles.link}>
        <Flex sx={{ alignItems: 'center', flexDirection: 'row', lineHeight: 1.2 }}>
          {imagePath ? (
            <Image
              className='logo'
              src={getPublicUrl(config.base, imagePath)}
              width={width}
              height='auto'
              alt={config.title}
            />
          ) : null}
        </Flex>
      </Link>
    </div>
  );
};
