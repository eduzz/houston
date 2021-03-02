import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import MUIPagination from '@material-ui/lab/Pagination';

import SelectField from '../../../Forms/Select';
import TextField from '../../../Forms/Text';
import Column from '../../../Grid/Column';
import Row from '../../../Grid/Row';
import Typography from '../../../Typography';
import { useTableContext } from '../../context';

const useStyles = makeStyles(() =>
  createStyles({
    pagination: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center'
    },

    perPage: {
      display: 'inline-flex',
      alignItems: 'center',
      marginRight: 24,

      '& p': {
        whiteSpace: 'nowrap',
        marginRight: 12
      }
    },

    goTo: {
      maxWidth: 120,
      display: 'inline-flex',
      alignItems: 'center',

      '& p': {
        whiteSpace: 'nowrap',
        marginRight: 12
      }
    },

    pages: {
      display: 'flex',
      justifyContent: 'flex-end',
      height: '100%',
      alignItems: 'center'
    }
  })
);

const Pagination = () => {
  const { loading, pagination } = useTableContext();

  const classes = useStyles();

  const [currentPage, setCurrentPage] = React.useState<number>(pagination?.page ?? 1);

  const defaultOptionsPerPage = React.useMemo(() => pagination?.optionsPerPage ?? [15, 25, 35, 50, 100], [pagination]);

  const handleChangePerPage = React.useCallback(
    (_: any, event: React.ChangeEvent<{ name?: string; value: any }>) => {
      pagination?.onChangeRowsPerPage && pagination?.onChangeRowsPerPage(event.target.value);
    },
    [pagination]
  );

  const handleChangeGoToPage = React.useCallback(
    (_: any, event: React.ChangeEvent<HTMLInputElement>) => {
      let page = Number(event.target.value) || 1;

      if (page < 1) {
        page = 1;
      }

      if (page > pagination?.totalPages) {
        page = pagination?.totalPages;
      }

      setCurrentPage(page);
    },
    [pagination?.totalPages]
  );

  const handleBlurGoToPage = React.useCallback(
    (_: any, event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const page = Number(event.target.value) || 1;

      if (page === pagination?.page) {
        return;
      }

      pagination?.onChangeGoToPage && pagination?.onChangeGoToPage(page);
    },
    [pagination]
  );

  const handleChangePage = React.useCallback(
    (_: React.ChangeEvent<unknown>, page: number) => {
      pagination?.onChangePage && pagination?.onChangePage(page);
    },
    [pagination]
  );

  if (!pagination || loading) {
    return null;
  }

  if (!pagination?.page || !pagination?.perPage || !pagination?.totalPages) {
    console.error('@eduzz/houston-ui: the paging component needs three properties (page, perPage and totalPages)');
    return null;
  }

  return (
    <div className={classes.pagination}>
      <Row>
        {(pagination?.onChangeRowsPerPage || pagination?.onChangeGoToPage) && (
          <Column xs={12} sm={6}>
            {pagination?.onChangeRowsPerPage && (
              <div className={classes.perPage}>
                <Typography size='small' fontWeight='semibold'>
                  {pagination?.labelItensPerPage ? pagination?.labelItensPerPage : 'Itens por página:'}
                </Typography>

                <SelectField
                  margin='none'
                  options={defaultOptionsPerPage.map(value => ({ label: String(value), value }))}
                  value={pagination?.perPage ?? 15}
                  onChange={handleChangePerPage}
                />
              </div>
            )}

            {pagination?.onChangeGoToPage && (
              <div className={classes.goTo}>
                <Typography size='small' fontWeight='semibold'>
                  Ir para:
                </Typography>

                <TextField
                  margin='none'
                  value={currentPage || ''}
                  onChange={handleChangeGoToPage}
                  onBlur={handleBlurGoToPage}
                />
              </div>
            )}
          </Column>
        )}

        {pagination?.onChangePage && (
          <Column xs={12} sm={true}>
            <div className={classes.pages}>
              <MUIPagination
                count={pagination?.totalPages}
                page={pagination?.page}
                shape='rounded'
                size='medium'
                onChange={handleChangePage}
              />
            </div>
          </Column>
        )}
      </Row>
    </div>
  );
};

export default React.memo(Pagination);
