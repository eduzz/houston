"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3524],{83524:function(g,c,a){a.r(c),a.d(c,{"default":function(){return N},getTooltipUtilityClass:function(){return y},tooltipClasses:function(){return z}});var h=a(30808),i=a(25773),d=a(27378),j=a(38944),k=a(53892),l=a(73207);function m(b,a={},c){return(0,l.Z)(b)?a:(0,i.Z)({},a,{ownerState:(0,i.Z)({},a.ownerState,c)})}var n=a(7818),b=a(69911),o=a(65605),p=a(73002),q=a(98165),r=a(45986),e=a(25152),s=a(5965),t=a(63202),u=a(40322),v=a(34273),w=a(94065),x=a(30765),f=a(12897);function y(a){return(0,x.Z)("MuiTooltip",a)}var z=(0,f.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),A=a(24246);function B(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function C(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function D(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||E(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(a,c){if(a){if("string"==typeof a)return B(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return B(a,c)}}var F=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"],G=function(a){var c=a.classes,d=a.disableInteractive,b=a.arrow,e=a.touch,f=a.placement,g={popper:["popper",!d&&"popperInteractive",b&&"popperArrow"],tooltip:["tooltip",b&&"tooltipArrow",e&&"touch","tooltipPlacement".concat((0,q.Z)(f.split("-")[0]))],arrow:["arrow"]};return(0,k.Z)(g,y,c)},H=(0,b.ZP)(e.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(c,a){var b=c.ownerState;return[a.popper,!b.disableInteractive&&a.popperInteractive,b.arrow&&a.popperArrow,!b.open&&a.popperClose]}})(function(c){var a,d=c.theme,b=c.ownerState,e=c.open;return(0,i.Z)({zIndex:d.zIndex.tooltip,pointerEvents:"none"},!b.disableInteractive&&{pointerEvents:"auto"},!e&&{pointerEvents:"none"},b.arrow&&(C(a={},'&[data-popper-placement*="bottom"] .'.concat(z.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),C(a,'&[data-popper-placement*="top"] .'.concat(z.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),C(a,'&[data-popper-placement*="right"] .'.concat(z.arrow),(0,i.Z)({},b.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),C(a,'&[data-popper-placement*="left"] .'.concat(z.arrow),(0,i.Z)({},b.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),a))}),I=(0,b.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(c,a){var b=c.ownerState;return[a.tooltip,b.touch&&a.touch,b.arrow&&a.tooltipArrow,a["tooltipPlacement".concat((0,q.Z)(b.placement.split("-")[0]))]]}})(function(d){var c,b=d.theme,a=d.ownerState;return(0,i.Z)({backgroundColor:(0,n.Fq)(b.palette.grey[700],.92),borderRadius:b.shape.borderRadius,color:b.palette.common.white,fontFamily:b.typography.fontFamily,padding:"4px 8px",fontSize:b.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:b.typography.fontWeightMedium},a.arrow&&{position:"relative",margin:0},a.touch&&{padding:"8px 16px",fontSize:b.typography.pxToRem(14),lineHeight:"".concat(Math.round(1e5*(16/14))/1e5,"em"),fontWeight:b.typography.fontWeightRegular},(C(c={},".".concat(z.popper,'[data-popper-placement*="left"] &'),(0,i.Z)({transformOrigin:"right center"},a.isRtl?(0,i.Z)({marginLeft:"14px"},a.touch&&{marginLeft:"24px"}):(0,i.Z)({marginRight:"14px"},a.touch&&{marginRight:"24px"}))),C(c,".".concat(z.popper,'[data-popper-placement*="right"] &'),(0,i.Z)({transformOrigin:"left center"},a.isRtl?(0,i.Z)({marginRight:"14px"},a.touch&&{marginRight:"24px"}):(0,i.Z)({marginLeft:"14px"},a.touch&&{marginLeft:"24px"}))),C(c,".".concat(z.popper,'[data-popper-placement*="top"] &'),(0,i.Z)({transformOrigin:"center bottom",marginBottom:"14px"},a.touch&&{marginBottom:"24px"})),C(c,".".concat(z.popper,'[data-popper-placement*="bottom"] &'),(0,i.Z)({transformOrigin:"center top",marginTop:"14px"},a.touch&&{marginTop:"24px"})),c))}),J=(0,b.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(b,a){return a.arrow}})(function(a){var b=a.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:(0,n.Fq)(b.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}}),K=!1,L=null;function M(a,b){return function(c){b&&b(c),a(c)}}var N=d.forwardRef(function(aw,ax){var P,Q,R,S,T,U,a=(0,p.Z)({props:aw,name:"MuiTooltip"}),V=a.arrow,ay=void 0!==V&&V,n=a.children,W=a.components,q=void 0===W?{}:W,X=a.componentsProps,f=void 0===X?{}:X,Y=a.describeChild,Z=a.disableFocusListener,$=a.disableHoverListener,_=void 0!==$&&$,aa=a.disableInteractive,ab=a.disableTouchListener,ac=a.enterDelay,aZ=void 0===ac?100:ac,ad=a.enterNextDelay,a$=void 0===ad?0:ad,ae=a.enterTouchDelay,a_=void 0===ae?700:ae,af=a.followCursor,B=void 0!==af&&af,az=a.id,ag=a.leaveDelay,a0=void 0===ag?0:ag,ah=a.leaveTouchDelay,a1=void 0===ah?1500:ah,a2=a.onClose,a3=a.onOpen,aA=a.open,ai=a.placement,aj=void 0===ai?"bottom":ai,C=a.PopperComponent,ak=a.PopperProps,x=void 0===ak?{}:ak,y=a.title,al=a.TransitionComponent,aB=void 0===al?r.Z:al,aC=a.TransitionProps,am=(0,h.Z)(a,F),aD=(0,o.Z)(),aE="rtl"===aD.direction,an=D(d.useState(),2),ao=an[0],aF=an[1],ap=D(d.useState(null),2),aG=ap[0],a4=ap[1],aH=d.useRef(!1),E=void 0!==aa&&aa||B,a5=d.useRef(),a6=d.useRef(),a7=d.useRef(),a8=d.useRef(),aq=D((0,w.Z)({controlled:aA,default:!1,name:"Tooltip",state:"open"}),2),aI=aq[0],a9=aq[1],c=aI,N=(0,u.Z)(az),ba=d.useRef(),aJ=d.useCallback(function(){void 0!==ba.current&&(document.body.style.WebkitUserSelect=ba.current,ba.current=void 0),clearTimeout(a8.current)},[]);d.useEffect(function(){return function(){clearTimeout(a5.current),clearTimeout(a6.current),clearTimeout(a7.current),aJ()}},[aJ]);var bb=function(a){clearTimeout(L),K=!0,a9(!0),a3&&!c&&a3(a)},aK=(0,s.Z)(function(a){clearTimeout(L),L=setTimeout(function(){K=!1},800+a0),a9(!1),a2&&c&&a2(a),clearTimeout(a5.current),a5.current=setTimeout(function(){aH.current=!1},aD.transitions.duration.shortest)}),aL=function(a){aH.current&&"touchstart"!==a.type||(ao&&ao.removeAttribute("title"),clearTimeout(a6.current),clearTimeout(a7.current),aZ||K&&a$?a6.current=setTimeout(function(){bb(a)},K?a$:aZ):bb(a))},aM=function(a){clearTimeout(a6.current),clearTimeout(a7.current),a7.current=setTimeout(function(){aK(a)},a0)},z=(0,v.Z)(),bc=z.isFocusVisibleRef,bd=z.onBlur,be=z.onFocus,aN=z.ref,bf=D(d.useState(!1),2)[1],ar=function(a){bd(a),!1===bc.current&&(bf(!1),aM(a))},as=function(a){ao||aF(a.currentTarget),be(a),!0===bc.current&&(bf(!0),aL(a))},aO=function(b){aH.current=!0;var a=n.props;a.onTouchStart&&a.onTouchStart(b)},at=aL,au=aM;d.useEffect(function(){var a=function(a){("Escape"===a.key||"Esc"===a.key)&&aK(a)};if(c)return document.addEventListener("keydown",a),function(){document.removeEventListener("keydown",a)}},[aK,c]);var aP=(0,t.Z)(aF,ax),aQ=(0,t.Z)(aN,aP),aR=(0,t.Z)(n.ref,aQ);""===y&&(c=!1);var bg=d.useRef({x:0,y:0}),aS=d.useRef(),g={},O="string"==typeof y;void 0!==Y&&Y?(g.title=c||!O||_?null:y,g["aria-describedby"]=c?N:null):(g["aria-label"]=O?y:null,g["aria-labelledby"]=c&&!O?N:null);var b=(0,i.Z)({},g,am,n.props,{className:(0,j.Z)(am.className,n.props.className),onTouchStart:aO,ref:aR},B?{onMouseMove:function(a){var b=n.props;b.onMouseMove&&b.onMouseMove(a),bg.current={x:a.clientX,y:a.clientY},aS.current&&aS.current.update()}}:{}),k={};void 0!==ab&&ab||(b.onTouchStart=function(a){aO(a),clearTimeout(a7.current),clearTimeout(a5.current),aJ(),ba.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",a8.current=setTimeout(function(){document.body.style.WebkitUserSelect=ba.current,aL(a)},a_)},b.onTouchEnd=function(a){n.props.onTouchEnd&&n.props.onTouchEnd(a),aJ(),clearTimeout(a7.current),a7.current=setTimeout(function(){aK(a)},a1)}),_||(b.onMouseOver=M(at,b.onMouseOver),b.onMouseLeave=M(au,b.onMouseLeave),E||(k.onMouseOver=at,k.onMouseLeave=au)),void 0!==Z&&Z||(b.onFocus=M(as,b.onFocus),b.onBlur=M(ar,b.onBlur),E||(k.onFocus=as,k.onBlur=ar));var aT=d.useMemo(function(){var b,a=[{name:"arrow",enabled:Boolean(aG),options:{element:aG,padding:4}}];return null!=(b=x.popperOptions)&&b.modifiers&&(a=a.concat(x.popperOptions.modifiers)),(0,i.Z)({},x.popperOptions,{modifiers:a})},[aG,x]),l=(0,i.Z)({},a,{isRtl:aE,arrow:ay,disableInteractive:E,placement:aj,PopperComponentProp:C,touch:aH.current}),aU=G(l),av=null!=(P=q.Popper)?P:H,aV=null!=(Q=null!=(R=q.Transition)?R:aB)?Q:r.Z,aW=null!=(S=q.Tooltip)?S:I,aX=null!=(T=q.Arrow)?T:J,aY=m(av,(0,i.Z)({},x,f.popper),l),bh=m(aV,(0,i.Z)({},aC,f.transition),l),bi=m(aW,(0,i.Z)({},f.tooltip),l),bj=m(aX,(0,i.Z)({},f.arrow),l);return(0,A.jsxs)(d.Fragment,{children:[d.cloneElement(n,b),(0,A.jsx)(av,(0,i.Z)({as:null!=C?C:e.Z,placement:aj,anchorEl:B?{getBoundingClientRect:function(){return{top:bg.current.y,left:bg.current.x,right:bg.current.x,bottom:bg.current.y,width:0,height:0}}}:ao,popperRef:aS,open:!!ao&&c,id:N,transition:!0},k,aY,{className:(0,j.Z)(aU.popper,null==x?void 0:x.className,null==(U=f.popper)?void 0:U.className),popperOptions:aT,children:function(c){var a,b,d=c.TransitionProps;return(0,A.jsx)(aV,(0,i.Z)({timeout:aD.transitions.duration.shorter},d,bh,{children:(0,A.jsxs)(aW,(0,i.Z)({},bi,{className:(0,j.Z)(aU.tooltip,null==(a=f.tooltip)?void 0:a.className),children:[y,ay?(0,A.jsx)(aX,(0,i.Z)({},bj,{className:(0,j.Z)(aU.arrow,null==(b=f.arrow)?void 0:b.className),ref:a4})):null]}))}))}}))]})})},40322:function(d,a,b){var c=b(56320);a.Z=c.Z}}])