(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9391],{17647:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tokens/tokens",function(){return c(4132)}])},26123:function(e,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){return{spacing:o.spacing,border:f.border,brandColor:g.createBrandColors(a),breakpoints:c.objectSpread({},h.breakpoints,h.breakpoinstUtils),feedbackColor:i.feedbackColor,font:j.font,line:k.line,neutralColor:l.neutralColor,opacity:m.opacity,shadow:n.shadow,pxToRem:p.pxToRem,remToPx:p.remToPx,hexToRgba:p.hexToRgba,cleanUnit:p.cleanUnit}};var c=a(39037),f=a(98022),g=a(33495),h=a(60921),i=a(58043),j=a(5665),k=a(26142),l=a(96800),m=a(22702),n=a(89691),o=a(94778),p=a(698),d=c.interopRequireWildcard(a(91162));Object.keys(d).forEach(function(a){"default"!==a&&"__esModule"!==a&&(a in b&&b[a]===d[a]||Object.defineProperty(b,a,{enumerable:!0,get:function(){return d[a]}}))})},91162:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0})},98022:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.border=void 0,a.border={width:{none:"0",xs:"1px",sm:"2px",md:"4px",lg:"8px"},radius:{none:"0",xs:"0.25rem",sm:"0.5rem",md:"1rem",pill:"31.25rem",circular:"50%"}}},33495:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.createBrandColors=function(a){var b="string"==typeof a?c[a]:a;if(!b)throw new Error("You must provide a valid brand");return b},a.getSupportedBrands=void 0;var c={eduzz:{primary:{pure:"#0D2772",light:"#6C88D9",medium:"#000540",dark:"#000540"},secondary:{pure:"#FFBC00",light:"#FFF4BF",medium:"#FFDB4D",dark:"#996600"}},alumy:{primary:{pure:"#6200EE",light:"#D4CCFF",medium:"#8E66FF",dark:"#440087"}},blinket:{primary:{pure:"#D81B60",light:"#F48FB1 ",medium:"#EC407A",dark:"#AD1457"}},jobzz:{primary:{pure:"#01579B",light:"#99BCD7",medium:"#3479AF",dark:"#002F6C"}},nutror:{primary:{pure:"#00A526",light:"#99E9BA",medium:"#00C853",dark:"#00801D"}},orbita:{primary:{pure:"#0D47A1",light:"#9EB5D9",medium:"#265AAB",dark:"#072D83"}},safevideo:{primary:{pure:"#E39837",light:"#FEC92D",medium:"#F5B431",dark:"#804306"}},telescope:{primary:{pure:"#8E24AA",light:"#D2A7DD",medium:"#9A3AB3",dark:"#560877"}}};a.getSupportedBrands=function(){return Object.keys(c)}},60921:function(c,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.breakpoinstUtils=a.breakpoints=void 0;var b={xs:"320px",sm:"576px",md:"768px",lg:"992px",xlg:"1400px"};a.breakpoints=b;var d=function(a){return Number(a.replace("px",""))};a.breakpoinstUtils={down:function(a){return"@media (min-width:".concat(d(b[a]),")px")},up:function(a){return"@media (max-width:".concat(d(b[a])-.05,")px")}}},58043:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.feedbackColor=void 0,a.feedbackColor={positive:{pure:"#4CAF50",light:"#D2EBD3",medium:"#66D26A",dark:"#2D8D31"},negative:{pure:"#F44336",light:"#FDD9D7",medium:"#FF8179",dark:"#D72518"},warning:{pure:"#FFCA28",light:"#FFF4D4",medium:"#FFDD76",dark:"#E2AD08"},informative:{pure:"#039BE5",light:"#CDEBFA",medium:"#71D0FF",dark:"#0077B1"}}},5665:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.font=void 0,a.font={size:{xxxs:"0.75rem",xxs:"0.875rem",xs:"1rem",sm:"1.25rem",md:"1.5rem",lg:"2rem",xl:"2.5rem",xxl:"3rem",xxxl:"4rem",display:"5rem",giant:"6rem"},family:{base:'Open Sans, "Helvetica Neue", Arial, sans-serif'},weight:{regular:400,semibold:600,bold:700}}},26142:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.line=void 0,a.line={height:{default:"100%",xs:"115%",sm:"120%",md:"133%",lg:"150%",xl:"170%",xxl:"200%"}}},96800:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.neutralColor=void 0,a.neutralColor={low:{pure:"#000000",light:"#A3A3A3",medium:"#666666",dark:"#292929"},high:{pure:"#FFFFFF",light:"#F5F5F5",medium:"#E0E0E0",dark:"#CCCCCC"}}},22702:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.opacity=void 0,a.opacity={level:{0:0,1:.04,2:.08,3:.12,4:.16,5:.24,6:.32,7:.64,8:.72}}},89691:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.shadow=void 0,a.shadow={level:{1:"0px 4px 8px rgba(0, 0, 0, 0.16)",2:"0px 8px 24px rgba(0, 0, 0, 0.16)",3:"0px 16px 32px rgba(0, 0, 0, 0.16)",4:"0px 16px 48px rgba(0, 0, 0, 0.24)"}}},94778:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.spacing=void 0,a.spacing={fn:function(a){return"".concat(.25*a,"rem")},quarck:"0.25rem",nano:"0.5rem",xxxs:"1rem",xxs:"1.5rem",xs:"2rem",sm:"2.5rem",md:"3rem",lg:"3.5rem",xl:"4rem",xxl:"5rem",xxxl:"7.5rem",huge:"10rem",giant:"12.5rem",inline:{quarck:"0.25rem",nano:"0.5rem",xxxs:"1rem",xxs:"1.5rem",xs:"2rem",sm:"2.5rem",md:"3rem",lg:"3.5rem",xl:"4rem",xxl:"5rem",xxxl:"7.5rem",huge:"10rem",giant:"12.5rem"},inset:{xxxs:"0.25rem",xxs:"0.5rem",xs:"1rem",sm:"1.5rem",md:"2rem",lg:"3rem"},stack:{quarck:"0.25rem",nano:"0.5rem",xxxs:"1rem",xxs:"1.5rem",xs:"2rem",sm:"2.5rem",md:"3rem",lg:"3.5rem",xl:"4rem",xxl:"5rem",xxxl:"7.5rem",huge:"10rem",giant:"12.5rem"},squish:{xxs:"0.5rem 1rem 0.5rem 1rem",xs:"1rem 1.5rem 1rem 1.5rem",sm:"1rem 2rem 1rem 2rem"}}},698:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.pxToRem=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:16;return a/b},a.remToPx=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:16;return a*b},a.decimalToHexadecimal=e,a.hexToRgba=function(b){var c=arguments.length>1&& void 0!==arguments[1]?arguments[1]:1,a=d.slicedToArray(b.match(/\w\w/g).map(e),3),f=a[0],g=a[1],h=a[2];return"rgba(".concat(f,", ").concat(g,", ").concat(h,", ").concat(c,")")},a.cleanUnit=function(a){return parseFloat(a.replace(/[a-zA-Z]/g,""))};var d=b(39037);function e(a){return parseInt(a,16)}},4132:function(h,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return g},meta:function(){return f}}),a(27378);var i=a(35318),e=a(26123),j=a.n(e),f={name:"Tokens",tableOfContents:{depth:0,children:[{depth:1,slug:"#tokens",title:"Tokens"}]}},k={meta:f};function g(a){var b=a.components,c=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["components"]);return(0,i.kt)("wrapper",Object.assign({},k,c,{components:b,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"tokens"}),"Tokens"),(0,i.kt)("p",null,"Valores padr\xe3o."),(0,i.kt)("code",{className:"language-json"},JSON.stringify(j()("orbita"),null,2)))}g.isMDXComponent=!0;var c={editThisPagePath:"src/pages/tokens/tokens.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[9774,2888,179],function(){return a(a.s=17647)}),_N_E=a.O()}])