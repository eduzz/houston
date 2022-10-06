import DatePickerComponent from './DatePicker';
import FormComponent from './Form';
import InputComponent from './Input';
import SelectComponent from './Select';
import TextareaComponent from './Textarea';
import useFormHook from './useForm';

export type { FormModel } from './useForm';

export const Form = FormComponent;
export const Input = InputComponent;
export const Select = SelectComponent;
export const DatePicker = DatePickerComponent;
export const Textarea = TextareaComponent;

export const useForm = useFormHook;
