import * as React from 'react';

import { DatePicker as AndtDatePicker, DatePickerProps as AntdDatePickerProps } from 'antd';

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
import dateMask from '../masks/date';

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(customParseFormat);

dayjs.locale('pt-br');

export type DatePickerProps = Omit<AntdDatePickerProps, 'value' | 'onChange'> &
  WithFormProps<any> & {
    minDate?: Date | null;
    maxDate?: Date | null;
    value?: Date | null;
    onChange?: (value: Date) => void;
    showTime?: boolean;
  };

const defaultFormats = {
  date: 'DD/MM/YYYY',
  datetime: 'DD/MM/YYYY HH:mm'
} as const;

const DatePicker = React.forwardRef<any, any>(
  // eslint-disable-next-line sonarjs/cognitive-complexity
  ({ value, format: formatProp, showTime, minDate, maxDate, onChange, ...props }, ref) => {
    const format = formatProp ?? defaultFormats[`${showTime ? 'datetime' : 'date'}`];
    const maskTimeout = React.useRef<any>();

    const handleChange = React.useCallback((date: Dayjs) => onChange(date?.toDate()), [onChange]);

    const disableDate = React.useCallback(
      (date: Date | null) => {
        if (!date) return true;
        if (minDate) return date < minDate;
        if (maxDate) return date > maxDate;
        return false;
      },
      [maxDate, minDate]
    );

    const onKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (formatProp || showTime) return;

        const input = e.target as HTMLInputElement;
        maskTimeout.current && clearTimeout(maskTimeout.current);
        maskTimeout.current = setTimeout(() => {
          input.value = dateMask.apply(input.value) ?? '';

          const result = dayjs(input.value, format);
          const sameFormat = input.value?.length === format.length;

          if (result.isValid() && sameFormat) {
            onChange(result.toDate());
            return;
          }

          !input.value && onChange(null);
        }, 0);
      },
      [format, formatProp, onChange, showTime]
    );

    const dayjsValue = React.useMemo(() => (value ? dayjs(value) : value), [value]);

    return (
      <AndtDatePicker
        ref={ref}
        disabledDate={disableDate}
        format={format}
        value={dayjsValue}
        showTime={showTime}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        {...props}
      />
    );
  }
);

export default withForm(DatePicker as any) as React.ComponentType<DatePickerProps>;
