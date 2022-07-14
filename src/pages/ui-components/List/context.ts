import { createContext } from 'use-context-selector';

interface ListContextProps {
  dividers?: true;
}

const ListContext = createContext<ListContextProps>(null);
const ListContextProvider = ListContext.Provider;

export { ListContext };
export default ListContextProvider;
