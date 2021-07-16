import * as React from 'react';

import createUseStyles from '../../../styles/createUseStyles';
import useHoustonTheme from '../../../styles/useHoustonTheme';

interface IStyleProps {
  width?: number;
  size?: 'small' | 'normal';
}

export const BaseStyles = React.memo<IStyleProps>(props => {
  const theme = useHoustonTheme();

  const styles = React.useMemo(
    () => `
      .react-date-picker--disabled {
        background: none;
      }

      .react-date-picker__wrapper {
        height: ${props.size === 'small' ? 35 : 45}px;
        margin-top: 4px;
        opacity: 0;
        position: relative;
        z-index: 1;
      }

      .react-calendar__navigation {
        margin-bottom: 5px;
        padding: 8px;
        border-bottom: 1px solid ${theme.colors.grey[200]};
      }

      .react-calendar__navigation button {
        border-radius: 4px;
        min-width: 30px;
        min-height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 4px;
      }

      .react-calendar__navigation__label {
        font-weight: ${theme.fontWeight('semibold')}
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .react-calendar__navigation__label__labelText {
        font-family: ${theme.fontFamily};
        font-size: ${theme.textSize('x-small')}px;
        text-transform: capitalize;
        font-weight: ${theme.fontWeight('semibold')};
        color: ${theme.colors.grey[600]};
      }

      .react-calendar__month-view {
        padding: 8px 12px 12px
      }

      .react-calendar__month-view__weekdays {
        margin-bottom: 2
      }

      .react-calendar__month-view__weekdays__weekday {
        font-size: ${theme.textSize('xx-small')}px;
        padding: 0;
        color: ${theme.colors.grey[500]};
        font-weight: ${theme.fontWeight('semibold')};
      }

      .react-calendar__month-view__weekdays__weekday abbr {
        text-decoration: none;
      }

      .react-calendar__month-view__days__day--neighboringMonth {
        color: ${theme.colors.grey[300]};
      }

      .react-calendar__year-view__months {
        padding: 4px 8px 8px 8px;
      }

      .react-calendar__year-view__months__month {
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
      }

      .react-calendar__tile--hasActive {
        background: ${theme.colors.primary.main};
        color: ${theme.colors.primary.contrastText};
      }

      .react-calendar__tile--hasActive&:hover {
        background: ${theme.colors.primary.dark};
      }

      .react-calendar__decade-view {
        padding: 4px 8px 8px 8px;
      }

      .react-calendar__decade-view__years__year {
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
      }

      .react-calendar__century-view {
        padding: 4px 8px 8px 8px;
      }

      .react-calendar__century-view__decades__decade {
        font-size: ${theme.textSize('x-small')}px;
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
      }

      .react-date-picker__calendar {
        width: 250px;
        margin-left: 16px;
        top: 100% !important;
        bottom: unset !important;
      }
    `,
    [props.size, theme]
  );

  return <style id='styles-date-picker' dangerouslySetInnerHTML={{ __html: styles }} />;
});

const useStyles = createUseStyles(theme => ({
  root: {
    position: 'relative'
  },

  fieldPicker: (props: IStyleProps) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: props.width ?? '100%',
    display: 'block',
    zIndex: 2
  }),

  days: {
    borderRadius: 4,
    color: theme.colors.grey[500],
    transition: '0.15s background linear',
    width: 32,
    height: 30,
    padding: 0,

    '& abbr': {
      fontFamily: theme.fontFamily,
      lineHeight: theme.lineHeight('compact'),
      fontSize: theme.textSize('x-small'),
      fontWeight: theme.fontWeight('semibold')
    },

    // today
    '&.react-calendar__tile--now': {
      background: theme.colors.grey[200],
      borderRadius: 4,

      '&:hover': {
        background: theme.colors.primary.light,
        color: theme.colors.primary.contrastText
      }
    },

    // day selected
    '&.react-calendar__tile--active': {
      background: theme.colors.primary.main,
      color: theme.colors.primary.contrastText,
      transition: '0.15s linear',

      '&:hover': {
        background: theme.colors.primary.dark
      }
    }
  },

  calendar: {
    border: 0,
    borderRadius: '0 4px 4px 4px',
    boxShadow: '0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d',
    marginTop: 1,
    fontFamily: theme.fontFamily,
    width: 250
  },

  // input control
  input: (props: IStyleProps) => ({
    width: props.width ?? '100%',
    position: 'relative',
    zIndex: 1,

    '&.--opened': {
      '& label': {
        color: theme.colors.primary.main
      },

      '& fieldset': {
        borderWidth: 2,
        borderColor: theme.colors.primary.main
      }
    }
  }),

  // icon in input
  icon: {
    color: 'currentcolor'
  }
}));

export default useStyles;
