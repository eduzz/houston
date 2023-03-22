(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8372],{19854:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useMediaQuery",function(){return c(41249)}])},12830:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return h}});var d=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=f(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=e?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(d,g,h):d[g]=a[g]}return d.default=a,c&&c.set(a,d),d}(c(27378));function e(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function f(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(f=function(a){return a?c:b})(a)}function g(a){return window.matchMedia(a).matches}function h(a){var b,c,f=(b=d.useState(function(){return g(a)}),c=2,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return e(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return e(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=f[0],i=f[1];return d.useEffect(function(){var b=function(){return i(g(a))},c=window.matchMedia(a);return b(),c.addListener?c.addListener(b):c.addEventListener("change",b),function(){c.removeListener?c.removeListener(b):c.removeEventListener("change",b)}},[a]),h}},41249:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return j},meta:function(){return h}});var d=c(31373);c(27378);var e=c(35318),f=c(56100),g=c(12830),h={name:"useMediaQuery",tableOfContents:{depth:0,children:[{depth:1,slug:"#usemediaquery",title:"useMediaQuery",children:[{depth:2,slug:"#como-usar",title:"Como usar"}]}]}},i={meta:h};function j(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,e.kt)("wrapper",Object.assign({},i,c,{components:b,mdxType:"MDXLayout"}),(0,e.kt)("h1",Object.assign({},{id:"usemediaquery"}),"useMediaQuery"),(0,e.kt)("p",null,"\xc9 usado para lidar com dimensionamento das telas e responsividade em componentes React"),(0,e.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,e.kt)("pre",null,(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import useMediaQuery from '@eduzz/houston-hooks/useMediaQuery';\n\nconst Component = () => {\n  const isMobile = useMediaQuery('(max-width: 768px)');\n  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;\n};\n")),(0,e.kt)(f.X,{__position:0,code:"() => {\n  const isMobile = useMediaQuery('(max-width: 768px)')\n  return (\n    <div>\n      A sua tela \xe9 {isMobile ? 'menor que' : 'maior que'} 768px de largura\n    </div>\n  )\n}",scope:{props:c,Playground:f.X,useMediaQuery:g.default,meta:h},mdxType:"Playground"},function(){var a=(0,g.default)("(max-width: 768px)");return(0,e.kt)("div",null,"A sua tela \xe9 ",a?"menor que":"maior que"," 768px de largura")}))}j.isMDXComponent=!0;var k={editThisPagePath:"src/pages/hooks/useMediaQuery/index.mdx"};for(var l in k)window[l]=k[l]}},function(a){a.O(0,[4526,7023,2885,4109,9774,2888,179],function(){var b;return a(a.s=19854)}),_N_E=a.O()}])