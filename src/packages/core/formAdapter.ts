export default interface IFormAdapter<V extends { [key: string]: any }> {
  handleSubmit?: (event: any) => void;
  handleChange?: (name: string) => (value: any) => void;
  setValues?: (value: Partial<V>, shouldValidate?: boolean) => void;
  handleReset?: () => void;
  getFieldValue: (name: string) => any;
  getFieldError: (name: string) => string;
  setFieldValue: (name: string, value: any) => void;
  setFieldTouched?: (name: string, isTouched?: boolean, shouldValidate?: boolean) => void;
  initialValues: Partial<V>;
  values: Partial<V>;
  isSubmitting: boolean;
  isValid: boolean;
  reset: (values?: V) => void;
}
