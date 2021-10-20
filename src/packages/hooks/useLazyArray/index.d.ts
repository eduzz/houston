export interface IUseLazyArrayOptions {
    chunckSize?: number;
    intervalTime?: number;
}
/**
 * Create new array that will add the orignal array data progressively
 * @returns [observableValue, error, isCompleted]
 */
export default function useLazyArray<T>(data: T[], options?: IUseLazyArrayOptions): T[];
