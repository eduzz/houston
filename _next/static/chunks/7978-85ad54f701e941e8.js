"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7978],{50644:function(d,a,b){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a,b){return c.objectSpread({},e.default(a),{variables:b})};var c=b(39037),e=c.interopRequireDefault(b(26123))},26123:function(e,b,a){Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){return{spacing:o.spacing,border:f.border,brandColor:g.createBrandColors(a),breakpoints:c.objectSpread({},h.breakpoints,h.breakpoinstUtils),feedbackColor:i.feedbackColor,font:j.font,line:k.line,neutralColor:l.neutralColor,opacity:m.opacity,shadow:n.shadow,pxToRem:p.pxToRem}};var c=a(39037),f=a(98022),g=a(33495),h=a(60921),i=a(58043),j=a(5665),k=a(26142),l=a(96800),m=a(22702),n=a(89691),o=a(94778),p=a(698),d=c.interopRequireWildcard(a(91162));Object.keys(d).forEach(function(a){"default"!==a&&"__esModule"!==a&&(a in b&&b[a]===d[a]||Object.defineProperty(b,a,{enumerable:!0,get:function(){return d[a]}}))})},91162:function(b,a){Object.defineProperty(a,"__esModule",{value:!0})},98022:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.border=void 0,a.border={width:{none:"0px",xs:"1px",sm:"2px",md:"4px",lg:"8px"},radius:{none:"0px",xs:"4px",sm:"8px",md:"16px",pill:"500px",circular:"50%"}}},33495:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.createBrandColors=function(a){var b="string"==typeof a?c[a]:a;if(!b)throw new Error("You must provide a valid brand");return b},a.getSupportedBrands=void 0;var c={eduzz:{primary:{pure:"#0D2772",light:"#6C88D9",medium:"#000540",dark:"#000540"},secondary:{pure:"#FFBC00",light:"#FFF4BF",medium:"#FFDB4D",dark:"#996600"}},alumy:{primary:{pure:"#6200EE",light:"#D4CCFF",medium:"#8E66FF",dark:"#440087"}},blinket:{primary:{pure:"#D81B60",light:"#F48FB1 ",medium:"#EC407A",dark:"#AD1457"}},jobzz:{primary:{pure:"#01579B",light:"#99BCD7",medium:"#3479AF",dark:"#002F6C"}},nutror:{primary:{pure:"#00A526",light:"#99E9BA",medium:"#00C853",dark:"#00801D"}},orbita:{primary:{pure:"#0D47A1",light:"#9EB5D9",medium:"#265AAB",dark:"#072D83"}},safevideo:{primary:{pure:"#E39837",light:"#FEC92D",medium:"#F5B431",dark:"#804306"}},telescope:{primary:{pure:"#8E24AA",light:"#D2A7DD",medium:"#9A3AB3",dark:"#560877"}}};a.getSupportedBrands=function(){return Object.keys(c)}},60921:function(c,a){Object.defineProperty(a,"__esModule",{value:!0}),a.breakpoinstUtils=a.breakpoints=void 0;var b={xs:"320px",sm:"576px",md:"768px",lg:"992px",xlg:"1400px"};a.breakpoints=b;var d=function(a){return Number(a.replace("px",""))};a.breakpoinstUtils={down:function(a){return"@media (min-width:".concat(d(b[a]),")px")},up:function(a){return"@media (max-width:".concat(d(b[a])-.05,")px")}}},58043:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.feedbackColor=void 0,a.feedbackColor={positive:{pure:"#4CAF50",light:"#D2EBD3",medium:"#66D26A",dark:"#2D8D31"},negative:{pure:"#F44336",light:"#FDD9D7",medium:"#FF8179",dark:"#D72518"},warning:{pure:"#FFCA28",light:"#FFF4D4",medium:"#FFDD76",dark:"#E2AD08"},informative:{pure:"#039BE5",light:"#CDEBFA",medium:"#71D0FF",dark:"#0077B1"}}},5665:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.font=void 0,a.font={size:{xxxs:"12px",xxs:"14px",xs:"16px",sm:"20px",md:"24px",lg:"32px",xl:"40px",xxl:"48px",xxxl:"64px",display:"80px",giant:"96px"},family:{base:'Open Sans, "Helvetica Neue", Arial, sans-serif'},weight:{regular:400,semibold:600,bold:700}}},26142:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.line=void 0,a.line={height:{default:"100%",xs:"115%",sm:"120%",md:"133%",lg:"150%",xl:"170%",xxl:"200%"}}},96800:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.neutralColor=void 0,a.neutralColor={low:{pure:"#000000",light:"#A3A3A3",medium:"#666666",dark:"#292929"},high:{pure:"#FFFFFF",light:"#F5F5F5",medium:"#E0E0E0",dark:"#CCCCCC"}}},22702:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.opacity=void 0,a.opacity={level:{0:0,1:.04,2:.08,3:.12,4:.16,5:.24,6:.32,7:.64,8:.72}}},89691:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.shadow=void 0,a.shadow={level:{1:"0px 4px 8px #000000 16%",2:"0px 8px 24px #000000 16%",3:"0px 16px 32px #000000 16%",4:"0px 16px 48px #000000 24%"}}},94778:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.spacing=void 0,a.spacing={fn:function(a){return"".concat(.25*a,"rem")},quarck:"4px",nano:"8px",xxxs:"16px",xxs:"24px",xs:"32px",sm:"40px",md:"48px",lg:"56px",xl:"64px",xxl:"80px",xxxl:"120px",huge:"160px",giant:"200px",inline:{quarck:"4px",nano:"8px",xxxs:"16px",xxs:"24px",xs:"32px",sm:"40px",md:"48px",lg:"56px",xl:"64px",xxl:"80px",xxxl:"120px",huge:"160px",giant:"200px"},inset:{xxxs:"4px",xxs:"8px",xs:"16px",sm:"24px",md:"32px",lg:"48px"},stack:{quarck:"4px",nano:"8px",xxxs:"16px",xxs:"24px",xs:"32px",sm:"40px",md:"48px",lg:"56px",xl:"64px",xxl:"80px",xxxl:"120px",huge:"160px",giant:"200px"},squish:{xxs:"8px 16px 8px 16px",xs:"16px 24px 16px 24px",sm:"16px 32px 16px 32px"}}},698:function(c,a){Object.defineProperty(a,"__esModule",{value:!0}),a.pxToRem=a.cleanValue=void 0;var b=function(a){return/px$/g.test(a)?(a=a.replace(/\D/g,""))&&parseInt(a):(console.warn("[@eduzz/houston-tokens]: use valores em pixels (px) na fun\xe7\xe3o pxToRem(). Por exemplo: pxToRem('16px')"),NaN)};a.cleanValue=b,a.pxToRem=function(a){var d=arguments.length>1&& void 0!==arguments[1]?arguments[1]:16,c=b(a);return c?"".concat(c/d,"rem"):a}},36763:function(f,b,a){Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=a(27378),h=c.interopRequireDefault(a(77106)),e=d.forwardRef(function(a,b){return g.jsx(h.default,c.objectSpread({direction:"up"},a,{ref:b}))});b.default=e},6480:function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a,b){return{MuiDialog:{defaultProps:{TransitionComponent:d.default}},MuiButton:{styleOverrides:{root:{textTransform:"none",padding:"10px 16px",height:40,borderRadius:b.border.radius.xs,fontWeight:b.font.weight.semibold,fontFamily:b.font.family.base,lineHeight:b.line.height.sm,fontSize:b.font.size.xxs,"&:before":{content:'" "',position:"absolute",left:-4,right:-4,top:-4,bottom:-4,border:"2px solid transparent",transition:"0.3s",borderRadius:b.border.radius.sm},"&:focus:not(:active):not(:hover):before":{borderColor:a.grey[300]}},iconSizeMedium:{"& > *:first-child":{fontSize:15}},sizeSmall:{height:30},sizeLarge:{height:50},startIcon:{marginRight:8},containedPrimary:{"&:hover":{backgroundColor:a.primary.light},"&:active":{backgroundColor:a.primary.dark},"&.Mui-disabled":{color:a.grey[500],backgroundColor:a.grey[300]}},outlinedPrimary:{borderColor:a.primary.light,"&:before":{left:-5,right:-5,top:-5,bottom:-5},"&:hover":{backgroundColor:"transparent"},"&:active":{borderColor:a.primary.dark,color:a.primary.dark},"&.Mui-disabled":{color:a.grey[300],borderColor:a.grey[300]}},text:{"&.Mui-disabled":{color:a.grey[300]}}}},MuiTextField:{styleOverrides:{root:{"&.input-size-small":{"& input":{height:35,padding:"4px 12px"},"& label":{transform:"translate(".concat(b.spacing.xxxs,"px, ").concat(b.spacing.nano+2,"px) scale(1)")}}}}},MuiInputBase:{styleOverrides:{root:{fontFamily:b.font.family.base,"&.Mui-disabled":{backgroundColor:a.grey["100"]}}}},MuiInputAdornment:{styleOverrides:{positionEnd:{width:28}}},MuiSelect:{styleOverrides:{select:{"&:focus":{backgroundColor:"transparent"},"&.input-size-small":{height:35,padding:"8px 32px 8px 12px"}},iconOutlined:{right:4},icon:{top:"calc(50% - 14px)"}}},MuiSwitch:{styleOverrides:{root:{width:36,height:40,padding:0,alignItems:"center",overflow:"unset"},switchBase:{left:-10,padding:12,overflow:"hidden","&.Mui-checked":{transform:"translateX(16px)","& > .MuiSwitch-thumb":{color:"white"},"& + .MuiSwitch-track":{backgroundColor:a.primary.main,borderColor:a.primary.main,opacity:"1 !important"}},"&.Mui-disabled":{color:a.grey[400],"& > .MuiSwitch-thumb":{color:a.grey[400]},"& + .MuiSwitch-track":{backgroundColor:a.grey[300],opacity:"1 !important",borderColor:a.grey[300]}}},thumb:{width:16,height:16,boxShadow:"none",transition:"color 150ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{color:a.primary.light}},track:{backgroundColor:a.grey[300],border:"2px solid ".concat(a.grey[300]),width:36,height:e,borderRadius:e/2,opacity:"1 !important"},sizeSmall:{width:28,height:40,padding:0,alignItems:"center",overflow:"unset","& > .MuiSwitch-switchBase":{top:2,padding:12,"& + .MuiSwitch-track":{width:28,height:f},"&.Mui-checked":{transform:"translateX(12px)"},"& > .MuiSwitch-thumb":{width:12,height:12}}}}},MuiOutlinedInput:{styleOverrides:{input:{height:45,boxSizing:"border-box",fontSize:b.font.size.xs,padding:"".concat(b.spacing.xxxs,"px ").concat(b.spacing.xxxs,"px")},inputMultiline:{minHeight:96}}},MuiFormHelperText:{styleOverrides:{root:{fontFamily:b.font.family.base,fontSize:b.font.size.xxs,lineHeight:b.line.height.sm},contained:{marginLeft:2,marginRight:0}}},MuiFormControlLabel:{styleOverrides:{root:{color:a.grey[500],fontFamily:b.font.family.base}}},MuiFormControl:{styleOverrides:{marginNormal:{marginTop:b.spacing.quarck,marginBottom:b.spacing.xxxs}}},MuiFormLabel:{styleOverrides:{root:{color:a.grey[500],fontFamily:b.font.family.base}}},MuiInputLabel:{styleOverrides:{root:{fontFamily:b.font.family.base,fontSize:b.font.size.xs},outlined:{transform:"translate(16px, 12px) scale(1)"},shrink:{transform:"translate(16px, -6px) scale(0.70) !important"}}},MuiAlertTitle:{styleOverrides:{root:{fontWeight:b.font.weight.semibold}}},MuiAlert:{styleOverrides:{root:{borderRadius:4},icon:{color:"".concat(a.grey[600]," !important")},action:{marginRight:0,"&:empty":{display:"none"}},message:{fontWeight:b.font.weight.regular,color:a.grey[600],width:"100%"},standardSuccess:{backgroundColor:a.success.light},standardError:{backgroundColor:a.error.light},standardInfo:{backgroundColor:a.info.light},standardWarning:{backgroundColor:a.warning.light}}},MuiTableRow:{styleOverrides:{root:{"&$selected":{background:"rgba(177, 177, 177, 0.08)"},"&$hover":{"&:hover":{background:a.grey[100]}}}}},MuiTableCell:{styleOverrides:{root:{padding:"12px 20px",borderColor:a.grey[200],color:a.grey[600]},head:{fontWeight:b.font.weight.semibold,color:a.grey[600],lineHeight:b.line.height.sm},body:{color:a.grey[600]},sizeSmall:{fontSize:b.font.size.xxs,padding:"8px 12px"}}},MuiTableSortLabel:{styleOverrides:{root:{color:a.grey[600],"&:focus":{color:"inherit"},"&$active":{color:a.grey[600],"&$root":{"&$active":{"& $icon":{color:a.grey[600]}}}}}}},MuiMenuItem:{styleOverrides:{root:{fontSize:b.font.size.xs,fontWeight:b.font.weight.regular}}},MuiPaginationItem:{styleOverrides:{root:{margin:"0 1px",minWidth:32,minHeight:28,padding:0,fontWeight:b.font.weight.semibold,"&$selected":{color:a.primary.main},"@media screen and (max-width: 599.95px)":{width:26,minWidth:26,height:24}}}},MuiPagination:{styleOverrides:{ul:{"& li":{"&:first-child, &:last-child":{borderRadius:4},"&:first-child":{marginRight:2},"&:last-child":{marginLeft:2}}}}},MuiIconButton:{styleOverrides:{colorPrimary:{"&:hover, &:focus":{backgroundColor:"".concat(a.grey[200])},"&:active":{backgroundColor:"".concat(a.grey[300])}}}},MuiTabs:{styleOverrides:{root:{height:40,minHeight:40,borderBottom:"1px solid ".concat(a.grey[200])},scrollButtons:{color:a.primary.main,opacity:1,"&.Mui-disabled":{opacity:1,color:a.grey[300]}}}},MuiTab:{styleOverrides:{root:{height:40,minHeight:40,minWidth:"0 !important",lineHeight:b.line.height.md,fontSize:b.font.size.xxs,fontWeight:b.font.weight.semibold,textTransform:"none",padding:"0px ".concat(b.spacing.xxxs,"px")},labelIcon:{minHeight:40,paddingTop:0,flexDirection:"row","& > svg":{marginBottom:"0 !important",maxWidth:20,maxHeight:20,marginRight:b.spacing.nano}},textColorPrimary:{color:a.grey[400],transition:"0.3s",border:"2px solid transparent",borderBottom:"none",borderRadius:"".concat(b.border.radius.xs,"px ").concat(b.border.radius.xs,"px 0 0"),"& svg":{fill:a.grey[500],transition:"0.3s"},"&:focus":{borderColor:a.grey[300]},"&:hover:not($selected):not(:active)":{color:a.primary.light,"& svg":{fill:a.primary.light}},"&:active":{color:a.primary.dark,"& svg":{fill:a.primary.dark}},"&$selected":{color:a.primary.main,"& svg":{fill:a.primary.main}},"&.Mui-disabled":{color:a.grey[300],"& svg":{fill:a.grey[300]}}}}},MuiTooltip:{styleOverrides:{tooltip:{fontSize:b.font.size.xxs,backgroundColor:a.grey[600],letterSpacing:.5},arrow:{color:a.grey[600]}}},MuiTypography:{styleOverrides:{body2:{color:a.grey[400]}}},MuiStep:{styleOverrides:{horizontal:{paddingLeft:0,paddingRight:0}}},MuiStepLabel:{styleOverrides:{root:{"&$error":{color:a.error.main}},label:{color:a.grey[300],fontSize:b.font.size.xs,lineHeight:1.5,fontWeight:b.font.weight.semibold,"&$active":{color:a.success.main,fontWeight:b.font.weight.semibold},"&$completed":{color:a.success.main,fontWeight:b.font.weight.semibold}},iconContainer:{paddingRight:18}}},MuiPaper:{styleOverrides:{root:{boxShadow:"0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d"}}}}};var d=b(39037).interopRequireDefault(b(36763)),e=20,f=16},11785:function(d,c,a){Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(a){var c=g.default(a),d=e.createTheme({palette:c,components:f.default(c,a),typography:h.default(a),spacing:function(){var b=arguments.length>0&& void 0!==arguments[0]?arguments[0]:4;return Number(a.spacing.quarck.replace("px",""))*b},breakpoints:{values:Object.keys(a.breakpoints).reduce(function(d,c){return["up","down"].includes(c)?d:b.objectSpread({},d,b.defineProperty({},c,Number(a.breakpoints[c].replace("px",""))))},{})}});return Object.keys(a).forEach(function(b){if(!d[b]){d[b]=a[b];return}Object.keys(a[b]).forEach(function(c){"breakpoints"===b&&["up","down"].includes(c)||(d[b][c]=a[b][c])})}),d};var b=a(39037),e=a(38079),f=b.interopRequireDefault(a(6480)),g=b.interopRequireDefault(a(94773)),h=b.interopRequireDefault(a(4925))},94773:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){return{background:{paper:"#fff",default:"#F9FAFB"},common:{black:"#000",white:"#fff"},error:{light:a.feedbackColor.negative.light,main:a.feedbackColor.negative.pure,dark:a.feedbackColor.negative.dark,contrastText:"#fff"},grey:{50:a.neutralColor.high.pure,100:a.neutralColor.high.pure,200:a.neutralColor.high.light,300:a.neutralColor.high.medium,400:a.neutralColor.high.dark,500:a.neutralColor.low.light,600:a.neutralColor.low.medium,700:a.neutralColor.low.medium,800:a.neutralColor.low.dark,900:a.neutralColor.low.pure,A100:a.neutralColor.low.pure,A200:a.neutralColor.low.pure,A400:a.neutralColor.low.pure,A700:a.neutralColor.low.pure},warning:{light:a.feedbackColor.warning.light,main:a.feedbackColor.warning.pure,dark:a.feedbackColor.warning.dark,contrastText:"#37474F"},primary:{light:a.brandColor.primary.light,main:a.brandColor.primary.pure,dark:a.brandColor.primary.dark,contrastText:"#fff"},secondary:{light:"#ECEFF1",main:"#78909C",dark:"#37474F",contrastText:"#fff"},info:{light:a.feedbackColor.informative.light,main:a.feedbackColor.informative.pure,dark:a.feedbackColor.informative.dark,contrastText:"#fff"},success:{light:a.feedbackColor.positive.light,main:a.feedbackColor.positive.pure,dark:a.feedbackColor.positive.dark,contrastText:"#fff"},text:{disabled:"#B0BEC5",primary:"#37474F",secondary:"#102027"}}}},4925:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){return{fontFamily:a.font.family.base,fontSize:Number(a.font.size.xs.replace("px","")),body1:{fontFamily:a.font.family.base,fontSize:Number(a.font.size.xs.replace("px","")),fontWeight:a.font.weight.regular},body2:{fontFamily:a.font.family.base,fontSize:Number(a.font.size.xs.replace("px","")),fontWeight:a.font.weight.regular},button:{fontWeight:a.font.weight.semibold}}}},87225:function(d,a){var e;function b(a){e=a}function c(){return e}Object.defineProperty(a,"__esModule",{value:!0}),a.setCurrentTheme=b,a.getCurrentTheme=c},67978:function(g,c,a){c.Z=void 0;var b=a(39037),h=a(24246),d=b.interopRequireWildcard(a(27378)),i=b.interopRequireDefault(a(82239)),j=b.interopRequireDefault(a(63145)),k=b.interopRequireDefault(a(14366)),l=a(38079),m=a(670),e=b.interopRequireDefault(a(50644)),n=b.interopRequireDefault(a(45964)),o=b.interopRequireDefault(a(11785)),p=a(87225),q=e.default("orbita"),f=d.memo(function(a){var c=a.theme,e=void 0===c?q:c,f=a.children,g=a.disableCssBaseline,w=a.disabledFontBase,r=a.disableToast,s=b.slicedToArray(d.useState(function(){return o.default(e)}),1),t=s[0],u=b.slicedToArray(d.useState(function(){return{__html:"\n        form { width: 100%; }\n        a { text-decoration: none; }\n        .houston-icon { line-height: 0; }\n\n        ".concat(!w&&"\n        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700');\n\n        body {\n          font-family: ".concat(e.font.family.base,";\n          font-size: ").concat(e.font.size.xs,";\n          -webkit-font-smoothing: auto;\n        }\n      "),"\n      ")}}),1),v=u[0];return d.useEffect(function(){return p.setCurrentTheme(e)},[e]),h.jsx(l.StyledEngineProvider,{injectFirst:!0,children:h.jsx(l.ThemeProvider,{theme:t,children:h.jsxs(j.default,{locale:m.ptBR,dateAdapter:i.default,children:[h.jsx("style",{dangerouslySetInnerHTML:v}),!r&&h.jsx(n.default,{}),!g&&h.jsx(k.default,{}),f]})})})});c.Z=f}}])