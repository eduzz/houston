import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { DokzProvider, GithubLink } from 'dokz';
import Head from 'next/head';

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider resetCSS>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Fira+Code' rel='stylesheet' key='google-font-Fira' />
      </Head>
      <DokzProvider headerItems={[<GithubLink key='0' url='https://github.com/remorses/dokz' />]}>
        <Component {...pageProps} />
      </DokzProvider>
    </ChakraProvider>
  );
}
