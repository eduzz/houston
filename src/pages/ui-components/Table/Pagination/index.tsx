import * as React from 'react';

import ChevronLeft from '@eduzz/houston-icons/ChevronLeft';
import ChevronRight from '@eduzz/houston-icons/ChevronRight';
import styled, { breakpoints, css, StyledProp } from '@eduzz/houston-styles';

import Input from '../../Forms/Input';
import Select from '../../Forms/Select';
import Column from '../../Grid/Column';
import Row from '../../Grid/Row';
import IconButton from '../../IconButton';
import Typography from '../../Typography';

type TablePaginationExtends = 'id' | 'className' | 'children';

export interface TablePagination
  extends Pick<React.HTMLAttributes<HTMLTableRowElement>, TablePaginationExtends>,
    StyledProp {
  page: number;
  perPage: number;
  total: number;
  optionsPerPage?: number[] | 'string' | false;
  labelItensPerPage?: string;
  labelGoToPage?: string;
  onChangePage: (page: number) => void;
  onChangePerPage: (rowsPerPage: number) => void;
  disabled?: boolean;
}

const Pagination = React.memo<TablePagination>(
  ({
    page,
    optionsPerPage: optionsPerPageProp,
    onChangePerPage,
    onChangePage,
    total,
    perPage,
    labelGoToPage,
    labelItensPerPage,
    className,
    disabled
  }) => {
    const [pageInput, setPageInput] = React.useState<string>(page?.toString());

    const optionsPerPage = React.useMemo(() => {
      if (optionsPerPageProp === false) {
        return null;
      }

      if (typeof optionsPerPageProp === 'string') {
        return optionsPerPageProp.split(',').map(value => ({ label: value, value: Number(value) }));
      }

      return (optionsPerPageProp ?? [5, 10, 25, 50]).map(value => ({ label: String(value), value }));
    }, [optionsPerPageProp]);

    const handlePageInputChange = React.useCallback(
      (
        valueOrEvent: string | number | React.KeyboardEvent<HTMLDivElement>,
        event?:
          | React.KeyboardEvent<HTMLDivElement>
          | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        let enterPressed = false;
        let value = '';

        if (valueOrEvent && typeof valueOrEvent === 'object') {
          event = valueOrEvent;
          enterPressed = valueOrEvent.key?.toLowerCase() === 'enter';
          value = (valueOrEvent.target as any).value;
        } else {
          value = valueOrEvent?.toString();
        }

        setPageInput(value);

        if (event?.type === 'change' || (event?.type === 'keyup' && !enterPressed)) {
          return;
        }

        let currentPage = Math.floor(Number(value));
        const maxPage = Math.ceil(total / perPage);

        if (!currentPage) {
          currentPage = 1;
        }

        if (currentPage > maxPage) {
          currentPage = maxPage;
        }

        if (currentPage != Number(value)) {
          setPageInput(currentPage.toString());
        }

        if (currentPage === page) {
          return;
        }

        onChangePage(currentPage);
      },
      [onChangePage, page, perPage, total]
    );

    const handleChangePerPage = React.useCallback((value: any) => onChangePerPage(Number(value)), [onChangePerPage]);

    const handleChangePage = React.useCallback(
      (e: React.ChangeEvent<unknown>, page: number) => onChangePage(page),
      [onChangePage]
    );

    const paginationText = React.useMemo(() => {
      const startsAt = (page - 1) * perPage + 1;
      const endsAt = page * perPage;

      return `${startsAt}-${endsAt > total ? total : endsAt} de ${total}`;
    }, [page, perPage, total]);

    React.useEffect(() => {
      const timeout = setTimeout(() => setPageInput(page?.toString()), 500);
      return () => clearTimeout(timeout);
    }, [page]);

    return (
      <tfoot className={className}>
        <tr>
          <td colSpan={1000} className='__td'>
            <Row>
              <Column xs={12} sm='auto'>
                <Row justifyContent='center'>
                  <Column xs='auto' className='__perPage'>
                    <Typography size='xxs' weight='semibold'>
                      {labelItensPerPage ?? 'Itens por página:'}
                    </Typography>

                    <Select
                      className='__options'
                      disabled={disabled}
                      size='sm'
                      value={perPage}
                      onChange={handleChangePerPage}
                    >
                      {optionsPerPage?.map(({ value, label }) => (
                        <Select.Option key={value} value={value} label={label} />
                      ))}
                    </Select>
                  </Column>

                  <Column xs='auto' className='__labels'>
                    <Typography size='xxs' weight='semibold'>
                      {labelGoToPage ?? 'Ir para:'}
                    </Typography>

                    <Input
                      size='sm'
                      disabled={disabled}
                      value={pageInput}
                      className='__input'
                      onChange={handlePageInputChange as any}
                      onKeyUp={handlePageInputChange}
                      onBlur={handlePageInputChange as any}
                    />
                  </Column>
                </Row>
              </Column>

              <Column xs={12} sm='fill'>
                <div className='__pages'>
                  <IconButton>
                    <ChevronLeft />
                  </IconButton>
                  <Typography>{paginationText}</Typography>
                  <IconButton>
                    <ChevronRight />
                  </IconButton>
                </div>
              </Column>
            </Row>
          </td>
        </tr>
      </tfoot>
    );
  }
);

export default styled(Pagination)(
  ({ theme }) => css`
    background-color: ${theme.neutralColor.high.light};

    & > tr {
      & .__td {
        padding: 12px 0;
        overflow-x: hidden;
      }

      .__perPage {
        width: 220px;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        & > p {
          white-space: nowrap;
          margin-right: ${theme.spacing.nano};
          color: ${theme.neutralColor.low.dark};
        }
      }

      .__labels {
        display: inline-flex;
        align-items: center;

        & > p {
          white-space: nowrap;
          margin-right: ${theme.spacing.nano};
          color: ${theme.neutralColor.low.dark};
        }

        ${breakpoints.down('sm')} {
          display: none;
        }
      }

      .__input {
        max-width: 50px;
      }

      .__options {
        width: 80px;
      }

      .__pages {
        display: flex;
        justify-content: flex-end;
        height: 100%;
        align-items: center;

        ${breakpoints.down('sm')} {
          margin-top: ${theme.spacing.nano};
          justify-content: center;
        }
      }
    }
  `
);
