import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import maskMoney from '@eduzz/houston-forms/masks/money';
import TextField from '../Text';
var CurrencyField = function (props) {
    return _jsx(TextField, __assign({}, props, { mask: maskMoney }), void 0);
};
export default CurrencyField;
