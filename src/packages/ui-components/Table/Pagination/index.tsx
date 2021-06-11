import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import PaginationMUI from '@material-ui/lab/Pagination';

import { useContextSelector } from 'use-context-selector';

import SelectField from '../../Forms/Select';
import TextField from '../../Forms/Text';
import Column from '../../Grid/Column';
import Row from '../../Grid/Row';
import Typography from '../../Typography';
import TableContext from '../context';

type ITablePaginationExtends = 'id' | 'className' | 'children';

export interface ITablePagination extends Pick<React.HTMLAttributes<HTMLTableRowElement>, ITablePaginationExtends> {
  page: number;
  perPage: number;
  total: number;
  optionsPerPage?: number[] | 'string' | false;
  labelItensPerPage?: React.ReactNode;
  labelGoToPage?: React.ReactNode;
  onChangePage: (page: number) => void;
  onChangePerPage: (rowsPerPage: number) => void;
}

const useStyles = makeStyles(theme => ({
  td: {
    paddingLeft: 0,
    paddingRight: 0
  },
  labels: {
    display: 'inline-flex',
    alignItems: 'center',
    '& > p': {
      whiteSpace: 'nowrap',
      marginRight: theme.spacing(2)
    }
  },
  input: {
    maxWidth: 50
  },
  pages: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      justifyContent: 'center'
    }
  }
}));

const Pagination = React.memo<ITablePagination>(
  ({
    page,
    optionsPerPage: optionsPerPageProp,
    onChangePerPage,
    onChangePage,
    total,
    perPage,
    labelGoToPage,
    labelItensPerPage
  }) => {
    const classes = useStyles();

    const columnsLen = useContextSelector(TableContext, context => context.columns.length);
    const loading = useContextSelector(TableContext, context => context.loading);

    const optionsPerPage = React.useMemo(() => {
      if (optionsPerPageProp === false) {
        return null;
      }

      if (typeof optionsPerPageProp === 'string') {
        return optionsPerPageProp.split(',').map(value => ({ label: value, value: Number(value) }));
      }

      return (optionsPerPageProp ?? [5, 10, 25, 50]).map(value => ({ label: String(value), value }));
    }, [optionsPerPageProp]);

    const handleChangePerPage = React.useCallback(
      (_: any, event: React.ChangeEvent<{ name?: string; value: any }>) => {
        onChangePerPage(event.target.value);
      },
      [onChangePerPage]
    );

    const handleChangeGoToPage = React.useCallback(() => null, []);

    const handleBlurGoToPage = React.useCallback(
      (_: any, event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let currentPage = Number(event.target.value);
        const maxPage = Math.ceil(total / perPage);

        if (currentPage === page) {
          return;
        }

        if (!currentPage) {
          currentPage = 1;
        }

        if (currentPage > maxPage) {
          currentPage = maxPage;
        }

        onChangePage(currentPage);
      },
      [onChangePage, page, perPage, total]
    );

    const handleChangePage = React.useCallback(
      (_: React.ChangeEvent<unknown>, page: number) => {
        onChangePage(page);
      },
      [onChangePage]
    );

    return (
      <TableFooter>
        <TableRow>
          <TableCell colSpan={columnsLen} className={classes.td}>
            <Row>
              <Column xs={12} sm='auto'>
                <Row justify='center'>
                  <Column xs='auto' className={classes.labels}>
                    <Typography size='small' fontWeight='semibold'>
                      {labelItensPerPage ?? 'Itens por página:'}
                    </Typography>

                    <SelectField
                      disabled={loading}
                      size='small'
                      margin='none'
                      options={optionsPerPage}
                      value={perPage}
                      onChange={handleChangePerPage}
                    />
                  </Column>

                  <Column xs='auto' className={classes.labels}>
                    <Typography size='small' fontWeight='semibold'>
                      {labelGoToPage ?? 'Ir para:'}
                    </Typography>

                    <TextField
                      margin='none'
                      size='small'
                      value={page}
                      className={classes.input}
                      onChange={handleChangeGoToPage}
                      onBlur={handleBlurGoToPage}
                    />
                  </Column>
                </Row>
              </Column>

              <Column xs={12} sm={true}>
                <div className={classes.pages}>
                  <PaginationMUI
                    count={Math.ceil(total / perPage)}
                    page={page ?? 1}
                    shape='rounded'
                    size='medium'
                    onChange={handleChangePage}
                  />
                </div>
              </Column>
            </Row>
          </TableCell>
        </TableRow>
      </TableFooter>
    );
  }
);

export default Pagination;
