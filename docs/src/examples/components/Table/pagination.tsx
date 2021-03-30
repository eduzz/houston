import React, { memo } from 'react';

import Table from '@eduzz/houston-ui/Table';

const TablePagination = memo(() => {
  return (
    <Table>
      <Table.Column field='id' label='ID' />
      <Table.Column field='product' label='Produto' />
      <Table.Column field='owner' label='Produtor' />
      <Table.Column field='value' label='Valor' align='right' />

      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>Produto teste</Table.Cell>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell align='right'>R$ 120,00</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>Produto teste</Table.Cell>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell align='right'>R$ 100,00</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Produto teste</Table.Cell>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell align='right'>R$ 200,20</Table.Cell>
      </Table.Row>

      <Table.Pagination page={1} perPage={5} total={20} onChangePage={page => console.log(page)} />
    </Table>
  );
});

export default TablePagination;
