"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7978],{50644:function(d,a,b){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a,b){return c.objectSpread({},e.default(a),{variables:b})};var c=b(39037),e=c.interopRequireDefault(b(26123))},26123:function(e,b,a){Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){return{spacing:o.spacing,border:f.border,brandColor:g.createBrandColors(a),breakpoints:c.objectSpread({},h.breakpoints,h.breakpoinstUtils),feedbackColor:i.feedbackColor,font:j.font,line:k.line,neutralColor:l.neutralColor,opacity:m.opacity,shadow:n.shadow,pxToRem:p.pxToRem,remToPx:p.remToPx,hexToRgba:p.hexToRgba,cleanUnit:p.cleanUnit}};var c=a(39037),f=a(98022),g=a(33495),h=a(60921),i=a(58043),j=a(5665),k=a(26142),l=a(96800),m=a(22702),n=a(89691),o=a(94778),p=a(698),d=c.interopRequireWildcard(a(91162));Object.keys(d).forEach(function(a){"default"!==a&&"__esModule"!==a&&(a in b&&b[a]===d[a]||Object.defineProperty(b,a,{enumerable:!0,get:function(){return d[a]}}))})},91162:function(b,a){Object.defineProperty(a,"__esModule",{value:!0})},98022:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.border=void 0,a.border={width:{none:"0",xs:"1px",sm:"2px",md:"4px",lg:"8px"},radius:{none:"0",xs:"0.25rem",sm:"0.5rem",md:"1rem",pill:"31.25rem",circular:"50%"}}},33495:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.createBrandColors=function(a){var b="string"==typeof a?c[a]:a;if(!b)throw new Error("You must provide a valid brand");return b},a.getSupportedBrands=void 0;var c={eduzz:{primary:{pure:"#0D2772",light:"#6C88D9",medium:"#000540",dark:"#000540"},secondary:{pure:"#FFBC00",light:"#FFF4BF",medium:"#FFDB4D",dark:"#996600"}},alumy:{primary:{pure:"#6200EE",light:"#D4CCFF",medium:"#8E66FF",dark:"#440087"}},blinket:{primary:{pure:"#D81B60",light:"#F48FB1 ",medium:"#EC407A",dark:"#AD1457"}},jobzz:{primary:{pure:"#01579B",light:"#99BCD7",medium:"#3479AF",dark:"#002F6C"}},nutror:{primary:{pure:"#00A526",light:"#99E9BA",medium:"#00C853",dark:"#00801D"}},orbita:{primary:{pure:"#0D47A1",light:"#9EB5D9",medium:"#265AAB",dark:"#072D83"}},safevideo:{primary:{pure:"#E39837",light:"#FEC92D",medium:"#F5B431",dark:"#804306"}},telescope:{primary:{pure:"#8E24AA",light:"#D2A7DD",medium:"#9A3AB3",dark:"#560877"}}};a.getSupportedBrands=function(){return Object.keys(c)}},60921:function(c,a){Object.defineProperty(a,"__esModule",{value:!0}),a.breakpoinstUtils=a.breakpoints=void 0;var b={xs:"320px",sm:"576px",md:"768px",lg:"992px",xlg:"1400px"};a.breakpoints=b;var d=function(a){return Number(a.replace("px",""))};a.breakpoinstUtils={down:function(a){return"@media (min-width:".concat(d(b[a]),")px")},up:function(a){return"@media (max-width:".concat(d(b[a])-.05,")px")}}},58043:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.feedbackColor=void 0,a.feedbackColor={positive:{pure:"#4CAF50",light:"#D2EBD3",medium:"#66D26A",dark:"#2D8D31"},negative:{pure:"#F44336",light:"#FDD9D7",medium:"#FF8179",dark:"#D72518"},warning:{pure:"#FFCA28",light:"#FFF4D4",medium:"#FFDD76",dark:"#E2AD08"},informative:{pure:"#039BE5",light:"#CDEBFA",medium:"#71D0FF",dark:"#0077B1"}}},5665:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.font=void 0,a.font={size:{xxxs:"0.75rem",xxs:"0.875rem",xs:"1rem",sm:"1.25rem",md:"1.5rem",lg:"2rem",xl:"2.5rem",xxl:"3rem",xxxl:"4rem",display:"5rem",giant:"6rem"},family:{base:'Open Sans, "Helvetica Neue", Arial, sans-serif'},weight:{regular:400,semibold:600,bold:700}}},26142:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.line=void 0,a.line={height:{default:"100%",xs:"115%",sm:"120%",md:"133%",lg:"150%",xl:"170%",xxl:"200%"}}},96800:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.neutralColor=void 0,a.neutralColor={low:{pure:"#000000",light:"#A3A3A3",medium:"#666666",dark:"#292929"},high:{pure:"#FFFFFF",light:"#F5F5F5",medium:"#E0E0E0",dark:"#CCCCCC"}}},22702:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.opacity=void 0,a.opacity={level:{0:0,1:.04,2:.08,3:.12,4:.16,5:.24,6:.32,7:.64,8:.72}}},89691:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.shadow=void 0,a.shadow={level:{1:"0px 4px 8px rgba(0, 0, 0, 0.16)",2:"0px 8px 24px rgba(0, 0, 0, 0.16)",3:"0px 16px 32px rgba(0, 0, 0, 0.16)",4:"0px 16px 48px rgba(0, 0, 0, 0.24)"}}},94778:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.spacing=void 0,a.spacing={fn:function(a){return"".concat(.25*a,"rem")},quarck:"0.25rem",nano:"0.5rem",xxxs:"1rem",xxs:"1.5rem",xs:"2rem",sm:"2.5rem",md:"3rem",lg:"3.5rem",xl:"4rem",xxl:"5rem",xxxl:"7.5rem",huge:"10rem",giant:"12.5rem",inline:{quarck:"0.25rem",nano:"0.5rem",xxxs:"1rem",xxs:"1.5rem",xs:"2rem",sm:"2.5rem",md:"3rem",lg:"3.5rem",xl:"4rem",xxl:"5rem",xxxl:"7.5rem",huge:"10rem",giant:"12.5rem"},inset:{xxxs:"0.25rem",xxs:"0.5rem",xs:"1rem",sm:"1.5rem",md:"2rem",lg:"3rem"},stack:{quarck:"0.25rem",nano:"0.5rem",xxxs:"1rem",xxs:"1.5rem",xs:"2rem",sm:"2.5rem",md:"3rem",lg:"3.5rem",xl:"4rem",xxl:"5rem",xxxl:"7.5rem",huge:"10rem",giant:"12.5rem"},squish:{xxs:"0.5rem 1rem 0.5rem 1rem",xs:"1rem 1.5rem 1rem 1.5rem",sm:"1rem 2rem 1rem 2rem"}}},698:function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0}),a.pxToRem=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:16;return a/b},a.remToPx=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:16;return a*b},a.decimalToHexadecimal=e,a.hexToRgba=function(b){var c=arguments.length>1&& void 0!==arguments[1]?arguments[1]:1,a=d.slicedToArray(b.match(/\w\w/g).map(e),3),f=a[0],g=a[1],h=a[2];return"rgba(".concat(f,", ").concat(g,", ").concat(h,", ").concat(c,")")},a.cleanUnit=function(a){return parseFloat(a.replace(/[a-zA-Z]/g,""))};var d=b(39037);function e(a){return parseInt(a,16)}},60773:function(d,b,a){Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),e=a(24246),f=c.interopRequireWildcard(a(27378)),g=a(52333),h=c.interopRequireDefault(a(84814)),i=c.interopRequireDefault(a(44091));b.default=function(d){var j=d.children,b=c.slicedToArray(f.useState({opened:!1,target:null,content:null,closedTarget:null,timestamp:0,placement:"auto"}),2),a=b[0],m=b[1];f.useEffect(function(){if(!a.opened){null===(e=a.content)|| void 0===e||null===(f=e.classList)|| void 0===f||f.remove("--opened");return}var b,c,e,f,d,h=g.createPopper(a.target,a.content,{placement:null!==(d=a.placement)&& void 0!==d?d:"auto",modifiers:[{name:"offset",options:{offset:[0,8]}}]});return null===(b=a.content)|| void 0===b||null===(c=b.classList)|| void 0===c||c.add("--opened"),function(){var b,c;null===(b=a.content)|| void 0===b||null===(c=b.classList)|| void 0===c||c.remove("--opened"),setTimeout(function(){return h.destroy()},100)}},[a.opened]),h.default(a.content,function(){var b=Date.now()-a.timestamp<100;a.opened&&!b&&(m(function(a){return c.objectSpread({},a,{opened:!1,closedTarget:a.target})}),setTimeout(function(){m(function(a){return c.objectSpread({},a,{closedTarget:null})})},300))},[a.opened]);var k=f.useCallback(function(a){return setTimeout(function(){var b=function(b){return c.objectSpread({},b,a,{timestamp:Date.now(),opened:b.closedTarget!==a.target})};m(function(a){return a.closedTarget?(setTimeout(function(){return m(b)},100),a):b(a)})},0),function(){m(function(b){return b.target!==a.target?b:c.objectSpread({},b,{opened:!1})})}},[]),l=f.useMemo(function(){return{setState:k,openedTarget:a.opened?a.target:null}},[k,a.opened,a.target]);return e.jsx(i.default.Provider,{value:l,children:j})}},44091:function(d,a,b){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(55693).createContext({setState:function(){return function(){return null}},openedTarget:null});a.default=c},36763:function(f,b,a){Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=a(27378),h=c.interopRequireDefault(a(77106)),e=d.forwardRef(function(a,b){return g.jsx(h.default,c.objectSpread({direction:"up"},a,{ref:b}))});b.default=e},6480:function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a,b){return{MuiDialog:{defaultProps:{TransitionComponent:d.default}},MuiButton:{styleOverrides:{root:{textTransform:"none",padding:"10px 16px",height:40,borderRadius:b.border.radius.xs,fontWeight:b.font.weight.semibold,fontFamily:b.font.family.base,lineHeight:b.line.height.sm,fontSize:b.font.size.xxs,"&:before":{content:'" "',position:"absolute",left:-4,right:-4,top:-4,bottom:-4,border:"2px solid transparent",transition:"0.3s",borderRadius:b.border.radius.sm},"&:focus:not(:active):not(:hover):before":{borderColor:a.grey[300]}},iconSizeMedium:{"& > *:first-child":{fontSize:15}},sizeSmall:{height:30},sizeLarge:{height:50},startIcon:{marginRight:8},containedPrimary:{"&:hover":{backgroundColor:a.primary.light},"&:active":{backgroundColor:a.primary.dark},"&.Mui-disabled":{color:a.grey[500],backgroundColor:a.grey[300]}},outlinedPrimary:{borderColor:a.primary.light,"&:before":{left:-5,right:-5,top:-5,bottom:-5},"&:hover":{backgroundColor:"transparent"},"&:active":{borderColor:a.primary.dark,color:a.primary.dark},"&.Mui-disabled":{color:a.grey[300],borderColor:a.grey[300]}},text:{"&.Mui-disabled":{color:a.grey[300]}}}},MuiTextField:{styleOverrides:{root:{"&.input-size-small":{"& input":{height:35,padding:"4px 12px"},"& label":{transform:"translate(".concat(b.spacing.xxxs,", ").concat(b.spacing.nano,") scale(1)")}}}}},MuiInputBase:{styleOverrides:{root:{fontFamily:b.font.family.base,"&.Mui-disabled":{backgroundColor:a.grey["100"]}}}},MuiInputAdornment:{styleOverrides:{positionEnd:{width:28}}},MuiSelect:{styleOverrides:{select:{"&:focus":{backgroundColor:"transparent"},"&.input-size-small":{height:35,padding:"8px 32px 8px 12px"}},iconOutlined:{right:4},icon:{top:"50%",transform:"translate(0, -50%)"}}},MuiSwitch:{styleOverrides:{root:{width:36,height:40,padding:0,alignItems:"center",overflow:"unset"},switchBase:{left:-10,padding:12,overflow:"hidden","&.Mui-checked":{transform:"translateX(16px)","& > .MuiSwitch-thumb":{color:"white"},"& + .MuiSwitch-track":{backgroundColor:a.primary.main,borderColor:a.primary.main,opacity:"1 !important"}},"&.Mui-disabled":{color:a.grey[400],"& > .MuiSwitch-thumb":{color:a.grey[400]},"& + .MuiSwitch-track":{backgroundColor:a.grey[300],opacity:"1 !important",borderColor:a.grey[300]}}},thumb:{width:16,height:16,boxShadow:"none",transition:"color 150ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{color:a.primary.light}},track:{backgroundColor:a.grey[300],border:"2px solid ".concat(a.grey[300]),width:36,height:e,borderRadius:e/2,opacity:"1 !important"},sizeSmall:{width:28,height:40,padding:0,alignItems:"center",overflow:"unset","& > .MuiSwitch-switchBase":{top:2,padding:12,"& + .MuiSwitch-track":{width:28,height:f},"&.Mui-checked":{transform:"translateX(12px)"},"& > .MuiSwitch-thumb":{width:12,height:12}}}}},MuiOutlinedInput:{styleOverrides:{input:{height:45,boxSizing:"border-box",fontSize:b.font.size.xs,padding:"".concat(b.spacing.xxxs," ").concat(b.spacing.xxxs)},inputMultiline:{minHeight:96}}},MuiFormHelperText:{styleOverrides:{root:{fontFamily:b.font.family.base,fontSize:b.font.size.xxxs,lineHeight:b.line.height.sm},contained:{marginLeft:2,marginRight:0}}},MuiFormControlLabel:{styleOverrides:{root:{color:a.grey[500],fontFamily:b.font.family.base}}},MuiFormControl:{styleOverrides:{marginNormal:{marginTop:b.spacing.quarck,marginBottom:b.spacing.xxxs}}},MuiFormLabel:{styleOverrides:{root:{color:a.grey[500],fontFamily:b.font.family.base}}},MuiInputLabel:{styleOverrides:{root:{fontFamily:b.font.family.base,fontSize:b.font.size.xs},outlined:{transform:"translate(16px, 12px) scale(1)"},shrink:{transform:"translate(16px, -6px) scale(0.70) !important"}}},MuiAlertTitle:{styleOverrides:{root:{fontWeight:b.font.weight.semibold}}},MuiAlert:{styleOverrides:{root:{borderRadius:4},icon:{color:"".concat(a.grey[600]," !important")},action:{marginRight:0,"&:empty":{display:"none"}},message:{fontWeight:b.font.weight.regular,color:a.grey[600],width:"100%"},standardSuccess:{backgroundColor:a.success.light},standardError:{backgroundColor:a.error.light},standardInfo:{backgroundColor:a.info.light},standardWarning:{backgroundColor:a.warning.light}}},MuiTableRow:{styleOverrides:{root:{"&$selected":{background:"rgba(177, 177, 177, 0.08)"},"&$hover":{"&:hover":{background:a.grey[100]}}}}},MuiTableCell:{styleOverrides:{root:{padding:"12px 20px",borderColor:a.grey[200],color:a.grey[600]},head:{fontWeight:b.font.weight.semibold,color:a.grey[600],lineHeight:b.line.height.sm},body:{color:a.grey[600]},sizeSmall:{fontSize:b.font.size.xxs,padding:"8px 12px"}}},MuiTableSortLabel:{styleOverrides:{root:{color:a.grey[600],"&:focus":{color:"inherit"},"&$active":{color:a.grey[600],"&$root":{"&$active":{"& $icon":{color:a.grey[600]}}}}}}},MuiMenuItem:{styleOverrides:{root:{fontSize:b.font.size.xs,fontWeight:b.font.weight.regular}}},MuiPaginationItem:{styleOverrides:{root:{margin:"0 1px",minWidth:32,minHeight:28,padding:0,fontWeight:b.font.weight.semibold,"&$selected":{color:a.primary.main},"@media screen and (max-width: 599.95px)":{width:26,minWidth:26,height:24}}}},MuiPagination:{styleOverrides:{ul:{"& li":{"&:first-child, &:last-child":{borderRadius:4},"&:first-child":{marginRight:2},"&:last-child":{marginLeft:2}}}}},MuiIconButton:{styleOverrides:{colorPrimary:{"&:hover, &:focus":{backgroundColor:"".concat(a.grey[200])},"&:active":{backgroundColor:"".concat(a.grey[300])}}}},MuiTabs:{styleOverrides:{root:{height:40,minHeight:40,borderBottom:"1px solid ".concat(a.grey[200])},scrollButtons:{color:a.primary.main,opacity:1,"&.Mui-disabled":{opacity:1,color:a.grey[300]}}}},MuiTab:{styleOverrides:{root:{height:40,minHeight:40,minWidth:"0 !important",lineHeight:b.line.height.md,fontSize:b.font.size.xxs,fontWeight:b.font.weight.semibold,textTransform:"none",padding:"0 ".concat(b.spacing.xxxs)},labelIcon:{minHeight:40,paddingTop:0,flexDirection:"row","& > svg":{marginBottom:"0 !important",maxWidth:20,maxHeight:20,marginRight:b.spacing.nano}},textColorPrimary:{color:a.grey[400],transition:"0.3s",border:"2px solid transparent",borderBottom:"none",borderRadius:"".concat(b.border.radius.xs," ").concat(b.border.radius.xs," 0 0"),"& svg":{fill:a.grey[500],transition:"0.3s"},"&:focus":{borderColor:a.grey[300]},"&:hover:not($selected):not(:active)":{color:a.primary.light,"& svg":{fill:a.primary.light}},"&:active":{color:a.primary.dark,"& svg":{fill:a.primary.dark}},"&$selected":{color:a.primary.main,"& svg":{fill:a.primary.main}},"&.Mui-disabled":{color:a.grey[300],"& svg":{fill:a.grey[300]}}}}},MuiTooltip:{styleOverrides:{tooltip:{fontSize:b.font.size.xxxs,backgroundColor:a.grey[600],letterSpacing:.5},arrow:{color:a.grey[600]}}},MuiTypography:{styleOverrides:{body2:{color:a.grey[400]}}},MuiStep:{styleOverrides:{horizontal:{paddingLeft:0,paddingRight:0}}},MuiStepLabel:{styleOverrides:{root:{"&$error":{color:a.error.main}},label:{color:a.grey[300],fontSize:b.font.size.xs,lineHeight:1.5,fontWeight:b.font.weight.semibold,"&$active":{color:a.success.main,fontWeight:b.font.weight.semibold},"&$completed":{color:a.success.main,fontWeight:b.font.weight.semibold}},iconContainer:{paddingRight:18}}},MuiPaper:{styleOverrides:{root:{boxShadow:"0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d"}}}}};var d=b(39037).interopRequireDefault(b(36763)),e=20,f=16},11785:function(d,c,a){Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(a){var c=g.default(a),d=e.createTheme({palette:c,components:f.default(c,a),typography:h.default(a),spacing:a.spacing.fn,breakpoints:{values:Object.keys(a.breakpoints).reduce(function(d,c){return["up","down"].includes(c)?d:b.objectSpread({},d,b.defineProperty({},c,Number(a.breakpoints[c].replace("px",""))))},{})}});return Object.keys(a).forEach(function(b){if(!d[b]){d[b]=a[b];return}Object.keys(a[b]).forEach(function(c){"breakpoints"===b&&["up","down"].includes(c)||(d[b][c]=a[b][c])})}),d};var b=a(39037),e=a(38079),f=b.interopRequireDefault(a(6480)),g=b.interopRequireDefault(a(94773)),h=b.interopRequireDefault(a(4925))},94773:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){return{background:{paper:"#fff",default:"#F9FAFB"},common:{black:"#000",white:"#fff"},error:{light:a.feedbackColor.negative.light,main:a.feedbackColor.negative.pure,dark:a.feedbackColor.negative.dark,contrastText:"#fff"},grey:{50:a.neutralColor.high.pure,100:a.neutralColor.high.pure,200:a.neutralColor.high.light,300:a.neutralColor.high.medium,400:a.neutralColor.high.dark,500:a.neutralColor.low.light,600:a.neutralColor.low.medium,700:a.neutralColor.low.medium,800:a.neutralColor.low.dark,900:a.neutralColor.low.pure,A100:a.neutralColor.low.pure,A200:a.neutralColor.low.pure,A400:a.neutralColor.low.pure,A700:a.neutralColor.low.pure},warning:{light:a.feedbackColor.warning.light,main:a.feedbackColor.warning.pure,dark:a.feedbackColor.warning.dark,contrastText:"#37474F"},primary:{light:a.brandColor.primary.light,main:a.brandColor.primary.pure,dark:a.brandColor.primary.dark,contrastText:"#fff"},secondary:{light:"#ECEFF1",main:"#78909C",dark:"#37474F",contrastText:"#fff"},info:{light:a.feedbackColor.informative.light,main:a.feedbackColor.informative.pure,dark:a.feedbackColor.informative.dark,contrastText:"#fff"},success:{light:a.feedbackColor.positive.light,main:a.feedbackColor.positive.pure,dark:a.feedbackColor.positive.dark,contrastText:"#fff"},text:{disabled:"#B0BEC5",primary:"#37474F",secondary:"#102027"}}}},4925:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){var b=a.remToPx(a.cleanUnit(a.font.size.xs));return{fontFamily:a.font.family.base,fontSize:b,body1:{fontFamily:a.font.family.base,fontSize:b,fontWeight:a.font.weight.regular},body2:{fontFamily:a.font.family.base,fontSize:b,fontWeight:a.font.weight.regular},button:{fontWeight:a.font.weight.semibold}}}},87225:function(d,a){var e;function b(a){e=a}function c(){return e}Object.defineProperty(a,"__esModule",{value:!0}),a.setCurrentTheme=b,a.getCurrentTheme=c},67978:function(g,c,a){c.Z=void 0;var b=a(39037),h=a(24246),d=b.interopRequireWildcard(a(27378)),i=b.interopRequireDefault(a(82239)),j=b.interopRequireDefault(a(63145)),k=b.interopRequireDefault(a(96712)),l=a(38079),m=a(670),e=b.interopRequireDefault(a(50644)),n=b.interopRequireDefault(a(60773)),o=b.interopRequireDefault(a(45964)),p=b.interopRequireDefault(a(11785)),q=a(87225),r=e.default("orbita"),f=d.memo(function(a){var c=a.theme,e=void 0===c?r:c,f=a.children,g=a.disableCssBaseline,x=a.disabledFontBase,s=a.disableToast,t=b.slicedToArray(d.useState(function(){return p.default(e)}),1),u=t[0],v=b.slicedToArray(d.useState(function(){return{__html:"\n        form { width: 100%; }\n        a { text-decoration: none; }\n        .houston-icon { line-height: 0; }\n\n        ".concat(!x&&"\n        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700');\n\n        body {\n          font-family: ".concat(e.font.family.base,";\n          font-size: ").concat(e.font.size.xs,";\n          -webkit-font-smoothing: auto;\n        }\n      "),"\n      ")}}),1),w=v[0];return d.useEffect(function(){return q.setCurrentTheme(e)},[e]),h.jsx(l.StyledEngineProvider,{injectFirst:!0,children:h.jsx(l.ThemeProvider,{theme:u,children:h.jsx(j.default,{locale:m.ptBR,dateAdapter:i.default,children:h.jsxs(n.default,{children:[h.jsx("style",{dangerouslySetInnerHTML:w}),!s&&h.jsx(o.default,{}),!g&&h.jsx(k.default,{}),f]})})})})});c.Z=f},84814:function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=b(39037).interopRequireWildcard(b(27378));a.default=function(b,e,a){var c=d.useCallback(function(a){return e(a)},null!=a?a:[]);d.useEffect(function(){var a,d,f=null!==(d=null===(a=b)|| void 0===a?void 0:a.current)&& void 0!==d?d:b;if(f){var g=!1,e=function(a){!f||f.contains(a.target)||g||(g=!0,setTimeout(function(){return g=!1},500),c(a))};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),document.addEventListener("click",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e),document.removeEventListener("click",e)}}},[b,c])}}}])