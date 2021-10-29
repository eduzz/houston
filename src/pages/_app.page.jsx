import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { DokzProvider, GithubLink } from 'dokz';
import Head from 'next/head';
import theme from 'prism-react-renderer/themes/nightOwl';

import ToastContainer from '@eduzz/houston-ui/Toast/Container';

import './_app.page.css';

const sidebarOrdering = {
  'index.mdx': true,
  'ui-components': true
};

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <ChakraProvider resetCSS>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Fira+Code' rel='stylesheet' key='google-font-Fira' />
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700' rel='stylesheet' />
      </Head>

      <ToastContainer />

      <DokzProvider
        animate
        footer={<footer className='houston-footer'>Houston - Feito com ❤️ pela Eduzz.</footer>}
        headTitlePrefix='Houston | '
        fontFamily='Open Sans'
        headerLogo={<img src='/houston/img/logo.svg' height='60px' />}
        headerItems={[
          // <a
          //   key='0'
          //   target='_blank'
          //   rel='noreferrer'
          //   href='https://zeroheight.com/3a98bdd76/p/756f78-guia-de-redao-e-estilo-eduzz---v1---produtos'
          // >
          //   Guia de Conteúdo
          // </a>,
          <GithubLink key='1' url='https://github.com/eduzz/houston' />
        ]}
        sidebarOrdering={sidebarOrdering}
        prismTheme={{ light: theme }}
      >
        <Component {...pageProps} />
      </DokzProvider>
    </ChakraProvider>
  );
}
