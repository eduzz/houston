(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3699],{66293:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/List",function(){return c(54632)}])},64733:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),g=a(24246),d=(0,c.__importStar)(a(27378)),h=(0,c.__importDefault)(a(6873)),e=d.forwardRef(function(a,d){var e=a.children,b=a.color,f=(0,c.__rest)(a,["children","color"]);return(0,g.jsx)(h.default,(0,c.__assign)({},f,{color:void 0===b?"default":b,disableTouchRipple:!0,ref:d},{children:e}),void 0)});b.default=d.memo(e)},29118:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a,b){return Object.keys(b).forEach(function(c){a[c]=b[c]}),a}},21627:function(e,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),f=a(24246),d=(0,c.__importStar)(a(27378)),g=(0,c.__importDefault)(a(19675));b.default=d.memo(function(a){var b=a.children;return(0,f.jsx)(g.default,{children:(0,f.jsx)("div",{children:b},void 0)},void 0)})},17379:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),g=a(24246),d=(0,b.__importStar)(a(27378)),h=a(87651),i=(0,b.__importDefault)(a(24160)),j=(0,b.__importDefault)(a(10767)),e=(0,b.__importDefault)(a(35686)),k=(0,e.default)(function(a){return{iconRoot:{color:a.colors.grey[500],minWidth:20,lineHeight:1.5,marginRight:8,"& > svg":{width:20,height:20}},imageRoot:{color:a.colors.grey[600],backgroundColor:a.colors.grey[200],marginRight:8,"& > svg":{width:20,height:20}},striped:{backgroundColor:"#fff"}}});c.default=d.memo(function(c){var f=c.icon,d=c.image,l=c.striped,m=void 0!==l&&l,e=(0,b.__rest)(c,["icon","image","striped"]),a=k();return f?(0,g.jsx)(j.default,(0,b.__assign)({},e,{className:a.iconRoot},{children:f}),void 0):"string"==typeof d?(0,g.jsx)(i.default,(0,b.__assign)({},e,{src:d,className:(0,h.cx)([a.imageRoot,m&&a.striped])}),void 0):(0,g.jsx)(i.default,(0,b.__assign)({},e,{className:(0,h.cx)([a.imageRoot,m&&a.striped])},{children:d}),void 0)})},30023:function(k,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),l=a(24246),d=(0,b.__importStar)(a(27378)),m=a(87651),n=(0,b.__importDefault)(a(9555)),e=(0,b.__importDefault)(a(29118)),f=(0,b.__importDefault)(a(35686)),g=(0,b.__importDefault)(a(21627)),h=(0,b.__importDefault)(a(17379)),i=(0,b.__importDefault)(a(65322)),j=(0,b.__importDefault)(a(78044)),o=(0,f.default)(function(a){return{root:{"& > li":{padding:"12px 16px",borderRadius:4},"& > li > div":{display:"flex",alignItems:"flex-start",width:"100%"},"& > li > div > .list-item-text":{display:"flex",flexDirection:"column",alignSelf:"center",flex:1}},stripedRows:{"& > li:nth-child(even)":{backgroundColor:a.colors.grey[100]}}}});c.default=(0,e.default)(d.memo(function(a){var d=a.children,e=a.stripedRows,f=(0,b.__rest)(a,["children","stripedRows"]),c=o();return(0,l.jsx)(n.default,(0,b.__assign)({component:"ul"},f,{className:(0,m.cx)([c.root,e&&c.stripedRows])},{children:d}),void 0)}),{Item:g.default,Text:j.default,Left:h.default,Right:i.default})},65322:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),g=a(24246),d=(0,b.__importStar)(a(27378)),h=a(87651),i=(0,b.__importDefault)(a(10767)),j=(0,b.__importDefault)(a(64733)),e=(0,b.__importDefault)(a(35686)),k=(0,b.__importDefault)(a(98021)),l=(0,e.default)(function(a){return{iconRootRight:{minWidth:20,marginRight:0,paddingLeft:16,"& svg":{width:20,height:20}},rightRoot:{color:a.colors.grey[500],marginLeft:"auto"},rightText:{color:a.colors.grey[600]},clickable:{cursor:"pointer"}}});c.default=d.memo(function(c){var d=c.icon,f=c.text,e=c.onClick,n=(0,b.__rest)(c,["icon","text","onClick"]),a=l(),m={className:(0,h.cx)([a.rightRoot,a.iconRootRight,e&&a.clickable]),onClick:!!e&&e};return d&&e?(0,g.jsx)(j.default,(0,b.__assign)({},m,{size:"small"},{children:d}),void 0):d?(0,g.jsx)(i.default,(0,b.__assign)({className:(0,h.cx)([a.rightRoot,a.iconRootRight])},{children:d}),void 0):f?(0,g.jsx)(k.default,(0,b.__assign)({},n,m,{size:"xx-small"},{children:f}),void 0):null})},78044:function(e,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),f=a(24246),d=(0,c.__importStar)(a(27378)),g=(0,c.__importDefault)(a(98021));b.default=d.memo(function(a){var b=a.title,d=a.subtitle,e=(0,c.__rest)(a,["title","subtitle"]);return(0,f.jsxs)("div",(0,c.__assign)({className:"list-item-text"},{children:["string"==typeof b?(0,f.jsx)(g.default,(0,c.__assign)({},e,{size:"default",fontWeight:"regular",lineHeight:"compact"},{children:b}),void 0):b,"string"==typeof d?(0,f.jsx)(g.default,(0,c.__assign)({},e,{size:"small",fontWeight:"regular",lineHeight:"compact"},{children:d}),void 0):d]}),void 0)})},61964:function(g,c,a){"use strict";var b=a(59312);(0,b.__importDefault)(a(21627)).default,(0,b.__importDefault)(a(17379)).default;var d=(0,b.__importDefault)(a(30023)),e=(0,b.__importDefault)(a(65322));e.default;var f=(0,b.__importDefault)(a(78044));f.default,c.ZP=d.default},98021:function(e,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),d=(0,c.__importStar)(a(27378)),f=a(87651),g=(0,(0,c.__importDefault)(a(35686)).default)(function(a){return{text:function(b){var c,d,e;return{margin:0,fontSize:a.textSize(null!==(c=b.size)&& void 0!==c?c:"normal"),lineHeight:a.lineHeight(null!==(d=b.lineHeight)&& void 0!==d?d:"normal"),fontWeight:a.fontWeight(null!==(e=b.fontWeight)&& void 0!==e?e:"regular"),marginBottom:b.marginBottom?a.spacing(2):null}},secondary:{color:a.colors.grey[500],fontSize:a.textSize("small")}}});b.default=d.memo(function(a){var b,e=g(a),h=d.useMemo(function(){return{id:null==a?void 0:a.id,children:null==a?void 0:a.children,onClick:null==a?void 0:a.onClick}},[null==a?void 0:a.children,null==a?void 0:a.id,null==a?void 0:a.onClick]),i=d.useMemo(function(){return{secondary:e.secondary}},[e.secondary]);return d.createElement(null!==(b=null==a?void 0:a.component)&& void 0!==b?b:"p",(0,c.__assign)((0,c.__assign)({},h),{className:(0,f.cx)(e.text,null==a?void 0:a.className,i[null==a?void 0:a.variant])}))})},35686:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),e=a(87651),f=(0,c.__importDefault)(a(44659));b.default=function(a){return function(d){var b;return b="function"==typeof a?a((0,f.default)()):a,Object.keys(b).reduce(function(g,a){var f;return(0,c.__assign)((0,c.__assign)({},g),((f={})[a]=(0,e.css)("function"==typeof b[a]?b[a](d):b[a]),f))},{})}}},44659:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=b(151);a.default=function(){return(0,d.useTheme)()}},54632:function(g,b,a){"use strict";a.r(b),a.d(b,{meta:function(){return e},"default":function(){return f}});var h=a(27378);a(35318);var i=a(47249),j=a(56100),k=a(64733),l=a(61964),e={name:"List",tableOfContents:{depth:0,children:[{depth:1,slug:"#lista",title:"Lista",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#listrado",title:"Listrado"},{depth:3,slug:"#list-props",title:"List props"},{depth:3,slug:"#listitem-props",title:"List.Item props"},{depth:3,slug:"#listleft-props",title:"List.Left props"},{depth:3,slug:"#listtext-props",title:"List.Text props"},{depth:3,slug:"#listright-props",title:"List.Right props"}]}]}]}},m={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return h.createElement("wrapper",Object.assign({},m,a,{components:c,mdxType:"MDXLayout"}),h.createElement("h1",Object.assign({},{id:"lista"}),"Lista"),h.createElement("p",null,"Listas s\xe3o continuas, apresentam verticalmente texto ou imagens."),h.createElement("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),h.createElement("pre",null,h.createElement("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import List from '@eduzz/houston-ui/List';\n")),h.createElement("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),h.createElement(j.X,{__position:0,code:'<List>\n    <List.Item>\n      <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n      <List.Right\n        icon={\n          <IconButton>\n            <InsertEmoticonIcon />\n          \n        }\n      />\n    </List.Item>\n    <List.Item>\n      <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n      <List.Right\n        icon={\n          <IconButton>\n            <InsertEmoticonIcon />\n          </IconButton>\n        }\n      />\n    </List.Item>\n    <List.Item>\n      <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n      <List.Right\n        icon={\n          <IconButton>\n            <InsertEmoticonIcon />\n          </IconButton>\n        }\n      />\n    </List.Item>\n    <List.Item>\n      <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n      <List.Right\n        icon={\n          <IconButton>\n            <InsertEmoticonIcon />\n          </IconButton>\n        }\n      />\n    </List.Item>\n    <List.Item>\n      <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n      <List.Right\n        icon={\n          <IconButton>\n            <InsertEmoticonIcon />\n          </IconButton>\n        }\n      />\n    </List.Item>\n  </List>\n</Playground>',scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,IconButton:k.default,List:l.ZP,meta:e},mdxType:"Playground"},h.createElement(l.ZP,{mdxType:"List"},h.createElement(l.ZP.Item,null,h.createElement(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),h.createElement(l.ZP.Right,{icon:h.createElement(k.default,{mdxType:"IconButton"},h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"}))})),h.createElement(l.ZP.Item,null,h.createElement(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),h.createElement(l.ZP.Right,{icon:h.createElement(k.default,{mdxType:"IconButton"},h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"}))})),h.createElement(l.ZP.Item,null,h.createElement(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),h.createElement(l.ZP.Right,{icon:h.createElement(k.default,{mdxType:"IconButton"},h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"}))})),h.createElement(l.ZP.Item,null,h.createElement(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),h.createElement(l.ZP.Right,{icon:h.createElement(k.default,{mdxType:"IconButton"},h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"}))})),h.createElement(l.ZP.Item,null,h.createElement(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),h.createElement(l.ZP.Right,{icon:h.createElement(k.default,{mdxType:"IconButton"},h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"}))})))),h.createElement("h3",Object.assign({},{id:"listrado"}),"Listrado"),h.createElement("p",null,"Prop ",h.createElement("inlineCode",{parentName:"p"},"stripedRows"),"."),h.createElement(j.X,{__position:1,code:'<List stripedRows>\n    <List.Item>\n      <List.Left icon={<InsertEmoticonIcon />} />\n      <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n      <List.Right\n        icon={\n          <IconButton size="small">\n            <InsertEmoticonIcon />\n          \n        }\n      />\n    </List.Item>\n    <List.Item>\n      <List.Left icon={<InsertEmoticonIcon />} />\n      <List.Text title="Lorem Ipsum Dolor" />\n      <List.Right\n        icon={\n          <IconButton size="small">\n            <InsertEmoticonIcon />\n          </IconButton>\n        }\n      />\n    </List.Item>\n    <List.Item>\n      <List.Left icon={<InsertEmoticonIcon />} />\n      <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n      <List.Right text="lorem ipsum" />\n    </List.Item>\n    <List.Item>\n      <List.Left icon={<InsertEmoticonIcon />} />\n      <List.Text title="Lorem Ipsum Dolor" />\n      <List.Right\n        icon={\n          <IconButton size="small">\n            <InsertEmoticonIcon />\n          </IconButton>\n        }\n      />\n    </List.Item>\n    <List.Item>\n      <List.Left icon={<InsertEmoticonIcon />} />\n      <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n      <List.Right\n        icon={\n          <IconButton size="small">\n            <InsertEmoticonIcon />\n          </IconButton>\n        }\n      />\n    </List.Item>\n  </List>\n</Playground>',scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,IconButton:k.default,List:l.ZP,meta:e},mdxType:"Playground"},h.createElement(l.ZP,{stripedRows:!0,mdxType:"List"},h.createElement(l.ZP.Item,null,h.createElement(l.ZP.Left,{icon:h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"})}),h.createElement(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),h.createElement(l.ZP.Right,{icon:h.createElement(k.default,{size:"small",mdxType:"IconButton"},h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"}))})),h.createElement(l.ZP.Item,null,h.createElement(l.ZP.Left,{icon:h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"})}),h.createElement(l.ZP.Text,{title:"Lorem Ipsum Dolor"}),h.createElement(l.ZP.Right,{icon:h.createElement(k.default,{size:"small",mdxType:"IconButton"},h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"}))})),h.createElement(l.ZP.Item,null,h.createElement(l.ZP.Left,{icon:h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"})}),h.createElement(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),h.createElement(l.ZP.Right,{text:"lorem ipsum"})),h.createElement(l.ZP.Item,null,h.createElement(l.ZP.Left,{icon:h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"})}),h.createElement(l.ZP.Text,{title:"Lorem Ipsum Dolor"}),h.createElement(l.ZP.Right,{icon:h.createElement(k.default,{size:"small",mdxType:"IconButton"},h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"}))})),h.createElement(l.ZP.Item,null,h.createElement(l.ZP.Left,{icon:h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"})}),h.createElement(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),h.createElement(l.ZP.Right,{icon:h.createElement(k.default,{size:"small",mdxType:"IconButton"},h.createElement(i.Z,{mdxType:"InsertEmoticonIcon"}))})))),h.createElement("h3",Object.assign({},{id:"list-props"}),"List props"),h.createElement("table",null,h.createElement("thead",{parentName:"table"},h.createElement("tr",{parentName:"thead"},h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"prop"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),h.createElement("tbody",{parentName:"table"},h.createElement("tr",{parentName:"tbody"},h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"stripedRows"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"boolean")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"false")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"false")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-")))),h.createElement("h3",Object.assign({},{id:"listitem-props"}),"List.Item props"),h.createElement("table",null,h.createElement("thead",{parentName:"table"},h.createElement("tr",{parentName:"thead"},h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"prop"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),h.createElement("tbody",{parentName:"table"},h.createElement("tr",{parentName:"tbody"},h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"children"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"React.ReactNode")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"true")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-")))),h.createElement("h3",Object.assign({},{id:"listleft-props"}),"List.Left props"),h.createElement("table",null,h.createElement("thead",{parentName:"table"},h.createElement("tr",{parentName:"thead"},h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"prop"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),h.createElement("tbody",{parentName:"table"},h.createElement("tr",{parentName:"tbody"},h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"icon"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"React.ReactNode")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"false")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-")),h.createElement("tr",{parentName:"tbody"},h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"image"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"React.ReactNode")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"false")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"S\xf3 ser\xe1 exibido se a prop ",h.createElement("inlineCode",{parentName:"td"},"icon")," n\xe3o possuir valor.")))),h.createElement("h3",Object.assign({},{id:"listtext-props"}),"List.Text props"),h.createElement("table",null,h.createElement("thead",{parentName:"table"},h.createElement("tr",{parentName:"thead"},h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"prop"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),h.createElement("tbody",{parentName:"table"},h.createElement("tr",{parentName:"tbody"},h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"title"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"string or React.ReactNode")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"true")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-")),h.createElement("tr",{parentName:"tbody"},h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"subtitle"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"string or React.ReactNode")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"fase")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-")))),h.createElement("h3",Object.assign({},{id:"listright-props"}),"List.Right props"),h.createElement("table",null,h.createElement("thead",{parentName:"table"},h.createElement("tr",{parentName:"thead"},h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"prop"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),h.createElement("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),h.createElement("tbody",{parentName:"table"},h.createElement("tr",{parentName:"tbody"},h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"icon"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"React.ReactNode")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"false"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-")),h.createElement("tr",{parentName:"tbody"},h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"onClick"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"function")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"false"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-")),h.createElement("tr",{parentName:"tbody"},h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"text"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),h.createElement("inlineCode",{parentName:"td"},"string")),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"false"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"-"),h.createElement("td",Object.assign({parentName:"tr"},{align:null}),"S\xf3 ser\xe1 exibido se a prop ",h.createElement("inlineCode",{parentName:"td"},"icon")," n\xe3o possuir valor.")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/List/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,4356,9961,6557,8558,5647,3245,9774,2888,179],function(){return a(a.s=66293)}),_N_E=a.O()}])