import * as React from 'react';

import { ToastContainer as ToastContainerToastify, ToastContainerProps, Slide } from 'react-toastify';

import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';

import styles from './styles';

const ToastContainer: React.FC<ToastContainerProps> = props => {
  const theme = useHoustonTheme();
  const styleContent = {
    __html: `
        ${styles}

        .Toastify__toast {
          border-radius: ${theme.border.radius.xs};
          box-shadow: 0px 8px 24px rgba(0,0,0, 0.16);
          margin-bottom: ${theme.spacing.stack.nano};
          width: max-content;
          margin-left: auto;
          min-height: ${theme.pxToRem(10)}; 
          max-height: ${theme.pxToRem(800)};  
        }

        .Toastify__toast-container--top-right {
          top: ${theme.spacing.stack.nano};
          right: ${theme.spacing.inline.xxxs};
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
        autoClose={4000}
        hideProgressBar={true}
        closeOnClick
        draggable={false}
        icon={false}
        limit={4}
        closeButton={false}
      />
    </>
  );
};

export default ToastContainer;
