import React, { memo } from 'react';

import Table from '@eduzz/houston-ui/Table';

const TableActionExample = memo(() => {
  return (
    <Table>
      <Table.Column field='id' label='ID' />
      <Table.Column field='product' label='Produto' />
      <Table.Column field='owner' label='Produtor' />
      <Table.Column field='value' label='Valor' align='right' />

      <Table.Row data={{ id: 1, product: 'Produto teste ' }}>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>Produto teste</Table.Cell>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell align='right'>R$ 120,00</Table.Cell>
      </Table.Row>

      <Table.Row data={{ id: 2, product: 'Produto teste ' }}>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>Produto teste</Table.Cell>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell align='right'>R$ 100,00</Table.Cell>
      </Table.Row>

      <Table.Row data={{ id: 3, product: 'Produto teste ' }}>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Produto teste</Table.Cell>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell align='right'>R$ 200,20</Table.Cell>

        {/* ações especificas */}
        <Table.Actions>
          <Table.Option>Ação especial</Table.Option>
          <Table.Option>Editar</Table.Option>
          <Table.Option>Remover</Table.Option>
        </Table.Actions>
      </Table.Row>

      {/* ações padrão */}
      <Table.Actions align='right' label='*'>
        <Table.Option onClick={row => console.log(row)}>Editar</Table.Option>
        <Table.Option>Remover</Table.Option>
      </Table.Actions>
    </Table>
  );
});

export default TableActionExample;
