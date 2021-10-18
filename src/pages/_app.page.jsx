import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { DokzProvider, GithubLink } from 'dokz';
import Head from 'next/head';

import ToastContainer from '@eduzz/houston-ui/Toast/Container';
import './styles.css';

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
      </Head>
      <ToastContainer />
      <DokzProvider
        animate
        headerLogo={<img src='/houston/img/logo.svg' height='60px' />}
        headerItems={[<GithubLink key='0' url='https://github.com/remorses/dokz' />]}
        sidebarOrdering={sidebarOrdering}
      >
        <Component {...pageProps} />
      </DokzProvider>
    </ChakraProvider>
  );
}
