"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const use_context_selector_1 = require("use-context-selector");
const context_1 = (0, tslib_1.__importDefault)(require("../Row/context"));
const TableActionOption = React.memo(({ children, disabled, onClick, icon }) => {
    const registerAction = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.registerAction);
    React.useEffect(() => {
        const unregister = registerAction({ disabled, onClick, icon, content: children });
        return () => unregister();
    }, [children, disabled, onClick, icon, registerAction]);
    return null;
});
exports.default = TableActionOption;
