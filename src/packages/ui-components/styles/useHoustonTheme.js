import { __assign } from "tslib";
import { useTheme } from '@mui/material';
export default function useHoustonTheme() {
    var theme = useTheme();
    return __assign(__assign({}, theme.houston), { breakpoints: theme.breakpoints });
}
