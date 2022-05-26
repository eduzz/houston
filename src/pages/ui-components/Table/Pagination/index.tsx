import * as React from 'react';

import PaginationMUI from '@mui/material/Pagination';
import { useContextSelector } from 'use-context-selector';

import styled, { breakpoints, IStyledProp } from '@eduzz/houston-styles/styled';

import SelectField from '../../Forms/Select';
import TextField from '../../Forms/Text';
import Column from '../../Grid/Column';
import Container from '../../Grid/Container';
import Row from '../../Grid/Row';
import Typography from '../../Typography';
import TableContext from '../context';

type ITablePaginationExtends = 'id' | 'className' | 'children';

export interface ITablePagination
  extends Pick<React.HTMLAttributes<HTMLTableRowElement>, ITablePaginationExtends>,
    IStyledProp {
  page: number;
  perPage: number;
  total: number;
  optionsPerPage?: number[] | 'string' | false;
  labelItensPerPage?: React.ReactNode;
  labelGoToPage?: React.ReactNode;
  onChangePage: (page: number) => void;
  onChangePerPage: (rowsPerPage: number) => void;
}

const Pagination = React.memo<ITablePagination>(
  ({
    page,
    optionsPerPage: optionsPerPageProp,
    onChangePerPage,
    onChangePage,
    total,
    perPage,
    labelGoToPage,
    labelItensPerPage,
    className
  }) => {
    const loading = useContextSelector(TableContext, context => context.loading);
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
        valueOrEvent: string | React.KeyboardEvent<HTMLDivElement>,
        event?:
          | React.KeyboardEvent<HTMLDivElement>
          | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        let enterPressed = false;
        let value = '';

        if (typeof valueOrEvent === 'object') {
          event = valueOrEvent;
          enterPressed = valueOrEvent.key?.toLowerCase() === 'enter';
          value = (valueOrEvent.target as any).value;
        } else {
          value = valueOrEvent;
        }

        setPageInput(value);

        if (event.type === 'change' || (event.type === 'keyup' && !enterPressed)) {
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
      (e: React.SyntheticEvent, page: number) => onChangePage(page),
      [onChangePage]
    );

    React.useEffect(() => {
      const timeout = setTimeout(() => setPageInput(page?.toString()), 500);
      return () => clearTimeout(timeout);
    }, [page]);

    return (
      <tfoot className={className}>
        <tr>
          <td colSpan={1000} className='__td'>
            <Container layout='fluid'>
              <Row>
                <Column xs={12} sm='auto'>
                  <Row justifyContent='center'>
                    <Column xs='auto' className='__perPage'>
                      <Typography size='xxs' weight='semibold'>
                        {labelItensPerPage ?? 'Itens por página:'}
                      </Typography>

                      <SelectField disabled={loading} size='sm' value={perPage} onChange={handleChangePerPage}>
                        {optionsPerPage.map(({ value, label }) => (
                          <SelectField.Option key={value} value={value} label={label} />
                        ))}
                      </SelectField>
                    </Column>

                    <Column xs='auto' className='__labels'>
                      <Typography size='xxs' weight='semibold'>
                        {labelGoToPage ?? 'Ir para:'}
                      </Typography>

                      <TextField
                        size='sm'
                        disabled={loading}
                        value={pageInput}
                        className='__input'
                        onChange={handlePageInputChange}
                        onKeyUp={handlePageInputChange}
                        onBlur={handlePageInputChange}
                      />
                    </Column>
                  </Row>
                </Column>

                <Column xs={12} sm={true}>
                  <div className='__pages'>
                    <PaginationMUI
                      count={Math.ceil(total / perPage)}
                      page={page ?? 1}
                      disabled={loading}
                      shape='rounded'
                      size='medium'
                      onChange={handleChangePage}
                    />
                  </div>
                </Column>
              </Row>
            </Container>
          </td>
        </tr>
      </tfoot>
    );
  }
);

export default styled(Pagination)`
  & > tr {
    & .__td {
      padding: 12px 0;
    }

    .__perPage {
      width: 240px;
      display: inline-flex;
      align-items: center;

      & > p {
        white-space: nowrap;
        margin-right: ${({ theme }) => theme.spacing.nano};
        color: ${({ theme }) => theme.neutralColor.low.dark};
      }
    }

    .__labels {
      display: inline-flex;
      align-items: center;

      & > p {
        white-space: nowrap;
        margin-right: ${({ theme }) => theme.spacing.nano};
        color: ${({ theme }) => theme.neutralColor.low.dark};
      }

      ${breakpoints.down('sm')} {
        display: none;
      }
    }

    .__input {
      max-width: 50px;
    }

    .__pages {
      display: flex;
      justify-content: flex-end;
      height: 100%;
      align-items: center;

      ${breakpoints.down('sm')} {
        margin-top: ${({ theme }) => theme.spacing.nano};
        justify-content: center;
      }
    }
  }
`;
