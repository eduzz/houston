interface IRowMap {
    [rowKey: string]: string;
}
interface ICallback {
    (rowMap: IRowMap): void;
}
export declare function bindMutationObserver(table: HTMLTableElement, callback: ICallback): () => void;
export {};
