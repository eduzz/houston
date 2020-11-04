import React, { memo, Props } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TableCell from '@material-ui/core/TableCell';

import DropdownMenu, { IOption } from '../DropdownMenu';
import OptionItem from '../DropdownMenu/OptionItem';
import ErrorMessageIcon from '../ErrorMessageIcon';

interface IProps extends Props<null> {
  options?: IOption[];
  loading?: boolean;
  error?: any;
  onDismissError?: () => void;
}

const useStyle = makeStyles({
  td: {
    textAlign: 'right',
    width: 50,
    whiteSpace: 'nowrap',
    padding: 0
  },
  loader: {
    padding: 12
  }
});

const TableCellActions = memo<IProps>(props => {
  const classes = useStyle(props);
  const { loading, error, options, onDismissError, children } = props;

  return (
    <TableCell className={classes.td}>
      {children}
      {loading && (
        <div className={classes.loader}>
          <CircularProgress color='primary' size={20} />
        </div>
      )}
      {!loading && error && <ErrorMessageIcon error={error} onDismiss={onDismissError} />}
      {!loading && !error && options && (
        <DropdownMenu>
          {options.map(o => (
            <OptionItem key={o.text} {...o} />
          ))}
        </DropdownMenu>
      )}
    </TableCell>
  );
});

export default TableCellActions;
