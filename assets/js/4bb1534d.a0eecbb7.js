(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5492],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return d},mdx:function(){return h},useMDXComponents:function(){return l},withMDXComponents:function(){return c}});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){return function(t){var n=l(t.components);return o.createElement(e,i({},t,{components:n}))}},l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(n),d=r,f=c["".concat(a,".").concat(d)]||c[d]||u[d]||i;return n?o.createElement(f,m(m({ref:t},s),{},{components:n})):o.createElement(f,m({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,a[1]=m;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77054:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var o=n(22122),r=n(19756),i=(n(2784),n(3905)),a=["components"],m={id:"register-root",title:"registerRoot()"},p={unversionedId:"register-root",id:"register-root",isDocsHomePage:!1,title:"registerRoot()",description:"registerRoot is a function that the root component of the Remotion project. In the root component, one or multiple compositions should be returned (in the case of multiple compositions, they should be wrapped in a React Fragment).",source:"@site/docs/register-root.md",sourceDirName:".",slug:"/register-root",permalink:"/docs/register-root",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/register-root.md",version:"current",frontMatter:{id:"register-root",title:"registerRoot()"},sidebar:"someSidebar",previous:{title:"random()",permalink:"/docs/random"},next:{title:"spring()",permalink:"/docs/spring"}},s=[{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],c={toc:s};function l(e){var t=e.components,n=(0,r.default)(e,a);return(0,i.mdx)("wrapper",(0,o.default)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"registerRoot")," is a function that the root component of the Remotion project. In the root component, one or multiple compositions should be returned (in the case of multiple compositions, they should be wrapped in a React Fragment)."),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"The list of compositions can be updated without reloading the page, but calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"registerRoot()")," multiple times is an error. This is why the root component should be placed in a different file than ",(0,i.mdx)("inlineCode",{parentName:"p"},"registerRoot()")," itself."))),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"index.ts")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {registerRoot} from 'remotion';\nimport {RemotionVideo} from './RemotionVideo';\n\nregisterRoot(RemotionVideo);\n")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Video.tsx")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},"import MyComponent from './MyComponent';\nimport MyOtherComponent from './MyOtherComponent';\n\nexport const RemotionVideo = () => {\n  return (\n    <>\n      <Composition\n        id=\"comp\"\n        fps={30}\n        height={1080}\n        width={1920}\n        component={MyComponent}\n      />\n      <Composition\n        id=\"anothercomp\"\n        fps={30}\n        height={1080}\n        width={1920}\n        component={MyOtherComponent}\n      />\n    </>\n  )\n}\n")),(0,i.mdx)("h2",{id:"see-also"},"See also"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/composition"},(0,i.mdx)("inlineCode",{parentName:"a"},"<Composition />")," component")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/the-fundamentals"},"The fundamentals"))))}l.isMDXComponent=!0}}]);