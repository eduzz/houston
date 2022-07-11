(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2628],{92101:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/README",function(){return c(53507)}])},53507:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}}),a(27378);var h=a(35318),e={name:"Vis\xe3o geral",tableOfContents:{depth:0,children:[{depth:1,slug:"#styles",title:"Styles",children:[{depth:2,slug:"#instala\xe7\xe3o",title:"Instala\xe7\xe3o"},{depth:2,slug:"#uso",title:"Uso",children:[{depth:3,slug:"#estilizando-um-componente",title:"Estilizando um componente"},{depth:3,slug:"#usehoustontheme",title:"useHoustonTheme"},{depth:3,slug:"#objeto-tema-ihoustontheme",title:"Objeto Tema (IHoustonTheme)"}]}]}]}},i={meta:e};function f(a){var b=a.components,c=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["components"]);return(0,h.kt)("wrapper",Object.assign({},i,c,{components:b,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"styles"}),"Styles"),(0,h.kt)("h2",Object.assign({},{id:"instala\xe7\xe3o"}),"Instala\xe7\xe3o"),(0,h.kt)("blockquote",null,(0,h.kt)("p",{parentName:"blockquote"},"\xc9 necess\xe1rio instalar diretamente o ",(0,h.kt)("strong",{parentName:"p"},"@eduzz/houston-styles")," caso n\xe3o utilize o ",(0,h.kt)("strong",{parentName:"p"},"@eduzz/houston-ui"),".")),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yarn add @eduzz/houston-styles\n")),(0,h.kt)("h2",Object.assign({},{id:"uso"}),"Uso"),(0,h.kt)("p",null,"No arquivo raiz de seu projeto, defina sua paleta de cores e adicione o provedor da seguinte maneira:"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import createTheme, { IHoustonTheme } from '@eduzz/houston-styles/createTheme';\nimport ThemeProvider from '@eduzz/houston-styles/ThemeProvider';\n\nconst theme: IHoustonTheme = createTheme('orbita');\n// ou\nconst theme: IHoustonTheme = createTheme({\n  primary: {\n    pure: '#0D47A1',\n    light: '#9EB5D9',\n    medium: '#265AAB',\n    dark: '#072D83'\n  }\n});\n\n<ThemeProvider theme={theme}>...</ThemeProvider>;\n")),(0,h.kt)("h3",Object.assign({},{id:"estilizando-um-componente"}),"Estilizando um componente"),(0,h.kt)("p",null,"Existem duas maneiras de estilar, mas ambos usam o emotion e tem o mesmo impacto de performance, fica mais a crit\xe9rio de\ngosto, mas recomendamos o styled para padronizar:"),(0,h.kt)("ul",null,(0,h.kt)("li",{parentName:"ul"},(0,h.kt)("a",Object.assign({parentName:"li"},{href:"/houston/styles/styled"}),"styled")," (",(0,h.kt)("em",{parentName:"li"},"Recomendado"),"): estilar os componentes no estilo styled-components.")),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import styled, { IStyledProp } from '@eduzz/houston-styles';\n\nconst Component: React.FC<IStyledProp> = ({ className }) => {\n  return <div className={className} />;\n};\n\nexport default styled(Component)`\n  background-color: red;\n`;\n")),(0,h.kt)("ul",null,(0,h.kt)("li",{parentName:"ul"},(0,h.kt)("a",Object.assign({parentName:"li"},{href:"/houston/styles/createUseStyles"}),"useStyles"),": estilar usando o padr\xe3o do JSS.")),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js",metastring:'title="testes"',title:'"testes"'}),"import createUseStyles from '@eduzz/houston-styles/createUseStyles';\n\nconst useStyles = createUseStyles(() => {\n  container: {\n    background: 'red';\n  }\n});\n\nconst Component: React.FC = props => {\n  const styles = useStyles(props);\n\n  return <div className={styles.container} />;\n};\n\nexport default Component;\n")),(0,h.kt)("h3",Object.assign({},{id:"usehoustontheme"}),"useHoustonTheme"),(0,h.kt)("p",null,"Caso queria apenas utlizar as vari\xe1veis sem criar um estilo \xe9 poss\xedvel utilizar esse hook."),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';\n\nconst ComponentsDev = memo<IProps>(props => {\n  const theme = useHoustonTheme();\n  return <div>Tamanho: {theme.font.size.xs}</div>;\n});\n")),(0,h.kt)("h3",Object.assign({},{id:"objeto-tema-ihoustontheme"}),"Objeto Tema (IHoustonTheme)"),(0,h.kt)("p",null,"Veja ",(0,h.kt)("a",Object.assign({parentName:"p"},{href:"/houston/tokens/tokens"}),"aqui os tokens")))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/styles/README.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[9774,2888,179],function(){return a(a.s=92101)}),_N_E=a.O()}])