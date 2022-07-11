(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2392],{82688:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/styled",function(){return c(38141)}])},38141:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}}),a(27378);var h=a(35318),e={name:"styled",tableOfContents:{depth:0,children:[{depth:1,slug:"#styled",title:"styled",children:[{depth:2,children:[{depth:3,slug:"#breakpoints",title:"Breakpoints"},{depth:3,slug:"#cxclsx",title:"cx/clsx"},{depth:3,slug:"#keyframes",title:"keyframes"},{depth:3,slug:"#complexidade",title:"Complexidade"}]}]}]}},i={meta:e};function f(a){var b=a.components,c=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["components"]);return(0,h.kt)("wrapper",Object.assign({},i,c,{components:b,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"styled"}),"styled"),(0,h.kt)("p",null,"Padr\xe3o styled, \xe9 poss\xedvel receber o ",(0,h.kt)("em",{parentName:"p"},"theme")," e as ",(0,h.kt)("em",{parentName:"p"},"props")," juntos na fun\xe7\xe3o da interpola\xe7\xe3o."),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import * as React from 'react';\nimport styled, { IStyledProp } from '@eduzz/houston-styles';\n\ninterface IProps extends IStyledProp {\n  success: boolean;\n}\n\nconst ComponentsDev: React.FC<IProps> = ({ className }) => {\n  return (\n    <div className={className}>\n      <span className='__text'>Teste</span>\n      <button>Teste</button>\n    </div>\n  );\n};\n\nexport default styled(ComponentsDev)`\n  background-color: ${({ theme, success }) =>\n    success ? theme.feedbackColor.positive.pure : theme.feedbackColor.negative.pure};\n\n  & > .__text {\n    color: red;\n  }\n`;\n")),(0,h.kt)("h3",Object.assign({},{id:"breakpoints"}),"Breakpoints"),(0,h.kt)("p",null,"Basta importar o breakpoints e utilizar os ",(0,h.kt)("a",Object.assign({parentName:"p"},{href:"./houston/tokens/tokens"}),"tamanhos pr\xe9-definidos no tokens"),"."),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import * as React from 'react';\nimport styled, { IStyledProp, breakpoints } from '@eduzz/houston-styles';\n\nconst ComponentsDev: React.FC<IStyledProp> = ({ className }) => {\n  return <div className={className} />;\n};\n\nexport default styled(ComponentsDev)`\n  background-color: red;\n\n  ${breakpoints.up('md')} {\n    background-color: purple;\n  }\n`;\n")),(0,h.kt)("h3",Object.assign({},{id:"cxclsx"}),"cx/clsx"),(0,h.kt)("p",null,"Utilize o ",(0,h.kt)("a",Object.assign({parentName:"p"},{href:"https://emotion.sh/docs/@emotion/css#cx"}),"cx")," para facilitar na hora de compor nomes de classes.\n",(0,h.kt)("strong",{parentName:"p"},"clsx \xe9 apenas um alias para o cx"),"."),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import * as React from 'react';\nimport styled, { IStyledProp, clsx } from '@eduzz/houston-styles';\n\nconst ComponentsDev: React.FC<IStyledProp> = ({ className }) => {\n  return <div className={clsx(className, 'outra-classe', { 'classe-condicional': true })} />;\n};\n\nexport default styled(ComponentsDev)`\n  background-color: red;\n`;\n")),(0,h.kt)("h3",Object.assign({},{id:"keyframes"}),"keyframes"),(0,h.kt)("p",null,"Para criar anima\xe7\xf5es utilize o keyframes conforme o exemplo abaixo."),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import * as React from 'react';\nimport styled, { IStyledProp, keyframes, IHoustonTheme } from '@eduzz/houston-styles';\n\ninterface IProps extends IStyledProp {\n  size: number;\n}\n\nconst ComponentsDev: React.FC<IStyledProp> = ({ className }) => {\n  return (\n    <div className={className}>\n      <div className='__circle' />\n    </div>\n  );\n};\n\n// simples\nconst rotationAnimation = keyframes`\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(270deg); }\n`;\n\n// usando props, n\xe3o \xe9 poss\xedvel interpolar as props/theme, \xe9 preciso receber eles via parametro.\nconst circleAnimation = (props: ILoaderProps & { theme: IHoustonTheme }) => keyframes`\n  0% { stroke-dashoffset: ${props.size}\n  50% { stroke-dashoffset: ${props.size}; transform: rotate(135deg); }\n  100% { stroke-dashoffset: ${props.size}; transform: rotate(450deg); }\n`;\n\nexport default styled(ComponentsDev)`\n  animation: ${rotationAnimation} 1.4s linear infinite;\n\n  & > .__circle {\n    animation: ${props => circleAnimation(props)} 1.4s ease-in-out infinite;\n  }\n`;\n")),(0,h.kt)("h3",Object.assign({},{id:"complexidade"}),"Complexidade"),(0,h.kt)("p",null,"Se estiver usando muita interpola\xe7\xe3o, ou precisar fazer algum calculo \xe9 poss\xedvel utilizar a seguinte sintax;"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import * as React from 'react';\nimport styled, { IStyledProp, clsx, css } from '@eduzz/houston-styles';\n\ninterface IProps extends IStyledProp {\n  size?: numberl;\n}\n\nconst ComponentsDev: React.FC<> = ({ className }) => {\n  return <div className={clsx(className, 'outra-classe', { 'classe-condicional': true })} />;\n};\n\nexport default styled(ComponentsDev)(({ theme, size }) => {\n  const height = size * 4;\n\n  // O css \xe9 apenas para que o vscode entenda a sintax, e dentro dele n\xe3o pode haver interpola\xe7\xe3o de fun\xe7\xe3o.\n  return css`\n    background-color: ${theme.color};\n    height: ${size}px;\n  `;\n});\n")),(0,h.kt)("p",null,"Para mais informa\xe7\xf5es ",(0,h.kt)("a",Object.assign({parentName:"p"},{href:"https://emotion.sh/docs/styled"}),"clique aqui"),"."))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/styles/styled/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[9774,2888,179],function(){return a(a.s=82688)}),_N_E=a.O()}])