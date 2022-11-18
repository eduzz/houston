import * as React from 'react';

import { DatePicker as AndtDatePicker, DatePickerProps as AntdDatePickerProps } from 'antd';

import withForm, { WithFormProps } from '../Form/withForm';

export type DatePickerProps = AntdDatePickerProps &
  WithFormProps<any> & {
    minDate?: Date;
    maxDate?: Date;
  };

const defaultFormats = {
  date: 'dd/MM/yyyy',
  datetime: 'dd/MM/yyyy HH:mm',
  time: 'HH:mm'
} as const;

const DatePicker = React.forwardRef<any, any>(({ value, format, showTime, minDate, maxDate, ...props }, ref) => {
  format = format ?? defaultFormats[`${showTime ? 'datetime' : 'date'}`];

  const disableDate = React.useCallback(
    (date: Date | null) => {
      if (!date) return true;
      if (minDate) return date < minDate;
      if (maxDate) return date > maxDate;
      return false;
    },
    [maxDate, minDate]
  );

  return (
    <AndtDatePicker ref={ref} disabledDate={disableDate} format={format} value={value} showTime={showTime} {...props} />
  );
});

export default withForm(DatePicker as any) as React.ComponentType<DatePickerProps>;
