import * as React from 'react';

import { useTableContext } from '../../context';
import { ITableRow } from '../../interfaces';
import { ITableOptionProps } from '../../Option';
import CollapseContextProvider from './context';
import Collapse from './Desktop';
import CollapseMobile from './Mobile';

interface IProps {
  collapse: unknown;
  row: ITableRow;
}

const CollapseBase = React.memo<IProps>(({ collapse, row }) => {
  const { isMobile } = useTableContext();

  const [options, setOptions] = React.useState<ITableOptionProps[]>([]);
  const [currentRow, setCurrentRow] = React.useState<ITableRow>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleSetCurrentRow = React.useCallback(
    (event: React.MouseEvent<HTMLElement>, row: ITableRow = null) => {
      if (!row?.data) {
        console.error('@eduzz/houston-ui: when the share component is used, the line must offer the property `data`');
      }

      setCurrentRow(row);
      setAnchorEl(event.currentTarget);
      setOptions(row?.options);
    },
    [setAnchorEl]
  );

  const handleCloseActions = React.useCallback(() => {
    setAnchorEl(null);

    setTimeout(() => {
      setOptions([]);
      setCurrentRow(null);
    }, 200);
  }, [setAnchorEl]);

  if (!row?.collapse) {
    return null;
  }

  return (
    <CollapseContextProvider
      value={{ row, collapse, currentRow, options, anchorEl, handleCloseActions, handleSetCurrentRow }}
    >
      {isMobile && <CollapseMobile />}
      {!isMobile && <Collapse />}
    </CollapseContextProvider>
  );
});

export default CollapseBase;
