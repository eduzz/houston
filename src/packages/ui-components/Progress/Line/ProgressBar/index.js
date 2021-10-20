import { jsx as _jsx } from "react/jsx-runtime";
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
var Bar = styled(LinearProgress)(function (_a) {
    var theme = _a.theme;
    return ({
        root: {
            height: 8
        },
        colorPrimary: {
            backgroundColor: theme.houston.colors.grey[200]
        },
        bar: {
            height: 80,
            backgroundColor: theme.houston.colors.success.main
        }
    });
});
var ProgressBar = function (_a) {
    var progress = _a.progress;
    return _jsx(Bar, { variant: 'determinate', value: progress > 100 ? 100 : progress }, void 0);
};
export default ProgressBar;
