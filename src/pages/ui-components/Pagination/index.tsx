import * as React from 'react';

import ChevronLeft from '@eduzz/houston-icons/ChevronLeft';
import ChevronRight from '@eduzz/houston-icons/ChevronRight';
import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import Select from '../Forms/Select';
import IconButton from '../IconButton';
import Typography from '../Typography';
import PaginationPages from './Pages';

export interface PaginationProps extends StyledProp {
  id?: string;
  mode?: 'default' | 'table';
  page: number;
  perPage: number;
  total: number;
  optionsPerPage?: string | false;
  onChangePage: (page: number) => void;
  onChangePerPage: (rowsPerPage: number) => void;
  disabled?: boolean;
}

const Pagination = ({
  page,
  mode = 'default',
  optionsPerPage: optionsPerPageProp = '10,20,40,60',
  onChangePerPage,
  onChangePage,
  total,
  perPage,
  className,
  disabled
}: PaginationProps) => {
  const maxPage = React.useMemo(() => Math.ceil(total / perPage), [perPage, total]);

  const optionsPerPage = React.useMemo(() => {
    if (optionsPerPageProp === false) {
      return null;
    }

    return optionsPerPageProp.split(',').map(value => ({ label: value, value: Number(value) }));
  }, [optionsPerPageProp]);

  const handleChangePerPage = React.useCallback((value: any) => onChangePerPage(Number(value)), [onChangePerPage]);

  const handleNextPage = React.useCallback(() => onChangePage(page + 1), [onChangePage, page]);
  const handlePreviousPage = React.useCallback(() => onChangePage(page - 1), [onChangePage, page]);
  const handleChangePage = React.useCallback((page: number) => onChangePage(page), [onChangePage]);

  return (
    <div className={cx(className, `__hts-pagination-mode-${mode}`)}>
      <Typography size='xs' className='__hts-pagination_label'>
        Itens por página:
      </Typography>

      <Select
        fullWidth={false}
        className='__hts-pagination_select'
        disabled={disabled}
        value={perPage}
        onChange={handleChangePerPage}
      >
        {optionsPerPage?.map(({ value, label }) => (
          <Select.Option key={value} value={value} label={label} />
        ))}
      </Select>

      <div className='__hts-pagination-numbers'>
        <IconButton
          className='__hts-pagination-previous'
          disabled={page === 1 ? true : disabled}
          onClick={handlePreviousPage}
        >
          <ChevronLeft />
        </IconButton>
        <div className='__hts-pagination-pages'>
          <PaginationPages
            disabled={disabled}
            currentPage={page}
            perPage={perPage}
            mode={mode}
            total={total}
            onChange={handleChangePage}
            maxPage={maxPage}
          />
        </div>
        <IconButton
          className='__hts-pagination-next'
          disabled={maxPage === page ? true : disabled}
          onClick={handleNextPage}
        >
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  );
};

export default styled(React.memo(Pagination), { label: 'houston-pagination' })(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacing.nano};

    & .__hts-pagination_label {
      white-space: nowrap;
      grid-column: 1;
    }

    & .__hts-pagination_select {
      width: 90px;
    }

    & .__hts-pagination-numbers {
      display: grid;
      grid-template-columns: 1fr auto auto auto;
      width: 100%;
      align-items: center;
      gap: ${theme.spacing.nano};

      .__hts-pagination-previous {
        grid-row: 1;
        grid-column: 2;
      }

      .__hts-pagination-pages {
        grid-row: 1;
        grid-column: 3;
      }

      .__hts-pagination-next {
        grid-row: 1;
        grid-column: 4;
      }
    }

    &.__hts-pagination-mode-table {
      & .__hts-pagination-numbers {
        .__hts-pagination-previous {
          grid-column: 3;
        }

        .__hts-pagination-pages {
          padding-right: ${theme.spacing.inline.xxxs};
          grid-column: 2;
        }

        .__hts-pagination-next {
          grid-column: 4;
        }
      }
    }

    &.__hts-pagination-mode-default {
      ${theme.breakpoints.down('md')} {
        & .__hts-pagination_label,
        & .__hts-pagination_select {
          display: none;
        }

        & .__hts-pagination-numbers {
          grid-template-columns: auto 1fr auto;
        }

        .__hts-pagination-previous {
          grid-column: 1;
        }

        .__hts-pagination-pages {
          grid-column: 2;
          text-align: center;
        }

        .__hts-pagination-next {
          grid-column: 3;
        }
      }
    }

    &.__hts-pagination-mode-table {
      ${theme.breakpoints.down('sm')} {
        & .__hts-pagination_label,
        & .__hts-pagination_select {
          display: none;
        }

        & .__hts-pagination-numbers {
          grid-template-columns: auto 1fr auto;

          .__hts-pagination-previous {
            grid-column: 1;
          }

          .__hts-pagination-pages {
            padding-right: 0;
            grid-column: 2;
            text-align: center;
          }

          .__hts-pagination-next {
            grid-column: 3;
          }
        }
      }
    }
  `
);
