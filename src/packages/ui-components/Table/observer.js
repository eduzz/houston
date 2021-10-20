export function bindMutationObserver(table, callback) {
    var timeout;
    var handleMutation = function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            var headerLabels = getTableHeaderLabels(table);
            var hasLabels = !!Object.keys(headerLabels).length;
            if (!hasLabels)
                return;
            callback(headerLabels);
        }, 300);
    };
    handleMutation();
    var observer = new MutationObserver(handleMutation);
    observer.observe(table, { childList: true, subtree: true });
    return function () { return observer.disconnect(); };
}
function getTableHeaderLabels(table) {
    var _a;
    var rows = Array.from(table.rows);
    var columns = Array.from((_a = rows.shift()) === null || _a === void 0 ? void 0 : _a.cells).reduce(function (acc, column) {
        if (column.tagName.toLowerCase() !== 'th') {
            return acc;
        }
        acc.push(column.textContent);
        return acc;
    }, []);
    return rows.reduce(function (acc, row) {
        Array.from(row.cells).forEach(function (cell, index) {
            var key = cell.getAttribute('cell-key');
            if (!key)
                return;
            acc[key] = columns[index];
        });
        return acc;
    }, {});
}
