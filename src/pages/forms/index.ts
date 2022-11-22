import DatePickerComponent from './DatePicker';
import ErrorMessageComponent from './ErrorMessage';
import FormComponent from './Form';
import InputComponent from './Input';
import SelectComponent from './Select';
import TextareaComponent from './Textarea';
import TimePickerComponent from './TimePicker';
import useFormHook from './useForm';

export type { FormModel } from './useForm';

export const Form = FormComponent;
export const Input = InputComponent;
export const Select = SelectComponent;
export const DatePicker = DatePickerComponent;
export const TimePicker = TimePickerComponent;
export const Textarea = TextareaComponent;
export const ErrorMessage = ErrorMessageComponent;

export const useForm = useFormHook;
