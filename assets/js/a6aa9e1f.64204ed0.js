(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{104:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),i=t(113),m=t(124),s=t(109),c=t(108);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(c.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.a.createElement(c.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(s.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},r.a.createElement(c.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},d=t(118);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,s=Object(l.default)().siteConfig.title,c=a.blogDescription,g=a.blogTitle,u="/"===a.permalink?s:g;return r.a.createElement(i.a,{title:u,description:c,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_posts_list"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(d.a,{sidebar:n})),r.a.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return r.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(o,{metadata:a})))))}},115:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(109),i=t(121),m=t(7),s=t(106),c=t(108),o=t(107),d=(t(57),t(58)),g=t.n(d),u=function(e){return function(a){var t,n=a.id,l=Object(m.a)(a,["id"]),i=Object(o.useThemeConfig)().navbar.hideOnScroll;return n?r.a.createElement(e,l,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",(t={},t[g.a.enhancedAnchor]=!i,t)),id:n}),l.children,r.a.createElement("a",{className:"hash-link",href:"#"+n,title:Object(c.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,l)}},h={code:function(e){var a=e.children;return"string"==typeof a?a.includes("\n")?r.a.createElement(i.a,e):r.a.createElement("code",e):a},a:function(e){return r.a.createElement(l.a,e)},pre:function(e){var a=e.children;return r.a.createElement(i.a,Object(n.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:u("h1"),h2:u("h2"),h3:u("h3"),h4:u("h4"),h5:u("h5"),h6:u("h6")};a.a=h},118:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n),l=t(106),i=t(109),m=t(59),s=t.n(m);function c(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(l.a)(s.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:s.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:s.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},r.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))}))))}},124:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(106),i=t(112),m=t(108),s=t(109),c=t(115),o=t(123),d=t(61),g=t.n(d),u=t(107);a.a=function(e){var a,t,n=(a=Object(u.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(m.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),d=e.children,h=e.frontMatter,p=e.metadata,E=e.truncated,b=e.isBlogPostPage,v=void 0!==b&&b,f=p.date,N=p.formattedDate,_=p.permalink,k=p.tags,w=p.readingTime,T=h.author,O=h.title,j=h.image,L=h.keywords,x=h.author_url||h.authorURL,y=h.author_title||h.authorTitle,I=h.author_image_url||h.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{keywords:L,image:j}),r.a.createElement("article",{className:v?void 0:"margin-bottom--xl"},(t=v?"h1":"h2",r.a.createElement("header",null,r.a.createElement(t,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},v?O:r.a.createElement(s.a,{to:_},O)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:f,className:g.a.blogPostDate},N,w&&r.a.createElement(r.a.Fragment,null," \xb7 ",n(w)))),r.a.createElement("div",{className:"avatar margin-vert--md"},I&&r.a.createElement(s.a,{className:"avatar__photo-link avatar__photo",href:x},r.a.createElement("img",{src:I,alt:T})),r.a.createElement("div",{className:"avatar__intro"},T&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(s.a,{href:x},T)),r.a.createElement("small",{className:"avatar__subtitle"},y)))))),r.a.createElement("div",{className:"markdown"},r.a.createElement(i.a,{components:c.a},d)),(k.length>0||E)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(m.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(s.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(s.a,{to:p.permalink,"aria-label":"Read more about "+O},r.a.createElement("strong",null,r.a.createElement(m.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);