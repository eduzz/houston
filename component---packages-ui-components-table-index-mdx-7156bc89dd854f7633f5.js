(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{xMMF:function(e,t,l){"use strict";l.r(t),l.d(t,"_frontmatter",(function(){return d})),l.d(t,"default",(function(){return m}));var a=l("cxan"),n=l("+wNj"),b=(l("ERkP"),l("ZVZ0")),r=l("9Rvw"),i=l("qbsg"),o=l("DnBU"),d=(l("l1C2"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/ui-components/Table/index.mdx"}});var c={_frontmatter:d},p=r.a;function m(e){var t,l,m,O,u,j=e.components,s=Object(n.a)(e,["components"]);return Object(b.b)(p,Object(a.a)({},c,s,{components:j,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"tabela"},"Tabela"),Object(b.b)("p",null,"Tabelas apresentam informações de uma forma fácil de visualizar, de modo que os usuários podem\nprocurar por padrões e percepções."),Object(b.b)("h3",{id:"importação"},"Importação"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"import Table from '@eduzz/houston-ui/Table';\n")),Object(b.b)("h3",{id:"tabela-simples"},"Tabela simples"),Object(b.b)(i.c,{__position:0,__code:'<Table>\n  <Table.Column field="id" label="ID" />\n  <Table.Column field="product" label="Produto" />\n  <Table.Column field="owner" label="Produtor" />\n  <Table.Column field="value" label="Valor" align="right" />\n  <Table.Row>\n    <Table.Cell xs={{ size: 0 }}>1</Table.Cell>\n    <Table.Cell xs={{ size: 12, margin: \'0 0 8px 0\', order: 1 }}>\n      Lorem ipsum dolor sit amet, consectetur\n    </Table.Cell>\n    <Table.Cell xs={{ size: 6, order: 3, align: \'right\' }}>\n      John Doe\n    </Table.Cell>\n    <Table.Cell align="right" xs={{ size: 6, order: 2, align: \'left\' }}>\n      R$ 120,00\n    </Table.Cell>\n  </Table.Row>\n  <Table.Row>\n    <Table.Cell xs={{ size: 0 }}>2</Table.Cell>\n    <Table.Cell xs={{ size: 12, margin: \'0 0 8px 0\' }}>\n      Lorem ipsum dolor sit amet, consectetur\n    </Table.Cell>\n    <Table.Cell xs={{ size: 6 }}>John Doe</Table.Cell>\n    <Table.Cell align="right" xs={{ size: 6 }}>\n      R$ 100,00\n    </Table.Cell>\n  </Table.Row>\n  <Table.Row>\n    <Table.Cell xs={{ size: 0 }}>3</Table.Cell>\n    <Table.Cell xs={{ size: 12, margin: \'0 0 8px 0\' }}>\n      Lorem ipsum dolor sit amet, consectetur\n    </Table.Cell>\n    <Table.Cell xs={{ size: 6 }}>John Doe</Table.Cell>\n    <Table.Cell align="right" xs={{ size: 6 }}>\n      R$ 100,00\n    </Table.Cell>\n  </Table.Row>\n  <Table.Row>\n    <Table.Cell xs={{ size: 0 }}>4</Table.Cell>\n    <Table.Cell xs={{ size: 12, margin: \'0 0 8px 0\' }}>\n      Lorem ipsum dolor sit amet, consectetur\n    </Table.Cell>\n    <Table.Cell xs={{ size: 6 }}>John Doe</Table.Cell>\n    <Table.Cell align="right" xs={{ size: 6 }}>\n      R$ 100,00\n    </Table.Cell>\n  </Table.Row>\n  <Table.Pagination\n    page={1}\n    perPage={10}\n    total={20}\n    onChangePage={() => null}\n    onChangeRowsPerPage={() => null}\n    onChangeGoToPage={() => null}\n  />\n</Table>',__scope:(t={props:s,DefaultLayout:r.a,Playground:i.c,Table:o.a},t.DefaultLayout=r.a,t._frontmatter=d,t),mdxType:"Playground"},Object(b.b)(o.a,{mdxType:"Table"},Object(b.b)(o.a.Column,{field:"id",label:"ID"}),Object(b.b)(o.a.Column,{field:"product",label:"Produto"}),Object(b.b)(o.a.Column,{field:"owner",label:"Produtor"}),Object(b.b)(o.a.Column,{field:"value",label:"Valor",align:"right"}),Object(b.b)(o.a.Row,null,Object(b.b)(o.a.Cell,{xs:{size:0}},"1"),Object(b.b)(o.a.Cell,{xs:{size:12,margin:"0 0 8px 0",order:1}},"Lorem ipsum dolor sit amet, consectetur"),Object(b.b)(o.a.Cell,{xs:{size:6,order:3,align:"right"}},"John Doe"),Object(b.b)(o.a.Cell,{align:"right",xs:{size:6,order:2,align:"left"}},"R$ 120,00")),Object(b.b)(o.a.Row,null,Object(b.b)(o.a.Cell,{xs:{size:0}},"2"),Object(b.b)(o.a.Cell,{xs:{size:12,margin:"0 0 8px 0"}},"Lorem ipsum dolor sit amet, consectetur"),Object(b.b)(o.a.Cell,{xs:{size:6}},"John Doe"),Object(b.b)(o.a.Cell,{align:"right",xs:{size:6}},"R$ 100,00")),Object(b.b)(o.a.Row,null,Object(b.b)(o.a.Cell,{xs:{size:0}},"3"),Object(b.b)(o.a.Cell,{xs:{size:12,margin:"0 0 8px 0"}},"Lorem ipsum dolor sit amet, consectetur"),Object(b.b)(o.a.Cell,{xs:{size:6}},"John Doe"),Object(b.b)(o.a.Cell,{align:"right",xs:{size:6}},"R$ 100,00")),Object(b.b)(o.a.Row,null,Object(b.b)(o.a.Cell,{xs:{size:0}},"4"),Object(b.b)(o.a.Cell,{xs:{size:12,margin:"0 0 8px 0"}},"Lorem ipsum dolor sit amet, consectetur"),Object(b.b)(o.a.Cell,{xs:{size:6}},"John Doe"),Object(b.b)(o.a.Cell,{align:"right",xs:{size:6}},"R$ 100,00")),Object(b.b)(o.a.Pagination,{page:1,perPage:10,total:20,onChangePage:function(){return null},onChangeRowsPerPage:function(){return null},onChangeGoToPage:function(){return null}}))),Object(b.b)("h3",{id:"sem-dados"},"Sem dados"),Object(b.b)("p",null,"Mensagens customizadas para eventos internos."),Object(b.b)(i.c,{__position:1,__code:'<Table messages={{ empty: \'Minha mensagem customizada.\' }}>\n  <Table.Column field="id" label="ID" />\n  <Table.Column field="product" label="Produto" />\n  <Table.Column field="owner" label="Produtor" />\n  <Table.Column field="value" label="Valor" align="right" />\n</Table>',__scope:(l={props:s,DefaultLayout:r.a,Playground:i.c,Table:o.a},l.DefaultLayout=r.a,l._frontmatter=d,l),mdxType:"Playground"},Object(b.b)(o.a,{messages:{empty:"Minha mensagem customizada."},mdxType:"Table"},Object(b.b)(o.a.Column,{field:"id",label:"ID"}),Object(b.b)(o.a.Column,{field:"product",label:"Produto"}),Object(b.b)(o.a.Column,{field:"owner",label:"Produtor"}),Object(b.b)(o.a.Column,{field:"value",label:"Valor",align:"right"}))),Object(b.b)("h3",{id:"ações-personalizadas"},"Ações personalizadas"),Object(b.b)("p",null,"Ações genéricas ou individuais."),Object(b.b)(i.c,{__position:2,__code:'<Table>\n  <Table.Column field="id" label="ID" />\n  <Table.Column field="product" label="Produto" />\n  <Table.Column field="owner" label="Produtor" />\n  <Table.Column field="value" label="Valor" align="right" />\n  <Table.Row\n    data={{ id: 1, title: \'Lorem ipsum\', producer: \'John Doe\', value: 120 }}\n  >\n    <Table.Cell xs={{ size: 0 }}>1</Table.Cell>\n    <Table.Cell xs={{ size: 12, margin: \'0 0 8px 0\' }}>\n      Lorem ipsum dolor sit amet, consectetur\n    </Table.Cell>\n    <Table.Cell xs={{ size: 6 }}>John Doe</Table.Cell>\n    <Table.Cell align="right" xs={{ size: 6 }}>\n      R$ 120,00\n    </Table.Cell>\n  </Table.Row>\n  <Table.Row\n    data={{ id: 1, title: \'Lorem ipsum\', producer: \'John Doe\', value: 120 }}\n  >\n    <Table.Cell xs={{ size: 0 }}>2</Table.Cell>\n    <Table.Cell xs={{ size: 12, margin: \'0 0 8px 0\' }}>\n      Lorem ipsum dolor sit amet, consectetur\n    </Table.Cell>\n    <Table.Cell xs={{ size: 6 }}>John Doe</Table.Cell>\n    <Table.Cell align="right" xs={{ size: 6 }}>\n      R$ 100,00\n    </Table.Cell>\n    <Table.Actions align="right" label="*">\n      <Table.Option onClick={row => console.log(row)}>Editar</Table.Option>\n      <Table.Option>Opção especial</Table.Option>\n      <Table.Option>Remover</Table.Option>\n    </Table.Actions>\n  </Table.Row>\n  <Table.Actions align="right" label="*">\n    <Table.Option onClick={row => console.log(row)}>Editar</Table.Option>\n    <Table.Option>Remover</Table.Option>\n  </Table.Actions>\n</Table>',__scope:(m={props:s,DefaultLayout:r.a,Playground:i.c,Table:o.a},m.DefaultLayout=r.a,m._frontmatter=d,m),mdxType:"Playground"},Object(b.b)(o.a,{mdxType:"Table"},Object(b.b)(o.a.Column,{field:"id",label:"ID"}),Object(b.b)(o.a.Column,{field:"product",label:"Produto"}),Object(b.b)(o.a.Column,{field:"owner",label:"Produtor"}),Object(b.b)(o.a.Column,{field:"value",label:"Valor",align:"right"}),Object(b.b)(o.a.Row,{data:{id:1,title:"Lorem ipsum",producer:"John Doe",value:120}},Object(b.b)(o.a.Cell,{xs:{size:0}},"1"),Object(b.b)(o.a.Cell,{xs:{size:12,margin:"0 0 8px 0"}},"Lorem ipsum dolor sit amet, consectetur"),Object(b.b)(o.a.Cell,{xs:{size:6}},"John Doe"),Object(b.b)(o.a.Cell,{align:"right",xs:{size:6}},"R$ 120,00")),Object(b.b)(o.a.Row,{data:{id:1,title:"Lorem ipsum",producer:"John Doe",value:120}},Object(b.b)(o.a.Cell,{xs:{size:0}},"2"),Object(b.b)(o.a.Cell,{xs:{size:12,margin:"0 0 8px 0"}},"Lorem ipsum dolor sit amet, consectetur"),Object(b.b)(o.a.Cell,{xs:{size:6}},"John Doe"),Object(b.b)(o.a.Cell,{align:"right",xs:{size:6}},"R$ 100,00"),Object(b.b)(o.a.Actions,{align:"right",label:"*"},Object(b.b)(o.a.Option,{onClick:function(e){return console.log(e)}},"Editar"),Object(b.b)(o.a.Option,null,"Opção especial"),Object(b.b)(o.a.Option,null,"Remover"))),Object(b.b)(o.a.Actions,{align:"right",label:"*"},Object(b.b)(o.a.Option,{onClick:function(e){return console.log(e)}},"Editar"),Object(b.b)(o.a.Option,null,"Remover")))),Object(b.b)("h3",{id:"ordenação-de-colunas"},"Ordenação de colunas"),Object(b.b)("p",null,"Colunas com ordenações. É necessário a função ",Object(b.b)("inlineCode",{parentName:"p"},"onSortable"),". (Clique nas colunas)"),Object(b.b)(i.c,{__position:3,__code:'<Table onSortable={ordenation => console.log(ordenation)}>\n  <Table.Column field="id" label="ID" />\n  <Table.Column field="product" label="Produto" sortable />\n  <Table.Column field="owner" label="Produtor" sortable />\n  <Table.Column field="value" label="Valor" align="right" />\n  <Table.Row>\n    <Table.Cell>1</Table.Cell>\n    <Table.Cell>Produto teste 1</Table.Cell>\n    <Table.Cell>John Doe</Table.Cell>\n    <Table.Cell align="right">R$ 120,00</Table.Cell>\n  </Table.Row>\n  <Table.Row>\n    <Table.Cell>2</Table.Cell>\n    <Table.Cell>Produto teste 2</Table.Cell>\n    <Table.Cell>John Doe</Table.Cell>\n    <Table.Cell align="right">R$ 100,00</Table.Cell>\n  </Table.Row>\n  <Table.Row>\n    <Table.Cell>3</Table.Cell>\n    <Table.Cell>Produto teste 3</Table.Cell>\n    <Table.Cell>John Doe</Table.Cell>\n    <Table.Cell align="right">R$ 200,20</Table.Cell>\n  </Table.Row>\n</Table>',__scope:(O={props:s,DefaultLayout:r.a,Playground:i.c,Table:o.a},O.DefaultLayout=r.a,O._frontmatter=d,O),mdxType:"Playground"},Object(b.b)(o.a,{onSortable:function(e){return console.log(e)},mdxType:"Table"},Object(b.b)(o.a.Column,{field:"id",label:"ID"}),Object(b.b)(o.a.Column,{field:"product",label:"Produto",sortable:!0}),Object(b.b)(o.a.Column,{field:"owner",label:"Produtor",sortable:!0}),Object(b.b)(o.a.Column,{field:"value",label:"Valor",align:"right"}),Object(b.b)(o.a.Row,null,Object(b.b)(o.a.Cell,null,"1"),Object(b.b)(o.a.Cell,null,"Produto teste 1"),Object(b.b)(o.a.Cell,null,"John Doe"),Object(b.b)(o.a.Cell,{align:"right"},"R$ 120,00")),Object(b.b)(o.a.Row,null,Object(b.b)(o.a.Cell,null,"2"),Object(b.b)(o.a.Cell,null,"Produto teste 2"),Object(b.b)(o.a.Cell,null,"John Doe"),Object(b.b)(o.a.Cell,{align:"right"},"R$ 100,00")),Object(b.b)(o.a.Row,null,Object(b.b)(o.a.Cell,null,"3"),Object(b.b)(o.a.Cell,null,"Produto teste 3"),Object(b.b)(o.a.Cell,null,"John Doe"),Object(b.b)(o.a.Cell,{align:"right"},"R$ 200,20")))),Object(b.b)("h3",{id:"tabela-com-collapse"},"Tabela com collapse"),Object(b.b)(i.c,{__position:4,__code:'<Table>\n  <Table.Column field="id" label="ID" />\n  <Table.Column field="product" label="Produto" />\n  <Table.Column field="owner" label="Produtor" />\n  <Table.Column field="value" label="Valor" align="right" />\n  <Table.Row\n    data={{ id: 1, title: \'Lorem ipsum\', producer: \'John Doe\', value: 120 }}\n  >\n    <Table.Cell xs={{ size: 0 }}>1</Table.Cell>\n    <Table.Cell xs={{ size: 12, margin: \'0 0 8px 0\' }}>\n      Lorem ipsum dolor sit amet, consectetur\n    </Table.Cell>\n    <Table.Cell xs={{ size: 6 }}>John Doe</Table.Cell>\n    <Table.Cell align="right" xs={{ size: 6 }}>\n      R$ 120,00\n    </Table.Cell>\n  </Table.Row>\n  <Table.Row\n    data={{ id: 1, title: \'Lorem ipsum\', producer: \'John Doe\', value: 120 }}\n  >\n    <Table.Cell xs={{ size: 0 }}>2</Table.Cell>\n    <Table.Cell xs={{ size: 12, margin: \'0 0 8px 0\' }}>\n      Produto teste\n    </Table.Cell>\n    <Table.Cell xs={{ size: 6 }}>John Doe</Table.Cell>\n    <Table.Cell align="right" xs={{ size: 6 }}>\n      R$ 100,00\n    </Table.Cell>\n    <Table.Collapse>\n      <Table.Column field="date" label="Data" />\n      <Table.Column field="sales" label="Vendas" />\n      <Table.Row>\n        <Table.Cell xs={{ size: 6 }}>29/03</Table.Cell>\n        <Table.Cell xs={{ size: 6 }}>20 vendas</Table.Cell>\n      </Table.Row>\n      <Table.Row>\n        <Table.Cell xs={{ size: 6 }}>28/03</Table.Cell>\n        <Table.Cell xs={{ size: 6 }}>170 vendas</Table.Cell>\n      </Table.Row>\n      <Table.Actions align="right" label="*">\n        <Table.Option>Ver mais</Table.Option>\n      </Table.Actions>\n    </Table.Collapse>\n  </Table.Row>\n  <Table.Row\n    data={{ id: 1, title: \'Lorem ipsum\', producer: \'John Doe\', value: 120 }}\n  >\n    <Table.Cell xs={{ size: 0 }}>3</Table.Cell>\n    <Table.Cell xs={{ size: 12, margin: \'0 0 8px 0\' }}>\n      Produto teste\n    </Table.Cell>\n    <Table.Cell xs={{ size: 6 }}>John Doe</Table.Cell>\n    <Table.Cell align="right" xs={{ size: 6 }}>\n      R$ 200,20\n    </Table.Cell>\n  </Table.Row>\n  <Table.Actions align="right" label="*">\n    <Table.Option onClick={row => console.log(row)}>Editar</Table.Option>\n    <Table.Option>Remover</Table.Option>\n  </Table.Actions>\n</Table>',__scope:(u={props:s,DefaultLayout:r.a,Playground:i.c,Table:o.a},u.DefaultLayout=r.a,u._frontmatter=d,u),mdxType:"Playground"},Object(b.b)(o.a,{mdxType:"Table"},Object(b.b)(o.a.Column,{field:"id",label:"ID"}),Object(b.b)(o.a.Column,{field:"product",label:"Produto"}),Object(b.b)(o.a.Column,{field:"owner",label:"Produtor"}),Object(b.b)(o.a.Column,{field:"value",label:"Valor",align:"right"}),Object(b.b)(o.a.Row,{data:{id:1,title:"Lorem ipsum",producer:"John Doe",value:120}},Object(b.b)(o.a.Cell,{xs:{size:0}},"1"),Object(b.b)(o.a.Cell,{xs:{size:12,margin:"0 0 8px 0"}},"Lorem ipsum dolor sit amet, consectetur"),Object(b.b)(o.a.Cell,{xs:{size:6}},"John Doe"),Object(b.b)(o.a.Cell,{align:"right",xs:{size:6}},"R$ 120,00")),Object(b.b)(o.a.Row,{data:{id:1,title:"Lorem ipsum",producer:"John Doe",value:120}},Object(b.b)(o.a.Cell,{xs:{size:0}},"2"),Object(b.b)(o.a.Cell,{xs:{size:12,margin:"0 0 8px 0"}},"Produto teste"),Object(b.b)(o.a.Cell,{xs:{size:6}},"John Doe"),Object(b.b)(o.a.Cell,{align:"right",xs:{size:6}},"R$ 100,00"),Object(b.b)(o.a.Collapse,null,Object(b.b)(o.a.Column,{field:"date",label:"Data"}),Object(b.b)(o.a.Column,{field:"sales",label:"Vendas"}),Object(b.b)(o.a.Row,null,Object(b.b)(o.a.Cell,{xs:{size:6}},"29/03"),Object(b.b)(o.a.Cell,{xs:{size:6}},"20 vendas")),Object(b.b)(o.a.Row,null,Object(b.b)(o.a.Cell,{xs:{size:6}},"28/03"),Object(b.b)(o.a.Cell,{xs:{size:6}},"170 vendas")),Object(b.b)(o.a.Actions,{align:"right",label:"*"},Object(b.b)(o.a.Option,null,"Ver mais")))),Object(b.b)(o.a.Row,{data:{id:1,title:"Lorem ipsum",producer:"John Doe",value:120}},Object(b.b)(o.a.Cell,{xs:{size:0}},"3"),Object(b.b)(o.a.Cell,{xs:{size:12,margin:"0 0 8px 0"}},"Produto teste"),Object(b.b)(o.a.Cell,{xs:{size:6}},"John Doe"),Object(b.b)(o.a.Cell,{align:"right",xs:{size:6}},"R$ 200,20")),Object(b.b)(o.a.Actions,{align:"right",label:"*"},Object(b.b)(o.a.Option,{onClick:function(e){return console.log(e)}},"Editar"),Object(b.b)(o.a.Option,null,"Remover")))),Object(b.b)("h2",{id:"propriedades-disponíveis"},"Propriedades disponíveis"),Object(b.b)("h3",{id:"table-props"},"Table props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"prop"),Object(b.b)("th",{parentName:"tr",align:null},"tipo"),Object(b.b)("th",{parentName:"tr",align:null},"obrigatório"),Object(b.b)("th",{parentName:"tr",align:null},"padrão"),Object(b.b)("th",{parentName:"tr",align:null},"descrição"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"loading"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"onSortable"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"function")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"Função chamada ao clicar em uma coluna ",Object(b.b)("inlineCode",{parentName:"td"},"sortable"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"stickyHeader"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"Header fixo, é necessário inserir um valor na prop ",Object(b.b)("inlineCode",{parentName:"td"},"maxHeight")," para melhor experiência.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"size"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"Size")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"medium")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"maxHeight"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"messages"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"ITableMessages")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"Mensagens para eventos internos.")))),Object(b.b)("h3",{id:"tablecolumn-props"},"Table.Column props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"prop"),Object(b.b)("th",{parentName:"tr",align:null},"tipo"),Object(b.b)("th",{parentName:"tr",align:null},"obrigatório"),Object(b.b)("th",{parentName:"tr",align:null},"padrão"),Object(b.b)("th",{parentName:"tr",align:null},"descrição"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"field"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"Chave única.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"label"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"React.ReactNode")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"width"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"align"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"ITableAlign")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"left")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"sortable"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"Se ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", ao clicar na coluna, chama a função ",Object(b.b)("inlineCode",{parentName:"td"},"onSortable")," passando a prop ",Object(b.b)("inlineCode",{parentName:"td"},"field")," e a ordenação.")))),Object(b.b)("h3",{id:"tablerow-props"},"Table.Row props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"prop"),Object(b.b)("th",{parentName:"tr",align:null},"tipo"),Object(b.b)("th",{parentName:"tr",align:null},"obrigatório"),Object(b.b)("th",{parentName:"tr",align:null},"padrão"),Object(b.b)("th",{parentName:"tr",align:null},"descrição"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"data"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"unknown")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"Valores da linha, é necessário apenas quando há o componente ",Object(b.b)("inlineCode",{parentName:"td"},"Table.Actions"),".")))),Object(b.b)("h3",{id:"tablecell-props"},"Table.Cell props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"prop"),Object(b.b)("th",{parentName:"tr",align:null},"tipo"),Object(b.b)("th",{parentName:"tr",align:null},"obrigatório"),Object(b.b)("th",{parentName:"tr",align:null},"padrão"),Object(b.b)("th",{parentName:"tr",align:null},"descrição"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"align"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"ITableAlign")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"left")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"truncate"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"Quando preenchido, limita o valor do texto (se for string).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"colSpan"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"xs"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"ITableCellXs")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"{ size: 12 }")),Object(b.b)("td",{parentName:"tr",align:null},"Controle de tamanho no mobile.")))),Object(b.b)("h3",{id:"tableactions-props"},"Table.Actions props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"prop"),Object(b.b)("th",{parentName:"tr",align:null},"tipo"),Object(b.b)("th",{parentName:"tr",align:null},"obrigatório"),Object(b.b)("th",{parentName:"tr",align:null},"padrão"),Object(b.b)("th",{parentName:"tr",align:null},"descrição"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"label"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"React.ReactNode"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"Ações")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"align"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"ITableAlign")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"left")),Object(b.b)("td",{parentName:"tr",align:null})))),Object(b.b)("h3",{id:"tableoptions-props"},"Table.Options props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"prop"),Object(b.b)("th",{parentName:"tr",align:null},"tipo"),Object(b.b)("th",{parentName:"tr",align:null},"obrigatório"),Object(b.b)("th",{parentName:"tr",align:null},"padrão"),Object(b.b)("th",{parentName:"tr",align:null},"descrição"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"onClick"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"function")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"disabled"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"function"),", ",Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"hide"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"function"),", ",Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"Controla a rederização do elemento.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"icon"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"React.ReactNode")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"-")))),Object(b.b)("h3",{id:"tablepagination-props"},"Table.Pagination props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"prop"),Object(b.b)("th",{parentName:"tr",align:null},"tipo"),Object(b.b)("th",{parentName:"tr",align:null},"obrigatório"),Object(b.b)("th",{parentName:"tr",align:null},"padrão"),Object(b.b)("th",{parentName:"tr",align:null},"descrição"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"page"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"perPage"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"totalPages"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"optionsPerPage"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"number[]")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"[15, 25, 35, 50, 100]")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"labelItensPerPage"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"React.ReactNode")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"Itens por página:")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"onChangeRowsPerPage"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"function")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"Se a prop não existir, o componente não será renderizado.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"onChangeGoToPage"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"function")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"Se a prop não existir, o componente não será renderizado.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"onChangePage"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"function")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"Se a prop não existir, o componente não será renderizado.")))),Object(b.b)("h3",{id:"tablecollapse-props"},"Table.Collapse props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"prop"),Object(b.b)("th",{parentName:"tr",align:null},"tipo"),Object(b.b)("th",{parentName:"tr",align:null},"obrigatório"),Object(b.b)("th",{parentName:"tr",align:null},"padrão"),Object(b.b)("th",{parentName:"tr",align:null},"descrição"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"loading"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"onCollapse"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"function")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"Função chamada ao clicar para abrir / fechar o item recolhido.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"type"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"list"),", ",Object(b.b)("inlineCode",{parentName:"td"},"table")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"table")),Object(b.b)("td",{parentName:"tr",align:null},"Se ",Object(b.b)("inlineCode",{parentName:"td"},"list")," não renderizará as colunas e bordas inferiores.")))))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/ui-components/Table/index.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-ui-components-table-index-mdx-7156bc89dd854f7633f5.js.map