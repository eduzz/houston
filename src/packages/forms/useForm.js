"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./yupLocale");
var react_1 = require("react");
var formik_1 = require("formik");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var yup = require("yup");
var useObservable_1 = require("@eduzz/houston-hooks/useObservable");
/**
 * Hook implemation of IFormAdapter
 * @param IUseFormParams
 */
function useForm(_a) {
    var onSubmit = _a.onSubmit, onSubmitWithErrors = _a.onSubmitWithErrors, validationSchema = _a.validationSchema, initialValues = _a.initialValues, _b = _a.validateOnMount, validateOnMount = _b === void 0 ? true : _b;
    var promiseRef = (0, react_1.useRef)({}).current;
    var handlers = (0, react_1.useRef)({}).current;
    var submitData = (0, react_1.useRef)(new rxjs_1.Subject()).current;
    var onSubmitRef = (0, react_1.useRef)(onSubmit);
    (0, useObservable_1.default)(function () {
        return submitData.pipe((0, operators_1.switchMap)(function (_a) {
            var _b;
            var model = _a.model, formikHelpers = _a.formikHelpers;
            var result$ = (_b = onSubmitRef === null || onSubmitRef === void 0 ? void 0 : onSubmitRef.current) === null || _b === void 0 ? void 0 : _b.call(onSubmitRef, model, formikHelpers);
            var result = (0, rxjs_1.of)(true).pipe((0, operators_1.switchMap)(function () { return (!result$ ? (0, rxjs_1.of)(null) : result$); }), (0, operators_1.catchError)(function () { return (0, rxjs_1.of)(null); }), (0, operators_1.share)());
            promiseRef.promise = result.toPromise();
            return result;
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var formik = (0, formik_1.useFormik)({
        validateOnMount: validateOnMount,
        initialValues: initialValues !== null && initialValues !== void 0 ? initialValues : {},
        validationSchema: validationSchema ? function () { return validationSchema(yup); } : null,
        onSubmit: function (model, formikHelpers) {
            onSubmitRef.current = onSubmit;
            submitData.next({ model: model, formikHelpers: formikHelpers });
            return new Promise(function (resolve) { return setTimeout(function () { return resolve(promiseRef.promise); }, 500); });
        }
    });
    (0, react_1.useEffect)(function () {
        if (!formik.submitCount || formik.isValid)
            return;
        onSubmitWithErrors && onSubmitWithErrors(formik.errors, formik.values);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.submitCount]);
    var handleChange = (0, react_1.useRef)(function (field) {
        if (!handlers[field]) {
            handlers[field] = function (value) {
                formik.setFieldTouched(field, true, false);
                formik.setFieldValue(field, value, false);
            };
        }
        return handlers[field];
    }).current;
    var handleSubmit = (0, react_1.useCallback)(function (e) { return formik.handleSubmit(e); }, [formik]);
    var getFieldValue = (0, react_1.useCallback)(function (name) { return formik.getFieldMeta(name).value; }, [formik]);
    var setFieldValue = (0, react_1.useCallback)(function (name, value) {
        formik.setFieldTouched(name, true, false);
        formik.setFieldValue(name, value, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var getFieldError = (0, react_1.useCallback)(function (name) {
        var field = formik.getFieldMeta(name);
        return field.touched || (formik.submitCount > 0 && !field.value) ? field.error : '';
    }, [formik]);
    var setErrors = (0, react_1.useCallback)(function (errors) { return formik.setErrors(errors); }, [formik]);
    return {
        handleSubmit: handleSubmit,
        handleChange: handleChange,
        handleReset: function () { return formik.resetForm({ values: initialValues }); },
        setValues: formik.setValues,
        setErrors: setErrors,
        getFieldValue: getFieldValue,
        setFieldValue: setFieldValue,
        getFieldError: getFieldError,
        setFieldTouched: formik.setFieldTouched,
        reset: function (values) { return formik.resetForm({ values: values === undefined ? initialValues : values }); },
        initialValues: formik.initialValues,
        values: formik.values,
        isSubmitting: formik.isSubmitting,
        isValid: formik.isValid,
        errors: formik.errors
    };
}
exports.default = useForm;
