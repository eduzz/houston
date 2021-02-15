# Table

### Import

```js
import Table from '@eduzz/houston-ui/Table';
```

### Use

```jsx
<Table loading={loading} onSortable={handleSortable}>
  <Table.Column field='date' label='Date' sortable />
  <Table.Column field='product' label='Produto' sortable />
  <Table.Column field='client' label='Cliente' sortable />
  <Table.Column field='value' label='Preço' align='right' />

  {rows.map(row => (
    <Table.Row key={`row-${row.id}`} data={row}>
      <Table.Cell>{row.date}</Table.Cell>
      <Table.Cell truncate={20}>{row.product}</Table.Cell>
      <Table.Cell>{row.client}</Table.Cell>
      <Table.Cell align='right'>{row.value}</Table.Cell>

      {/* specific actions */}
      {row.type === 2 && (
        <Table.Actions>
          <Table.Option disable={row.id === 1} onClick={handleClick}>Opção diferenciada</Table.Option>
          <Table.Option onClick={handleClick}>Detalhes</Table.Option>
          <Table.Option onClick={handleClick}>Editar</Table.Option>
          <Table.Option onClick={handleClick}>Excluir</Table.Option>
        </Table.Actions>
      )}
    </Table.Row>
  ))}

  {/* generic actions */}
  <Table.Actions align='right'>
    <Table.Option disabled={true} onClick={handleClick}>
      Detalhes
    </Table.Option>
    <Table.Option hide={row => row.id === 5} onClick={handleClick}>
      Editar
    </Table.Option>
    <Table.Option onClick={handleClick}>Excluir</Table.Option>
  </Table.Actions>

  {/* pagination */}
  <Table.Pagination
    page={1}
    perPage={20}
    totalPages={3}
    onChangeRowsPerPage={handleChangeRowsPerPage}
    onChangeGoToPage={handleChangeGoToPage}
    onChangePage={handleChangePage}
  />
</Table>
```

### Table props available

| prop         | type                                    | required | default  | description                                            |
|--------------|-----------------------------------------|----------|----------|--------------------------------------------------------|
| loading      | `boolean`                               | false    | `false`  | -                                                      |
| onSortable   | `(ordernation: ITableSortable) => void` | false    | -        | Function called when clicked on a `sortable` column    |
| stickyHeader | `boolean`                               | false    | `false`  | Fixed header, maximum height (`maxHeight`) is required |
| size         | `Size`                                  | false    | `medium` | -                                                      |
| maxHeight    | `number`                                | false    | -        | -                                                      |
| messages     | `ITableMessages`                        | false    | `false`  | Messages for some internal events                      |


### Table.Column props available

| prop     | type              | required | default | description                                                                                                |
|----------|-------------------|----------|---------|------------------------------------------------------------------------------------------------------------|
| field    | `string`          | true     | -       | Unique key                                                                                                 |
| label    | `React.ReactNode` | true     | -       | -                                                                                                          |
| width    | `number`          | false    | -       | -                                                                                                          |
| align    | `ITableAlign`     | false    | `left`  | -                                                                                                          |
| sortable | `boolean`         | false    | `false` | When `true`, when clicking on the column, calls the `onSortable` function passing the `field` and the sort |


### Table.Row props available

| prop | type      | required | default | description                                                               |
|------|-----------|----------|---------|---------------------------------------------------------------------------|
| data | `unknown` | true     | -       | Row values, used only when there are actions (Table.Actions) in the table |


### Table.Cell props available

| prop     | type          | required | default | description                                         |
|----------|---------------|----------|---------|-----------------------------------------------------|
| align    | `ITableAlign` | false    | `left`  | -                                                   |
| truncate | `number`      | false    | -       | When filled, we cut the text according to the value |
| colSpan  | `number`      | false    | -       | -                                                   |


### Table.Actions props available

| prop  | type                       | required | default | description |
|-------|----------------------------|----------|---------|-------------|
| label | `React.ReactNode`, `false` | false    | `Ações` | -           |
| align | `ITableAlign`              | false    | `left`  |             |


### Table.Options props available

| prop     | type                                    | required | default | description                           |
|----------|-----------------------------------------|----------|---------|---------------------------------------|
| onClick  | `(data: unknown) => void`               | false    | -       | Function triggered on click           |
| disabled | `(data: unknown) => boolean`, `boolean` | false    | `false` | -                                     |
| hide     | `(data: unknown) => boolean`, `boolean` | false    | `false` | Controls the rendering of the element |
| icon     | `React.ReactNode`                       | false    | -       | -                                     |


### Table.Pagination props available

| prop                | type                                                   | required | default                 | description                                                     |
|---------------------|--------------------------------------------------------|----------|-------------------------|-----------------------------------------------------------------|
| page                | `number`                                               | true     | -                       | -                                                               |
| perPage             | `number`                                               | true     | -                       | -                                                               |
| totalPages          | `number`                                               | true     | -                       | -                                                               |
| optionsPerPage      | `number[]`                                             | false    | `[15, 25, 35, 50, 100]` | Values ​​on select items per page                                 |
| labelItensPerPage   | `string`                                               | false    | `Itens por página:`     | -                                                               |
| onChangeRowsPerPage | `onChangeRowsPerPage?: (rowsPerPage: number) => void;` | false    | -                       | If the prop does not exist, the component will not be displayed |
| onChangeGoToPage    | `onChangeGoToPage?: (goToPage: number) => void;`       | false    | -                       | If the prop does not exist, the component will not be displayed |
| onChangePage        | `onChangePage?: (page: number) => void;`               | false    | -                       | If the prop does not exist, the component will not be displayed |


### Table.Collapse props available

| prop       | type         | required | default | description |
|------------|--------------|----------|---------|-------------|
| loading    | `boolean`    | false    | -       | -           |
| onCollapse | `() => void` | false    | -       | -           |
