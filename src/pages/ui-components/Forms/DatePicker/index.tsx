/* eslint-disable max-lines */
import * as React from 'react';

import isValid from 'date-fns/isValid';
import Picker from 'rc-picker';

import Calendar from '@eduzz/houston-icons/Calendar';
import ChevronLeft from '@eduzz/houston-icons/ChevronLeft';
import ChevronRight from '@eduzz/houston-icons/ChevronRight';
import styled, { css, cx } from '@eduzz/houston-styles';
import { pxToRem } from '@eduzz/houston-tokens/variables/utils';

import { defaultFormats, pickerProps } from '../_utils/datepicker';
import withForm, { WithFormProps } from '../Form/withForm';
import Input, { InputProps } from '../Input';
import { DateFormat } from './types';

export interface DatePickerProps
  extends Omit<
      InputProps<Date>,
      | 'mask'
      | 'endAdornment'
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
  onChange?: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  enableSeconds?: boolean;
  id?: string;
}

const DatePicker = ({
  id,
  value,
  onChange,
  disabled,
  displayFormat,
  className,
  mode = 'date',
  minDate,
  maxDate,
  enableSeconds,
  fullWidth = true,
  ...inputProps
}: DatePickerProps) => {
  const disableDate = React.useCallback(
    (date: Date | null) => {
      if (!date) return true;
      if (minDate) return date < minDate;
      if (maxDate) return date > maxDate;
      return false;
    },
    [maxDate, minDate]
  );

  const internalInputOnBlur = React.useCallback(
    (value: string) => {
      const [day, month, year] = value.split('/');
      const date = new Date(+year, +month - 1, +day);
      if (disableDate(date) || !isValid(date)) return;
      onChange && onChange(date);
    },
    [disableDate, onChange]
  );

  const inputRender = React.useCallback(
    (props: React.InputHTMLAttributes<HTMLInputElement>) => {
      return (
        <Input
          {...inputProps}
          {...props}
          id={id}
          size='default'
          onBlur={internalInputOnBlur}
          fullWidth={fullWidth}
          disabled={disabled}
          nativeChangeEvent
          name={undefined}
          endAdornment={<Calendar />}
        />
      );
    },
    [id, disabled, inputProps, fullWidth, internalInputOnBlur]
  );

  return (
    <Picker<Date>
      {...pickerProps}
      value={value}
      defaultPickerValue={new Date()}
      className={cx(className, { 'hst-datepicker-full-width': fullWidth })}
      dropdownClassName={cx(className, { 'hst-datepicker-enable-seconds': enableSeconds })}
      format={displayFormat ?? defaultFormats[`${mode}${enableSeconds ? 'Seconds' : ''}`]}
      inputRender={inputRender}
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
    />
  );
};

const SIZE_BUTTON = `${pxToRem(48)}rem`;
const HOUR_WIDTH_BUTTON = `${pxToRem(63)}rem`;

