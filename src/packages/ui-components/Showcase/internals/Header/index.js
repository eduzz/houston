import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import CancelIcon from '@eduzz/houston-icons/Cancel';
import ButtonIcon from '../../../ButtonIcon';
import createUseStyles from '../../../styles/createUseStyles';
import Typography from '../../../Typography';
import { useShowcaseContext } from '../../context';
var useStyles = createUseStyles(function (theme) { return ({
    header: function (props) {
        var _a;
        return (_a = {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                padding: (props === null || props === void 0 ? void 0 : props.size) === 'small' ? '16px 16px 0' : '24px 24px 0'
            },
            _a[theme.breakpoints.down('sm')] = {
                padding: '12px 16px 0'
            },
            _a['& .header-title'] = {
                color: '#6C7E86',
                fontWeight: 600,
                letterSpacing: '0.4px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            },
            _a['& .close-icon'] = {
                color: '#546E7A',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
            },
            _a);
    }
}); });
var Header = React.memo(function () {
    var _a = useShowcaseContext(), currentStep = _a.currentStep, title = _a.title, stepCounter = _a.stepCounter, steps = _a.steps, size = _a.size, handleClose = _a.handleClose;
    var classes = useStyles({ size: size });
    var isMobile = useMediaQuery(function (theme) { return theme.breakpoints.down('xs'); });
    if (!title)
        return null;
    return (_jsxs(Typography, __assign({ className: classes.header, size: 'normal' }, { children: [_jsx("span", __assign({ className: 'header-title' }, { children: title.children }), void 0), size !== 'small' && !isMobile && stepCounter && (_jsxs("span", { children: [currentStep, "/", steps.length] }, void 0)), (size === 'small' || isMobile) && (_jsx(ButtonIcon, __assign({ id: 'modal-default-close', onClick: handleClose, size: 'small' }, { children: _jsx(CancelIcon, { className: 'close-icon', size: 18 }, void 0) }), void 0))] }), void 0));
});
export default Header;
