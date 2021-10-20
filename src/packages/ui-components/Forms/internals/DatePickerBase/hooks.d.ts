import * as React from 'react';
interface IUseCreateTempInputDate {
    initialValue?: Date;
    onClose?: () => void;
}
export declare function useCreateTempInputDate(): ((options?: IUseCreateTempInputDate) => Promise<React.ChangeEvent<HTMLInputElement>>)[];
export {};
