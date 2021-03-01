import * as React from 'react';

import { useTableContext } from '../../context';
import MenuActions from '../MenuActions';

const Actions = () => {
  const { currentRow, actions, anchorEl, setAnchorEl, options, setOptions, setCurrentRow } = useTableContext();

  const handleCloseActions = React.useCallback(() => {
    setAnchorEl(null);

    setTimeout(() => {
      setOptions([]);
      setCurrentRow(null);
    }, 180);
  }, [setAnchorEl, setOptions, setCurrentRow]);

  if (!actions) {
    return null;
  }

  return (
    <MenuActions
      anchorEl={anchorEl}
      onClose={handleCloseActions}
      options={!options?.length ? actions?.options : options}
      currentRow={currentRow}
    />
  );
};

export default React.memo(Actions);
