export default interface IFormAdapter<V extends { [key: string]: any }> {
  handleSubmit?: () => void;
  handleChange?: (name: string) => (value: any) => void;
  getFieldValue?: (name: string) => any;
  setFieldValue?: (name: string, value: any) => void;
  getFieldError: (name: string) => string;
  values: Partial<V>;
  isSubmitting: boolean;
  isValid: boolean;
  reset: (values?: V) => void;
}
