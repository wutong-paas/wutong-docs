"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=p(r),g=o,f=i["".concat(s,".").concat(g)]||i[g]||m[g]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[i]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={slug:"mdx-blog-post",title:"MDX\u793a\u4f8b",authors:["fcheng"],tags:["blog","MDX"]},c=void 0,l={permalink:"/wutong-docs/blog/mdx-blog-post",editUrl:"https://github.com/wutong-paas/wutong-docs/tree/master/blog/2021-08-01-mdx-example.mdx",source:"@site/blog/2021-08-01-mdx-example.mdx",title:"MDX\u793a\u4f8b",description:"Blog posts support Docusaurus Markdown features, such as MDX.",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[{label:"blog",permalink:"/wutong-docs/blog/tags/blog"},{label:"MDX",permalink:"/wutong-docs/blog/tags/mdx"}],readingTime:.175,hasTruncateMarker:!1,authors:[{name:"\u6210\u5cf0",title:"\u68a7\u6850PaaS\u5e73\u53f0\u5f00\u53d1\u8005",url:"https://github.com/chengfeng23514",imageURL:"https://github.com/chengfeng23514.png",key:"fcheng"}],frontMatter:{slug:"mdx-blog-post",title:"MDX\u793a\u4f8b",authors:["fcheng"],tags:["blog","MDX"]},prevItem:{title:"\u4ea7\u54c1\u6587\u6863\u7f16\u5236\u624b\u518c",permalink:"/wutong-docs/blog/fcheng/20220309/doc-tutorial"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p},i="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(i,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Blog posts support ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown features"),", such as ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,o.kt)("button",{onClick:()=>alert("button clicked!")},"Click me!")))}m.isMDXComponent=!0}}]);