"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const use_context_selector_1 = require("use-context-selector");
const context_1 = (0, tslib_1.__importDefault)(require("../Row/context"));
const TableCollapse = React.memo(({ onOpen, onClose, disabled, disableBackground, disabledPadding, children }) => {
    const registerCollapse = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.registerCollapse);
    React.useEffect(() => {
        const unregister = registerCollapse({
            disabled,
            onOpen,
            onClose,
            disableBackground,
            disabledPadding,
            content: children
        });
        return () => unregister();
    }, [children, disabled, registerCollapse, onOpen, onClose, disableBackground, disabledPadding]);
    return null;
});
exports.default = TableCollapse;
