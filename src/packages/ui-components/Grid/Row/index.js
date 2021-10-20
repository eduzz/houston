import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import clsx from 'clsx';
import createUseStyles from '../../styles/createUseStyles';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import { useGrid } from '../context';
var useStyles = createUseStyles({
    root: {
        margin: 0,
        width: '100%'
    }
});
var Row = React.forwardRef(function (_a, ref) {
    var className = _a.className, spacingProps = _a.spacing, rest = __rest(_a, ["className", "spacing"]);
    var classes = useStyles();
    var spacing = useGrid().spacing;
    var config = React.useMemo(function () {
        var sizes = spacingProps !== null && spacingProps !== void 0 ? spacingProps : { comfortable: 10, cozy: 4, compact: 2 };
        return sizes[spacing !== null && spacing !== void 0 ? spacing : 'cozy'];
    }, [spacing, spacingProps]);
    return _jsx(Grid, __assign({}, rest, { container: true, ref: ref, className: clsx(classes.root, className), spacing: config }), void 0);
});
export default withHoustonTheme(React.memo(Row));
