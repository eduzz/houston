"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindMutationObserver = void 0;
function bindMutationObserver(table, callback) {
    let timeout;
    const handleMutation = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const headerLabels = getTableHeaderLabels(table);
            const hasLabels = !!Object.keys(headerLabels).length;
            if (!hasLabels)
                return;
            callback(headerLabels);
        }, 300);
    };
    handleMutation();
    const observer = new MutationObserver(handleMutation);
    observer.observe(table, { childList: true, subtree: true });
    return () => observer.disconnect();
}
exports.bindMutationObserver = bindMutationObserver;
function getTableHeaderLabels(table) {
    var _a;
    const rows = Array.from(table.rows);
    const columns = Array.from((_a = rows.shift()) === null || _a === void 0 ? void 0 : _a.cells).reduce((acc, column) => {
        if (column.tagName.toLowerCase() !== 'th') {
            return acc;
        }
        acc.push(column.textContent);
        return acc;
    }, []);
    return rows.reduce((acc, row) => {
        Array.from(row.cells).forEach((cell, index) => {
            const key = cell.getAttribute('cell-key');
            if (!key)
                return;
            acc[key] = columns[index];
        });
        return acc;
    }, {});
}
