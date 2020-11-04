import React, { ChangeEvent, memo, useCallback, useMemo, useRef, useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import makeStyles from '@material-ui/core/styles/makeStyles';

import TextField from 'components/Shared/Fields/Text';
import { IPaginationParams } from 'interfaces/pagination';
import MagnifyIcon from 'mdi-react/MagnifyIcon';

interface IProps {
  paginationParams: IPaginationParams;
  onChange: (params: { term: string; page: number }) => void;
}

const useStyle = makeStyles({
  iconButton: {
    marginRight: -15
  }
});

const SearchField = memo((props: IProps) => {
  const { paginationParams, onChange } = props;

  const [searchTerm, setSearchTerm] = useState(paginationParams.term ?? '');
  const classes = useStyle(props);

  const inputLabelProps = useRef({ shrink: true }).current;
  const inputProps = useMemo(() => {
    return {
      endAdornment: (
        <InputAdornment position='end'>
          <IconButton disabled={true} className={classes.iconButton}>
            <MagnifyIcon />
          </IconButton>
        </InputAdornment>
      )
    };
  }, [classes.iconButton]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value ?? '';
      setSearchTerm(value);

      if (value?.length > 2) {
        onChange({ term: value, page: 0 });
        return;
      }

      if (paginationParams.term) {
        onChange({ term: null, page: 0 });
      }
    },
    [onChange, paginationParams.term]
  );

  return (
    <TextField
      label='Pesquisar'
      name='search'
      value={searchTerm}
      onChange={handleChange}
      margin='none'
      fullWidth={false}
      placeholder='Digite ao menos 3 caracteres...'
      InputLabelProps={inputLabelProps}
      InputProps={inputProps}
    />
  );
});

export default SearchField;
