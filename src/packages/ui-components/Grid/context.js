import * as React from 'react';
var GridContext = React.createContext({});
var GridContextProvider = GridContext.Provider;
export function useGrid() {
    var context = React.useContext(GridContext);
    return context !== null && context !== void 0 ? context : {};
}
export default GridContextProvider;
