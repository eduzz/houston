import { __assign, __awaiter, __generator, __read, __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { useCallback } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import TextFieldMUI from '@mui/material/TextField';
import clsx from 'clsx';
import dateFormat from 'date-fns/format';
import { enUS, ptBR } from 'date-fns/locale';
import parseISO from 'date-fns/parseISO';
import isMobileFunc from 'is-mobile';
import ReactDatePicker from 'react-date-picker';
import { useContextSelector } from 'use-context-selector';
import IconArrowLeft from '@eduzz/houston-icons/ArrowLeft';
import IconArrowRight from '@eduzz/houston-icons/ArrowRight';
import IconCalendar from '@eduzz/houston-icons/Calendar';
import ButtonIcon from '../../ButtonIcon';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';
import { useCreateTempInputDate } from '../internals/DatePickerBase/hooks';
import useStyles from './styles';
var DatePickerField = function (_a) {
    var name = _a.name, placeholder = _a.placeholder, errorMessageProp = _a.errorMessage, value = _a.value, className = _a.className, loading = _a.loading, startAdornment = _a.startAdornment, onChange = _a.onChange, _b = _a.defaultView, defaultView = _b === void 0 ? 'month' : _b, _c = _a.locale, locale = _c === void 0 ? 'pt-BR' : _c, maxDate = _a.maxDate, minDate = _a.minDate, onCalendarClose = _a.onCalendarClose, onCalendarOpen = _a.onCalendarOpen, _d = _a.displayFormat, displayFormat = _d === void 0 ? 'dd/MM/yyyy' : _d, size = _a.size, width = _a.width, disabled = _a.disabled, margin = _a.margin, helperText = _a.helperText, _e = _a.fullWidth, fullWidth = _e === void 0 ? true : _e, rest = __rest(_a, ["name", "placeholder", "errorMessage", "value", "className", "loading", "startAdornment", "onChange", "defaultView", "locale", "maxDate", "minDate", "onCalendarClose", "onCalendarOpen", "displayFormat", "size", "width", "disabled", "margin", "helperText", "fullWidth"]);
    var inputRef = React.useRef();
    var _f = __read(useCreateTempInputDate(), 1), createTempInputDate = _f[0];
    var isMobile = isMobileFunc();
    var isSubmitting = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.isSubmitting; });
    var formValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.getFieldValue(name); });
    var formError = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.getFieldError(name); });
    var setFieldValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.setFieldValue; });
    if (!name && setFieldValue) {
        throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }
    var classesProps = React.useMemo(function () { return ({ width: width, size: size }); }, [width, size]);
    var classes = useStyles(classesProps);
    var _g = __read(React.useState(false), 2), openCalendar = _g[0], setOpenCalendar = _g[1];
    value = formValue !== null && formValue !== void 0 ? formValue : value;
    var handleChange = React.useCallback(function (value, event) {
        if (!value)
            return;
        setFieldValue && setFieldValue(name, value);
        onChange && onChange(value, event);
    }, [onChange, setFieldValue, name]);
    var handleChangeMobile = React.useCallback(function (event) {
        var value = event.target.value;
        if (!value)
            return;
        var newValue = parseISO(value);
        setFieldValue && setFieldValue(name, new Date(newValue));
        onChange && onChange(new Date(newValue), event);
    }, [name, onChange, setFieldValue]);
    var handleClickIcon = useCallback(function () { var _a; return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, []);
    var handleClickInput = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var event;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (disabled || loading)
                        return [2 /*return*/];
                    if (!isMobile) {
                        setOpenCalendar(true);
                        onCalendarOpen && onCalendarOpen();
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, createTempInputDate({ initialValue: value, onClose: onCalendarClose })];
                case 1:
                    event = _a.sent();
                    handleChangeMobile(event);
                    onCalendarOpen && onCalendarOpen();
                    return [2 /*return*/];
            }
        });
    }); }, [createTempInputDate, disabled, handleChangeMobile, isMobile, loading, onCalendarClose, onCalendarOpen, value]);
    var handleCalendarOpen = React.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            onCalendarOpen && onCalendarOpen();
            return [2 /*return*/];
        });
    }); }, [onCalendarOpen]);
    var handleCalendarClose = React.useCallback(function () {
        onCalendarClose && onCalendarClose();
        setOpenCalendar(false);
    }, [onCalendarClose]);
    var calendarProps = React.useMemo(function () { return ({
        defaultView: defaultView,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        onCalendarOpen: onCalendarOpen,
        onCalendarClose: onCalendarClose
    }); }, [defaultView, locale, maxDate, minDate, onCalendarOpen, onCalendarClose]);
    var inputLabelProps = React.useMemo(function () { return (__assign({}, (placeholder ? { shrink: true } : {}))); }, [placeholder]);
    var inputProps = React.useMemo(function () {
        var end = (_jsx(InputAdornment, __assign({ position: 'end' }, { children: _jsx(ButtonIcon, __assign({ className: classes.icon, size: 'small', onClick: handleClickIcon }, { children: _jsx(IconCalendar, {}, void 0) }), void 0) }), void 0));
        var start = null;
        if (startAdornment) {
            start = _jsx(InputAdornment, __assign({ position: 'start' }, { children: startAdornment }), void 0);
        }
        if (loading) {
            end = (_jsx(InputAdornment, __assign({ position: 'end' }, { children: _jsx(CircularProgress, { color: 'secondary', size: 20 }, void 0) }), void 0));
        }
        return {
            endAdornment: end,
            startAdornment: start
        };
    }, [classes.icon, handleClickIcon, startAdornment, loading]);
    var localeNavigator = React.useMemo(function () {
        if (locale === 'pt-BR') {
            return ptBR;
        }
        return enUS;
    }, [locale]);
    var errorMessage = errorMessageProp !== null && errorMessageProp !== void 0 ? errorMessageProp : formError;
    var hasError = !!errorMessage;
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(TextFieldMUI, __assign({ error: hasError }, rest, { ref: inputRef, placeholder: placeholder, disabled: isSubmitting || disabled || loading, helperText: errorMessage || helperText, className: clsx(classes.input, className, size === 'small' && 'input-size-small'), name: name, margin: margin !== null && margin !== void 0 ? margin : 'normal', variant: 'outlined', onClick: handleClickInput, value: value ? dateFormat(value, displayFormat) : '', fullWidth: width ? false : fullWidth, InputLabelProps: inputLabelProps, InputProps: inputProps }), void 0), _jsx(ReactDatePicker, __assign({}, calendarProps, { tileClassName: classes.days, className: classes.fieldPicker, calendarClassName: classes.calendar, prev2Label: null, next2Label: null, navigationLabel: function (props) { return (_jsxs(_Fragment, { children: [(props.view === 'decade' || props.view === 'century') && '~', props.view === 'year' && dateFormat(props.date, 'yyy', { locale: localeNavigator }), props.view === 'month' && dateFormat(props.date, 'LLL yyy', { locale: localeNavigator })] }, void 0)); }, prevLabel: _jsx(IconArrowLeft, {}, void 0), nextLabel: _jsx(IconArrowRight, {}, void 0), isOpen: openCalendar, disabled: disabled || loading || isMobile, value: value, showLeadingZeros: true, clearIcon: null, onChange: handleChange, onCalendarOpen: handleCalendarOpen, onCalendarClose: handleCalendarClose }), void 0)] }), void 0));
};
export default withHoustonTheme(React.memo(DatePickerField));
