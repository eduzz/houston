interface ICallback {
  (rowMap: { [rowKey: string]: string }): void;
}

export function bindMutationObserver(table: HTMLTableElement, callback: ICallback) {
  let timeout: any;

  const observer = new MutationObserver(() => {
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

      const result = rows.reduce((acc, row) => {
        Array.from(row.cells).forEach((cell, index) => {
          const key = cell.getAttribute('cell-key');

          if (!key) return;
          acc[key] = columns[index];
        });

        return acc;
      }, {} as { [rowKey: string]: string });

      console.log(result);
      callback(result);
    }, 500);
  });

  observer.observe(table, { childList: true, subtree: true });
  return () => observer.disconnect();
}
