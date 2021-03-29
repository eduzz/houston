# Lista

### Importação

```js
import List from '@eduzz/houston-ui/List';
```

### Uso

```jsx
<List stripedRows>
  <List.Item>
    <List.Left icon={<LeftIcon />} />
    <List.Title>Título Exemplo</List.Title>
    <List.Right icon={<RightIcon />} onClick={handleClick} />
  </List.Item>
  <List.Item>
    <List.Left image={<Image />} />
    <List.Title>Título Exemplo</List.Title>
    <List.Title>Subtítulo Exemplo</List.Title>
    <List.Right text='Texto exemplo' onClick={(...args) => handleClick(args)} />
  </List.Item>
  <List.Item>
    <List.Left image='www.avatar.com/url' />
    <List.Title>Título Exemplo</List.Title>
    <List.Title>Subtítulo Exemplo</List.Title>
  </List.Item>
</List>
```

### List props disponíveis

| prop        | tipe      | obrigatório | padrão  | descrição |
|-------------|-----------|-------------|---------|-----------|
| stripedRows | `boolean` | false       | `false` | -         |


### List.Item props disponíveis

| prop     | tipe              | obrigatório | padrão | descrição |
|----------|-------------------|-------------|--------|-----------|
| children | `React.ReactNode` | true        | -      | -         |


### List.Left props disponíveis

| prop  | tipe              | obrigatório | padrão | descrição                             |
|-------|-------------------|-------------|--------|---------------------------------------|
| icon  | `React.ReactNode` | false       | -      | -                                     |
| image | `React.ReactNode` | false       | -      | Só será exibido se a prop icon não possuir valor |


### List.Title props disponíveis

| prop     | tipe              | obrigatório | padrão | descrição |
|----------|-------------------|-------------|--------|-----------|
| children | `React.ReactNode` | true       | -      | -         |


### List.Subtitle props available

| prop     | tipe              | obrigatório | padrão | descrição |
|----------|-------------------|-------------|--------|-----------|
| children | `React.ReactNode` | true       | -      | -         |


### List.Right props disponíveis

| prop    | tipe                                                                                 | obrigatório | padrão | descrição |
|---------|--------------------------------------------------------------------------------------|-------------|--------|-----------|
| icon    | `React.ReactNode`                                                                    | false       | -      | -         |
| onClick | `React.MouseEventHandler<HTMLButtonElement | HTMLDivElement | HTMLParagraphElement>` | false       | -      | -         |
| text    | `string`                                                                             | false       | -      | Só será exibido se a prop icon não possuir valor        |


