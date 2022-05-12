/* eslint-disable @typescript-eslint/ban-types */
type IFormikErrors<Values> = {
  [K in keyof Values]?: Values[K] extends any[]
    ? Values[K][number] extends object
      ? IFormikErrors<Values[K][number]>[] | string | string[]
      : string | string[]
    : Values[K] extends object
    ? IFormikErrors<Values[K]>
    : string;
};

export default interface IFormAdapter<V extends { [key: string]: any }> {
  handleSubmit?: (event: any) => void;
  handleChange?: (name: string) => (value: any) => void;
  handleReset?: () => void;
  getFieldValue: (name: string) => any;
  getFieldError: (name: string) => string;
  setFieldValue: (name: string, value: any) => void;
  initialValues: Partial<V>;
  values: Partial<V>;
  isSubmitting: boolean;
  isValid: boolean;
  reset: (values?: V) => void;
  errors?: IFormikErrors<Partial<V>>;
}
