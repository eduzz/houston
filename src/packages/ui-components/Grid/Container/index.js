import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import MUIContainer from '@mui/material/Container';
import clsx from 'clsx';
import createUseStyles from '../../styles/createUseStyles';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import GridContextProvider from '../context';
var useStyles = createUseStyles({
    root: {
        width: '100%',
        maxWidth: 1062,
        margin: '0 auto'
    },
    comfortable: {
        padding: '0 18px'
    },
    cozy: {
        padding: '0 28px'
    },
    compact: {
        padding: '0 20px'
    },
    fluid: {
        maxWidth: '100%'
    }
});
var Container = React.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, _b = _a.spacing, spacing = _b === void 0 ? 'cozy' : _b, _c = _a.layout, layout = _c === void 0 ? 'solid' : _c, rest = __rest(_a, ["children", "className", "spacing", "layout"]);
    var classes = useStyles();
    var contextValue = React.useMemo(function () { return ({ spacing: spacing }); }, [spacing]);
    return (_jsx(GridContextProvider, __assign({ value: contextValue }, { children: _jsx(MUIContainer, __assign({}, rest, { ref: ref, className: clsx(classes.root, classes[spacing], layout === 'fluid' && classes.fluid, className) }, { children: children }), void 0) }), void 0));
});
export default withHoustonTheme(React.memo(Container));
