(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2238],{47249:function(a,b,c){"use strict";var d=c(73203);b.Z=void 0;var e=d(c(19124)),f=c(24246),g=(0,e.default)((0,f.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}),"InsertEmoticon");b.Z=g},96793:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Button",function(){return c(68131)}])},54703:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return o},enumerable:!0});var d=c(24246),e=h(c(27378)),f=h(c(12103));function g(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return g=function(){return a},a}function h(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=g();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function i(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function j(){var a=i(["\n        &.--","-"," {\n          flex-basis: ",";\n          flex: ",";\n        }\n      "]);return j=function(){return a},a}function k(){var a=i(["\n      "," {\n        ","\n      }\n    "]);return k=function(){return a},a}var l=[1,2,3,4,5,6,7,8,9,10,11,12,"auto","fill"],m=["xs","sm","md","lg","xlg"],n=e.forwardRef(function(a,b){var c=a.className,e=a.children,g=a.xs,h=void 0===g?"fill":g,i=a.sm,j=a.md,k=a.lg,l=a.xlg;return(0,d.jsx)("div",{ref:b,className:(0,f.cx)(c,"__houston_grid_column",h&&"--xs-".concat(h),i&&"--sm-".concat(i),j&&"--md-".concat(j),k&&"--lg-".concat(k),l&&"--xlg-".concat(l)),children:e})}),o=(0,f.default)(n,{label:"houston-grid-column"})(function(a){var b=a.theme;return m.map(function(a){var c=l.map(function(b){return(0,f.css)(j(),a,b,"string"==typeof b?"auto":"".concat(b/12*100,"%"),"fill"===b?1:null)});return"xs"===a?c:(0,f.css)(k(),b.breakpoints.up(a),c)})})},78983:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return u},enumerable:!0});var d,e,f,g=c(24246),h=k(c(27378)),i=k(c(12103));function j(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return j=function(){return a},a}function k(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=j();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function l(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function m(){var a=l(["\n        &.--justify-content-"," {\n          justify-content: ",";\n        }\n      "]);return m=function(){return a},a}function n(){var a=l(["\n        &.--align-items-"," {\n          align-items: ",";\n        }\n      "]);return n=function(){return a},a}function o(){var a=l(["\n        &.--spacing-"," {\n          width: calc(100% + ",");\n          margin: calc(-"," / 2);\n\n          & > .__houston_grid_column {\n            box-sizing: border-box;\n            padding: calc("," / 2);\n          }\n        }\n      "]);return o=function(){return a},a}function p(){var a=l(["\n    display: flex;\n    flex-wrap: wrap;\n\n    ","\n\n    ","\n\n    ","\n  "]);return p=function(){return a},a}var q=["flex-start","flex-end","space-between","center","space-around"],r=["flex-start","flex-end","center","baseline","stretch"],s=["none","nano","xxxs","xxs","xs","md","xl"],t=h.forwardRef(function(a,b){var c=a.className,d=a.children,e=a.spacing,f=a.justifyContent,h=a.alignItems;return(0,g.jsx)("div",{ref:b,className:(0,i.cx)(c,"--spacing-".concat(void 0===e?"xxxs":e),"--justify-content-".concat(void 0===f?"flex-start":f),"--align-items-".concat(void 0===h?"flex-start":h)),children:d})}),u=(0,i.default)(t,{label:"houston-grid-row"})(function(a){var b=a.theme;return(0,i.css)(p(),q.map(function(a){return(0,i.css)(m(),a,a)}),r.map(function(a){return(0,i.css)(n(),a,a)}),s.map(function(a){return(0,i.css)(o(),a,null!==(d=b.spacing.inline[a])&& void 0!==d?d:"0rem",null!==(e=b.spacing.inline[a])&& void 0!==e?e:"0rem",null!==(f=b.spacing.inline[a])&& void 0!==f?f:"0rem")}))})},68131:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return m},meta:function(){return k}});var d=c(31373);c(27378);var e=c(35318),f=c(47249),g=c(56100),h=c(54703),i=c(78983),j=c(30222),k={name:"Button",tableOfContents:{depth:0,children:[{depth:1,slug:"#button",title:"Button",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#varia\xe7\xf5es",title:"Varia\xe7\xf5es"},{depth:3,slug:"#estados",title:"Estados"},{depth:3,slug:"#com-\xedcones",title:"Com \xedcones"}]}]}]}},l={meta:k};function m(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,e.kt)("wrapper",Object.assign({},l,c,{components:b,mdxType:"MDXLayout"}),(0,e.kt)("h1",Object.assign({},{id:"button"}),"Button"),(0,e.kt)("p",null,"Bot\xf5es permitem que os usu\xe1rios tomem a\xe7\xf5es e decis\xf5es com um simples toque."),(0,e.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,e.kt)("pre",null,(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Button from '@eduzz/houston-ui/Button';\n")),(0,e.kt)("h3",Object.assign({},{id:"varia\xe7\xf5es"}),"Varia\xe7\xf5es"),(0,e.kt)(g.X,{__position:0,code:'<Row>\n  <Column>\n    <Button>Contained</Button>\n  </Column>\n  <Column>\n    <Button variant="outlined">Outlined</Button>\n  </Column>\n  <Column>\n    <Button variant="text">Text</Button>\n  </Column>\n</Row>',scope:{props:c,InsertEmoticonIcon:f.Z,Playground:g.X,Column:h.default,Row:i.default,Button:j.default,meta:k},mdxType:"Playground"},(0,e.kt)(i.default,{mdxType:"Row"},(0,e.kt)(h.default,{mdxType:"Column"},(0,e.kt)(j.default,{mdxType:"Button"},"Contained")),(0,e.kt)(h.default,{mdxType:"Column"},(0,e.kt)(j.default,{variant:"outlined",mdxType:"Button"},"Outlined")),(0,e.kt)(h.default,{mdxType:"Column"},(0,e.kt)(j.default,{variant:"text",mdxType:"Button"},"Text")))),(0,e.kt)("h3",Object.assign({},{id:"estados"}),"Estados"),(0,e.kt)(g.X,{__position:1,code:"<Row>\n  <Column>\n    <Button disabled>Disabled</Button>\n  </Column>\n  <Column>\n    <Button loading>loading</Button>\n  </Column>\n</Row>",scope:{props:c,InsertEmoticonIcon:f.Z,Playground:g.X,Column:h.default,Row:i.default,Button:j.default,meta:k},mdxType:"Playground"},(0,e.kt)(i.default,{mdxType:"Row"},(0,e.kt)(h.default,{mdxType:"Column"},(0,e.kt)(j.default,{disabled:!0,mdxType:"Button"},"Disabled")),(0,e.kt)(h.default,{mdxType:"Column"},(0,e.kt)(j.default,{loading:!0,mdxType:"Button"},"loading")))),(0,e.kt)("h3",Object.assign({},{id:"com-\xedcones"}),"Com \xedcones"),(0,e.kt)(g.X,{__position:2,code:'<Row>\n  <Column>\n    <Button startIcon={<InsertEmoticonIcon />}>Start</Button>\n  </Column>\n  <Column>\n    <Button variant="outlined" endIcon={<InsertEmoticonIcon />}>\n      End\n    </Button>\n  </Column>\n</Row>',scope:{props:c,InsertEmoticonIcon:f.Z,Playground:g.X,Column:h.default,Row:i.default,Button:j.default,meta:k},mdxType:"Playground"},(0,e.kt)(i.default,{mdxType:"Row"},(0,e.kt)(h.default,{mdxType:"Column"},(0,e.kt)(j.default,{startIcon:(0,e.kt)(f.Z,{mdxType:"InsertEmoticonIcon"}),mdxType:"Button"},"Start")),(0,e.kt)(h.default,{mdxType:"Column"},(0,e.kt)(j.default,{variant:"outlined",endIcon:(0,e.kt)(f.Z,{mdxType:"InsertEmoticonIcon"}),mdxType:"Button"},"End")))),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"startIcon"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"endIcon"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"variant"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"contained ","|"," outlined ","|"," text"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"contained"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"href"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"endIcon"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fullWidth"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"loading"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onClick"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"function")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}m.isMDXComponent=!0;var n={editThisPagePath:"src/pages/ui-components/Button/index.mdx"};for(var o in n)window[o]=n[o]}},function(a){a.O(0,[4526,5395,1539,1885,3781,4183,4109,9774,2888,179],function(){var b;return a(a.s=96793)}),_N_E=a.O()}])