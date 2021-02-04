import React, { Fragment, memo, useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TagFacesIcon from '@material-ui/icons/TagFaces';

import Button from '@eduzz/houston-ui/Button';
import Column from '@eduzz/houston-ui/Grid/Column';
import Row from '@eduzz/houston-ui/Grid/Row';
import Table from '@eduzz/houston-ui/Table';
import { ITableColumnProps } from '@eduzz/houston-ui/Table/Column';
import { ITableSortable } from '@eduzz/houston-ui/Table/interfaces';

import Toolbar from 'components/Layout/Toolbar';

interface IRowValue {
  id: number;
  date: string;
  product: string;
  client: string;
  value: string;
}

const TablePage = memo(() => {
  const [loading, setLoading] = useState<boolean>(true);

  const [size, setSize] = useState<'small' | 'medium'>('medium');
  const [fixedHeader, setFixedHeader] = useState<boolean>(false);
  const [showRows, setShowRows] = useState<boolean>(true);

  const headTable: ITableColumnProps[] = [
    { field: 'date', label: 'Data', sortable: true },
    { field: 'product', label: 'Produto', sortable: true },
    { field: 'client', label: 'Cliente', sortable: true },
    { field: 'value', label: 'Valor', align: 'right' }
  ];

  const rows: IRowValue[] = [
    {
      id: 1,
      date: '20/01/21',
      product: 'Lorem Ipsum Dolor',
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

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Fragment>
      <Toolbar title='Table' />

      <Card>
        <CardContent>
          <Row type='cozy' fluid>
            <Column md={3} xs={12}>
              <FormLabel>Table size</FormLabel>
              <RadioGroup
                name='size'
                value={size.toString()}
                onChange={(_: React.ChangeEvent<HTMLInputElement>, value: 'small' | 'medium') => setSize(value)}
                row
              >
                {['small', 'medium'].map(value => (
                  <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                ))}
              </RadioGroup>
            </Column>

            <Column md={3} xs={12}>
              <FormLabel>Fixed header</FormLabel>
              <RadioGroup
                name='fixedHeader'
                value={fixedHeader ? 'true' : 'false'}
                onChange={(_: React.ChangeEvent<HTMLInputElement>, value: string) => setFixedHeader(value === 'true')}
                row
              >
                {['true', 'false'].map((value, index) => (
                  <FormControlLabel key={`option-fixed-${index}`} value={value} control={<Radio />} label={value} />
                ))}
              </RadioGroup>
            </Column>

            <Column md={3} xs={12}>
              <FormLabel>Show rows</FormLabel>
              <RadioGroup
                name='rows'
                value={showRows ? 'true' : 'false'}
                onChange={(_: React.ChangeEvent<HTMLInputElement>, value: string) => setShowRows(value === 'true')}
                row
              >
                {['true', 'false'].map((value, index) => (
                  <FormControlLabel key={`option-rows-${index}`} value={value} control={<Radio />} label={value} />
                ))}
              </RadioGroup>
            </Column>
          </Row>
        </CardContent>

        <CardContent>
          <Row type='cozy' fluid>
            <Column xs={12}>
              <Table
                loading={loading}
                onSortable={handleSortable}
                size={size}
                stickyHeader={fixedHeader}
                maxHeight={fixedHeader && 300}
                messages={{
                  noData: 'Algum conteúdo vai aqui, quando não houver data.'
                }}
              >
                {headTable.map((column, index) => (
                  <Table.Column key={`th-${index}`} {...column} />
                ))}

                {(!showRows ? [] : [...rows, ...rows]).map((row, index) => (
                  <Table.Row key={`row-${index}`} data={row}>
                    <Table.Cell>{row.date}</Table.Cell>
                    <Table.Cell truncate={20}>{row.product}</Table.Cell>
                    <Table.Cell>{row.client}</Table.Cell>
                    <Table.Cell align='right'>{row.value}</Table.Cell>

                    {index === 2 && (
                      <Table.Actions>
                        {/* specific actions */}
                        <Table.Option onClick={handleClick}>Opção diferenciada</Table.Option>
                        <Table.Option onClick={handleClick}>Detalhes</Table.Option>
                        <Table.Option onClick={handleClick}>Editar</Table.Option>
                        <Table.Option onClick={handleClick}>Excluir</Table.Option>
                      </Table.Actions>
                    )}
                  </Table.Row>
                ))}

                {/* generic actions */}
                <Table.Actions align='right'>
                  <Table.Option icon={<TagFacesIcon />} disabled={true} onClick={handleClick}>
                    Detalhes
                  </Table.Option>
                  <Table.Option icon={<TagFacesIcon />} hide={(row: IRowValue) => row.id === 5} onClick={handleClick}>
                    Editar
                  </Table.Option>
                  <Table.Option icon={<TagFacesIcon />} onClick={handleClick}>
                    Excluir
                  </Table.Option>
                </Table.Actions>
              </Table>
            </Column>
          </Row>
        </CardContent>

        <CardContent>
          <Button
            onClick={() =>
              window.open('https://github.com/eduzz/houston/tree/master/packages/ui-components/Table', '_blank')
            }
          >
            Documentation
          </Button>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default TablePage;
