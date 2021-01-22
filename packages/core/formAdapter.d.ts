export default interface IFormAdapter<V extends { [key: string]: any }> {
  handleSubmit?: (event: any) => void;
  handleChange?: (name: string) => (value: any) => void;
  handleReset?: () => void;
  getFieldValue?: (name: string) => any;
  setFieldValue?: (name: string, value: any) => void;
  getFieldError: (name: string) => string;
  values: Partial<V>;
  isSubmitting: boolean;
  isValid: boolean;
  reset: (values?: V) => void;
}
