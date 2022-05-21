import * as React from 'react';

import { ToastContainer as ToastContainerToastify, ToastContainerProps, Slide } from 'react-toastify';

import styles from './styles';

const ToastContainer: React.FC<ToastContainerProps> = props => {
  const styleContent = {
    __html: `
        ${styles}

        .Toastify__toast {
          border-radius: 4px;
          box-shadow: 0px 8px 24px rgba(0,0,0, 0.16);
          margin-bottom: 8px;
        }
      `
  };

  return (
    <>
      <style dangerouslySetInnerHTML={styleContent} />

      <ToastContainerToastify
        {...props}
        transition={Slide}
        position='top-right'
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnFocusLoss
        pauseOnHover
        icon={false}
        limit={1}
        closeButton={false}
      />
    </>
  );
};

export default ToastContainer;
