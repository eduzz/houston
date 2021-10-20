import createUseStyles from '../styles/createUseStyles';
var useStyles = createUseStyles(function (theme) { return ({
    box: function (_a) {
        var _b;
        var xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl;
        return (_b = {},
            _b[theme.breakpoints.up('xs')] = {
                padding: xs === null || xs === void 0 ? void 0 : xs.padding,
                margin: xs === null || xs === void 0 ? void 0 : xs.margin
            },
            _b[theme.breakpoints.up('sm')] = {
                padding: sm === null || sm === void 0 ? void 0 : sm.padding,
                margin: sm === null || sm === void 0 ? void 0 : sm.margin
            },
            _b[theme.breakpoints.up('md')] = {
                padding: md === null || md === void 0 ? void 0 : md.padding,
                margin: md === null || md === void 0 ? void 0 : md.margin
            },
            _b[theme.breakpoints.up('lg')] = {
                padding: lg === null || lg === void 0 ? void 0 : lg.padding,
                margin: lg === null || lg === void 0 ? void 0 : lg.margin
            },
            _b[theme.breakpoints.up('xl')] = {
                padding: xl === null || xl === void 0 ? void 0 : xl.padding,
                margin: xl === null || xl === void 0 ? void 0 : xl.margin
            },
            _b);
    },
    paper: {
        background: '#fff',
        borderRadius: 4
    }
}); });
export default useStyles;
