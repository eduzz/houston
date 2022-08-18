(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3597],{49586:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useObservableEffect",function(){return c(6202)}])},81576:function(a,b,c){"use strict";Object.defineProperty(b,"Z",{enumerable:!0,get:function(){return f}});var d=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=e(b);if(c&&c.has(a))return c.get(a);var d={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(d,g,h):d[g]=a[g]}return d.default=a,c&&c.set(a,d),d}(c(27378));function e(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(e=function(a){return a?c:b})(a)}function f(a,b){d.useEffect(function(){var b=a().subscribe();return function(){return b.unsubscribe()}},b)}},6202:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return w},meta:function(){return u}});var d=c(31373),e=c(27378),f=c(35318),g=c(56100),h=c(16784),i=c(77340),j=c(18804),k=c(65348),l=c(27554),m=c(14512);function n(a,b,c){var d=(0,j.m)(a)||b||c?{next:a,error:b,complete:c}:a;return d?(0,k.e)(function(a,b){null===(c=d.subscribe)|| void 0===c||c.call(d);var c,e=!0;a.subscribe((0,l.x)(b,function(a){var c;null===(c=d.next)|| void 0===c||c.call(d,a),b.next(a)},function(){var a;e=!1,null===(a=d.complete)|| void 0===a||a.call(d),b.complete()},function(a){var c;e=!1,null===(c=d.error)|| void 0===c||c.call(d,a),b.error(a)},function(){var a,b;e&&(null===(a=d.unsubscribe)|| void 0===a||a.call(d)),null===(b=d.finalize)|| void 0===b||b.call(d)}))}):m.y}var o=c(80850),p=c(52641),q=c(80598),r=c(30222),s=c(38861),t=c(81576),u={name:"useObservableEffect",tableOfContents:{depth:0,children:[{depth:1,slug:"#useobservableeffect",title:"useObservableEffect",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},v={meta:u};function w(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,f.kt)("wrapper",Object.assign({},v,c,{components:b,mdxType:"MDXLayout"}),(0,f.kt)("h1",Object.assign({},{id:"useobservableeffect"}),"useObservableEffect"),(0,f.kt)("p",null,"D\xe1 Subscribe em um Observable mas n\xe3o retorna ou altera o estado\ne quando o componente desmonta (unmount) tamb\xe9m d\xe1 unsubscribe,\ndiminuindo assim o risco de Memory Leak. ",(0,f.kt)("strong",{parentName:"p"},"Como useEffect que retorna o valor do Observable")),(0,f.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,f.kt)("pre",null,(0,f.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"useObservableEffect(() => userService.doSomething(), []);\n\nreturn <div>nothing will change or render</div>;\n")),(0,f.kt)(g.X,{__position:0,code:"() => {\n  const [reset, setReset] = useState()\n  useObservableEffect(\n    () =>\n      interval(1000).pipe(\n        take(5),\n        map((v) => v + 1),\n        tap((v) => console.log(v)),\n      ),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Button onClick={onReset}>Reset</Button>\n    </div>\n  )\n}",scope:{props:c,useState:e.useState,useCallback:e.useCallback,Playground:g.X,interval:h.F,of:i.of,delay:o.g,take:p.q,map:q.U,tap:n,Button:r.default,Typography:s.default,useObservableEffect:t.Z,meta:u},mdxType:"Playground"},function(){var a=(0,e.useState)(),b=a[0],c=a[1];(0,t.Z)(function(){return(0,h.F)(1e3).pipe((0,p.q)(5),(0,q.U)(function(a){return a+1}),n(function(a){return console.log(a)}))},[b]);var d=(0,e.useCallback)(function(){return c(Date.now())},[]);return(0,f.kt)("div",null,(0,f.kt)(r.default,{onClick:d,mdxType:"Button"},"Reset"))}),(0,f.kt)("h2",Object.assign({},{id:"cuidados"}),"Cuidados"),(0,f.kt)("ul",null,(0,f.kt)("li",{parentName:"ul"},(0,f.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados (n\xe3o tratados) se as o ",(0,f.kt)("strong",{parentName:"li"},"onUnhandledError")," no ",(0,f.kt)("strong",{parentName:"li"},"setHoustonHooksConfig"),"\nfor setado, mas se utilizar o operador catchError esse erro n\xe3o ser\xe1 logado pois foi previamente tratado,\nnesse caso o log deve ser feito manualmente.")),(0,f.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,f.kt)("pre",null,(0,f.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * @param observableGenerator Fun\xe7\xe3o que retorna um Observable\n * @param deps Lista de depend\xeancias\n * @returns void / nada\n */\nexport default useObservableEffect<T>(observableGenerator: () => Observable<T>, deps: React.DependencyList): void;\n")))}w.isMDXComponent=!0;var x={editThisPagePath:"src/pages/hooks/useObservableEffect/index.mdx"};for(var y in x)window[y]=x[y]},16784:function(a,b,c){"use strict";c.d(b,{F:function(){return f}});var d=c(75310),e=c(42193);function f(a,b){return void 0===a&&(a=0),void 0===b&&(b=d.z),a<0&&(a=0),(0,e.H)(a,a,b)}}},function(a){a.O(0,[4526,222,7281,5783,8482,4183,4109,9774,2888,179],function(){var b;return a(a.s=49586)}),_N_E=a.O()}])