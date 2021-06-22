(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6323],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return p},mdx:function(){return y},useMDXComponents:function(){return m},withMDXComponents:function(){return l}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){return function(t){var n=m(t.components);return r.createElement(e,a({},t,{components:n}))}},m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=m(n),p=o,f=l["".concat(i,".").concat(p)]||l[p]||d[p]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81227:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(22122),o=n(19756),a=(n(2784),n(3905)),i=["components"],s={slug:"introducing-remotion",title:"Introducing Remotion",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},c={permalink:"/blog/introducing-remotion",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/blog/blog/2021-02-08-introducing-remotion.md",source:"@site/blog/2021-02-08-introducing-remotion.md",title:"Introducing Remotion",description:"I've been using After Effects for many years, but it's always been a dream of mine to code my videos instead. In the React ecosystem, I am used to being able to take advantage of powerful composition, reusability, to be able to customize the experience for every user. To use scripts, linters and external dependencies to make my life easier as a coder.",date:"2021-02-08T00:00:00.000Z",formattedDate:"February 8, 2021",tags:[],readingTime:1.28,truncated:!1,prevItem:{title:"Remotion 1.1",permalink:"/blog/1-1"}},u=[],l={toc:u};function m(e){var t=e.components,n=(0,o.default)(e,i);return(0,a.mdx)("wrapper",(0,r.default)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"I've been using After Effects for many years, but it's always been a dream of mine to code my videos instead. In the React ecosystem, I am used to being able to take advantage of powerful composition, reusability, to be able to customize the experience for every user. To use scripts, linters and external dependencies to make my life easier as a coder."),(0,a.mdx)("p",null,"So as a proof of concept I tried to make a trailer for my AnySticker app",(0,a.mdx)("sup",{parentName:"p",id:"fnref-1"},(0,a.mdx)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," in React, and to render each frame using Puppeteer and stitch them together using FFMPEG."),(0,a.mdx)("p",null,"The final result was a video that I thought was the best one I created yet. And I realized there was something to the idea."),(0,a.mdx)("p",null,"This is my attempt to create a tool for the community that allows you to write videos in React. Obviously this is a huge undertaking, so this is not a product with hundreds of different features built in. Rather, following the React philosophy, this is an attempt to create a minimal fundament for rendering videos in React. Basically, you get a blank canvas, and you create your motion graphics using existing web technologies built into the browser and your favorite external libraries. Remotion is so minimal in fact, it consists of only 5-6 APIs that you need to learn to get started."),(0,a.mdx)("p",null,"To get started is super easy. Assuming you already have ",(0,a.mdx)("a",{parentName:"p",href:"https://yarnpkg.com"},"Yarn"),", run:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"yarn create video\n")),(0,a.mdx)("p",null,"and then read the ",(0,a.mdx)("a",{parentName:"p",href:"/docs"},"documentation"),". ",(0,a.mdx)("a",{parentName:"p",href:"https://twitter.com/JNYBGR"},"Let me know on Twitter")," what you think!"),(0,a.mdx)("div",{className:"footnotes"},(0,a.mdx)("hr",{parentName:"div"}),(0,a.mdx)("ol",{parentName:"div"},(0,a.mdx)("li",{parentName:"ol",id:"fn-1"},(0,a.mdx)("a",{parentName:"li",href:"https://twitter.com/JNYBGR/status/1319292595420291074"},"AnySticker beta trailer "),(0,a.mdx)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);