import CheckboxComponent from './Checkbox';
import DatePickerComponent from './DatePicker';
import ErrorMessageComponent from './ErrorMessage';
import FormComponent from './Form';
import InputComponent from './Input';
import RadioComponent from './Radio';
import SelectComponent from './Select';
import SwitchComponent from './Switch';
import TextareaComponent from './Textarea';
import TimePickerComponent from './TimePicker';
import useFormHook from './useForm';

export type { FormModel } from './useForm';

export const Checkbox = CheckboxComponent;
export const DatePicker = DatePickerComponent;
export const ErrorMessage = ErrorMessageComponent;
export const Form = FormComponent;
export const Input = InputComponent;
export const Radio = RadioComponent;
export const Select = SelectComponent;
export const Switch = SwitchComponent;
export const Textarea = TextareaComponent;
export const TimePicker = TimePickerComponent;

export const useForm = useFormHook;
