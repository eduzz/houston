import * as React from 'react';

import { TimePicker as AndtTimePicker, TimePickerProps as AntdTimePickerProps } from 'antd';

import 'dayjs/locale/en';
import 'dayjs/locale/pt-br';

import type { Dayjs } from 'dayjs';
// @ts-ignore
import dayjs from 'dayjs';
// @ts-ignore
import customParseFormat from 'dayjs/plugin/customParseFormat';
// @ts-ignore
import localeData from 'dayjs/plugin/localeData';
// @ts-ignore
import weekday from 'dayjs/plugin/weekday';

import withForm, { WithFormProps } from '../Form/withForm';

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(customParseFormat);

dayjs.locale('pt-br');

export type TimePickerProps = Omit<AntdTimePickerProps, 'value' | 'onChange'> &
  WithFormProps<any> & {
    minDate?: Date;
    maxDate?: Date;
    value?: Date;
    onChange?: (value: Date) => void;
  };

const TimePicker = React.forwardRef<any, any>(
  ({ value, format, showTime, minDate, maxDate, onChange, ...props }, ref) => {
    format = format ?? props.showSecond ? 'HH:mm:ss' : 'HH:mm';

    const handleChange = React.useCallback((date: Dayjs) => onChange(date.toDate()), [onChange]);

    const disableDate = React.useCallback(
      (date: Date | null) => {
        if (!date) return true;
        if (minDate) return date < minDate;
        if (maxDate) return date > maxDate;
        return false;
      },
      [maxDate, minDate]
    );

    const dayjsValue = React.useMemo(() => (value ? dayjs(value) : value), [value]);

    return (
      <AndtTimePicker
        ref={ref}
        disabledDate={disableDate}
        format={format}
        value={dayjsValue}
        showTime={showTime}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

export default withForm(TimePicker as any) as React.ComponentType<TimePickerProps>;
