(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3699],{66293:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/List",function(){return c(54632)}])},64733:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),g=a(24246),d=c.__importStar(a(27378)),h=c.__importDefault(a(6873)),e=d.forwardRef(function(a,d){var e=a.children,b=a.color,f=c.__rest(a,["children","color"]);return(0,g.jsx)(h.default,Object.assign({},f,{color:void 0===b?"default":b,disableTouchRipple:!0,ref:d},{children:e}))});b.default=d.memo(e)},29118:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a,b){return Object.keys(b).forEach(function(c){a[c]=b[c]}),a}},21627:function(e,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),f=a(24246),d=c.__importStar(a(27378)),g=c.__importDefault(a(19675));b.default=d.memo(function(a){var b=a.children;return(0,f.jsx)(g.default,{children:(0,f.jsx)("div",{children:b})})})},17379:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),g=a(24246),d=b.__importStar(a(27378)),h=a(87651),i=b.__importDefault(a(24160)),j=b.__importDefault(a(10767)),e=b.__importDefault(a(35686)),k=(0,e.default)(function(a){return{iconRoot:{color:a.colors.grey[500],minWidth:20,lineHeight:1.5,marginRight:8,"& > svg":{width:20,height:20}},imageRoot:{color:a.colors.grey[600],backgroundColor:a.colors.grey[200],marginRight:8,"& > svg":{width:20,height:20}},striped:{backgroundColor:"#fff"}}});c.default=d.memo(function(c){var f=c.icon,d=c.image,l=c.striped,m=void 0!==l&&l,e=b.__rest(c,["icon","image","striped"]),a=k();return f?(0,g.jsx)(j.default,Object.assign({},e,{className:a.iconRoot},{children:f})):"string"==typeof d?(0,g.jsx)(i.default,Object.assign({},e,{src:d,className:(0,h.cx)([a.imageRoot,m&&a.striped])})):(0,g.jsx)(i.default,Object.assign({},e,{className:(0,h.cx)([a.imageRoot,m&&a.striped])},{children:d}))})},30023:function(k,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),l=a(24246),d=b.__importStar(a(27378)),m=a(87651),n=b.__importDefault(a(9555)),e=b.__importDefault(a(29118)),f=b.__importDefault(a(35686)),g=b.__importDefault(a(21627)),h=b.__importDefault(a(17379)),i=b.__importDefault(a(65322)),j=b.__importDefault(a(78044)),o=(0,f.default)(function(a){return{root:{"& > li":{padding:"12px 16px",borderRadius:4},"& > li > div":{display:"flex",alignItems:"flex-start",width:"100%"},"& > li > div > .list-item-text":{display:"flex",flexDirection:"column",alignSelf:"center",flex:1}},stripedRows:{"& > li:nth-child(even)":{backgroundColor:a.colors.grey[100]}}}});c.default=(0,e.default)(d.memo(function(a){var d=a.children,e=a.stripedRows,f=b.__rest(a,["children","stripedRows"]),c=o();return(0,l.jsx)(n.default,Object.assign({component:"ul"},f,{className:(0,m.cx)([c.root,e&&c.stripedRows])},{children:d}))}),{Item:g.default,Text:j.default,Left:h.default,Right:i.default})},65322:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),g=a(24246),d=b.__importStar(a(27378)),h=a(87651),i=b.__importDefault(a(10767)),j=b.__importDefault(a(64733)),e=b.__importDefault(a(35686)),k=b.__importDefault(a(98021)),l=(0,e.default)(function(a){return{iconRootRight:{minWidth:20,marginRight:0,paddingLeft:16,"& svg":{width:20,height:20}},rightRoot:{color:a.colors.grey[500],marginLeft:"auto"},rightText:{color:a.colors.grey[600]},clickable:{cursor:"pointer"}}});c.default=d.memo(function(c){var d=c.icon,f=c.text,e=c.onClick,n=b.__rest(c,["icon","text","onClick"]),a=l(),m={className:(0,h.cx)([a.rightRoot,a.iconRootRight,e&&a.clickable]),onClick:!!e&&e};return d&&e?(0,g.jsx)(j.default,Object.assign({},m,{size:"small"},{children:d})):d?(0,g.jsx)(i.default,Object.assign({className:(0,h.cx)([a.rightRoot,a.iconRootRight])},{children:d})):f?(0,g.jsx)(k.default,Object.assign({},n,m,{size:"xx-small"},{children:f})):null})},78044:function(e,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),f=a(24246),d=c.__importStar(a(27378)),g=c.__importDefault(a(98021));b.default=d.memo(function(a){var b=a.title,d=a.subtitle,e=c.__rest(a,["title","subtitle"]);return(0,f.jsxs)("div",Object.assign({className:"list-item-text"},{children:["string"==typeof b?(0,f.jsx)(g.default,Object.assign({},e,{size:"default",fontWeight:"regular",lineHeight:"compact"},{children:b})):b,"string"==typeof d?(0,f.jsx)(g.default,Object.assign({},e,{size:"small",fontWeight:"regular",lineHeight:"compact"},{children:d})):d]}))})},61964:function(g,c,a){"use strict";var b=a(59312);b.__importDefault(a(21627)).default,b.__importDefault(a(17379)).default;var d=b.__importDefault(a(30023)),e=b.__importDefault(a(65322));e.default;var f=b.__importDefault(a(78044));f.default,c.ZP=d.default},98021:function(f,b,a){"use strict";function d(){var a,b,c=(a=["\n  margin: 0;\n  font-size: ","px;\n  line-height: ",";\n  font-weight: ",";\n  margin-bottom: ",";\n\n  &.--variant-secondary {\n    color: ",";\n    font-size: ",";\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),g=c.__importStar(a(27378)),h=a(87651),e=c.__importDefault(a(65388));b.default=(0,e.default)(function(a){var b=a.className,c=a.variant,e=a.id,f=a.children,d=a.component,i=a.onClick;return g.createElement(null!=d?d:"p",{id:e,onClick:i,className:(0,h.cx)(b,b,c&&"--variant-".concat(c))},f)})(d(),function(a){var c=a.theme,b=a.size;return c.textSize(null!=b?b:"normal")},function(a){var c=a.theme,b=a.lineHeight;return c.lineHeight(null!=b?b:"normal")},function(a){var c=a.theme,b=a.fontWeight;return c.fontWeight(null!=b?b:"regular")},function(a){var b=a.theme,c=a.marginBottom;return c?b.spacing(2):null},function(a){return a.theme.colors.grey[500]},function(a){return a.theme.textSize("small")})},35686:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),e=a(87651),f=c.__importDefault(a(44659));b.default=function(a){return function(c){var b;return b="function"==typeof a?a((0,f.default)()):a,Object.keys(b).reduce(function(h,d){var a,f,g;return Object.assign(Object.assign({},h),(a={},f=d,g=(0,e.css)("function"==typeof b[d]?b[d](c):b[d]),f in a?Object.defineProperty(a,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):a[f]=g,a))},{})}}},65388:function(h,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.breakpoints=a.cx=a.clsx=void 0;var c=b(59312),d=b(87651),e=c.__importDefault(b(94408)),f=c.__importDefault(b(18651));a.clsx=d.cx,a.cx=d.cx,a.breakpoints=(0,f.default)({});var g=e.default;a.default=g},44659:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=b(151);a.default=function(){return(0,d.useTheme)()}},54632:function(g,b,a){"use strict";a.r(b),a.d(b,{meta:function(){return e},"default":function(){return f}}),a(27378);var h=a(35318),i=a(47249),j=a(56100),k=a(64733),l=a(61964),e={name:"List",tableOfContents:{depth:0,children:[{depth:1,slug:"#lista",title:"Lista",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#listrado",title:"Listrado"},{depth:3,slug:"#list-props",title:"List props"},{depth:3,slug:"#listitem-props",title:"List.Item props"},{depth:3,slug:"#listleft-props",title:"List.Left props"},{depth:3,slug:"#listtext-props",title:"List.Text props"},{depth:3,slug:"#listright-props",title:"List.Right props"}]}]}]}},m={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,h.kt)("wrapper",Object.assign({},m,a,{components:c,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"lista"}),"Lista"),(0,h.kt)("p",null,"Listas s\xe3o continuas, apresentam verticalmente texto ou imagens."),(0,h.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import List from '@eduzz/houston-ui/List';\n")),(0,h.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,h.kt)(j.X,{__position:0,code:'<List>\n  <List.Item>\n    <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n    <List.Right\n      icon={\n        <IconButton>\n          <InsertEmoticonIcon />\n        </IconButton>\n      }\n    />\n  </List.Item>\n  <List.Item>\n    <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n    <List.Right\n      icon={\n        <IconButton>\n          <InsertEmoticonIcon />\n        </IconButton>\n      }\n    />\n  </List.Item>\n  <List.Item>\n    <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n    <List.Right\n      icon={\n        <IconButton>\n          <InsertEmoticonIcon />\n        </IconButton>\n      }\n    />\n  </List.Item>\n  <List.Item>\n    <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n    <List.Right\n      icon={\n        <IconButton>\n          <InsertEmoticonIcon />\n        </IconButton>\n      }\n    />\n  </List.Item>\n  <List.Item>\n    <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n    <List.Right\n      icon={\n        <IconButton>\n          <InsertEmoticonIcon />\n        </IconButton>\n      }\n    />\n  </List.Item>\n</List>',scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,IconButton:k.default,List:l.ZP,meta:e},mdxType:"Playground"},(0,h.kt)(l.ZP,{mdxType:"List"},(0,h.kt)(l.ZP.Item,null,(0,h.kt)(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),(0,h.kt)(l.ZP.Right,{icon:(0,h.kt)(k.default,{mdxType:"IconButton"},(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}))})),(0,h.kt)(l.ZP.Item,null,(0,h.kt)(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),(0,h.kt)(l.ZP.Right,{icon:(0,h.kt)(k.default,{mdxType:"IconButton"},(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}))})),(0,h.kt)(l.ZP.Item,null,(0,h.kt)(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),(0,h.kt)(l.ZP.Right,{icon:(0,h.kt)(k.default,{mdxType:"IconButton"},(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}))})),(0,h.kt)(l.ZP.Item,null,(0,h.kt)(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),(0,h.kt)(l.ZP.Right,{icon:(0,h.kt)(k.default,{mdxType:"IconButton"},(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}))})),(0,h.kt)(l.ZP.Item,null,(0,h.kt)(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),(0,h.kt)(l.ZP.Right,{icon:(0,h.kt)(k.default,{mdxType:"IconButton"},(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}))})))),(0,h.kt)("h3",Object.assign({},{id:"listrado"}),"Listrado"),(0,h.kt)("p",null,"Prop ",(0,h.kt)("inlineCode",{parentName:"p"},"stripedRows"),"."),(0,h.kt)(j.X,{__position:1,code:'<List stripedRows>\n  <List.Item>\n    <List.Left icon={<InsertEmoticonIcon />} />\n    <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n    <List.Right\n      icon={\n        <IconButton size="small">\n          <InsertEmoticonIcon />\n        </IconButton>\n      }\n    />\n  </List.Item>\n  <List.Item>\n    <List.Left icon={<InsertEmoticonIcon />} />\n    <List.Text title="Lorem Ipsum Dolor" />\n    <List.Right\n      icon={\n        <IconButton size="small">\n          <InsertEmoticonIcon />\n        </IconButton>\n      }\n    />\n  </List.Item>\n  <List.Item>\n    <List.Left icon={<InsertEmoticonIcon />} />\n    <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n    <List.Right text="lorem ipsum" />\n  </List.Item>\n  <List.Item>\n    <List.Left icon={<InsertEmoticonIcon />} />\n    <List.Text title="Lorem Ipsum Dolor" />\n    <List.Right\n      icon={\n        <IconButton size="small">\n          <InsertEmoticonIcon />\n        </IconButton>\n      }\n    />\n  </List.Item>\n  <List.Item>\n    <List.Left icon={<InsertEmoticonIcon />} />\n    <List.Text title="Lorem Ipsum Dolor" subtitle="Lorem Ipsum Dolor" />\n    <List.Right\n      icon={\n        <IconButton size="small">\n          <InsertEmoticonIcon />\n        </IconButton>\n      }\n    />\n  </List.Item>\n</List>',scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,IconButton:k.default,List:l.ZP,meta:e},mdxType:"Playground"},(0,h.kt)(l.ZP,{stripedRows:!0,mdxType:"List"},(0,h.kt)(l.ZP.Item,null,(0,h.kt)(l.ZP.Left,{icon:(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"})}),(0,h.kt)(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),(0,h.kt)(l.ZP.Right,{icon:(0,h.kt)(k.default,{size:"small",mdxType:"IconButton"},(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}))})),(0,h.kt)(l.ZP.Item,null,(0,h.kt)(l.ZP.Left,{icon:(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"})}),(0,h.kt)(l.ZP.Text,{title:"Lorem Ipsum Dolor"}),(0,h.kt)(l.ZP.Right,{icon:(0,h.kt)(k.default,{size:"small",mdxType:"IconButton"},(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}))})),(0,h.kt)(l.ZP.Item,null,(0,h.kt)(l.ZP.Left,{icon:(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"})}),(0,h.kt)(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),(0,h.kt)(l.ZP.Right,{text:"lorem ipsum"})),(0,h.kt)(l.ZP.Item,null,(0,h.kt)(l.ZP.Left,{icon:(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"})}),(0,h.kt)(l.ZP.Text,{title:"Lorem Ipsum Dolor"}),(0,h.kt)(l.ZP.Right,{icon:(0,h.kt)(k.default,{size:"small",mdxType:"IconButton"},(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}))})),(0,h.kt)(l.ZP.Item,null,(0,h.kt)(l.ZP.Left,{icon:(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"})}),(0,h.kt)(l.ZP.Text,{title:"Lorem Ipsum Dolor",subtitle:"Lorem Ipsum Dolor"}),(0,h.kt)(l.ZP.Right,{icon:(0,h.kt)(k.default,{size:"small",mdxType:"IconButton"},(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}))})))),(0,h.kt)("h3",Object.assign({},{id:"list-props"}),"List props"),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"stripedRows"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),(0,h.kt)("h3",Object.assign({},{id:"listitem-props"}),"List.Item props"),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"children"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"true")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),(0,h.kt)("h3",Object.assign({},{id:"listleft-props"}),"List.Left props"),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"icon"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"image"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"S\xf3 ser\xe1 exibido se a prop ",(0,h.kt)("inlineCode",{parentName:"td"},"icon")," n\xe3o possuir valor.")))),(0,h.kt)("h3",Object.assign({},{id:"listtext-props"}),"List.Text props"),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"title"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string or React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"true")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"subtitle"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string or React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"fase")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),(0,h.kt)("h3",Object.assign({},{id:"listright-props"}),"List.Right props"),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"icon"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"false"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onClick"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"function")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"false"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"text"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"false"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"S\xf3 ser\xe1 exibido se a prop ",(0,h.kt)("inlineCode",{parentName:"td"},"icon")," n\xe3o possuir valor.")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/List/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,4356,9961,6557,8558,3029,3245,9774,2888,179],function(){return a(a.s=66293)}),_N_E=a.O()}])