(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1068],{65459:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Progress",function(){return c(29049)}])},62550:function(e,c,a){"use strict";var b=a(59312),f=a(24246),d=(0,b.__importStar)(a(27378)),g=a(87651),h=(0,b.__importDefault)(a(54964)),i=(0,b.__importDefault)(a(55869));c.Z=d.memo(function(a){var d=a.children,e=a.className,j=a.paper,k=(0,b.__rest)(a,["children","className","paper"]),c=(0,i.default)(a);return(0,f.jsx)(h.default,(0,b.__assign)({},k,{className:(0,g.cx)(e,c.box,j&&c.paper)},{children:d}),void 0)})},55869:function(d,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var c=(0,(0,b(59312).__importDefault)(b(35686)).default)(function(a){return{box:function(c){var b,d=c.xs,e=c.sm,f=c.md,g=c.lg,h=c.xl;return(b={})[a.breakpoints.up("xs")]={padding:null==d?void 0:d.padding,margin:null==d?void 0:d.margin},b[a.breakpoints.up("sm")]={padding:null==e?void 0:e.padding,margin:null==e?void 0:e.margin},b[a.breakpoints.up("md")]={padding:null==f?void 0:f.padding,margin:null==f?void 0:f.margin},b[a.breakpoints.up("lg")]={padding:null==g?void 0:g.padding,margin:null==g?void 0:g.margin},b[a.breakpoints.up("xl")]={padding:null==h?void 0:h.padding,margin:null==h?void 0:h.margin},b},paper:{background:"#fff",borderRadius:4}}});a.default=c},59266:function(e,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),f=a(24246),d=(0,b.__importStar)(a(27378)),g=(0,b.__importDefault)(a(77562)),h=(0,b.__importDefault)(a(29532));c.default=d.memo(function(a){var d=a.children,e=a.disabled,i=a.variant,j=a.color,m=a.startIcon,k=a.loading,c=void 0!==k&&k,l=a.loadingText,n=(0,b.__rest)(a,["children","disabled","variant","color","startIcon","loading","loadingText"]);return(0,f.jsxs)(g.default,(0,b.__assign)({},n,{disabled:void 0!==e&&e||c,startIcon:c?(0,f.jsx)(h.default,{size:18,color:"inherit"},void 0):m,disableRipple:!0,disableFocusRipple:!0,disableElevation:!0,disableTouchRipple:!0,variant:void 0===i?"contained":i,color:void 0===j?"primary":j},{children:[!c&&d,c&&(null!=l?l:d)]}),void 0)})},24885:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),g=a(24246),d=(0,c.__importStar)(a(27378)),h=(0,c.__importDefault)(a(36183)),e=d.forwardRef(function(a,b){var d=a.className,e=(0,c.__rest)(a,["className"]);return(0,g.jsx)(h.default,(0,c.__assign)({},e,{item:!0,className:d,ref:b}),void 0)});b.default=e},33272:function(g,d,a){"use strict";var b=a(59312),h=a(24246),c=(0,b.__importStar)(a(27378)),i=a(87651),j=(0,b.__importDefault)(a(72695)),e=(0,b.__importDefault)(a(35686)),k=(0,b.__importDefault)(a(77097)),l=(0,e.default)({root:{width:"100%",maxWidth:1062,margin:"0 auto"},comfortable:{padding:"0 18px"},cozy:{padding:"0 28px"},compact:{padding:"0 20px"},fluid:{maxWidth:"100%"}}),f=c.forwardRef(function(a,m){var n=a.children,o=a.className,e=a.spacing,f=void 0===e?"cozy":e,g=a.layout,p=(0,b.__rest)(a,["children","className","spacing","layout"]),d=l(),q=c.useMemo(function(){return{spacing:f}},[f]);return(0,h.jsx)(k.default,(0,b.__assign)({value:q},{children:(0,h.jsx)(j.default,(0,b.__assign)({},p,{ref:m,className:(0,i.cx)(d.root,d[f],"fluid"===(void 0===g?"solid":g)&&d.fluid,o)},{children:n}),void 0)}),void 0)});d.Z=c.memo(f)},29618:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),g=a(24246),d=(0,c.__importStar)(a(27378)),h=(0,c.__importDefault)(a(36183)),i=a(55693),j=a(77097),k=a(2293),e=d.forwardRef(function(a,b){var e=a.className,f=a.spacing,l=(0,c.__rest)(a,["className","spacing"]),m=(0,i.useContextSelector)(j.GridContext,function(a){return a.spacing}),n=d.useMemo(function(){var a;return k.ContainerSizes[null!==(a=null!=f?f:m)&& void 0!==a?a:"cozy"]},[m,f]);return(0,g.jsx)(h.default,(0,c.__assign)({},l,{container:!0,ref:b,className:e,spacing:n}),void 0)});b.default=d.memo(e)},77097:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.GridContext=void 0;var c=b(55693);a.GridContext=(0,c.createContext)({});var d=a.GridContext.Provider;a.default=d},2293:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ContainerSizes=void 0,a.ContainerSizes={comfortable:10,cozy:4,compact:2}},97477:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),g=a(24246),d=(0,c.__importDefault)(a(69098)),e=a(151),h=(0,e.styled)(d.default)(function(b){var a=b.theme;return{root:{height:8},colorPrimary:{backgroundColor:a.colors.grey[200]},bar:{height:80,backgroundColor:a.colors.success.main}}});b.default=function(b){var a=b.progress;return(0,g.jsx)(h,{variant:"determinate",value:a>100?100:a},void 0)}},17712:function(d,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),e=a(24246),f=a(87651),g=(0,b.__importDefault)(a(40196)),h=(0,b.__importDefault)(a(27251)),i=(0,(0,b.__importDefault)(a(35686)).default)(function(a){return{root:{width:40,height:40,color:a.colors.grey[300],backgroundColor:a.colors.grey[200],borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none",fontSize:a.textSize("default"),fontWeight:a.fontWeight("semibold")},finished:{backgroundColor:a.colors.success.main,fontWeight:a.fontWeight("semibold"),color:"#fff"},check:{fontSize:a.textSize("default")},warning:{color:a.colors.error.main}}});c.default=function(a){var j,l=a.icon,m=a.active,d=a.completed,k=a.error,c=i();return(0,e.jsxs)(e.Fragment,{children:[k&&(0,e.jsx)(h.default,{className:c.warning},void 0),!k&&(0,e.jsxs)("div",(0,b.__assign)({className:(0,f.cx)(c.root,((j={})[c.finished]=m||d,j))},{children:[d&&(0,e.jsx)(g.default,{className:c.check},void 0),!d&&l]}),void 0)]},void 0)}},21166:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),g=a(24246),d=(0,b.__importStar)(a(27378)),h=a(87651),i=(0,b.__importDefault)(a(22114)),j=(0,b.__importDefault)(a(75963)),k=(0,b.__importDefault)(a(54304)),e=(0,b.__importDefault)(a(35686)),l=(0,b.__importDefault)(a(97477)),m=(0,b.__importDefault)(a(17712)),n=(0,e.default)({root:{padding:"21px 20px 16px",borderTopRightRadius:4,borderTopLeftRadius:4,justifyContent:"space-between"}});c.default=d.memo(function(a){var c=a.steps,d=a.currentStep,e=void 0===d?0:d,f=(0,b.__rest)(a,["steps","currentStep"]),o=n(),p=(e+1)/c.length*100;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k.default,(0,b.__assign)({className:(0,h.cx)([o.root,!!f.className&&f.className]),activeStep:e,connector:null},{children:c.map(function(a,c){return(0,g.jsx)(i.default,{children:(0,g.jsx)(j.default,(0,b.__assign)({icon:a.icon||c+1,StepIconComponent:m.default,error:a.error},{children:a.label}),void 0)},"progress-step-"+c)})}),void 0),(0,g.jsx)(l.default,{progress:p},void 0)]},void 0)})},1115:function(e,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),f=a(24246),g=a(87651),h=(0,b.__importDefault)(a(29532)),d=(0,b.__importDefault)(a(35686)),i=(0,b.__importDefault)(a(98021)),j=(0,d.default)(function(a){return{root:{position:"relative",display:"inline-flex"},circularProgressBackground:{opacity:.2},circularProgress:{"& svg":{color:a.colors.success.main}},progress:{position:"absolute"},progressError:{"& svg":{color:a.colors.error.main}},progressIndicator:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",bottom:0,top:0,left:0,right:0,"& p":{color:a.colors.grey[500]}}}});c.default=function(c){var d=c.currentStep,e=void 0===d?0:d,k=c.maxSteps,n=c.type,l=c.error,a=j(),m=e/k*100;return(0,f.jsxs)("div",(0,b.__assign)({className:a.root},{children:[(0,f.jsx)(h.default,{variant:"determinate",size:90,value:100,className:(0,g.cx)(a.circularProgress,a.circularProgressBackground,l&&a.progressError),color:"primary"},void 0),(0,f.jsx)(h.default,{variant:"determinate",size:90,value:m,className:(0,g.cx)(a.circularProgress,a.progress,l&&a.progressError)},void 0),(0,f.jsx)("div",(0,b.__assign)({className:a.progressIndicator},{children:(0,f.jsx)(i.default,(0,b.__assign)({size:"default"},{children:"percentage"===n?m+"%":e+"/"+k}),void 0)}),void 0)]}),void 0)}},7998:function(e,c,a){"use strict";c.SE=void 0;var b=a(59312);(0,b.__importDefault)(a(21166)).default,(0,b.__importDefault)(a(1115)).default;var d=(0,b.__importDefault)(a(16241));c.SE=d.default},16241:function(d,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var c=b(59312),e=(0,c.__importStar)(b(27378));a.default=function(){var a=(0,c.__read)(e.useState(0),2),b=a[0],d=a[1],f=e.useCallback(function(){return d(function(a){return a+1})},[]),g=e.useCallback(function(){return d(function(a){return a-1})},[]);return{nextStep:f,backStep:g,setCurrentStep:d,currentStep:b}}},98021:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,b=a(59312),g=(0,b.__importStar)(a(27378)),h=a(87651),e=(0,b.__importDefault)(a(65388));c.default=(0,e.default)(function(a){var b=a.className,c=a.variant,e=a.id,f=a.children,d=a.component,i=a.onClick;return g.createElement(null!=d?d:"p",{id:e,onClick:i,className:(0,h.cx)(b,b,c&&"--variant-"+c)},f)})(d||(d=(0,b.__makeTemplateObject)(["\n  margin: 0;\n  font-size: ","px;\n  line-height: ",";\n  font-weight: ",";\n  margin-bottom: ",";\n\n  &.--variant-secondary {\n    color: ",";\n    font-size: ",";\n  }\n"],["\n  margin: 0;\n  font-size: ","px;\n  line-height: ",";\n  font-weight: ",";\n  margin-bottom: ",";\n\n  &.--variant-secondary {\n    color: ",";\n    font-size: ",";\n  }\n"])),function(a){var c=a.theme,b=a.size;return c.textSize(null!=b?b:"normal")},function(a){var c=a.theme,b=a.lineHeight;return c.lineHeight(null!=b?b:"normal")},function(a){var c=a.theme,b=a.fontWeight;return c.fontWeight(null!=b?b:"regular")},function(a){var b=a.theme,c=a.marginBottom;return c?b.spacing(2):null},function(a){return a.theme.colors.grey[500]},function(a){return a.theme.textSize("small")})},35686:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),e=a(87651),f=(0,c.__importDefault)(a(44659));b.default=function(a){return function(d){var b;return b="function"==typeof a?a((0,f.default)()):a,Object.keys(b).reduce(function(g,a){var f;return(0,c.__assign)((0,c.__assign)({},g),((f={})[a]=(0,e.css)("function"==typeof b[a]?b[a](d):b[a]),f))},{})}}},65388:function(h,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.breakpoints=a.cx=a.clsx=void 0;var c=b(59312),d=b(87651),e=(0,c.__importDefault)(b(94408)),f=(0,c.__importDefault)(b(18651));a.clsx=d.cx,a.cx=d.cx,a.breakpoints=(0,f.default)({});var g=e.default;a.default=g},44659:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=b(151);a.default=function(){return(0,d.useTheme)()}},29049:function(g,b,a){"use strict";a.r(b),a.d(b,{meta:function(){return e},"default":function(){return f}});var h=a(27378),i=a(35318),j=a(22093),k=a(99640),l=a(58489),m=a(56100),n=a(62550),o=a(59266),p=a(24885),q=a(33272),r=a(29618),s=a(7998),t=a(21166),u=a(1115),e={name:"Progress",tableOfContents:{depth:0,children:[{depth:1,slug:"#progress",title:"Progress",children:[{depth:2,slug:"#line",title:"Line",children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#com-\xedcones",title:"Com \xedcones"},{depth:3,slug:"#etapa-de-erro",title:"Etapa de erro"}]},{depth:2,slug:"#round",title:"Round",children:[{depth:3,slug:"#importa\xe7\xe3o-1",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo-1",title:"Exemplo"},{depth:3,slug:"#erro-no-progresso",title:"Erro no progresso"}]}]}]}},v={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},v,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"progress"}),"Progress"),(0,i.kt)("p",null,"S\xe3o usados para transmitir progresso atrav\xe9s de etapas numeradas. Ele fornece um fluxo de trabalho com etapas."),(0,i.kt)("h2",Object.assign({},{id:"line"}),"Line"),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import ProgressLine from '@eduzz/houston-ui/Progress/Line';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,i.kt)(m.X,{__position:0,code:"() => {\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const steps = [\n    {\n      label: 'Dados pessoais',\n    },\n    {\n      label: 'Endere\xe7o',\n    },\n    {\n      label: 'Pagamento',\n    },\n    {\n      label: 'Obrigado',\n    },\n  ]\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <Container>\n      <Row>\n        <Column xs={12}>\n          <ProgressLine steps={steps} currentStep={currentStep} />\n        </Column>\n      </Row>\n      <div style={{ margin: '16px 0' }} />\n      <Row>\n        {currentStep === steps.length && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== steps.length && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button\n                onClick={nextStep}\n                disabled={currentStep === steps.length}\n              >\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </Container>\n  )\n}",scope:{props:a,AccountCircleIcon:j.Z,AddAPhotoIcon:k.Z,LinkIcon:l.Z,Playground:m.X,Box:n.Z,Button:o.default,Column:p.default,Container:q.Z,Row:r.default,useProgress:s.SE,ProgressLine:t.default,ProgressRound:u.default,meta:e},mdxType:"Playground"},function(){var b=(0,s.SE)(),d=b.nextStep,e=b.backStep,f=b.setCurrentStep,a=b.currentStep,c=[{label:"Dados pessoais"},{label:"Endere\xe7o"},{label:"Pagamento"},{label:"Obrigado"}];return(0,i.kt)(q.Z,{mdxType:"Container"},(0,i.kt)(r.default,{mdxType:"Row"},(0,i.kt)(p.default,{xs:12,mdxType:"Column"},(0,i.kt)(t.default,{steps:c,currentStep:a,mdxType:"ProgressLine"}))),(0,i.kt)("div",{style:{margin:"16px 0"}}),(0,i.kt)(r.default,{mdxType:"Row"},a===c.length&&(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:function(){return f(0)},variant:"text",mdxType:"Button"},"Resetar")),a!==c.length&&(0,i.kt)(h.Fragment,null,(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:e,disabled:0===a,mdxType:"Button"},"Anterior")),(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:d,disabled:a===c.length,mdxType:"Button"},"Pr\xf3ximo")))))}),(0,i.kt)("h3",Object.assign({},{id:"com-\xedcones"}),"Com \xedcones"),(0,i.kt)(m.X,{__position:1,code:"() => {\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const steps = [\n    {\n      label: 'Criar conta',\n      icon: <AccountCircleIcon />,\n    },\n    {\n      label: 'Adicionar foto',\n      icon: <AddAPhotoIcon />,\n    },\n    {\n      label: 'Compartilhe com amigos',\n      icon: <LinkIcon />,\n    },\n  ]\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <Container>\n      <Row>\n        <Column xs={12}>\n          <ProgressLine steps={steps} currentStep={currentStep} />\n        </Column>\n      </Row>\n      <div style={{ margin: '16px 0' }} />\n      <Row>\n        {currentStep === steps.length && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== steps.length && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button\n                onClick={nextStep}\n                disabled={currentStep === steps.length}\n              >\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </Container>\n  )\n}",scope:{props:a,AccountCircleIcon:j.Z,AddAPhotoIcon:k.Z,LinkIcon:l.Z,Playground:m.X,Box:n.Z,Button:o.default,Column:p.default,Container:q.Z,Row:r.default,useProgress:s.SE,ProgressLine:t.default,ProgressRound:u.default,meta:e},mdxType:"Playground"},function(){var b=(0,s.SE)(),d=b.nextStep,e=b.backStep,f=b.setCurrentStep,a=b.currentStep,c=[{label:"Criar conta",icon:(0,i.kt)(j.Z,{mdxType:"AccountCircleIcon"})},{label:"Adicionar foto",icon:(0,i.kt)(k.Z,{mdxType:"AddAPhotoIcon"})},{label:"Compartilhe com amigos",icon:(0,i.kt)(l.Z,{mdxType:"LinkIcon"})}];return(0,i.kt)(q.Z,{mdxType:"Container"},(0,i.kt)(r.default,{mdxType:"Row"},(0,i.kt)(p.default,{xs:12,mdxType:"Column"},(0,i.kt)(t.default,{steps:c,currentStep:a,mdxType:"ProgressLine"}))),(0,i.kt)("div",{style:{margin:"16px 0"}}),(0,i.kt)(r.default,{mdxType:"Row"},a===c.length&&(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:function(){return f(0)},variant:"text",mdxType:"Button"},"Resetar")),a!==c.length&&(0,i.kt)(h.Fragment,null,(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:e,disabled:0===a,mdxType:"Button"},"Anterior")),(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:d,disabled:a===c.length,mdxType:"Button"},"Pr\xf3ximo")))))}),(0,i.kt)("h3",Object.assign({},{id:"etapa-de-erro"}),"Etapa de erro"),(0,i.kt)(m.X,{__position:2,code:"() => {\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const steps = [\n    {\n      label: 'Configura\xe7\xe3o da campanha',\n    },\n    {\n      label: 'Grupo de campanha',\n      error: true,\n    },\n    {\n      label: 'Pagamento',\n    },\n    {\n      label: 'Obrigado',\n    },\n  ]\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <Container>\n      <Row>\n        <Column xs={12}>\n          <ProgressLine steps={steps} currentStep={currentStep} />\n        </Column>\n      </Row>\n      <Box xs={{ margin: '16px 0' }} />\n      <Row>\n        {currentStep === steps.length && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== steps.length && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button\n                onClick={nextStep}\n                disabled={currentStep === steps.length}\n              >\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </Container>\n  )\n}",scope:{props:a,AccountCircleIcon:j.Z,AddAPhotoIcon:k.Z,LinkIcon:l.Z,Playground:m.X,Box:n.Z,Button:o.default,Column:p.default,Container:q.Z,Row:r.default,useProgress:s.SE,ProgressLine:t.default,ProgressRound:u.default,meta:e},mdxType:"Playground"},function(){var b=(0,s.SE)(),d=b.nextStep,e=b.backStep,f=b.setCurrentStep,a=b.currentStep,c=[{label:"Configura\xe7\xe3o da campanha"},{label:"Grupo de campanha",error:!0},{label:"Pagamento"},{label:"Obrigado"}];return(0,i.kt)(q.Z,{mdxType:"Container"},(0,i.kt)(r.default,{mdxType:"Row"},(0,i.kt)(p.default,{xs:12,mdxType:"Column"},(0,i.kt)(t.default,{steps:c,currentStep:a,mdxType:"ProgressLine"}))),(0,i.kt)(n.Z,{xs:{margin:"16px 0"},mdxType:"Box"}),(0,i.kt)(r.default,{mdxType:"Row"},a===c.length&&(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:function(){return f(0)},variant:"text",mdxType:"Button"},"Resetar")),a!==c.length&&(0,i.kt)(h.Fragment,null,(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:e,disabled:0===a,mdxType:"Button"},"Anterior")),(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:d,disabled:a===c.length,mdxType:"Button"},"Pr\xf3ximo")))))}),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"interface IStep {\n  icon?: React.ReactNode;\n  label?: string;\n  error?: boolean;\n}\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"steps"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"IStep[]")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"currentStep"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"0")))),(0,i.kt)("h2",Object.assign({},{id:"round"}),"Round"),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o-1"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import ProgressRound from '@eduzz/houston-ui/Progress/Round';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplo-1"}),"Exemplo"),(0,i.kt)(m.X,{__position:3,code:"() => {\n  const MAX_STEPS = 4\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <>\n      <Row>\n        <Column>\n          <Box xs={{ padding: '20px 0' }}>\n            <ProgressRound maxSteps={MAX_STEPS} currentStep={currentStep} />\n          </Box>\n        </Column>\n        <Column>\n          <Box xs={{ padding: '20px 0' }}>\n            <ProgressRound\n              type=\"percentage\"\n              maxSteps={MAX_STEPS}\n              currentStep={currentStep}\n            />\n          </Box>\n        </Column>\n      </Row>\n      <Row>\n        {currentStep === MAX_STEPS && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== MAX_STEPS && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button onClick={nextStep} disabled={currentStep === MAX_STEPS}>\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </>\n  )\n}",scope:{props:a,AccountCircleIcon:j.Z,AddAPhotoIcon:k.Z,LinkIcon:l.Z,Playground:m.X,Box:n.Z,Button:o.default,Column:p.default,Container:q.Z,Row:r.default,useProgress:s.SE,ProgressLine:t.default,ProgressRound:u.default,meta:e},mdxType:"Playground"},function(){var b=(0,s.SE)(),c=b.nextStep,d=b.backStep,e=b.setCurrentStep,a=b.currentStep;return(0,i.kt)(h.Fragment,null,(0,i.kt)(r.default,{mdxType:"Row"},(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(n.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,i.kt)(u.default,{maxSteps:4,currentStep:a,mdxType:"ProgressRound"}))),(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(n.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,i.kt)(u.default,{type:"percentage",maxSteps:4,currentStep:a,mdxType:"ProgressRound"})))),(0,i.kt)(r.default,{mdxType:"Row"},4===a&&(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:function(){return e(0)},variant:"text",mdxType:"Button"},"Resetar")),4!==a&&(0,i.kt)(h.Fragment,null,(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:d,disabled:0===a,mdxType:"Button"},"Anterior")),(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:c,disabled:4===a,mdxType:"Button"},"Pr\xf3ximo")))))}),(0,i.kt)("h3",Object.assign({},{id:"erro-no-progresso"}),"Erro no progresso"),(0,i.kt)(m.X,{__position:4,code:"<Row>\n  <Column>\n    <Box xs={{ padding: '20px 0' }}>\n      <ProgressRound maxSteps={4} currentStep={2} error />\n    </Box>\n  </Column>\n  <Column>\n    <Box xs={{ padding: '20px 0' }}>\n      <ProgressRound type=\"percentage\" maxSteps={4} currentStep={2} error />\n    </Box>\n  </Column>\n</Row>",scope:{props:a,AccountCircleIcon:j.Z,AddAPhotoIcon:k.Z,LinkIcon:l.Z,Playground:m.X,Box:n.Z,Button:o.default,Column:p.default,Container:q.Z,Row:r.default,useProgress:s.SE,ProgressLine:t.default,ProgressRound:u.default,meta:e},mdxType:"Playground"},(0,i.kt)(r.default,{mdxType:"Row"},(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(n.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,i.kt)(u.default,{maxSteps:4,currentStep:2,error:!0,mdxType:"ProgressRound"}))),(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(n.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,i.kt)(u.default,{type:"percentage",maxSteps:4,currentStep:2,error:!0,mdxType:"ProgressRound"}))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"maxSteps"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Indica o n\xfamero m\xe1ximo de passos do progresso")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"currentStep"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"0"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Indica o passo atual do progresso")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"type"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"numeric"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"percentage")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"numeric")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Indica como vai ser exibido o progresso no componente: n\xfamero ou porcentagem")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"error"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", altera a cor do progresso para cor de erro da paleta de cores")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Progress/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,4356,9961,6557,2359,4360,9972,3245,9774,2888,179],function(){return a(a.s=65459)}),_N_E=a.O()}])