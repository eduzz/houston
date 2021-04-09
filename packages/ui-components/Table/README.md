# Table

Tabelas exibem conjuntos de dados.

### Importação

```js
import Table from '@eduzz/houston-ui/Table';
```

### Exemplo

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

### Table props

| prop         | tipo                                    | obrigatório | padrão   | descrição                                               |
|--------------|-----------------------------------------|-------------|----------|---------------------------------------------------------|
| loading      | `boolean`                               | `false`     | `false`  | -                                                       |
| onSortable   | `(ordernation: ITableSortable) => void` | `false`     | -        | Função chamada quando clicada em uma coluna `sortable`. |
| stickyHeader | `boolean`                               | `false`     | `false`  | Cabeçalho fixo, prop `maxHeight`) é necessário.         |
| size         | `Size`                                  | `false`     | `medium` | -                                                       |
| maxHeight    | `number`                                | `false`     | -        | -                                                       |
| messages     | `ITableMessages`                        | `false`     | `false`  | Mensagens para alguns eventos internos.                 |


### Table.Column props

| prop     | tipo              | obrigatório | padrão  | descrição                                                                                         |
|----------|-------------------|-------------|---------|---------------------------------------------------------------------------------------------------|
| field    | `string`          | `true`      | -       | Chave única.                                                                                      |
| label    | `React.ReactNode` | `true`      | -       | -                                                                                                 |
| width    | `number`          | `false`     | -       | -                                                                                                 |
| align    | `ITableAlign`     | `false`     | `left`  | -                                                                                                 |
| sortable | `boolean`         | `false`     | `false` | Quando `true`, ao clicar na coluna, chama a função` onSortable` passando o `field` e a ordenação. |


### Table.Row props

| prop | tipo      | obrigatório | padrão | descrição                                                                    |
|------|-----------|-------------|--------|------------------------------------------------------------------------------|
| data | `unknown` | `true`      | -      | Valores de linha, usados ​​apenas quando há ações (Table.Actions) na tabela. |


### Table.Cell props

| prop     | tipo          | obrigatório | padrão | descrição                                                                                 |
|----------|---------------|-------------|--------|-------------------------------------------------------------------------------------------|
| align    | `ITableAlign` | `false`     | `left` | -                                                                                         |
| truncate | `number`      | `false`     | -      | Quando preenchido, limitamos o valor de `children` (se for string) de acordo com o valor. |
| colSpan  | `number`      | `false`     | -      | -                                                                                         |


### Table.Actions props

| prop  | tipo                       | obrigatório | padrão  | descrição |
|-------|----------------------------|-------------|---------|-----------|
| label | `React.ReactNode`, `false` | `false`     | `Ações` | -         |
| align | `ITableAlign`              | `false`     | `left`  |           |


### Table.Options props

| prop     | tipo                                    | obrigatório | padrão  | descrição                            |
|----------|-----------------------------------------|-------------|---------|--------------------------------------|
| onClick  | `(data: unknown) => void`               | `false`     | -       | -                                    |
| disabled | `(data: unknown) => boolean`, `boolean` | `false`     | `false` | -                                    |
| hide     | `(data: unknown) => boolean`, `boolean` | `false`     | `false` | Controla a renderização do elemento. |
| icon     | `React.ReactNode`                       | `false`     | -       | -                                    |


### Table.Pagination props

| prop                | tipo                                                   | obrigatório | padrão                  | descrição                                             |
|---------------------|--------------------------------------------------------|-------------|-------------------------|-------------------------------------------------------|
| page                | `number`                                               | `true`      | -                       | -                                                     |
| perPage             | `number`                                               | `true`      | -                       | -                                                     |
| totalPages          | `number`                                               | `true`      | -                       | -                                                     |
| optionsPerPage      | `number[]`                                             | `false`     | `[15, 25, 35, 50, 100]` | -                                                     |
| labelItensPerPage   | `React.ReactNode`                                      | `false`     | `Itens por página:`     | -                                                     |
| onChangeRowsPerPage | `onChangeRowsPerPage?: (rowsPerPage: number) => void;` | `false`     | -                       | Se a prop não existir, o componente não será exibido. |
| onChangeGoToPage    | `onChangeGoToPage?: (goToPage: number) => void;`       | `false`     | -                       | Se a prop não existir, o componente não será exibido. |
| onChangePage        | `onChangePage?: (page: number) => void;`               | `false`     | -                       | Se a prop não existir, o componente não será exibido. |


### Table.Collapse props

| prop       | tipo                       | obrigatório | padrão  | descrição                                                      |
|------------|----------------------------|-------------|---------|----------------------------------------------------------------|
| loading    | `boolean`                  | `false`     | -       | -                                                              |
| onCollapse | `(data?: unknown) => void` | `false`     | -       | Função chamada ao clicar para abrir / fechar o item recolhido. |
| type       | `list`, `table`            | `false`     | `table` | Se `list` não renderizará as colunas e bordas inferiores.      |
