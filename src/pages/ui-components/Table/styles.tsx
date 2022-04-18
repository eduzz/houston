import * as React from 'react';

import { css } from '@emotion/react';

import styled from '../styled';
import { ITableProps } from './Table';

export default (Component: React.FC<ITableProps>) => styled(Component)`
  position: relative;

  & > .__houston-table {
    width: 100%;
    border-spacing: 0px;

    & .houston-table-label-mobile {
      display: none;
      font-size: ${({ theme }) => theme.textSize('x-small')}px;
      font-weight: ${({ theme }) => theme.fontWeight('semibold')};
    }

    & .houston-table-collapse-button {
      transition: 0.2s linear;
    }

    & .houston-table-collapse-button-opened {
      transform: rotate(-180deg);
    }

    & > tbody > tr > td {
      box-sizing: border-box;
    }

    & > tbody > tr.houston-table-row-even > td {
      background-color: ${({ theme }) => theme.colors.grey[100]};
    }

    & > tbody > tr.houston-table-row-even + tr.houston-table-collapse td {
      background-color: transparent;
    }

    & > tbody > tr.houston-table-loader td {
      padding: 0;
    }

    & > tbody > tr.houston-table-collapse > td {
      padding: 0;
    }

    & > tbody > tr.houston-table-collapse:not(.houston-table-collapse-opened) > td {
      border: none;
    }

    &
      > tbody
      > tr.houston-table-collapse:not(.houston-table-collapse-no-padding)
      > td
      div.houston-table-collapse-content {
      padding: ${({ theme }) => theme.spacing(3)};
    }

    &
      > tbody
      > tr.houston-table-collapse:not(.houston-table-collapse-no-background)
      > td
      div.houston-table-collapse-content {
      background-color: ${({ theme }) => theme.colors.grey[200]};
    }

    & > tbody > tr > td.houston-table-action-cell {
      padding-right: ${({ theme }) => theme.spacing(3)};
    }

    & > tbody > tr > td.houston-table-action-cell button + button {
      margin-left: ${({ theme }) => theme.spacing(1)};
    }

    & > thead > tr > th.houston-column-align-left {
      text-align: left;
    }

    & > thead > tr > th.houston-column-align-center {
      text-align: center;
    }

    & > thead > tr > th.houston-column-align-right {
      text-align: right;
    }

    & > tbody > tr > td.houston-cell-align-left {
      text-align: left;
    }

    & > tbody > tr > td.houston-cell-align-center {
      text-align: center;
    }

    & > tbody > tr > td.houston-cell-align-right {
      text-align: right;
    }

    &.--responsive {
      display: block !important;

      & .houston-table-label-mobile {
        display: block !important;
      }

      & > thead {
        display: none;
      }

      & > tbody,
      & > tfoot,
      & > tfoot > tr,
      & > tfoot > tr > td {
        display: block;
      }

      & > tbody > tr {
        display: flex;
        width: ${({ theme }) => `calc(100% - ${theme.spacing(4)})`};
        flex-wrap: wrap;
        position: relative;
        box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin: ${({ theme }) => theme.spacing(2)};
        margin-top: 0;
        border: 1px solid ${({ theme }) => theme.colors.grey[200]};
        padding: ${({ theme }) => theme.spacing(3)};
        padding-bottom: ${({ theme }) => theme.spacing(1)};
        box-sizing: border-box;
      }

      & > tbody > tr.houston-table-collapse {
        padding: 0;
        margin-top: ${({ theme }) => (Number(theme.spacing(2).toString().replace('px', '')) + 2) * -1}px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        box-shadow: none;
        background-color: white;
      }

      & > tbody > tr.houston-table-collapse-opened {
        box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
      }

      & > tbody > tr.houston-table-collapse > td {
        margin-bottom: 0;
      }

      & > tbody > tr.houston-table-row-even {
        background-color: ${({ theme }) => theme.colors.grey[100]};
      }

      & > tbody > tr.houston-table-row-even + tr.houston-table-collapse {
        background-color: ${({ theme }) => theme.colors.grey[100]};
        border: 0;
      }

      & > tbody > tr.houston-table-row-even > td {
        background-color: transparent;
      }

      & > tbody > tr.houston-table-row-even + tr.houston-table-collapse td {
        background-color: transparent;
      }

      & > tbody > tr.houston-table-row-has-action,
      & > tbody > tr.houston-table-row-has-collapse {
        padding-right: 50px;

        &:before {
          content: ' ';
          display: block;
          position: absolute;
          border-left: 1px solid ${({ theme }) => theme.colors.grey[200]};
          right: 40px;
          top: 0px;
          bottom: 0px;
        }
      }

      & > tbody > tr > td.houston-houston-table-collapse-cell {
        position: absolute;
        right: ${({ theme }) => theme.spacing(1)};
        top: auto;
        bottom: ${({ theme }) => theme.spacing(1)};
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        display: flex;
        padding-right: 0;
        margin-bottom: 0;
      }

      & > tbody > tr > td.houston-table-action-cell {
        position: absolute;
        right: ${({ theme }) => theme.spacing(1)};
        top: ${({ theme }) => theme.spacing(1)};
        bottom: auto;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        display: flex;
        padding-right: 0;
        margin-bottom: 0;
      }

      & > tbody > tr > td.houston-table-action-cell button + button {
        margin-left: 0;
      }

      & > tbody > tr > td.houston-table-action-cell button:first-child:not(:last-child) {
        align-self: flex-start;
      }

      & > tbody > tr > td {
        box-sizing: border-box;
        word-break: break-word;
        padding: 0;
        margin-bottom: ${({ theme }) => theme.spacing(2)};
        flex: 1;
        border: none;
        flex-grow: 0;
        flex-basis: 100%;
        max-width: 100%;
        line-height: ${({ theme }) => theme.lineHeight('compact')};
      }

      & > tbody > tr.houston-table-loader {
        padding: 0;
        padding-right: 0;

        &:before {
          display: none;
        }
      }

      & > tbody > tr.table-empty-message {
        padding-right: 0;

        &:before {
          display: none;
        }
      }

      & > tbody > tr.houston-table-loader > td {
        margin-bottom: 0;
      }

      & > tbody > tr > td.houston-cell-mobile-align-left {
        text-align: left;
      }

      & > tbody > tr > td.houston-cell-mobile-align-center {
        text-align: center;
      }

      & > tbody > tr > td.houston-cell-mobile-align-right {
        text-align: right;
      }

      & > tbody > tr > td.houston-cell-size-true {
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
      }

      & > tbody > tr > td.houston-cell-size-0 {
        display: none;
      }

      ${new Array(12).fill('a').map((_, index) => {
        const size = index + 1;
        const percent = `${(size / 12) * 100}%`;

        return css`
          & > tbody > tr > td.houston-cell-size-${size} {
            flex-grow: 0;
            max-width: ${percent};
            flex-basis: ${percent};
          }
        `;
      })}
    }
  }
`;
