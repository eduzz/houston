import React, { memo } from 'react';

import Table from '@eduzz/houston-ui/Table';

const TableCollpaseExample = memo(() => {
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

      <Table.Row data={{ id: 2, product: 'Produto teste' }}>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>Produto teste</Table.Cell>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell align='right'>R$ 100,00</Table.Cell>

        <Table.Collapse>
          <Table.Column field='date' label='Data' />
          <Table.Column field='sales' label='Vendas' />

          <Table.Row>
            <Table.Cell>29/03</Table.Cell>
            <Table.Cell>20 vendas</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>28/03</Table.Cell>
            <Table.Cell>170 vendas</Table.Cell>
          </Table.Row>
        </Table.Collapse>
      </Table.Row>

      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Produto teste</Table.Cell>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell align='right'>R$ 200,20</Table.Cell>
      </Table.Row>
    </Table>
  );
});

export default TableCollpaseExample;
