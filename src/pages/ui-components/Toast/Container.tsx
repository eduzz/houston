import * as React from 'react';

import { ToastContainer as ToastContainerToastify, ToastContainerProps, Slide } from 'react-toastify';

import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';

import useMediaQuery from '../hooks/useMediaQuery';
import styles from './styles';

const ToastContainer: React.FC<ToastContainerProps> = props => {
  const theme = useHoustonTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const styleContent = {
    __html: `
        ${styles}

        .Toastify__toast {
          width: max-content;
          ${isMobile ? 'margin: auto' : 'margin-left: auto'};
          margin-bottom: ${isMobile ? theme.spacing.stack.xxxs : theme.spacing.stack.nano};
          min-height: ${theme.pxToRem(10)}rem;
          max-height: ${theme.pxToRem(800)}rem;
          border-radius: ${theme.border.radius.sm};
          box-shadow: ${theme.shadow.level[2]};          
        }

        .Toastify__toast-container--top-right {
          top: ${theme.spacing.stack.nano};
          right: ${theme.spacing.inline.xxxs};
        }

        .Toastify__toast-container--bottom-center {
          bottom: 0;
        }
      `
  };

  return (
    <>
      <style dangerouslySetInnerHTML={styleContent} />

      <ToastContainerToastify
        {...props}
        transition={Slide}
        position={isMobile ? 'bottom-center' : 'top-right'}
        autoClose={4000}
        hideProgressBar
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
