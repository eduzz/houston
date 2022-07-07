interface IRowMap {
  [rowKey: string]: string;
}

interface ICallback {
  (rowMap: IRowMap): void;
}

export function bindMutationObserver(table: HTMLTableElement, callback: ICallback) {
  let timeout: any;

  const handleMutation = () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      const headerLabels = getTableHeaderLabels(table);

      const hasLabels = !!Object.keys(headerLabels).length;
      if (!hasLabels) return;

      callback(headerLabels);
    }, 300);
  };

  handleMutation();
  const observer = new MutationObserver(handleMutation);
  observer.observe(table, { childList: true, subtree: true });

  return () => observer.disconnect();
}

function getTableHeaderLabels(table: HTMLTableElement): IRowMap {
  const rows = Array.from(table.rows);

  const columns = Array.from(rows.shift()?.cells ?? []).reduce((acc, column) => {
    if (column.tagName.toLowerCase() !== 'th') {
      return acc;
    }

    acc.push(column.textContent ?? '');
    return acc;
  }, [] as string[]);

  return rows.reduce((acc, row) => {
    Array.from(row.cells).forEach((cell, index) => {
      const key = cell.getAttribute('cell-key');

      if (!key) return;
      acc[key] = columns[index];
    });

    return acc;
  }, {} as IRowMap);
}
