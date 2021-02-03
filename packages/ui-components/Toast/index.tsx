import * as React from 'react';
import {
  toast,
  ToastContainer as ToastContainerToastify,
  ToastContainerProps,
  ToastOptions,
  Slide
} from 'react-toastify';

import themePalette from '@eduzz/houston-ui/ThemeProvider/_default/palette';
import themeVariable from '@eduzz/houston-ui/ThemeProvider/_default/variables';

type IToastPropsExtends = 'onOpen' | 'onClose' | 'onClick';

interface IToastOptions extends Pick<ToastOptions, IToastPropsExtends> {}
const Toast = {
  success: (content: React.ReactNode, options?: IToastOptions) =>
    toast.success(content, {
      ...options,
      style: {
        background: '#4CAF50'
      }
    }),

  error: (content: React.ReactNode, options?: IToastOptions) =>
    toast.error(content, {
      ...options,
      style: {
        background: '#F44336'
        // background: themePalette.error.main don't work =/
      }
    }),

  info: (content: React.ReactNode, options?: IToastOptions) =>
    toast.info(content, {
      ...options,
      style: {
        background: themePalette.grey[500]
      }
    })
};

export const ToastContainer: React.FC<ToastContainerProps> = React.memo((props: ToastContainerProps) => {
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
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2}
        toastStyle={
          {
            // don't work =(
          }
        }
      />
    </>
  );
});

export default Toast;
