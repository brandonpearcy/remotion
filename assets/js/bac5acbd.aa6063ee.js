(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1439],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return s},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return p}});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){return function(n){var t=d(n.components);return r.createElement(e,i({},n,{components:t}))}},d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,f=p["".concat(o,".").concat(u)]||p[u]||c[u]||i;return t?r.createElement(f,m(m({ref:n},s),{},{components:t})):r.createElement(f,m({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,o[1]=m;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},52176:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return m},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=t(22122),a=t(19756),i=(t(2784),t(3905)),o=["components"],m={id:"spring",title:"spring()"},l={unversionedId:"spring",id:"spring",isDocsHomePage:!1,title:"spring()",description:"Delightful and smooth animation primitive. Calculates a position based on physical parameters, start and end value, and time.",source:"@site/docs/spring.md",sourceDirName:".",slug:"/spring",permalink:"/docs/spring",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/spring.md",version:"current",frontMatter:{id:"spring",title:"spring()"},sidebar:"someSidebar",previous:{title:"registerRoot()",permalink:"/docs/register-root"},next:{title:"useCurrentFrame()",permalink:"/docs/use-current-frame"}},s=[{value:"Parameters",id:"parameters",children:[{value:"frame",id:"frame",children:[]},{value:"from",id:"from",children:[]},{value:"to",id:"to",children:[]},{value:"fps",id:"fps",children:[]},{value:"config",id:"config",children:[]}]},{value:"YouTube video",id:"youtube-video",children:[]},{value:"Credit",id:"credit",children:[]},{value:"See also",id:"see-also",children:[]}],p={toc:s};function d(e){var n=e.components,t=(0,a.default)(e,o);return(0,i.mdx)("wrapper",(0,r.default)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Delightful and smooth animation primitive. Calculates a position based on physical parameters, start and end value, and time."),(0,i.mdx)("p",null,"Example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},"const frame = useCurrentFrame()\nconst videoConfig = useVideoConfig()\n\nconst value = spring({\n  frame,\n  from: 0,\n  to: 1,\n  fps: videoConfig.fps,\n  config: {\n    stiffness: 100\n  }\n})\n")),(0,i.mdx)("h2",{id:"parameters"},"Parameters"),(0,i.mdx)("h3",{id:"frame"},"frame"),(0,i.mdx)("p",null,"The current time value. Most of the time you want to pass in the return value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"useCurrentFrame"),". The spring animation starts at frame 0, so if you would like to delay the animation, you can pass a different value like ",(0,i.mdx)("inlineCode",{parentName:"p"},"frame - 20"),"."),(0,i.mdx)("h3",{id:"from"},"from"),(0,i.mdx)("p",null,"The initial value of the animation."),(0,i.mdx)("h3",{id:"to"},"to"),(0,i.mdx)("p",null,"The end value of the animation. Note that depending on the parameters, spring animations may overshoot the target a bit, before they bounce back to their final target."),(0,i.mdx)("h3",{id:"fps"},"fps"),(0,i.mdx)("p",null,"For how many frames per second the spring animation should be calculated. This should always be the ",(0,i.mdx)("inlineCode",{parentName:"p"},"fps")," property of the return value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"useVideoConfig()"),"."),(0,i.mdx)("h3",{id:"config"},"config"),(0,i.mdx)("p",null,"An optional object that allows you to customize the physical properties of the animation."),(0,i.mdx)("h4",{id:"mass"},"mass"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Default:")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"1")),(0,i.mdx)("p",null,"The weight of the spring. If you reduce the mass, the animation becomes faster!"),(0,i.mdx)("h4",{id:"damping"},"damping"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Default"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"10")),(0,i.mdx)("p",null,"How hard the animation decelerates."),(0,i.mdx)("h4",{id:"stiffness"},"stiffness"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Default"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"100")),(0,i.mdx)("p",null,"Spring stiffness coefficient. Play with this one and it will affect how bouncy your animation is."),(0,i.mdx)("h4",{id:"overshootclamping"},"overshootClamping"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Default"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"false")),(0,i.mdx)("p",null,"Determines whether the animation can shoot over the ",(0,i.mdx)("inlineCode",{parentName:"p"},"to")," value. If set to true, if the animation goes over ",(0,i.mdx)("inlineCode",{parentName:"p"},"to"),", it will just return the value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"to"),"."),(0,i.mdx)("h2",{id:"youtube-video"},"YouTube video"),(0,i.mdx)("p",null,"Want to understand the different properties like ",(0,i.mdx)("inlineCode",{parentName:"p"},"mass"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"stiffness"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"damping")," etc.? We made a video trying to make sense of all the parameters!"),(0,i.mdx)("p",null,"Watch: ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=GE8ZqrKqE5g"},"The perfect spring animation"))),(0,i.mdx)("h2",{id:"credit"},"Credit"),(0,i.mdx)("p",null,"This function was taken from ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"Reanimated 2"),", which in itself was a huge inspiration for Remotion."),(0,i.mdx)("h2",{id:"see-also"},"See also"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/interpolate"},"interpolate()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/measure-spring"},"measureSpring()"))))}d.isMDXComponent=!0}}]);