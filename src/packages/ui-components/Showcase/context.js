import * as React from 'react';
export var ShowcaseContext = React.createContext({});
export var ShowcaseContextProvider = ShowcaseContext.Provider;
export var useShowcaseContext = function () {
    return React.useContext(ShowcaseContext);
};
export default ShowcaseContextProvider;
