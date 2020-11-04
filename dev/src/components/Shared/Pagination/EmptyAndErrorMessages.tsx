import React, { Fragment, memo } from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import AlertCircleOutlineIcon from 'mdi-react/AlertCircleOutlineIcon';

import ErrorMessage from '../ErrorMessage';
import IconMessage from '../IconMessage';

interface IProps {
  colSpan: number;
  error?: any;
  loading?: boolean;
  hasData: boolean;
  onTryAgain: () => void;
}

const EmptyAndErrorMessages = memo((props: IProps) => {
  const { error, hasData, loading, colSpan, onTryAgain } = props;

  return (
    <Fragment>
      {loading && !hasData && (
        <TableRow>
          <TableCell className='empty' colSpan={colSpan}>
            Carregando...
          </TableCell>
        </TableRow>
      )}
      {error && !loading && (
        <TableRow>
          <TableCell colSpan={colSpan} className='error'>
            <ErrorMessage error={error} tryAgain={onTryAgain} />
          </TableCell>
        </TableRow>
      )}
      {!error && !hasData && !loading && (
        <TableRow>
          <TableCell colSpan={colSpan}>
            <IconMessage icon={AlertCircleOutlineIcon} message='Nenhum item cadastrado...' />
          </TableCell>
        </TableRow>
      )}
    </Fragment>
  );
});

export default EmptyAndErrorMessages;
