import type * as React from 'react';

import type {
  RcFile,
  UploadProgressEvent as RcUploadProgressEvent,
  UploadProps as RcUploadProps,
  UploadRequestOption as RcCustomRequestOptions
} from 'rc-upload/lib/interface';
import * as yup from 'yup';

import type { StyledProp } from '@eduzz/houston-styles';

type Yup = typeof yup;

export type UploadFileStatus = 'error' | 'success' | 'uploading' | 'removed';

export type HttpRequestHeader = {
  [key: string]: string;
};

type BeforeUploadValueType = void | boolean | string | Blob | File;

export type UploadFile<T = any> = {
  uid?: string;
  size?: number;
  name: string;
  fileName?: string;
  lastModified?: number;
  url?: string;
  status?: UploadFileStatus;
  percent?: number;
  crossOrigin?: React.ImgHTMLAttributes<HTMLImageElement>['crossOrigin'];
  originFileObj?: RcFile;
  response?: T;
  error?: any;
  type?: string;
  xhr?: T;
  preview?: string;
  errorMessage?: string;
};

export type InternalUploadFile<T = any> = UploadFile<T> & {
  originFileObj: RcFile;
};

export type UploadChangeParam<T = UploadFile> = {
  file: T;
  fileList: T[];
  event?: RcUploadProgressEvent;
};

export type DragAndDropProps<T = any> = Pick<RcUploadProps, 'capture'> &
  StyledProp & {
    label: string;
    helperText?: string;
    /**
     * @default true
     */
    fullWidth?: boolean;
    name?: string;
    defaultFileList?: Array<UploadFile<T>>;
    fileList?: Array<UploadFile<T>>;
    action?: string | ((file: RcFile) => string) | ((file: RcFile) => PromiseLike<string>);
    directory?: boolean;
    data?:
      | Record<string, unknown>
      | ((file: UploadFile<T>) => Record<string, unknown> | Promise<Record<string, unknown>>);
    method?: 'POST' | 'PUT' | 'PATCH' | 'post' | 'put' | 'patch';
    headers?: HttpRequestHeader;
    multiple?: boolean;
    accept?: string;
    beforeUpload?: (file: RcFile, FileList: RcFile[]) => BeforeUploadValueType | Promise<BeforeUploadValueType>;
    onChange?: (info: UploadChangeParam<UploadFile<T>>) => void;
    onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
    onRemove?: (file: UploadFile<T>) => void | boolean | Promise<void | boolean>;
    supportServerRender?: boolean;
    style?: React.CSSProperties;
    disabled?: boolean;
    customRequest?: (options: RcCustomRequestOptions) => void;
    withCredentials?: boolean;
    openFileDialogOnClick?: boolean;
    id?: string;
    /** Config max count of `fileList`. Will replace current one when `maxCount` is 1 */
    maxCount?: number;
    children?: React.ReactNode;
    fileValidationSchema?: yup.AnyObjectSchema | ((yup: Yup) => yup.AnyObjectSchema) | undefined;
  };
