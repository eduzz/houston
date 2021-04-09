import '../assets/styles/global.scss';

import { useEffect } from 'react';

import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';

import { AppProps } from 'next/dist/next-server/lib/router/router';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const styles = document.querySelector('#jss-server-side');

    if (styles) {
      styles.parentElement?.removeChild(styles);
    }
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
