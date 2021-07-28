interface ICallback {
  (rowMap: { [rowKey: string]: string }): void;
}

export function bindMutationObserver(table: HTMLTableElement, callback: ICallback) {
  let timeout: any;

  const handleMutation = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!table.rows.length) return;

      const rows = Array.from(table.rows);
      const columns = Array.from(rows.shift().cells).reduce((acc, column) => {
        if (column.tagName.toLowerCase() !== 'th') {
          return acc;
        }

        acc.push(column.textContent);
        return acc;
      }, []);

      if (!columns.length) return;

      const result = rows.reduce((acc, row) => {
        Array.from(row.cells).forEach((cell, index) => {
          const key = cell.getAttribute('cell-key');

          if (!key) return;
          acc[key] = columns[index];
        });

        return acc;
      }, {} as { [rowKey: string]: string });

      if (!Object.keys(result).length) return;

      callback(result);
    }, 300);
  };

  handleMutation();
  const observer = new MutationObserver(handleMutation);
  observer.observe(table, { childList: true, subtree: true });
  return () => observer.disconnect();
}
