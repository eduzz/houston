import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { useTableContext } from '../../context';
import MenuActions from '../MenuActions';
var Actions = React.memo(function () {
    var _a = useTableContext(), currentRow = _a.currentRow, actions = _a.actions, anchorEl = _a.anchorEl, setAnchorEl = _a.setAnchorEl, options = _a.options, setOptions = _a.setOptions, setCurrentRow = _a.setCurrentRow;
    var handleCloseActions = React.useCallback(function () {
        setAnchorEl(null);
        setTimeout(function () {
            setOptions([]);
            setCurrentRow(null);
        }, 180);
    }, [setAnchorEl, setOptions, setCurrentRow]);
    if (!actions) {
        return null;
    }
    return (_jsx(MenuActions, { anchorEl: anchorEl, onClose: handleCloseActions, options: !(options === null || options === void 0 ? void 0 : options.length) ? actions === null || actions === void 0 ? void 0 : actions.options : options, currentRow: currentRow }, void 0));
});
export default Actions;
