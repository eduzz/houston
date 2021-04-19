/** @jsx jsx */
import React, { useRef, useState, useMemo } from 'react';

import { Global } from '@emotion/core';
import Footer from '@nejcm/docz-theme-extended/src/gatsby-theme-docz/components/Footer';
import {
  Content,
  globalStyles
} from '@nejcm/docz-theme-extended/src/gatsby-theme-docz/components/Layout/custom-styles';
import useExtendedMenus from '@nejcm/docz-theme-extended/src/gatsby-theme-docz/hooks/useExtendedMenus';
import { useConfig } from 'docz';
import * as styles from 'gatsby-theme-docz/src/components/Layout/styles';
import { MainContainer } from 'gatsby-theme-docz/src/components/MainContainer';
import { Sidebar } from 'gatsby-theme-docz/src/components/Sidebar';
import { breakpoints } from 'gatsby-theme-docz/src/theme/breakpoints';
import PropTypes from 'prop-types';
import { Box, Flex, jsx } from 'theme-ui';

import { Header } from '../Header';
import NavHeadings from '../NavHeadings';

export const Layout = ({ children, /*pageContext = {},*/ doc = {}, ...rest }) => {
  const {
    themeConfig: { mainContainer: { fullscreen, align = 'center' } = {} }
  } = useConfig();

  const fullMainContainer = doc.value.fullscreen;

  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const menus = useExtendedMenus({ query });

  const handleChange = ev => {
    setQuery(ev.target.value);
  };

  const styleContent = useMemo(
    () => ({
      __html: `
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700');

        body, * {
          font-family: "Open Sans";
        }

        .bg-grey {
          background-color: #eee
        }
      `
    }),
    []
  );

  const { updated } = doc.value || {};
  const mainStyles = {
    marginLeft: align !== 'left' ? 'auto' : 0,
    marginRight: align !== 'right' ? 'auto' : 0,
    ...(fullscreen || fullMainContainer ? { maxWidth: 'none' } : undefined)
  };

  return (
    <>
      <style dangerouslySetInnerHTML={styleContent} />
      <Flex sx={{ '& > div': { flex: '1 1 auto' } }} data-testid='layout'>
        <Global styles={globalStyles} />
        <Box sx={styles.main}>
          <Header onOpen={() => setOpen(s => !s)} />

          {fullMainContainer && (
            <MainContainer style={mainStyles} data-testid='main-container' doc={doc} {...rest}>
              <Flex
                sx={{
                  width: '100%',
                  justifyContent: 'stretch',
                  [`@media screen and (max-width: ${breakpoints.desktop}px)`]: {
                    flexDirection: 'column'
                  }
                }}
              >
                <Content>
                  <div>{children}</div>
                  <Footer updated={updated} menus={menus} />
                </Content>
              </Flex>
            </MainContainer>
          )}

          {!fullMainContainer && (
            <div sx={styles.wrapper}>
              <Sidebar
                ref={ref}
                open={open}
                menus={menus}
                handleChange={handleChange}
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                onClick={() => setOpen(false)}
              />
              <MainContainer style={mainStyles} data-testid='main-container' doc={doc} {...rest}>
                <Flex
                  sx={{
                    width: '100%',
                    justifyContent: 'stretch',
                    [`@media screen and (max-width: ${breakpoints.desktop}px)`]: {
                      flexDirection: 'column'
                    }
                  }}
                >
                  <Content>
                    <div>{children}</div>
                    <Footer updated={updated} menus={menus} />
                  </Content>
                  <NavHeadings />
                </Flex>
              </MainContainer>
            </div>
          )}
        </Box>
      </Flex>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
  doc: PropTypes.object
};
