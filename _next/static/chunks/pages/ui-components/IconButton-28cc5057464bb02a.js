(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8499],{7914:function(a){a.exports=function(a){return a&&a.__esModule?a:{"default":a}},a.exports.__esModule=!0,a.exports.default=a.exports},47249:function(g,b,a){"use strict";var c=a(7914);b.Z=void 0;var d=c(a(19124)),e=a(24246),f=(0,d.default)((0,e.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}),"InsertEmoticon");b.Z=f},19124:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return d.createSvgIcon}});var d=b(87322)},56320:function(e,c,a){"use strict";a.d(c,{Z:function(){return h}});var b,d=a(27378);let f=0;const g=(b||(b=a.t(d,2))).useId;function h(a){if(void 0!==g){const b=g();return null!=a?a:b}return function(a){const[b,c]=d.useState(a);return d.useEffect(()=>{null==b&&c(`mui-${f+=1}`)},[b]),a||b}(a)}},8473:function(d,b,c){"use strict";b.Z=function(a,d){if(null==a)return{};var b,c,f=e.default(a,d);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(c=0;c<g.length;c++)b=g[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(f[b]=a[b])}return f};var a,e=(a=c(90518))&&a.__esModule?a:{default:a}},90518:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}},78036:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/IconButton",function(){return c(79469)}])},16847:function(f,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{get:function(){return g},enumerable:!0});var c=b(67430).Z,d=b(42619).Z,e=d(c(b(96342),a)),g=e.default},96107:function(g,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return n},enumerable:!0});var c=a(96808).Z,h=a(62069).Z,i=a(81826).Z,j=a(8473).Z,k=a(9889).Z,l=a(24246),d=c(a(27378)),e=c(a(16847));function m(){var a=k(["\n    border: none;\n    background-color: ",";\n    border-radius: ",";\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    :not(:focus) {\n      transition: 0.3s;\n    }\n\n    &.--lg,\n    &.--large {\n      width: ","rem;\n      height: ","rem;\n    }\n\n    &.--md,\n    &.--medium,\n    &.--small {\n      width: ","rem;\n      height: ","rem;\n    }\n\n    &:disabled {\n      cursor: default;\n    }\n\n    .__icon {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      &.--disabled {\n        color: ",";\n      }\n\n      &.--lg,\n      &.--large {\n        width: ","rem;\n        height: ","rem;\n\n        > svg {\n          vertical-align: middle;\n          font-size: ","rem;\n        }\n      }\n\n      &.--md,\n      &.--medium,\n      &.--small {\n        width: ","rem;\n        height: ","rem;\n\n        > svg {\n          vertical-align: middle;\n          font-size: ","rem;\n        }\n      }\n    }\n\n    :focus {\n      outline: solid "," ",";\n    }\n\n    &:hover:not(:disabled),\n    &:focus {\n      background-color: ",";\n    }\n  "]);return m=function(){return a},a}function f(){var a=k(["\n  ","\n"]);return f=function(){return a},a}var n=d.memo((0,e.default)(function(a){var f=a.className,b=a.size,g=a.children,d=a.disabled,c=void 0!==d&&d,k=j(a,["className","size","children","disabled"]);return(0,l.jsx)("button",i(h({role:"button",disabled:c,className:(0,e.cx)(f,"--".concat(null!=b?b:"lg")),"aria-disabled":c},k),{children:(0,l.jsx)("div",{className:(0,e.cx)("__icon","--".concat(null!=b?b:"lg"),{"--disabled":c}),children:g})}))},{label:"houston-icon-button"})(f(),function(b){var a=b.theme;return(0,e.css)(m(),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[0]),a.border.radius.circular,a.pxToRem(48),a.pxToRem(48),a.pxToRem(32),a.pxToRem(32),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[6]),a.pxToRem(24),a.pxToRem(24),a.pxToRem(24),a.pxToRem(16),a.pxToRem(16),a.pxToRem(16),a.border.width.sm,a.feedbackColor.informative.pure,a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]))}))},79469:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}}),a(27378);var h=a(35318),i=a(47249),j=a(56100),k=a(96107),e={name:"Icon Button",tableOfContents:{depth:0,children:[{depth:1,slug:"#icon-button",title:"Icon Button",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplos",title:"Exemplos"},{depth:3,slug:"#tamanho",title:"Tamanho"}]}]}]}},l={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,h.kt)("wrapper",Object.assign({},l,a,{components:c,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"icon-button"}),"Icon Button"),(0,h.kt)("p",null,"Bot\xf5es permitem que os usu\xe1rios tomem a\xe7\xf5es e decis\xf5es com um simples toque."),(0,h.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import IconButton from '@eduzz/houston-ui/IconButton';\n")),(0,h.kt)("h3",Object.assign({},{id:"exemplos"}),"Exemplos"),(0,h.kt)(j.X,{__position:0,code:"<IconButton>\n  <InsertEmoticonIcon />\n</IconButton>\n<IconButton disabled>\n  <InsertEmoticonIcon />\n</IconButton>",scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,IconButton:k.default,meta:e},mdxType:"Playground"},(0,h.kt)(k.default,{mdxType:"IconButton"},(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"})),(0,h.kt)(k.default,{disabled:!0,mdxType:"IconButton"},(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}))),(0,h.kt)("h3",Object.assign({},{id:"tamanho"}),"Tamanho"),(0,h.kt)(j.X,{__position:1,code:'<IconButton size="md">\n  <InsertEmoticonIcon />\n</IconButton>\n<IconButton size="lg">\n  <InsertEmoticonIcon />\n</IconButton>',scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,IconButton:k.default,meta:e},mdxType:"Playground"},(0,h.kt)(k.default,{size:"md",mdxType:"IconButton"},(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"})),(0,h.kt)(k.default,{size:"lg",mdxType:"IconButton"},(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}))),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"size"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"md"),", ",(0,h.kt)("inlineCode",{parentName:"td"},"lg")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"lg")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/IconButton/index.mdx"};for(var d in c)window[d]=c[d]},87322:function(d,b,a){"use strict";a.r(b),a.d(b,{capitalize:function(){return f.Z},createChainedFunction:function(){return g},createSvgIcon:function(){return h.Z},debounce:function(){return i.Z},deprecatedPropType:function(){return j},isMuiElement:function(){return k.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return m.Z},requirePropFactory:function(){return n},setRef:function(){return o},unstable_ClassNameGenerator:function(){return w},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return q},unsupportedProp:function(){return r},useControlled:function(){return s.Z},useEventCallback:function(){return t.Z},useForkRef:function(){return u.Z},useIsFocusVisible:function(){return v.Z}});var e=a(94907),f=a(98165),g=a(36397).Z,h=a(75917),i=a(66187),j=function(a,b){return()=>null},k=a(6564),l=a(52127),m=a(16103);a(25773);var n=function(a,b){return()=>null},o=a(40514).Z,p=a(57925),q=a(56320).Z;function c(a,b,c,d,e){return null}var r=c,s=a(94065),t=a(5965),u=a(63202),v=a(34273),w={configure:function(a){console.warn("MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.\n\nYou should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead\n\nThe detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401\n\nThe updated documentation: https://mui.com/guides/classname-generator/"),e.Z.configure(a)}}},6564:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(27378),e=function(a,b){return d.isValidElement(a)&& -1!==b.indexOf(a.type.muiName)}},94065:function(d,a,b){"use strict";var c=b(45566);a.Z=c.Z}},function(a){a.O(0,[4526,6960,9961,4199,7978,9774,2888,179],function(){return a(a.s=78036)}),_N_E=a.O()}])