# Table

### Import

```js
import Table from '@eduzz/houston-ui/Table';
```

### Use

```jsx
<Table>
  {columns.map((column, index) => (
    <Table.Column key={`column-${index}`} {...column} />
  ))}

  {rows.map((row, index) => (
    <Table.Row key={`row-${index}`} data={row}>
      <Table.Cell>{row.date}</Table.Cell>
      <Table.Cell truncate={20}>{row.product}</Table.Cell>
      <Table.Cell>{row.client}</Table.Cell>
      <Table.Cell align='right'>{row.value}</Table.Cell>

      {/* specific actions */}
      {row.type === 2 && (
        <Table.Actions>
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
    <Table.Option disabled={true} onClick={handleClick}>
      Detalhes
    </Table.Option>
    <Table.Option hide={(row: IRowValue) => row.id === 5} onClick={handleClick}>
      Editar
    </Table.Option>
    <Table.Option onClick={handleClick}>Excluir</Table.Option>
  </Table.Actions>
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


### Table Column props available

| prop     | type              | required | default | description                                                                                                |
|----------|-------------------|----------|---------|------------------------------------------------------------------------------------------------------------|
| field    | `string`          | true     | -       | Unique key                                                                                                 |
| label    | `React.ReactNode` | true     | -       | -                                                                                                          |
| width    | `number`          | false    | -       | -                                                                                                          |
| align    | `ITableAlign`     | false    | `left`  | -                                                                                                          |
| sortable | `boolean`         | false    | `false` | When `true`, when clicking on the column, calls the `onSortable` function passing the `field` and the sort |


### Table Row props available

| prop | type      | required | default | description |
|------|-----------|----------|---------|-------------|
| data | `unknown` | true     | -       | Row values  |


### Table Cell props available

| prop     | type          | required | default | description                                         |
|----------|---------------|----------|---------|-----------------------------------------------------|
| align    | `ITableAlign` | false    | `left`  | -                                                   |
| truncate | `number`      | false    | -       | When filled, we cut the text according to the value |
| colSpan  | `number`      | false    | -       | -                                                   |


### Table Actions props available

| prop  | type                       | required | default | description |
|-------|----------------------------|----------|---------|-------------|
| label | `React.ReactNode`, `false` | false    | `Ações` | -           |
| align | `ITableAlign`              | false    | `left`  |             |


### Table Options props available

| prop     | type                                    | required | default | description                           |
|----------|-----------------------------------------|----------|---------|---------------------------------------|
| onClick  | `(data: unknown) => void`               | false    | -       | Function triggered on click           |
| disabled | `(data: unknown) => boolean`, `boolean` | false    | `false` | -                                     |
| hide     | `(data: unknown) => boolean`, `boolean` | false    | `false` | Controls the rendering of the element |
