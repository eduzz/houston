(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7823],{87651:function(j,d,c){"use strict";c.r(d),c.d(d,{cache:function(){return w},css:function(){return u},cx:function(){return p},flush:function(){return n},getRegisteredStyles:function(){return r},hydrate:function(){return o},injectGlobal:function(){return s},keyframes:function(){return t},merge:function(){return q},sheet:function(){return v}});var g=c(8786),k=c(74343),h=c(53211);function l(a,b){if(void 0===a.inserted[b.name])return a.insert("",b,a.sheet,!0)}function i(c,d,b){var a=[],e=(0,h.fp)(c,a,b);return a.length<2?b:e+d(a)}var e,b,f,m=function g(f){for(var c="",d=0;d<f.length;d++){var b=f[d];if(null!=b){var a=void 0;switch(typeof b){case"boolean":break;case"object":if(Array.isArray(b))a=g(b);else for(var e in a="",b)b[e]&&e&&(a&&(a+=" "),a+=e);break;default:a=b}a&&(c&&(c+=" "),c+=a)}}return c},a=(e={key:"css"},(b=(0,g.Z)(e)).sheet.speedy=function(a){this.isSpeedy=a},b.compat=!0,{css:f=function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered,void 0);return(0,h.My)(b,e,!1),b.key+"-"+e.name},cx:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];return i(b.registered,f,m(d))},injectGlobal:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered);l(b,e)},keyframes:function(){for(var d=arguments.length,e=new Array(d),a=0;a<d;a++)e[a]=arguments[a];var c=(0,k.O)(e,b.registered),f="animation-"+c.name;return l(b,{name:c.name,styles:"@keyframes "+f+"{"+c.styles+"}"}),f},hydrate:function(a){a.forEach(function(a){b.inserted[a]=!0})},flush:function(){b.registered={},b.inserted={},b.sheet.flush()},sheet:b.sheet,cache:b,getRegisteredStyles:h.fp.bind(null,b.registered),merge:i.bind(null,b.registered,f)}),n=a.flush,o=a.hydrate,p=a.cx,q=a.merge,r=a.getRegisteredStyles,s=a.injectGlobal,t=a.keyframes,u=a.css,v=a.sheet,w=a.cache},48713:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Typography/Paragraph",function(){return c(78021)}])},96342:function(n,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.breakpoints=a.css=a.clsx=a.cx=a.keyframes=void 0;var e=b(39037),c=b(87651),d=b(10043),f=e.interopRequireDefault(b(94408)),g=b(60921),h=d.keyframes;a.keyframes=h;var i=c.cx;a.cx=i;var j=c.cx;a.clsx=j;var k=d.css;a.css=k;var l=g.breakpoinstUtils;a.breakpoints=l;var m=f.default;a.default=m},35323:function(f,c,a){"use strict";c.Z=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=b.interopRequireDefault(a(75645)),i=b.interopRequireDefault(a(98021)),j=b.interopRequireDefault(a(33205)),k={lg:"lg",sm:"md"},l={lg:"sm",sm:"xs"},e=d.forwardRef(function(a,e){var c=a.as,f=a.children,d=a.size,m=b.objectWithoutProperties(a,["as","children","size"]),n=h.default().breakpoints,o=j.default(n.down("sm")),p=(o?l:k)[void 0===d?"lg":d];return g.jsx(i.default,b.objectSpread({as:void 0===c?"p":c,ref:e,size:p},m,{children:f}))});c.Z=e},98021:function(i,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),j=a(24246),d=c.interopRequireWildcard(a(27378)),e=c.interopRequireWildcard(a(96342)),k=c.interopRequireDefault(a(79955));function l(){var a=c.taggedTemplateLiteral(["\n      margin: 0;\n      font-size: ",";\n      font-weight: ",";\n      line-height: ",";\n      margin-bottom: ",";\n      color: ",";\n    "]);return l=function(){return a},a}function f(){var a=c.taggedTemplateLiteral(["\n  ","\n"]);return f=function(){return a},a}var g=d.forwardRef(function(a,e){var b=a.as,f=a.children,d=a.color,g=c.objectWithoutProperties(a,["as","children","color"]);return j.jsx(void 0===b?"p":b,c.objectSpread({ref:e,color:void 0===d?"low":d},g,{children:f}))}),h=e.default(g)(f(),function(a){var b=a.theme,c=a.size,d=a.weight,f=a.lineHeight,h=a.marginBottom,g=a.color;return e.css(l(),b.font.size[void 0===c?"xs":c],b.font.weight[void 0===d?"regular":d],b.line.height[void 0===f?"md":f],h?b.spacing.nano:null,k.default(b,void 0===g?"low":g).pure)});b.default=h},33205:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(c){var h=function(){i(f(a))},a=c.replace("@media","").trim(),f=function(a){return window.matchMedia(a).matches},b=d.slicedToArray(e.useState(f(a)),2),g=b[0],i=b[1];return e.useEffect(function(){var b=window.matchMedia(a);h();var c="change";return b.addEventListener(c,h),function(){b.removeEventListener(c,h)}},[a]),g};var d=b(39037),e=b(27378)},79955:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(b){var a=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"primary";return["low","high"].includes(a)?b.neutralColor[a]:["positive","negative","warning","informative"].includes(a)?b.feedbackColor[a]:b.brandColor[a]}},78021:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}});var h=a(27378),i=a(35318),j=a(56100),k=a(75645),l=a(35323),e={name:"Paragraph",tableOfContents:{depth:0,children:[{depth:1,slug:"#paragraph",title:"Paragraph",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#tamanhos",title:"Tamanhos"},{depth:3,slug:"#intensidade-da-fonte",title:"Intensidade da fonte"},{depth:3,slug:"#altura-da-linha",title:"Altura da linha"},{depth:3,slug:"#cores",title:"Cores"},{depth:3,slug:"#informando-ref-e-evento",title:"Informando ref e evento"}]}]}]}},m={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},m,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"paragraph"}),"Paragraph"),(0,i.kt)("p",null,"O componente de par\xe1grafo \xe9 utilizado para criarmos corpos de texto."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Paragraph from '@eduzz/houston-ui/Typography/Paragraph';\n")),(0,i.kt)("h3",Object.assign({},{id:"tamanhos"}),"Tamanhos"),(0,i.kt)(j.X,{__position:0,code:'<Paragraph size="lg">Large</Paragraph>\n<Paragraph size="sm">Small</Paragraph>',scope:{props:a,Playground:j.X,useHoustonTheme:k.default,Paragraph:l.Z,meta:e},mdxType:"Playground"},(0,i.kt)(l.Z,{size:"lg",mdxType:"Paragraph"},"Large"),(0,i.kt)(l.Z,{size:"sm",mdxType:"Paragraph"},"Small")),(0,i.kt)("h3",Object.assign({},{id:"intensidade-da-fonte"}),"Intensidade da fonte"),(0,i.kt)(j.X,{__position:1,code:'<Paragraph weight="regular">regular</Paragraph>\n<Paragraph weight="semibold">semibold</Paragraph>\n<Paragraph weight="bold">bold</Paragraph>',scope:{props:a,Playground:j.X,useHoustonTheme:k.default,Paragraph:l.Z,meta:e},mdxType:"Playground"},(0,i.kt)(l.Z,{weight:"regular",mdxType:"Paragraph"},"regular"),(0,i.kt)(l.Z,{weight:"semibold",mdxType:"Paragraph"},"semibold"),(0,i.kt)(l.Z,{weight:"bold",mdxType:"Paragraph"},"bold")),(0,i.kt)("h3",Object.assign({},{id:"altura-da-linha"}),"Altura da linha"),(0,i.kt)(j.X,{__position:2,code:'<Paragraph lineHeight="default">\n  line-height\n  <br />\n  default\n</Paragraph>\n<hr style={{ margin: \'10px 0\' }} />\n<Paragraph lineHeight="xs">\n  line-height\n  <br />\n  xs\n</Paragraph>\n<hr style={{ margin: \'10px 0\' }} />\n<Paragraph lineHeight="sm">\n  line-height\n  <br />\n  sm\n</Paragraph>\n<hr style={{ margin: \'10px 0\' }} />\n<Paragraph lineHeight="md">\n  line-height\n  <br />\n  md\n</Paragraph>\n<hr style={{ margin: \'10px 0\' }} />\n<Paragraph lineHeight="lg">\n  line-height\n  <br />\n  lg\n</Paragraph>\n<hr style={{ margin: \'10px 0\' }} />\n<Paragraph lineHeight="xl">\n  line-height\n  <br />\n  xl\n</Paragraph>\n<hr style={{ margin: \'10px 0\' }} />\n<Paragraph lineHeight="xxl">\n  line-height\n  <br />\n  xxl\n</Paragraph>',scope:{props:a,Playground:j.X,useHoustonTheme:k.default,Paragraph:l.Z,meta:e},mdxType:"Playground"},(0,i.kt)(l.Z,{lineHeight:"default",mdxType:"Paragraph"},"line-height",(0,i.kt)("br",null),"default"),(0,i.kt)("hr",{style:{margin:"10px 0"}}),(0,i.kt)(l.Z,{lineHeight:"xs",mdxType:"Paragraph"},"line-height",(0,i.kt)("br",null),"xs"),(0,i.kt)("hr",{style:{margin:"10px 0"}}),(0,i.kt)(l.Z,{lineHeight:"sm",mdxType:"Paragraph"},"line-height",(0,i.kt)("br",null),"sm"),(0,i.kt)("hr",{style:{margin:"10px 0"}}),(0,i.kt)(l.Z,{lineHeight:"md",mdxType:"Paragraph"},"line-height",(0,i.kt)("br",null),"md"),(0,i.kt)("hr",{style:{margin:"10px 0"}}),(0,i.kt)(l.Z,{lineHeight:"lg",mdxType:"Paragraph"},"line-height",(0,i.kt)("br",null),"lg"),(0,i.kt)("hr",{style:{margin:"10px 0"}}),(0,i.kt)(l.Z,{lineHeight:"xl",mdxType:"Paragraph"},"line-height",(0,i.kt)("br",null),"xl"),(0,i.kt)("hr",{style:{margin:"10px 0"}}),(0,i.kt)(l.Z,{lineHeight:"xxl",mdxType:"Paragraph"},"line-height",(0,i.kt)("br",null),"xxl")),(0,i.kt)("h3",Object.assign({},{id:"cores"}),"Cores"),(0,i.kt)(j.X,{__position:3,code:'<Paragraph color="primary">Primary (cor do produto)</Paragraph>\n<Paragraph>Low (padr\xe3o)</Paragraph>\n<div style={{ backgroundColor: \'#0D47A1\' }}>\n  <Paragraph color="high">High</Paragraph>\n</div>',scope:{props:a,Playground:j.X,useHoustonTheme:k.default,Paragraph:l.Z,meta:e},mdxType:"Playground"},(0,i.kt)(l.Z,{color:"primary",mdxType:"Paragraph"},"Primary (cor do produto)"),(0,i.kt)(l.Z,{mdxType:"Paragraph"},"Low (padr\xe3o)"),(0,i.kt)("div",{style:{backgroundColor:"#0D47A1"}},(0,i.kt)(l.Z,{color:"high",mdxType:"Paragraph"},"High"))),(0,i.kt)("h3",Object.assign({},{id:"informando-ref-e-evento"}),"Informando ref e evento"),(0,i.kt)(j.X,{__position:4,code:"() => {\n  const ref = React.useRef(null)\n  function scrollIntoView() {\n    ref.current.scrollIntoView({\n      behavior: 'smooth',\n    })\n  }\n  return (\n    <Paragraph ref={ref} onClick={scrollIntoView}>\n      Click to scroll into view\n    </Paragraph>\n  )\n}",scope:{props:a,Playground:j.X,useHoustonTheme:k.default,Paragraph:l.Z,meta:e},mdxType:"Playground"},function(){var a=h.useRef(null);return(0,i.kt)(l.Z,{ref:a,onClick:function(){a.current.scrollIntoView({behavior:"smooth"})},mdxType:"Paragraph"},"Click to scroll into view")}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null})),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"size"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"lg, sm")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"lg")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null})),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"lineHeight"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"Line Height Tokens")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"md")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null})),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"weight"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"Font Weight Tokens")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"regular")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null})),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"marginBottom"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null})),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"className"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null})),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onClick"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"(e: React.MouseEvent) => void")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null})),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"as"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"'p', 'span', 'strong'")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"p")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null})),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"ref"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"`React.ReactRef<HTMLParagraphElement"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"HTMLSpanElement"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"HTMLElement>`"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"color"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"'primary', 'low', 'pure'")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"low")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null})),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Typography/Paragraph/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,9914,9961,7978,9774,2888,179],function(){return a(a.s=48713)}),_N_E=a.O()}])