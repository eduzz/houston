import * as React from 'react';
export var TableContext = React.createContext({});
export var TableContextProvider = TableContext.Provider;
export function useTableContext() {
    return React.useContext(TableContext);
}
export default TableContextProvider;
