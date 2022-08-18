type FormikErrors<Values> = {
  [K in keyof Values]?: Values[K] extends any[]
    ? Values[K][number] extends object
      ? FormikErrors<Values[K][number]>[] | string | string[]
      : string | string[]
    : Values[K] extends object
    ? FormikErrors<Values[K]>
    : string;
};

/**
 * @deprecated
 */
export default interface FormAdapter<V extends { [key: string]: any }> {
  handleSubmit?: (event: any) => void;
  handleChange?: (name: string) => (value: any) => void;
  setValues?: (value: Partial<V>, shouldValidate?: boolean) => void;
  setErrors?: (errors: FormikErrors<Partial<V>>) => void;
  handleReset?: () => void;
  getFieldValue: (name: string) => any;
  getFieldError: (name: string) => string | undefined;
  setFieldValue: (name: string, value: any) => void;
  setFieldTouched?: (name: string, isTouched?: boolean, shouldValidate?: boolean) => void;
  initialValues: Partial<V>;
  values: Partial<V>;
  isSubmitting: boolean;
  isValid: boolean;
  reset: (values?: V) => void;
  errors?: FormikErrors<Partial<V>>;
}
