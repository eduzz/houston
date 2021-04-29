(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{YZPd:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return O})),a.d(t,"default",(function(){return x}));var n=a("cxan"),l=a("+wNj"),b=a("ERkP"),r=a("ZVZ0"),o=a("9Rvw"),d=a("Ayaw"),i=a("jTgE"),m=a("VVfB"),c=a("zdIC"),p=a("skMn"),u=a("TIMX"),s=a("qbsg"),j=a("K5iU"),O=(a("l1C2"),{});void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/ui-components/Forms/Text/index.mdx"}});var g={_frontmatter:O},N=o.a;function x(e){var t,a,x,C=e.components,T=Object(l.a)(e,["components"]);return Object(r.b)(N,Object(n.a)({},g,T,{components:C,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"text"},"Text"),Object(r.b)("p",null,"O componente é responsável por exibir um campo de texto para ser preenchido em formulários, campos de pesquisa, entre outros."),Object(r.b)("h3",{id:"importação"},"Importação"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import TextField from '@eduzz/houston-ui/Forms/Text';\n")),Object(r.b)("h3",{id:"exemplos"},"Exemplos"),Object(r.b)(s.c,{__position:0,__code:'() => {\n  const [text, setText] = React.useState(\'\')\n  return (\n    <>\n      <TextField label="Campo de Texto" value={text} onChange={setText} />\n      <TextField\n        label="Campo de Texto"\n        placeholder="Placeholder"\n        value={text}\n        onChange={setText}\n      />\n      <TextField\n        label="Campo de Texto Desabilitado"\n        disabled\n        value="Valor enviado via propriedade"\n      />\n      <TextField\n        label="Campo de Texto com Carregamento"\n        loading\n        value={text}\n        onChange={setText}\n      />\n      <TextField\n        label="Campo de Texto com Texto de Ajuda"\n        helperText="Um exemplo de campo de ajuda"\n        value={text}\n        onChange={setText}\n      />\n      <TextField\n        label="Campo de Texto com Erro"\n        errorMessage="Mensagem de erro"\n        value={text}\n        onChange={setText}\n      />\n    </>\n  )\n}',__scope:(t={props:T,DefaultLayout:o.a,cnpjMask:d.a,cpfMask:i.a,documentMask:m.a,moneyMask:c.a,phoneMask:p.a,zipcodeMask:u.a,Playground:s.c,TextField:j.a},t.DefaultLayout=o.a,t._frontmatter=O,t),mdxType:"Playground"},(function(){var e=b.useState(""),t=e[0],a=e[1];return Object(r.b)(b.Fragment,null,Object(r.b)(j.a,{label:"Campo de Texto",value:t,onChange:a,mdxType:"TextField"}),Object(r.b)(j.a,{label:"Campo de Texto",placeholder:"Placeholder",value:t,onChange:a,mdxType:"TextField"}),Object(r.b)(j.a,{label:"Campo de Texto Desabilitado",disabled:!0,value:"Valor enviado via propriedade",mdxType:"TextField"}),Object(r.b)(j.a,{label:"Campo de Texto com Carregamento",loading:!0,value:t,onChange:a,mdxType:"TextField"}),Object(r.b)(j.a,{label:"Campo de Texto com Texto de Ajuda",helperText:"Um exemplo de campo de ajuda",value:t,onChange:a,mdxType:"TextField"}),Object(r.b)(j.a,{label:"Campo de Texto com Erro",errorMessage:"Mensagem de erro",value:t,onChange:a,mdxType:"TextField"}))})),Object(r.b)("h3",{id:"componente-de-texto-com-múltiplas-linhas"},"Componente de texto com múltiplas linhas"),Object(r.b)(s.c,{__position:1,__code:'() => {\n  const [text, setText] = React.useState(\'\')\n  return (\n    <>\n      <TextField\n        label="Texto com múltiplas linhas"\n        value={text}\n        onChange={setText}\n        multiline\n      />\n      <TextField\n        label="Texto com múltiplas linhas"\n        disabled\n        value={text}\n        onChange={setText}\n        multiline\n      />\n      <TextField\n        label="Texto com múltiplas linhas com erro"\n        errorMessage="Mensagem de erro"\n        value={text}\n        onChange={setText}\n        multiline\n      />\n    </>\n  )\n}',__scope:(a={props:T,DefaultLayout:o.a,cnpjMask:d.a,cpfMask:i.a,documentMask:m.a,moneyMask:c.a,phoneMask:p.a,zipcodeMask:u.a,Playground:s.c,TextField:j.a},a.DefaultLayout=o.a,a._frontmatter=O,a),mdxType:"Playground"},(function(){var e=b.useState(""),t=e[0],a=e[1];return Object(r.b)(b.Fragment,null,Object(r.b)(j.a,{label:"Texto com múltiplas linhas",value:t,onChange:a,multiline:!0,mdxType:"TextField"}),Object(r.b)(j.a,{label:"Texto com múltiplas linhas",disabled:!0,value:t,onChange:a,multiline:!0,mdxType:"TextField"}),Object(r.b)(j.a,{label:"Texto com múltiplas linhas com erro",errorMessage:"Mensagem de erro",value:t,onChange:a,multiline:!0,mdxType:"TextField"}))})),Object(r.b)("h3",{id:"máscaras"},"Máscaras"),Object(r.b)(s.c,{__position:2,__code:'() => {\n  const [text, setText] = React.useState(\'\')\n  const [money, setMoney] = React.useState()\n  const [phone, setPhone] = React.useState(\'\')\n  const [zipcode, setZipcode] = React.useState(\'\')\n  const [document, setDocument] = React.useState(\'\')\n  const [cpf, setCpf] = React.useState(\'\')\n  const [cnpj, setCnpj] = React.useState(\'\')\n  return (\n    <>\n      <TextField\n        label="Moeda"\n        name="money"\n        value={money}\n        onChange={setMoney}\n        mask={moneyMask}\n      />\n      <TextField\n        label="Telefone"\n        name="phone"\n        value={phone}\n        onChange={setPhone}\n        mask={phoneMask}\n      />\n      <TextField\n        label="CEP"\n        name="zipcode"\n        value={zipcode}\n        onChange={setZipcode}\n        mask={zipcodeMask}\n      />\n      <TextField\n        label="Documento"\n        name="document"\n        value={document}\n        onChange={setDocument}\n        mask={documentMask}\n      />\n      <TextField\n        label="CNPJ"\n        name="cnpj"\n        value={cnpj}\n        onChange={setCnpj}\n        mask={cnpjMask}\n      />\n      <TextField\n        label="CPF"\n        name="cpf"\n        value={cpf}\n        onChange={setCpf}\n        mask={cpfMask}\n      />\n    </>\n  )\n}',__scope:(x={props:T,DefaultLayout:o.a,cnpjMask:d.a,cpfMask:i.a,documentMask:m.a,moneyMask:c.a,phoneMask:p.a,zipcodeMask:u.a,Playground:s.c,TextField:j.a},x.DefaultLayout=o.a,x._frontmatter=O,x),mdxType:"Playground"},(function(){var e=b.useState(""),t=(e[0],e[1],b.useState()),a=t[0],n=t[1],l=b.useState(""),o=l[0],s=l[1],O=b.useState(""),g=O[0],N=O[1],x=b.useState(""),C=x[0],T=x[1],h=b.useState(""),f=h[0],y=h[1],v=b.useState(""),F=v[0],M=v[1];return Object(r.b)(b.Fragment,null,Object(r.b)(j.a,{label:"Moeda",name:"money",value:a,onChange:n,mask:c.a,mdxType:"TextField"}),Object(r.b)(j.a,{label:"Telefone",name:"phone",value:o,onChange:s,mask:p.a,mdxType:"TextField"}),Object(r.b)(j.a,{label:"CEP",name:"zipcode",value:g,onChange:N,mask:u.a,mdxType:"TextField"}),Object(r.b)(j.a,{label:"Documento",name:"document",value:C,onChange:T,mask:m.a,mdxType:"TextField"}),Object(r.b)(j.a,{label:"CNPJ",name:"cnpj",value:F,onChange:M,mask:d.a,mdxType:"TextField"}),Object(r.b)(j.a,{label:"CPF",name:"cpf",value:f,onChange:y,mask:i.a,mdxType:"TextField"}))})),Object(r.b)("h3",{id:"propriedades"},"Propriedades"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"prop"),Object(r.b)("th",{parentName:"tr",align:null},"tipo"),Object(r.b)("th",{parentName:"tr",align:null},"obrigatório"),Object(r.b)("th",{parentName:"tr",align:null},"padrão"),Object(r.b)("th",{parentName:"tr",align:null},"descrição"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"id"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"name"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"label"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"React.ReactNode")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"type"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"React.InputHTMLAttributes")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"text")),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"placeholder"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"disabled"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"fullWidth"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"multiline"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"Permite um campo de texto com várias linhas")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"className"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"loading"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},"Exibe ícone de carregamento no componente de texto")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"helperText"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},"Exibe texto de ajuda abaixo do componente de texto")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"errorMessage"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},"Exibe uma mensagem de erro no componente de texto, assim como indica erro no campo")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"form"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"IFormAdapter")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"mask"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"IFormMask")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},"Máscara que será aplicada no campo")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"value"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"margin"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"none"),", ",Object(r.b)("inlineCode",{parentName:"td"},"dense"),", ",Object(r.b)("inlineCode",{parentName:"td"},"normal")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"normal")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"onChange"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},"Função disparada ao alterar o valor do campo de texto")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"onBlur"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},"Função disparada ao tirar o foco do componente")))))}void 0!==x&&x&&x===Object(x)&&Object.isExtensible(x)&&!x.hasOwnProperty("__filemeta")&&Object.defineProperty(x,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/ui-components/Forms/Text/index.mdx"}}),x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-ui-components-forms-text-index-mdx-26a928689f3622c021df.js.map