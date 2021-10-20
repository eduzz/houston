import * as React from 'react';
import { IContainerType } from './interfaces';
interface IGridContext {
    spacing?: IContainerType;
}
declare const GridContextProvider: React.Provider<IGridContext>;
export declare function useGrid(): IGridContext;
export default GridContextProvider;
