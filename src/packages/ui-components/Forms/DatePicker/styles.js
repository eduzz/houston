import createUseStyles from '../../styles/createUseStyles';
var useStyles = createUseStyles(function (theme) { return ({
    root: function (props) { return ({
        position: 'relative',
        '& .react-date-picker--disabled': {
            background: 'none'
        },
        '& .react-date-picker__wrapper': {
            height: props.size === 'small' ? 35 : 45,
            marginTop: 4,
            opacity: 0,
            position: 'relative',
            zIndex: 1,
            cursor: 'text',
            display: 'none'
        },
        '& .react-calendar__navigation': {
            marginBottom: 5,
            padding: 8,
            borderBottom: "1px solid " + theme.colors.grey[200]
        },
        '& .react-calendar__navigation button': {
            borderRadius: 4,
            minWidth: 30,
            minHeight: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 4px',
            color: theme.colors.grey[600]
        },
        '& .react-calendar__navigation__label': {
            fontWeight: theme.fontWeight('semibold'),
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        '& .react-calendar__navigation__label__labelText': {
            fontFamily: theme.fontFamily,
            fontSize: theme.textSize('x-small'),
            textTransform: 'capitalize',
            fontWeight: theme.fontWeight('semibold'),
            color: theme.colors.grey[600]
        },
        '& .react-calendar__month-view': {
            padding: '8px 12px 12px'
        },
        '& .react-calendar__month-view__weekdays': {
            marginBottom: 2
        },
        '& .react-calendar__month-view__weekdays__weekday': {
            fontSize: theme.textSize('xx-small'),
            padding: 0,
            color: theme.colors.grey[500],
            fontWeight: theme.fontWeight('semibold')
        },
        '& .react-calendar__month-view__weekdays__weekday abbr': {
            textDecoration: 'none'
        },
        '& .react-calendar__month-view__days__day--neighboringMonth': {
            color: theme.colors.grey[300]
        },
        '& .react-calendar__year-view__months': {
            padding: '4px 8px 8px 8px'
        },
        '& .react-calendar__year-view__months__month': {
            minHeight: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5
        },
        '& .react-calendar__tile--hasActive': {
            background: theme.colors.primary.main,
            color: theme.colors.primary.contrastText
        },
        '& .react-calendar__tile--hasActive&:hover': {
            background: theme.colors.primary.dark
        },
        '& .react-calendar__decade-view': {
            padding: '4px 8px 8px 8px'
        },
        '& .react-calendar__decade-view__years__year': {
            minHeight: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5
        },
        '& .react-calendar__century-view': {
            padding: '4px 8px 8px 8px'
        },
        '& .react-calendar__century-view__decades__decade': {
            fontSize: theme.textSize('x-small'),
            minHeight: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5
        },
        '& .react-date-picker__calendar': {
            width: 250,
            marginLeft: 16,
            top: props.size === 'small' ? '38px !important' : '48px !important',
            bottom: 'unset !important'
        }
    }); },
    fieldPicker: function (props) {
        var _a;
        return ({
            position: 'absolute',
            top: 0,
            left: 0,
            width: (_a = props.width) !== null && _a !== void 0 ? _a : '100%',
            display: 'block',
            zIndex: 2
        });
    },
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
    // input mui
    input: function (props) {
        var _a;
        return ({
            width: (_a = props.width) !== null && _a !== void 0 ? _a : '100%',
            position: 'relative',
            zIndex: 1
        });
    },
    // icon in input
    icon: {
        color: 'currentcolor'
    }
}); });
export default useStyles;
