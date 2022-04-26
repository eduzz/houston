import * as React from 'react';

import { ToastContainer as ToastContainerToastify, ToastContainerProps, Slide } from 'react-toastify';

import useHoustonTheme from '@eduzz/houston-style/useHoustonTheme';

import styles from './styles';

const ToastContainer: React.FC<ToastContainerProps> = props => {
  const theme = useHoustonTheme();
  const styleContent = React.useMemo(
    () => ({
      __html: `
        ${styles}

        .Toastify__toast {
          border-radius: 4px;
          margin-bottom: 16px;
          padding: 8px 16px;
        }

        .Toastify__toast-body {
          font-family: ${theme?.font?.family ?? 'Open Sans'};
          font-weight: 600;
          padding-right: 8px;
          line-height: 1.45;
        }

        .Toastify__close-button {
          align-self: center;
        }
      `
    }),
    [theme?.font?.family]
  );

  return (
    <>
      <style dangerouslySetInnerHTML={styleContent} />

      <ToastContainerToastify
        {...props}
        transition={Slide}
        position='top-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnFocusLoss
        pauseOnHover
        icon={false}
        limit={4}
      />
    </>
  );
};

export default ToastContainer;
