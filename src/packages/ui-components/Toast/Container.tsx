import * as React from 'react';
import { ToastContainer as ToastContainerToastify, ToastContainerProps, Slide } from 'react-toastify';

import themeVariable from '../styles/ThemeProvider/_default/variables';
import toastStyles from './styles';

const ToastContainer: React.FC<ToastContainerProps> = props => {
  const styleContent = React.useMemo(
    () => ({
      __html: `
        ${toastStyles}

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
        autoClose={false}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        limit={2}
      />
    </>
  );
};

export default ToastContainer;
