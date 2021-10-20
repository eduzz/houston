import * as React from 'react';
var CollapseContext = React.createContext({});
var CollapseContextProvider = CollapseContext.Provider;
export function useCollapse() {
    return React.useContext(CollapseContext);
}
export default CollapseContextProvider;
