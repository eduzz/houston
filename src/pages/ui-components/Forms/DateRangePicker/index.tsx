import 'rc-picker/assets/index.css';

import * as React from 'react';

import { RangePicker } from 'rc-picker';
import { PanelMode, RangeValue } from 'rc-picker/lib/interface';

import Calendar from '@eduzz/houston-icons/Calendar';
import ChevronLeft from '@eduzz/houston-icons/ChevronLeft';
import ChevronRight from '@eduzz/houston-icons/ChevronRight';
import styled, { cx } from '@eduzz/houston-styles';

import { defaultFormats, pickerProps } from '../_utils/datepicker';
import Fieldset from '../_utils/Fieldset';
import { DateFormat } from '../DatePicker/types';
import withForm, { WithFormProps } from '../Form/withForm';
import { InputProps } from '../Input';
import { styles } from './styles';

export interface DateRangePickerProps
  extends Omit<
      InputProps<Date>,
      | 'mask'
      | 'endAdornment'
      | 'value'
      | 'placeholder'
      | 'onChange'
      | 'onBlur'
      | 'onError'
      | 'rows'
      | 'type'
      | 'multiline'
      | 'disableAutoResize'
      | 'endAdornment'
      | 'startAdornment'
      | 'onPressEnter'
    >,
    Omit<WithFormProps<HTMLInputElement>, 'value'> {
  /*
    [Available formats]{@link https://date-fns.org/v2.22.1/docs/format}
  */
  displayFormat?: DateFormat;
  mode?: 'date' | 'datetime' | 'time';
  onChange?: (dates: RangeValue<Date> | null) => void;
  placeholder?: [string, string] | undefined;
  value?: RangeValue<Date> | null;
  minDate?: Date;
  maxDate?: Date;
  enableSeconds?: boolean;
  id?: string;
  renderExtraFooter?: (mode?: PanelMode) => React.ReactNode;
}

const DateRangePicker = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  disabled,
  displayFormat,
  className,
  mode = 'date',
  minDate,
  maxDate,
  enableSeconds,
  helperText,
  errorMessage,
  loading,
  renderExtraFooter,
  fullWidth = true
}: DateRangePickerProps) => {
  const disableDate = React.useCallback(
    (date: Date | undefined) => {
      if (!date) return true;

      if (minDate) {
        return date < minDate;
      }

      if (maxDate) {
        return date > maxDate;
      }

      return false;
    },
    [maxDate, minDate]
  );

  return (
    <Fieldset
      label={label}
      disabled={disabled}
      helperText={helperText}
      errorMessage={errorMessage}
      loading={loading}
      endAdornment={<Calendar />}
    >
      <RangePicker<Date>
        id={id}
        {...pickerProps}
        value={value}
        defaultPickerValue={[new Date(), new Date()]}
        placeholder={placeholder}
        className={cx(className, { '--hst-date-range-picker-full-width': fullWidth })}
        dropdownClassName={cx(className, { '--hst-date-range-picker-enable-seconds': enableSeconds })}
        format={displayFormat ?? defaultFormats[`${mode}${enableSeconds ? 'Seconds' : ''}`]}
        onChange={onChange}
        disabled={disabled}
        prevIcon={<ChevronLeft />}
        nextIcon={<ChevronRight />}
        superPrevIcon={<ChevronLeft />}
        superNextIcon={<ChevronRight />}
        showTime={mode === 'datetime'}
        showSecond={enableSeconds ?? false}
        disabledDate={mode === 'time' ? undefined : disableDate}
        picker={mode === 'time' ? 'time' : undefined}
        separator={'-'}
        renderExtraFooter={renderExtraFooter}
        allowClear
      />
    </Fieldset>
  );
};
export default withForm(styled(React.memo(DateRangePicker), { label: 'houston-daterangepicker' })(styles));
