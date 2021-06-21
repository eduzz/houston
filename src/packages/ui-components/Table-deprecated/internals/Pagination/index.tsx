import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import MUIPagination from '@material-ui/lab/Pagination';

import SelectField from '../../../Forms/Select';
import TextField from '../../../Forms/Text';
import Column from '../../../Grid/Column';
import Row from '../../../Grid/Row';
import Typography from '../../../Typography';
import { useTableContext } from '../../context';

const useStyles = makeStyles(theme =>
  createStyles({
    pagination: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },

    perPage: {
      display: 'inline-flex',
      alignItems: 'center',
      marginRight: 24,

      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
        margin: '0 0 12px 0',
        display: 'flex'
      },

      '& p': {
        whiteSpace: 'nowrap',
        marginRight: 12,
        color: theme.palette.grey[600]
      }
    },

    selectPerPage: {
      height: 35,
      padding: '8px 12px'
    },

    goTo: {
      maxWidth: 120,
      display: 'inline-flex',
      alignItems: 'center',

      [theme.breakpoints.down('xs')]: {
        margin: '0 auto 12px auto',
        display: 'flex'
      },

      '& p': {
        whiteSpace: 'nowrap',
        marginRight: 12,
        color: theme.palette.grey[600]
      }
    },

    inputGoTo: {
      '& input': {
        height: 35,
        padding: '4px 12px'
      }
    },

    pages: {
      display: 'flex',
      justifyContent: 'flex-end',
      height: '100%',
      alignItems: 'center',

      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center'
      }
    }
  })
);

const Pagination = React.memo(() => {
  const { loading, pagination } = useTableContext();
  const classes = useStyles();

  const [currentPage, setCurrentPage] = React.useState<number>(pagination?.page || 1);

  const defaultOptionsPerPage = React.useMemo(() => pagination?.optionsPerPage ?? [5, 10, 25, 50, 100], [pagination]);

  const handleChangePerPage = React.useCallback(
    (_: any, event: React.ChangeEvent<{ name?: string; value: any }>) => {
      pagination?.onChangeRowsPerPage && pagination?.onChangeRowsPerPage(event.target.value);
    },
    [pagination]
  );

  const handleChangeGoToPage = React.useCallback((_: any, event: React.ChangeEvent<HTMLInputElement>) => {
    const page = Number(event.target.value);
    setCurrentPage(page);
  }, []);

  const handleBlurGoToPage = React.useCallback(
    (_: any, event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let currentPage = Number(event.target.value);
      const maxPage = Math.ceil(pagination?.total / pagination?.perPage);

      if (currentPage === pagination?.page) {
        return;
      }

      if (!currentPage) {
        currentPage = 1;
      }

      if (currentPage > maxPage) {
        currentPage = maxPage;
      }

      setCurrentPage(currentPage);
      pagination?.onChangeGoToPage && pagination?.onChangeGoToPage(currentPage);
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

  if (!loading && (!pagination?.perPage || (!pagination?.total && pagination?.total !== 0))) {
    console.error('@eduzz/houston-ui: the paging component needs three properties (perPage and total)');
    return null;
  }

  return (
    <div className={classes.pagination}>
      <Row>
        {(pagination?.onChangeRowsPerPage || pagination?.onChangeGoToPage) && (
          <Column xs={12} sm={8}>
            {pagination?.onChangeRowsPerPage && (
              <div className={classes.perPage}>
                <Typography size='small' fontWeight='semibold'>
                  {pagination?.labelItensPerPage ?? 'Itens por página:'}
                </Typography>

                <div>
                  <SelectField
                    size='small'
                    margin='none'
                    options={defaultOptionsPerPage.map(value => ({ label: String(value), value }))}
                    value={pagination?.perPage ?? 15}
                    onChange={handleChangePerPage}
                  />
                </div>
              </div>
            )}

            {pagination?.onChangeGoToPage && (
              <div className={classes.goTo}>
                <Typography size='small' fontWeight='semibold'>
                  {pagination?.labelGoToPage ?? 'Ir para:'}
                </Typography>

                <TextField
                  size='small'
                  margin='none'
                  value={currentPage ?? ''}
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
                count={Math.ceil(pagination?.total / pagination?.perPage)}
                page={pagination?.page ?? 1}
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
});

export default Pagination;
