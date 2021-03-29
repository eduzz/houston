/* eslint-disable max-lines */
import React, { Fragment, memo, useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import VisibilityIcon from '@material-ui/icons/Visibility';

import CheckboxField from '@eduzz/houston-ui/Forms/Checkbox';
import Column from '@eduzz/houston-ui/Grid/Column';
import Row from '@eduzz/houston-ui/Grid/Row';
import Table from '@eduzz/houston-ui/Table';
import { ITableColumnProps } from '@eduzz/houston-ui/Table/Column';
import { ITableSortable } from '@eduzz/houston-ui/Table/interfaces';

interface IRowValue {
  id: number;
  date: string;
  product: string;
  client: string;
  value: string;
}

const TablePage = memo(() => {
  const [loading, setLoading] = useState<boolean>(true);
  const [collapseLoading, setCollapseLoading] = useState<boolean>(true);

  const [small, setSmall] = useState<boolean>(false);
  const [fixedHeader, setFixedHeader] = useState<boolean>(false);
  const [hideRows, setHideRows] = useState<boolean>(false);
  const [pagination, setPagination] = useState<boolean>(false);
  const [collapse, setCollapse] = useState<boolean>(false);
  const [paginationTable, setPaginationTable] = useState({ page: 1, perPage: 5, total: 24 });

  const headTable: ITableColumnProps[] = [
    { field: 'select', label: <CheckboxField label='' name='check-all' margin='none' />, width: 50 },
    { field: 'date', label: 'Data', sortable: true, fixed: true },
    { field: 'product', label: 'Produto', sortable: true },
    { field: 'client', label: 'Cliente', sortable: true },
    { field: 'value', label: 'Valor', align: 'right', fixed: true }
  ];

  const headTableCollapse: Partial<ITableColumnProps[]> = [
    { field: 'date', label: 'Data' },
    { field: 'product', label: 'Produto' },
    { field: 'value', label: 'Bla Bla' }
  ];

  const rows: IRowValue[] = [
    {
      id: 1,
      date: '20/01/21',
      product:
        // eslint-disable-next-line max-len
        'Lorem Ipsum Dolor, Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum',
      client: 'John Doe',
      value: 'R$ 100,00'
    },
    {
      id: 2,
      date: '21/01/21',
      product: 'Lorem Ipsum Dolor 123',
      client: 'John Doe 123',
      value: 'R$ 150,00'
    },
    {
      id: 3,
      date: '22/01/21',
      product: 'Lorem Ipsum Dolor 321',
      client: 'John Doe 321',
      value: 'R$ 250,00'
    },
    {
      id: 4,
      date: '22/01/21',
      product: 'Lorem Ipsum Dolor 321',
      client: 'John Doe 321',
      value: 'R$ 250,00'
    },
    {
      id: 5,
      date: '22/01/21',
      product: 'Lorem Ipsum Dolor 321',
      client: 'John Doe 321',
      value: 'R$ 250,00'
    },
    {
      id: 6,
      date: '22/01/21',
      product: 'Lorem Ipsum Dolor 321',
      client: 'John Doe 321',
      value: 'R$ 250,00'
    }
  ];

  const handleClick = useCallback((data: IRowValue) => {
    console.log(data);
  }, []);

  const handleSortable = useCallback((sortable: ITableSortable) => {
    console.log(sortable);
  }, []);

  const getData = useCallback(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleCollapse = useCallback((data: unknown) => {
    console.log(data);

    setTimeout(() => {
      setCollapseLoading(false);
    }, 2000);
  }, []);

  const handleChangeRowsPerPage = useCallback((perPage: number) => {
    setPaginationTable(pagination => ({ ...pagination, perPage }));
    console.log('perPage ', perPage);
  }, []);

  const handleChangeGoToPage = useCallback((page: number) => {
    console.log('go to page ', page);
    setPaginationTable(pagination => ({ ...pagination, page }));
  }, []);

  const handleChangePage = useCallback((page: number) => {
    setPaginationTable(pagination => ({ ...pagination, page }));
    console.log('change page ', page);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Fragment>
      <Row>
        <Column xs={12}>
          <CheckboxField
            label='Table small'
            name='size'
            value={small}
            onChange={(_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setSmall(checked)}
          />

          <CheckboxField
            label='Fixed Header'
            name='fixedHeader'
            value={fixedHeader}
            onChange={(_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setFixedHeader(checked)}
          />

          <CheckboxField
            label='Hide rows'
            name='hideRows'
            value={hideRows}
            onChange={(_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setHideRows(checked)}
          />

          <CheckboxField
            label='Pagination'
            name='pagination'
            value={pagination}
            onChange={(_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setPagination(checked)}
          />

          <CheckboxField
            label='Collapse Items'
            name='collapse'
            value={collapse}
            onChange={(_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setCollapse(checked)}
          />
        </Column>
      </Row>

      <Row>
        <Column xs={12}>
          <Table
            loading={loading}
            onSortable={handleSortable}
            size={small ? 'small' : 'medium'}
            stickyHeader={fixedHeader}
            maxHeight={fixedHeader && 300}
            messages={{
              empty: 'Algum conteúdo vai aqui, quando não houver data.'
            }}
          >
            {headTable.map((column, index) => (
              <Table.Column key={`th-${index}`} {...column} />
            ))}

            {(hideRows ? [] : rows).map((row, index) => (
              <Table.Row key={`row-${index}`} data={row}>
                <Table.Cell>
                  <CheckboxField label='' name='check' margin='none' />
                </Table.Cell>
                <Table.Cell>{row.date}</Table.Cell>
                <Table.Cell>{row.product}</Table.Cell>
                <Table.Cell>{row.client}</Table.Cell>
                <Table.Cell align='right'>{row.value}</Table.Cell>

                {/* specific actions */}
                {index === 2 && (
                  <Table.Actions>
                    <Table.Option icon={<TagFacesIcon />} onClick={handleClick}>
                      Opção diferenciada
                    </Table.Option>
                    <Table.Option onClick={handleClick}>Detalhes</Table.Option>
                    <Table.Option onClick={handleClick}>Editar</Table.Option>
                    <Table.Option onClick={handleClick}>Excluir</Table.Option>
                  </Table.Actions>
                )}

                {/* collapse */}
                {collapse && (index === 2 || index === 4) && (
                  <Table.Collapse loading={collapseLoading} onCollapse={handleCollapse}>
                    {headTableCollapse.map((column, index) => (
                      <Table.Column key={`collapse-th-${index}`} {...column} />
                    ))}

                    <Table.Row data={row}>
                      <Table.Cell>22/12/2222</Table.Cell>
                      <Table.Cell>Produto de teste</Table.Cell>
                      <Table.Cell>Outro dado</Table.Cell>
                    </Table.Row>

                    <Table.Row data={row}>
                      <Table.Cell>23/12/2333</Table.Cell>
                      <Table.Cell>Produto de teste</Table.Cell>
                      <Table.Cell>Outro dado</Table.Cell>

                      {/* specific actions */}
                      {index === 2 && (
                        <Table.Actions>
                          <Table.Option icon={<TagFacesIcon />} onClick={handleClick}>
                            Opção diferenciada
                          </Table.Option>
                          <Table.Option onClick={handleClick}>Excluir</Table.Option>
                        </Table.Actions>
                      )}
                    </Table.Row>

                    {/* actions collapse */}
                    <Table.Actions align='right'>
                      <Table.Option onClick={handleClick}>Atualizar</Table.Option>
                      <Table.Option onClick={handleClick}>Excluir</Table.Option>
                    </Table.Actions>
                  </Table.Collapse>
                )}
              </Table.Row>
            ))}

            {/* generic actions */}
            <Table.Actions align='right'>
              <Table.Option icon={<span>a</span>} onClick={handleClick}>
                React Node Diff
              </Table.Option>
              <Table.Option icon={<VisibilityIcon />} disabled={true} onClick={handleClick}>
                Detalhes
              </Table.Option>
              <Table.Option icon={<EditIcon />} hide={(row: IRowValue) => row.id === 1} onClick={handleClick}>
                Editar
              </Table.Option>
              <Table.Option icon={<DeleteIcon />} onClick={handleClick}>
                Excluir
              </Table.Option>
            </Table.Actions>

            {/* pagination */}
            {pagination && (
              <Table.Pagination
                {...paginationTable}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onChangeGoToPage={handleChangeGoToPage}
                onChangePage={handleChangePage}
              />
            )}
          </Table>
        </Column>
      </Row>
    </Fragment>
  );
});

export default TablePage;
