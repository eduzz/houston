# Houston Forms

Implementação padrão do **IFormAdapter** do houston para validação de formulário, foi criado para 
ser compatível com retornos do RxJs.

### Técnologias

* Formik
* Yup
* RxJs

### Interface

```tsx
interface IFormAdapter<V extends { [key: string]: any }> {
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
```

### Como usar

```tsx
interface IModel { // optional
  name: string;
  money: number;
  option: number;
  check: boolean;
}

const form = useForm<IModel>({
  initialValues: { money: 5 }, // optional
  validationSchema: yup =>
    yup.object().shape({
      name: yup.string().required(),
      money: yup.number().min(10),
      option: yup.number().min(3),
      check: yup.bool().required().equals([true])
    }),
  onSubmit: () => { // Pode retornar uma promise, observable ou 
    return new Promise(resolve => {
      setTimeout(() => resolve(null), 3000);
    });
  }
});
```

### Opções 

| Parametros    | Tipo                                             | Obrigatório | Descrição |
|---------------|--------------------------------------------------|-------------|-----------|
| initialValues | Partial do que for passado no Generic do useForm | false       |           |


 ?: Partial<Values>;
  validationSchema?: (yup: Yup) => any;
  onSubmitWithErrors?: (errors: FormikErrors<Values>, values: Partial<Values>) => void;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any> | Observable<any>;
