(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1068],{65459:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Progress",function(){return c(99414)}])},22821:function(a,b,c){"use strict";var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=(0,d.__importDefault)(c(81913)),h=(0,d.__importDefault)(c(38944)),i=(0,d.__importDefault)(c(82178));b.Z=f.memo(function(a){var b=a.children,c=a.className,f=a.paper,j=(0,d.__rest)(a,["children","className","paper"]),k=(0,i.default)(a);return(0,e.jsx)(g.default,(0,d.__assign)({},j,{className:(0,h.default)(c,k.box,f&&k.paper)},{children:b}),void 0)})},82178:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=(0,(0,c(59312).__importDefault)(c(11376)).default)(function(a){return{box:function(b){var c,d=b.xs,e=b.sm,f=b.md,g=b.lg,h=b.xl;return(c={})[a.breakpoints.up("xs")]={padding:null==d?void 0:d.padding,margin:null==d?void 0:d.margin},c[a.breakpoints.up("sm")]={padding:null==e?void 0:e.padding,margin:null==e?void 0:e.margin},c[a.breakpoints.up("md")]={padding:null==f?void 0:f.padding,margin:null==f?void 0:f.margin},c[a.breakpoints.up("lg")]={padding:null==g?void 0:g.padding,margin:null==g?void 0:g.margin},c[a.breakpoints.up("xl")]={padding:null==h?void 0:h.padding,margin:null==h?void 0:h.margin},c},paper:{background:"#fff",borderRadius:4}}});b.default=d},30222:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=(0,d.__importDefault)(c(13053)),h=(0,d.__importDefault)(c(83251));b.default=f.memo(function(a){var b=a.children,c=a.disabled,f=a.variant,i=a.color,j=a.startIcon,k=a.loading,l=void 0!==k&&k,m=a.loadingText,n=(0,d.__rest)(a,["children","disabled","variant","color","startIcon","loading","loadingText"]);return(0,e.jsxs)(g.default,(0,d.__assign)({},n,{disabled:void 0!==c&&c||l,startIcon:l?(0,e.jsx)(h.default,{size:18,color:"inherit"},void 0):j,disableRipple:!0,disableFocusRipple:!0,disableElevation:!0,disableTouchRipple:!0,variant:void 0===f?"contained":f,color:void 0===i?"primary":i},{children:[!l&&b,l&&(null!=m?m:b)]}),void 0)})},54703:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=(0,d.__importDefault)(c(78190)),h=f.forwardRef(function(a,b){var c=a.className,f=(0,d.__rest)(a,["className"]);return(0,e.jsx)(g.default,(0,d.__assign)({},f,{item:!0,className:c,ref:b}),void 0)});b.default=h},19235:function(a,b,c){"use strict";var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=(0,d.__importDefault)(c(3986)),h=(0,d.__importDefault)(c(38944)),i=(0,d.__importDefault)(c(11376)),j=(0,d.__importDefault)(c(5742)),k=(0,i.default)({root:{width:"100%",maxWidth:1062,margin:"0 auto"},comfortable:{padding:"0 18px"},cozy:{padding:"0 28px"},compact:{padding:"0 20px"},fluid:{maxWidth:"100%"}}),l=f.forwardRef(function(a,b){var c=a.children,i=a.className,l=a.spacing,m=void 0===l?"cozy":l,n=a.layout,o=(0,d.__rest)(a,["children","className","spacing","layout"]),p=k(),q=f.useMemo(function(){return{spacing:m}},[m]);return(0,e.jsx)(j.default,(0,d.__assign)({value:q},{children:(0,e.jsx)(g.default,(0,d.__assign)({},o,{ref:b,className:(0,h.default)(p.root,p[m],"fluid"===(void 0===n?"solid":n)&&p.fluid,i)},{children:c}),void 0)}),void 0)});b.Z=f.memo(l)},78983:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=(0,d.__importDefault)(c(78190)),h=c(55693),i=c(5742),j=c(87969),k=f.forwardRef(function(a,b){var c=a.className,k=a.spacing,l=(0,d.__rest)(a,["className","spacing"]),m=(0,h.useContextSelector)(i.GridContext,function(a){return a.spacing}),n=f.useMemo(function(){var a;return j.ContainerSizes[null!==(a=null!=k?k:m)&& void 0!==a?a:"cozy"]},[m,k]);return(0,e.jsx)(g.default,(0,d.__assign)({},l,{container:!0,ref:b,className:c,spacing:n}),void 0)});b.default=f.memo(k)},5742:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.GridContext=void 0;var d=c(55693);b.GridContext=(0,d.createContext)({});var e=b.GridContext.Provider;b.default=e},87969:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.ContainerSizes=void 0,b.ContainerSizes={comfortable:10,cozy:4,compact:2}},97062:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(24246),f=(0,d.__importDefault)(c(25324)),g=c(81006),h=(0,g.styled)(f.default)(function(a){var b=a.theme;return{root:{height:8},colorPrimary:{backgroundColor:b.colors.grey[200]},bar:{height:80,backgroundColor:b.colors.success.main}}});b.default=function(a){var b=a.progress;return(0,e.jsx)(h,{variant:"determinate",value:b>100?100:b},void 0)}},80356:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(24246),f=(0,d.__importDefault)(c(40196)),g=(0,d.__importDefault)(c(27251)),h=(0,d.__importDefault)(c(38944)),i=(0,(0,d.__importDefault)(c(11376)).default)(function(a){return{root:{width:40,height:40,color:a.colors.grey[300],backgroundColor:a.colors.grey[200],borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none",fontSize:a.textSize("default"),fontWeight:a.fontWeight("semibold")},finished:{backgroundColor:a.colors.success.main,fontWeight:a.fontWeight("semibold"),color:"#fff"},check:{fontSize:a.textSize("default")},warning:{color:a.colors.error.main}}});b.default=function(a){var b,c=a.icon,j=a.active,k=a.completed,l=a.error,m=i();return(0,e.jsxs)(e.Fragment,{children:[l&&(0,e.jsx)(g.default,{className:m.warning},void 0),!l&&(0,e.jsxs)("div",(0,d.__assign)({className:(0,h.default)(m.root,((b={})[m.finished]=j||k,b))},{children:[k&&(0,e.jsx)(f.default,{className:m.check},void 0),!k&&c]}),void 0)]},void 0)}},6811:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=(0,d.__importDefault)(c(78474)),h=(0,d.__importDefault)(c(39321)),i=(0,d.__importDefault)(c(84160)),j=(0,d.__importDefault)(c(38944)),k=(0,d.__importDefault)(c(11376)),l=(0,d.__importDefault)(c(97062)),m=(0,d.__importDefault)(c(80356)),n=(0,k.default)({root:{padding:"21px 20px 16px",borderTopRightRadius:4,borderTopLeftRadius:4,justifyContent:"space-between"}});b.default=f.memo(function(a){var b=a.steps,c=a.currentStep,f=void 0===c?0:c,k=(0,d.__rest)(a,["steps","currentStep"]),o=n(),p=(f+1)/b.length*100;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.default,(0,d.__assign)({className:(0,j.default)([o.root,!!k.className&&k.className]),activeStep:f,connector:null},{children:b.map(function(a,b){return(0,e.jsx)(g.default,{children:(0,e.jsx)(h.default,(0,d.__assign)({icon:a.icon||b+1,StepIconComponent:m.default,error:a.error},{children:a.label}),void 0)},"progress-step-"+b)})}),void 0),(0,e.jsx)(l.default,{progress:p},void 0)]},void 0)})},14651:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(24246),f=(0,d.__importDefault)(c(83251)),g=(0,d.__importDefault)(c(38944)),h=(0,d.__importDefault)(c(11376)),i=(0,d.__importDefault)(c(38861)),j=(0,h.default)(function(a){return{root:{position:"relative",display:"inline-flex"},circularProgressBackground:{opacity:0.2},circularProgress:{"& svg":{color:a.colors.success.main}},progress:{position:"absolute"},progressError:{"& svg":{color:a.colors.error.main}},progressIndicator:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",bottom:0,top:0,left:0,right:0,"& p":{color:a.colors.grey[500]}}}});b.default=function(a){var b=a.currentStep,c=void 0===b?0:b,h=a.maxSteps,k=a.type,l=a.error,m=j(),n=c/h*100;return(0,e.jsxs)("div",(0,d.__assign)({className:m.root},{children:[(0,e.jsx)(f.default,{variant:"determinate",size:90,value:100,className:(0,g.default)(m.circularProgress,m.circularProgressBackground,l&&m.progressError),color:"primary"},void 0),(0,e.jsx)(f.default,{variant:"determinate",size:90,value:n,className:(0,g.default)(m.circularProgress,m.progress,l&&m.progressError)},void 0),(0,e.jsx)("div",(0,d.__assign)({className:m.progressIndicator},{children:(0,e.jsx)(i.default,(0,d.__assign)({size:"default"},{children:"percentage"===k?n+"%":c+"/"+h}),void 0)}),void 0)]}),void 0)}},89516:function(a,b,c){"use strict";b.SE=void 0;var d=c(59312);(0,d.__importDefault)(c(6811)).default,(0,d.__importDefault)(c(14651)).default;var e=(0,d.__importDefault)(c(81993));b.SE=e.default},81993:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=(0,d.__importStar)(c(27378));b.default=function(){var a=(0,d.__read)(e.useState(0),2),b=a[0],c=a[1],f=e.useCallback(function(){return c(function(a){return a+1})},[]),g=e.useCallback(function(){return c(function(a){return a-1})},[]);return{nextStep:f,backStep:g,setCurrentStep:c,currentStep:b}}},38861:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=(0,d.__importStar)(c(27378)),f=(0,d.__importDefault)(c(38944)),g=(0,(0,d.__importDefault)(c(11376)).default)(function(a){return{text:function(b){var c,d,e;return{margin:0,fontSize:a.textSize(null!==(c=b.size)&& void 0!==c?c:"normal"),lineHeight:a.lineHeight(null!==(d=b.lineHeight)&& void 0!==d?d:"normal"),fontWeight:a.fontWeight(null!==(e=b.fontWeight)&& void 0!==e?e:"regular"),marginBottom:b.marginBottom?a.spacing(2):null}},secondary:{color:a.colors.grey[500],fontSize:a.textSize("small")}}});b.default=e.memo(function(a){var b,c=g(a),h=e.useMemo(function(){return{id:null==a?void 0:a.id,children:null==a?void 0:a.children,onClick:null==a?void 0:a.onClick}},[null==a?void 0:a.children,null==a?void 0:a.id,null==a?void 0:a.onClick]),i=e.useMemo(function(){return{secondary:c.secondary}},[c.secondary]);return e.createElement(null!==(b=null==a?void 0:a.component)&& void 0!==b?b:"p",(0,d.__assign)((0,d.__assign)({},h),{className:(0,f.default)(c.text,null==a?void 0:a.className,i[null==a?void 0:a.variant])}))})},11376:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(87651),f=(0,d.__importDefault)(c(43297));b.default=function(a){return function(b){var c;return c="function"==typeof a?a((0,f.default)()):a,Object.keys(c).reduce(function(a,f){var g;return(0,d.__assign)((0,d.__assign)({},a),((g={})[f]=(0,e.css)("function"==typeof c[f]?c[f](b):c[f]),g))},{})}}},43297:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(81006);b.default=function(){return(0,d.useTheme)()}},99414:function(a,b,c){"use strict";c.r(b),c.d(b,{meta:function(){return r},"default":function(){return t}});var d=c(27378),e=c(35318),f=c(22093),g=c(99640),h=c(58489),i=c(56100),j=c(22821),k=c(30222),l=c(54703),m=c(19235),n=c(78983),o=c(89516),p=c(6811),q=c(14651),r={name:"Progress",tableOfContents:{depth:0,children:[{depth:1,slug:"#progress",title:"Progress",children:[{depth:2,slug:"#line",title:"Line",children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#com-\xedcones",title:"Com \xedcones"},{depth:3,slug:"#etapa-de-erro",title:"Etapa de erro"}]},{depth:2,slug:"#round",title:"Round",children:[{depth:3,slug:"#importa\xe7\xe3o-1",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo-1",title:"Exemplo"},{depth:3,slug:"#erro-no-progresso",title:"Erro no progresso"}]}]}]}},s={meta:r};function t(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,e.kt)("wrapper",Object.assign({},s,c,{components:b,mdxType:"MDXLayout"}),(0,e.kt)("h1",Object.assign({},{id:"progress"}),"Progress"),(0,e.kt)("p",null,"S\xe3o usados para transmitir progresso atrav\xe9s de etapas numeradas. Ele fornece um fluxo de trabalho com etapas."),(0,e.kt)("h2",Object.assign({},{id:"line"}),"Line"),(0,e.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,e.kt)("pre",null,(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import ProgressLine from '@eduzz/houston-ui/Progress/Line';\n")),(0,e.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,e.kt)(i.X,{__position:0,code:"() => {\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const steps = [\n    {\n      label: 'Dados pessoais',\n    },\n    {\n      label: 'Endere\xe7o',\n    },\n    {\n      label: 'Pagamento',\n    },\n    {\n      label: 'Obrigado',\n    },\n  ]\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <Container>\n      <Row>\n        <Column xs={12}>\n          <ProgressLine steps={steps} currentStep={currentStep} />\n        </Column>\n      </Row>\n      <div style={{ margin: '16px 0' }} />\n      <Row>\n        {currentStep === steps.length && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== steps.length && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button\n                onClick={nextStep}\n                disabled={currentStep === steps.length}\n              >\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </Container>\n  )\n}",scope:{props:c,AccountCircleIcon:f.Z,AddAPhotoIcon:g.Z,LinkIcon:h.Z,Playground:i.X,Box:j.Z,Button:k.default,Column:l.default,Container:m.Z,Row:n.default,useProgress:o.SE,ProgressLine:p.default,ProgressRound:q.default,meta:r},mdxType:"Playground"},function(){var a=(0,o.SE)(),b=a.nextStep,c=a.backStep,f=a.setCurrentStep,g=a.currentStep,h=[{label:"Dados pessoais"},{label:"Endere\xe7o"},{label:"Pagamento"},{label:"Obrigado"}];return(0,e.kt)(m.Z,{mdxType:"Container"},(0,e.kt)(n.default,{mdxType:"Row"},(0,e.kt)(l.default,{xs:12,mdxType:"Column"},(0,e.kt)(p.default,{steps:h,currentStep:g,mdxType:"ProgressLine"}))),(0,e.kt)("div",{style:{margin:"16px 0"}}),(0,e.kt)(n.default,{mdxType:"Row"},g===h.length&&(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(k.default,{onClick:function(){return f(0)},variant:"text",mdxType:"Button"},"Resetar")),g!==h.length&&(0,e.kt)(d.Fragment,null,(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(k.default,{onClick:c,disabled:0===g,mdxType:"Button"},"Anterior")),(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(k.default,{onClick:b,disabled:g===h.length,mdxType:"Button"},"Pr\xf3ximo")))))}),(0,e.kt)("h3",Object.assign({},{id:"com-\xedcones"}),"Com \xedcones"),(0,e.kt)(i.X,{__position:1,code:"() => {\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const steps = [\n    {\n      label: 'Criar conta',\n      icon: <AccountCircleIcon />,\n    },\n    {\n      label: 'Adicionar foto',\n      icon: <AddAPhotoIcon />,\n    },\n    {\n      label: 'Compartilhe com amigos',\n      icon: <LinkIcon />,\n    },\n  ]\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <Container>\n      <Row>\n        <Column xs={12}>\n          <ProgressLine steps={steps} currentStep={currentStep} />\n        </Column>\n      </Row>\n      <div style={{ margin: '16px 0' }} />\n      <Row>\n        {currentStep === steps.length && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== steps.length && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button\n                onClick={nextStep}\n                disabled={currentStep === steps.length}\n              >\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </Container>\n  )\n}",scope:{props:c,AccountCircleIcon:f.Z,AddAPhotoIcon:g.Z,LinkIcon:h.Z,Playground:i.X,Box:j.Z,Button:k.default,Column:l.default,Container:m.Z,Row:n.default,useProgress:o.SE,ProgressLine:p.default,ProgressRound:q.default,meta:r},mdxType:"Playground"},function(){var a=(0,o.SE)(),b=a.nextStep,c=a.backStep,i=a.setCurrentStep,j=a.currentStep,q=[{label:"Criar conta",icon:(0,e.kt)(f.Z,{mdxType:"AccountCircleIcon"})},{label:"Adicionar foto",icon:(0,e.kt)(g.Z,{mdxType:"AddAPhotoIcon"})},{label:"Compartilhe com amigos",icon:(0,e.kt)(h.Z,{mdxType:"LinkIcon"})}];return(0,e.kt)(m.Z,{mdxType:"Container"},(0,e.kt)(n.default,{mdxType:"Row"},(0,e.kt)(l.default,{xs:12,mdxType:"Column"},(0,e.kt)(p.default,{steps:q,currentStep:j,mdxType:"ProgressLine"}))),(0,e.kt)("div",{style:{margin:"16px 0"}}),(0,e.kt)(n.default,{mdxType:"Row"},j===q.length&&(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(k.default,{onClick:function(){return i(0)},variant:"text",mdxType:"Button"},"Resetar")),j!==q.length&&(0,e.kt)(d.Fragment,null,(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(k.default,{onClick:c,disabled:0===j,mdxType:"Button"},"Anterior")),(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(k.default,{onClick:b,disabled:j===q.length,mdxType:"Button"},"Pr\xf3ximo")))))}),(0,e.kt)("h3",Object.assign({},{id:"etapa-de-erro"}),"Etapa de erro"),(0,e.kt)(i.X,{__position:2,code:"() => {\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const steps = [\n    {\n      label: 'Configura\xe7\xe3o da campanha',\n    },\n    {\n      label: 'Grupo de campanha',\n      error: true,\n    },\n    {\n      label: 'Pagamento',\n    },\n    {\n      label: 'Obrigado',\n    },\n  ]\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <Container>\n      <Row>\n        <Column xs={12}>\n          <ProgressLine steps={steps} currentStep={currentStep} />\n        </Column>\n      </Row>\n      <Box xs={{ margin: '16px 0' }} />\n      <Row>\n        {currentStep === steps.length && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== steps.length && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button\n                onClick={nextStep}\n                disabled={currentStep === steps.length}\n              >\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </Container>\n  )\n}",scope:{props:c,AccountCircleIcon:f.Z,AddAPhotoIcon:g.Z,LinkIcon:h.Z,Playground:i.X,Box:j.Z,Button:k.default,Column:l.default,Container:m.Z,Row:n.default,useProgress:o.SE,ProgressLine:p.default,ProgressRound:q.default,meta:r},mdxType:"Playground"},function(){var a=(0,o.SE)(),b=a.nextStep,c=a.backStep,f=a.setCurrentStep,g=a.currentStep,h=[{label:"Configura\xe7\xe3o da campanha"},{label:"Grupo de campanha",error:!0},{label:"Pagamento"},{label:"Obrigado"}];return(0,e.kt)(m.Z,{mdxType:"Container"},(0,e.kt)(n.default,{mdxType:"Row"},(0,e.kt)(l.default,{xs:12,mdxType:"Column"},(0,e.kt)(p.default,{steps:h,currentStep:g,mdxType:"ProgressLine"}))),(0,e.kt)(j.Z,{xs:{margin:"16px 0"},mdxType:"Box"}),(0,e.kt)(n.default,{mdxType:"Row"},g===h.length&&(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(k.default,{onClick:function(){return f(0)},variant:"text",mdxType:"Button"},"Resetar")),g!==h.length&&(0,e.kt)(d.Fragment,null,(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(k.default,{onClick:c,disabled:0===g,mdxType:"Button"},"Anterior")),(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(k.default,{onClick:b,disabled:g===h.length,mdxType:"Button"},"Pr\xf3ximo")))))}),(0,e.kt)("pre",null,(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"interface IStep {\n  icon?: React.ReactNode;\n  label?: string;\n  error?: boolean;\n}\n")),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"steps"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"IStep[]")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"true")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"currentStep"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"number")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"0")))),(0,e.kt)("h2",Object.assign({},{id:"round"}),"Round"),(0,e.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o-1"}),"Importa\xe7\xe3o"),(0,e.kt)("pre",null,(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import ProgressRound from '@eduzz/houston-ui/Progress/Round';\n")),(0,e.kt)("h3",Object.assign({},{id:"exemplo-1"}),"Exemplo"),(0,e.kt)(i.X,{__position:3,code:"() => {\n  const MAX_STEPS = 4\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <>\n      <Row>\n        <Column>\n          <Box xs={{ padding: '20px 0' }}>\n            <ProgressRound maxSteps={MAX_STEPS} currentStep={currentStep} />\n          </Box>\n        </Column>\n        <Column>\n          <Box xs={{ padding: '20px 0' }}>\n            <ProgressRound\n              type=\"percentage\"\n              maxSteps={MAX_STEPS}\n              currentStep={currentStep}\n            />\n          </Box>\n        </Column>\n      </Row>\n      <Row>\n        {currentStep === MAX_STEPS && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== MAX_STEPS && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button onClick={nextStep} disabled={currentStep === MAX_STEPS}>\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </>\n  )\n}",scope:{props:c,AccountCircleIcon:f.Z,AddAPhotoIcon:g.Z,LinkIcon:h.Z,Playground:i.X,Box:j.Z,Button:k.default,Column:l.default,Container:m.Z,Row:n.default,useProgress:o.SE,ProgressLine:p.default,ProgressRound:q.default,meta:r},mdxType:"Playground"},function(){var a=(0,o.SE)(),b=a.nextStep,c=a.backStep,f=a.setCurrentStep,g=a.currentStep;return(0,e.kt)(d.Fragment,null,(0,e.kt)(n.default,{mdxType:"Row"},(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(j.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,e.kt)(q.default,{maxSteps:4,currentStep:g,mdxType:"ProgressRound"}))),(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(j.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,e.kt)(q.default,{type:"percentage",maxSteps:4,currentStep:g,mdxType:"ProgressRound"})))),(0,e.kt)(n.default,{mdxType:"Row"},4===g&&(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(k.default,{onClick:function(){return f(0)},variant:"text",mdxType:"Button"},"Resetar")),4!==g&&(0,e.kt)(d.Fragment,null,(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(k.default,{onClick:c,disabled:0===g,mdxType:"Button"},"Anterior")),(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(k.default,{onClick:b,disabled:4===g,mdxType:"Button"},"Pr\xf3ximo")))))}),(0,e.kt)("h3",Object.assign({},{id:"erro-no-progresso"}),"Erro no progresso"),(0,e.kt)(i.X,{__position:4,code:"<Row>\n  <Column>\n    <Box xs={{ padding: '20px 0' }}>\n      <ProgressRound maxSteps={4} currentStep={2} error />\n    </Box>\n  </Column>\n  <Column>\n    <Box xs={{ padding: '20px 0' }}>\n      <ProgressRound type=\"percentage\" maxSteps={4} currentStep={2} error />\n    </Box>\n  </Column>\n</Row>",scope:{props:c,AccountCircleIcon:f.Z,AddAPhotoIcon:g.Z,LinkIcon:h.Z,Playground:i.X,Box:j.Z,Button:k.default,Column:l.default,Container:m.Z,Row:n.default,useProgress:o.SE,ProgressLine:p.default,ProgressRound:q.default,meta:r},mdxType:"Playground"},(0,e.kt)(n.default,{mdxType:"Row"},(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(j.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,e.kt)(q.default,{maxSteps:4,currentStep:2,error:!0,mdxType:"ProgressRound"}))),(0,e.kt)(l.default,{mdxType:"Column"},(0,e.kt)(j.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,e.kt)(q.default,{type:"percentage",maxSteps:4,currentStep:2,error:!0,mdxType:"ProgressRound"}))))),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"maxSteps"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"number")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"true")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Indica o n\xfamero m\xe1ximo de passos do progresso")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"currentStep"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"number")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Indica o passo atual do progresso")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"type"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"numeric"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"percentage")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"numeric")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Indica como vai ser exibido o progresso no componente: n\xfamero ou porcentagem")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"error"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se ",(0,e.kt)("inlineCode",{parentName:"td"},"true"),", altera a cor do progresso para cor de erro da paleta de cores")))))}t.isMDXComponent=!0;var u={editThisPagePath:"src/pages/ui-components/Progress/index.mdx"};for(var v in u)window[v]=u[v]}},function(a){a.O(0,[4526,4357,9961,161,2550,7585,730,4865,9774,2888,179],function(){return a(a.s=65459)}),_N_E=a.O()}])