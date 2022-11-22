import { css, GlobalStyles } from '../../styled';

const CustomCss = () => {
  return (
    <GlobalStyles
      styles={theme => css`
        ol {
          list-style: decimal;
        }

        .ant-form-item {
          margin-bottom: 20px;
        }

        .ant-form-item-explain-error {
          font-size: 13px;
        }

        .ant-form-vertical .ant-form-item-label,
        .ant-col-24.ant-form-item-label {
          padding-bottom: 2px;
        }

        .ant-col-24.ant-form-item-label > label {
          height: auto;
        }

        .ant-select,
        .ant-picker {
          width: 100%;
        }

        .ant-pagination-options .ant-select-single:not(.ant-select-customize-input) {
          .ant-select-selector {
            height: 32px;

            .ant-select-selection-item {
              line-height: 32px;
            }
          }

          .ant-pagination-item .ant-select-selector .ant-select-selection-item,
          .ant-pagination-item .ant-select-selector .ant-select-selection-placeholder {
            line-height: calc(32px - 3px);
          }
        }

        .ant-table table {
          border: 1px solid ${theme.antd.colorSplit};
        }

        .ant-space {
          display: flex;
        }

        .ant-empty-image {
          height: 80px;

          .anticon {
            font-size: 60px;
          }
        }

        th.houston-table-action {
          text-align: center;
          width: 80px;
        }

        td.houston-table-action {
          padding: 0 !important;
          text-align: center;
        }

        .ant-input-search-button {
          height: calc(32px - 1px);
        }

        .ant-modal-mask {
          backdrop-filter: blur(0.5rem);
          -webkit-backdrop-filter: blur(0.5rem);
        }

        .ant-btn > .ant-avatar {
          vertical-align: text-bottom;
          margin-right: 5px;
        }
      `}
    />
  );
};

export default CustomCss;