export default withForm(
  styled(React.memo(DatePicker), { label: 'hst-datepicker' })(
    ({ theme }) => css`
      &.rc-picker-focused {
        border: none;
      }

      &.hst-datepicker-full-width {
        width: 100%;
      }

      &.rc-picker-dropdown {
        box-shadow: none;
        z-index: 107;

        .rc-picker-panel {
          box-shadow: ${theme.shadow.level[1]};
          background-color: ${theme.neutralColor.high.pure};
          border-width: 0;
          border-radius: ${theme.border.radius.sm};
          overflow: hidden;

          .rc-picker-header .rc-picker-header-view {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: center;

            button {
              flex: 1;
              padding: 0 ${theme.spacing.quarck};
            }

            .rc-picker-year-btn {
              text-align: left;
            }

            .rc-picker-month-btn {
              text-align: right;
            }
          }

          .rc-picker-header-super-next-btn,
          .rc-picker-header-super-prev-btn {
            display: none;
          }

          .rc-picker-body {
            border-radius: 0 0 ${theme.border.radius.sm} ${theme.border.radius.sm};
            overflow: hidden;

            table {
              width: 100%;
            }

            thead th {
              text-transform: capitalize;
              font-family: ${theme.font.family.base};
              font-size: ${theme.font.size.xxs};
              font-weight: ${theme.font.weight.semibold};
              line-height: ${theme.line.height.xs};
              color: ${theme.neutralColor.low.pure};
              width: ${SIZE_BUTTON};
              height: ${SIZE_BUTTON};
            }

            .rc-picker-cell {
              width: ${SIZE_BUTTON};
              height: ${SIZE_BUTTON};

              &.rc-picker-cell-today > .rc-picker-cell-inner {
                border-color: ${theme.neutralColor.high.medium};
              }

              &:not(.rc-picker-cell-in-view) {
                pointer-events: none;

                & > .rc-picker-cell-inner {
                  color: ${theme.neutralColor.low.light};
                  background-color: ${theme.neutralColor.high.light};
                }
              }
            }
          }
        }

        .rc-picker-panel .rc-picker-body .rc-picker-cell,
        .rc-picker-time-panel-column > li {
          .rc-picker-cell-inner,
          .rc-picker-time-panel-cell-inner {
            width: 100%;
            height: 100%;
            font-family: ${theme.font.family.base};
            font-size: ${theme.font.size.xxs};
            font-weight: ${theme.font.weight.regular};
            line-height: ${theme.line.height.xs};
            color: ${theme.neutralColor.low.dark};
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border: ${theme.border.width.xs} solid transparent;
            box-sizing: border-box;
            padding: 0;

            &:hover {
              background-color: ${theme.brandColor.primary.light};
              color: ${theme.neutralColor.low.dark};
            }

            &.rc-picker-time-panel-cell-inner:hover {
              background-color: ${theme.neutralColor.high.light};
            }
          }

          &.rc-picker-cell-selected > .rc-picker-cell-inner {
            background-color: ${theme.brandColor.primary.pure};
            color: ${theme.neutralColor.high.pure};
          }

          &.rc-picker-time-panel-cell-selected .rc-picker-time-panel-cell-inner {
            background-color: ${theme.brandColor.secondary.light};
          }

          &.rc-picker-cell-disabled {
            opacity: 1;

            .rc-picker-cell-inner,
            .rc-picker-time-panel-cell-inner {
              cursor: not-allowed;
              color: ${theme.neutralColor.low.light};
              background-color: ${theme.neutralColor.high.light};
            }
          }
        }

        &.rc-picker-cell-disabled {
          opacity: 1;
        }

        .rc-picker-month-panel,
        .rc-picker-year-panel,
        .rc-picker-decade-panel {
          min-width: 336px;

          .rc-picker-body {
            border-radius: 0;
          }

          .rc-picker-header {
            .rc-picker-header-view .rc-picker-year-btn {
              text-align: center;
            }

            .rc-picker-header-super-next-btn,
            .rc-picker-header-super-prev-btn {
              display: block;
            }
          }
        }

        .rc-picker-panel-container .rc-picker-body {
          border-radius: 0;
        }

        .rc-picker-panel .rc-picker-header button,
        .rc-picker-year-panel .rc-picker-decade-btn,
        .rc-picker-decade-panel .rc-picker-header-view {
          font-family: ${theme.font.family.base};
          font-size: ${theme.font.size.xxs};
          font-weight: ${theme.font.weight.semibold};
          line-height: ${theme.line.height.xs};
          color: ${theme.neutralColor.low.pure};
          background: none;
          border: none;
          transition: 0.15s;
          cursor: pointer;
          height: ${SIZE_BUTTON};
          min-width: ${SIZE_BUTTON};

          &:hover {
            background: ${theme.hexToRgba(theme.neutralColor.low.dark, theme.opacity.level[2])};
          }
        }

        .rc-picker-time-panel {
          border-left: ${theme.border.width.xs} solid ${theme.neutralColor.high.medium};

          .rc-picker-header .rc-picker-header-view {
            height: ${SIZE_BUTTON};
            font-family: ${theme.font.family.base};
            font-size: ${theme.font.size.xxs};
            font-weight: ${theme.font.weight.semibold};
            line-height: ${theme.line.height.xs};
            color: ${theme.neutralColor.low.pure};
          }

          .rc-picker-content {
            max-height: 336px;
            display: grid;
            grid-template-rows: ${SIZE_BUTTON} calc(336px - ${SIZE_BUTTON});
            grid-template-columns: repeat(2, ${HOUR_WIDTH_BUTTON});

            &::before {
              grid-row: 1;
              content: 'Hor Min';
              word-spacing: 35px;
              text-transform: capitalize;
              font-family: ${theme.font.family.base};
              font-size: ${theme.font.size.xxs};
              font-weight: ${theme.font.weight.semibold};
              line-height: ${theme.line.height.xs};
              color: ${theme.neutralColor.low.pure};
              width: calc(${HOUR_WIDTH_BUTTON} * 2);
              height: ${SIZE_BUTTON};
              display: flex;
              justify-content: flex-start;
              align-items: center;
              padding: ${theme.spacing.xxxs};
            }

            & > ul {
              grid-row: 2;
            }
          }

          .rc-picker-time-panel-column {
            padding: 0;
            width: ${HOUR_WIDTH_BUTTON};

            &::-webkit-scrollbar {
              width: 3px;
              background: white;
            }

            &::-webkit-scrollbar-thumb {
              background: ${theme.neutralColor.high.medium};
              border-radius: 4px;
            }

            & > li {
              width: ${HOUR_WIDTH_BUTTON};
              height: ${SIZE_BUTTON};
              margin: 0;

              .rc-picker-time-panel-cell-inner {
                justify-content: flex-start;
                padding: ${theme.spacing.xxxs};
              }
            }
          }

          & + .rc-picker-footer .rc-picker-ok {
            width: 100%;

            button {
              width: 100%;
            }
          }
        }

        .rc-picker-datetime-panel + .rc-picker-footer .rc-picker-now .rc-picker-now-btn {
          display: block;
        }

        .rc-picker-footer {
          background: none;
          border-top: ${theme.border.width.xs} solid ${theme.neutralColor.high.medium};
          padding: ${theme.spacing.xxxs};

          .rc-picker-ok button,
          .rc-picker-now-btn {
            border: none;
            display: inline-block;
            cursor: pointer;
            text-transform: none;
            padding: ${theme.spacing.xxxs};
            border-radius: ${theme.border.radius.xs};
            font-weight: ${theme.font.weight.semibold};
            font-family: ${theme.font.family.base};
            line-height: ${theme.line.height.default};
            font-size: ${theme.font.size.xxs};
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            &:disabled {
              border: none;
              background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
              color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[6])};
              cursor: not-allowed;
            }
          }

          .rc-picker-ok button {
            background-color: ${theme.brandColor.primary.pure};
            color: ${theme.neutralColor.high.pure};
            margin: 0;

            &:hover:not(:disabled),
            &:focus,
            &.--active {
              background-color: ${theme.hexToRgba(theme.brandColor.primary.pure, theme.opacity.level[8])};
            }
          }

          .rc-picker-now-btn {
            background-color: transparent;
            border: ${theme.border.width.xs} solid;
            border-color: ${theme.neutralColor.low.pure};
            color: ${theme.neutralColor.low.pure};

            &:hover:not(:disabled),
            &:focus,
            &.--active {
              background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
            }
          }
        }

        ${theme.breakpoints.down('md')} {
          position: fixed;
          z-index: 107;
          justify-content: center;
          align-items: center;
          background: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[6])};
          backdrop-filter: blur(${theme.pxToRem(8)}rem);

          &:not(.rc-picker-dropdown-hidden) {
            left: 0 !important;
            top: 0 !important;
            right: 0;
            bottom: 0;
            display: flex;
          }
        }

        &.hst-datepicker-enable-seconds .rc-picker-time-panel .rc-picker-content {
          grid-template-columns: repeat(3, ${HOUR_WIDTH_BUTTON});

          &::before {
            grid-row: 1;
            content: 'Hor Min Seg';
            width: calc(${HOUR_WIDTH_BUTTON} * 3);
          }
        }
      }
    `
  )
);
