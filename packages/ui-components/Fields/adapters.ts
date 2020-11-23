export interface IFormAdapter {
  getFieldValue: (name: string) => any;
  setFieldValue: (name: string, value: any) => void;
  getFieldError: (name: string) => string;
  isSubmitting: () => boolean;
}

export interface IFormMask {
  apply(value: string | number): string;
  clean(value: string): string | number;
}
