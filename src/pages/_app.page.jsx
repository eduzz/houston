import React from 'react';

import { ChakraProvider, ColorModeScript, Button } from '@chakra-ui/react';
import { DokzProvider, GithubLink } from 'dokz';
import Head from 'next/head';
import theme from 'prism-react-renderer/themes/nightOwl';

import './_app.page.less';

const sidebarOrdering = {
  'index.mdx': true,
  'README.mdx': true,
  'ui-components': { 'README.mdx': true },
  'forms': { 'README.mdx': true },
  'hooks': { 'README.mdx': true }
};

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider resetCSS>
      <Head>
        <link rel='shortcut icon' href='/houston/img/favicon.ico' />
        <link href='https://fonts.googleapis.com/css?family=Fira+Code' rel='stylesheet' key='google-font-Fira' />
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700' rel='stylesheet' />
      </Head>

      <DokzProvider
        animate
        footer={<footer className='houston-footer'>Houston - Feito com ❤️ pela Eduzz</footer>}
        headTitlePrefix='Houston | '
        fontFamily='Open Sans'
        initialColorMode='light'
        headerLogo={<img src='/houston/img/logo.svg' height='60px' />}
        headerItems={[
          <Button
            key='0'
            onClick={() =>
              window.open('http://eduzz-houston-deprecated-docs.s3-website-us-east-1.amazonaws.com', '_blank')
            }
          >
            <small>Ver documentação da versão anterior</small>
          </Button>,
          <GithubLink key='1' url='https://github.com/eduzz/houston' />
        ]}
        sidebarOrdering={sidebarOrdering}
        prismTheme={{ light: theme, dark: theme }}
      >
        <ColorModeScript initialColorMode='light' />
        <Component {...pageProps} />
      </DokzProvider>
    </ChakraProvider>
  );
}
