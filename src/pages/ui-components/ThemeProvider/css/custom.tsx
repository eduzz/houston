import { css, GlobalStyles } from '../../styled';

const CustomCss = () => {
  return (
    <GlobalStyles
      styles={theme => css`
        ol {
          list-style: decimal;
        }

        /* fix search input height */
        .ant-input-search-large > .ant-input-group > .ant-input {
          height: 40px;
        }

        /* workaround for Modal.confirm */
        .ant-modal .ant-modal-content {
          border-radius: ${theme.antd.borderRadius};
        }

        .ant-modal-confirm-btns {
          .ant-btn-default {
            height: 40px;
            border-radius: ${theme.antd.borderRadius};

            &:hover,
            &:focus,
            &:active {
              border-color: ${theme.antd.colorPrimaryHover};
              color: ${theme.antd.colorPrimary};
            }
          }

          .ant-btn-primary {
            background-color: ${theme.antd.colorPrimary};
            height: 40px;
            border-radius: ${theme.antd.borderRadius};

            &:hover,
            &:focus,
            &:active {
              background-color: ${theme.antd.colorPrimaryHover};
            }
          }
        }

        /* fix forms */
        .ant-form-vertical .ant-form-item-label,
        .ant-col-24.ant-form-item-label {
          padding-bottom: 2px;
        }

        .ant-col-24.ant-form-item-label > label {
          height: auto;
        }

        .ant-select {
          width: 100%;
        }

        .ant-space {
          display: flex;
        }

        /* fix empty image with icon */
        .ant-empty-image {
          height: 80px !important;

          .anticon {
            font-size: 70px;
          }
        }

        /* table config  */
        .ant-table table {
          border: 1px solid ${theme.antd.colorSplit};
        }

        th.houston-table-action {
          text-align: center;
          width: 80px;
        }

        td.houston-table-action {
          padding: 0 !important;
          text-align: center;
        }

        /* add blur to modal */
        .ant-modal-mask {
          backdrop-filter: blur(0.5rem);
          -webkit-backdrop-filter: blur(0.5rem);
        }

        /* fix avatar inside of a button  */
        .ant-btn > .ant-avatar {
          vertical-align: text-bottom;
          margin-right: 5px;
        }

        .ant-tooltip {
          pointer-events: none;
        }

        .ant-tooltip .ant-tooltip-inner {
          box-shadow: none;
        }
      `}
    />
  );
};

export default CustomCss;
