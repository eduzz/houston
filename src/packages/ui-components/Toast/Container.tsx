import * as React from 'react';

import { ToastContainer as ToastContainerToastify, ToastContainerProps, Slide } from 'react-toastify';

import themeVariable from '../styles/ThemeProvider/_default/variables';

import 'react-toastify/dist/ReactToastify.css';

const ToastContainer: React.FC<ToastContainerProps> = props => {
  const styleContent = React.useMemo(
    () => ({
      __html: `
        .Toastify__toast {
          border-radius: 4px;
          margin-bottom: 16px;
          padding: 8px 16px;
        }

        .Toastify__toast-body {
          font-family: ${themeVariable.fontFamily};
          font-weight: 600;
          padding-right: 8px;
          line-height: 1.45;
        }

        .Toastify__close-button {
          align-self: center;
        }
      `
    }),
    []
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
        limit={4}
      />
    </>
  );
};

export default ToastContainer;
