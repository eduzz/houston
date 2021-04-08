# Forms

## Como usar 

### Completo
```tsx
import moneyMask from '@eduzz/houston-forms/masks/money';
import useForm from '@eduzz/houston-forms/useForm';

import Button from '@eduzz/houston-ui/Button';
import Form from '@eduzz/houston-ui/Forms/Form';
import SelectField, { ISelectFieldOption } from '@eduzz/houston-ui/Forms/Select';
import TextField from '@eduzz/houston-ui/Forms/Text';

interface IModel {
  name: string;
  money: number;
  check: boolean;
}

const MyComponent = () => {
  const form = useForm<IModel>({ 
    initialValues: { money: 5 }, //estado inicial, não precisa passar todas as propriedades
    validationSchema: yup => // não é necessário importar o yup ele será passado como argumento
      yup.object().shape({
        name: yup.string().required(),
        money: yup.number().min(10),
        option: yup.number().min(3)
      }),
    onSubmit: () => { 
      // onSubmit pode retornar uma promise ou um observable de rxjs, desse jeito ele ira 
      // setar corretamente o isSubmitting
      return new Promise(resolve => {
        setTimeout(() => resolve(null), 3000);
      });
    }
  });

  const [options] = useState<ISelectFieldOption[]>(() => [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3 (disabled)', disabled: true }, // é possível desativar alguma opção
    { value: 4, label: 'Option 4' },
    { value: 5, label: 'Option 5' }
  ]);

  return (
    //Criando o contexto do form não é preciso passar para os components filhos
    <Form context={form}> 
      {/* a prop name que irá dizer o campo que receberá o valor */}
      <TextField label='Name' name='name' /> 
      {/* você passar uma função de mascara, você pode importar uma pronta ou criar a sua */}
      <TextField label='Money' name='money' mask={moneyMask} />
      <SelectField label='Options' name='option' options={options} />

      {/* Por ser um type submit não precisa passar o form.handleSubmit */}
      <Button type='submit' loading={form.isSubmitting}>
        Submit
      </Button>

      {/* Por ser um type reset não precisa passar o form.handleReset */}
      <Button variant='text' type='reset' disabled={form.isSubmitting}>
        Reset
      </Button>
    </Form>
  )
}
```

### Sem o Form Context
```tsx
import useForm from '@eduzz/houston-forms/useForm';

import TextField from '@eduzz/houston-ui/Forms/Text';

interface IModel {
  name: string;
}

const MyComponent = () => {
  const form = useForm<IModel>({ 
    onSubmit: () => { }
  });

  return (
    //Você pode também passar o contexto do formuário via prop
    <TextField label='Name' name='name' form={form} /> 
  )
}
```

### Sem o useForm
```tsx
import TextField from '@eduzz/houston-ui/Forms/Text';

const MyComponent = () => {
  const [name, setName] = useState();

  return <TextField label='Name' value={name} onChange={setName} />;
}
```

### Hooks para validação de formulários e mascaras

* @eduzz/houston-forms: [Visualizar](/packages/forms)