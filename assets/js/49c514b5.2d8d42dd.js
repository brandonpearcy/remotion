(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9662],{3905:function(e,n,r){"use strict";r.r(n),r.d(n,{MDXContext:function(){return s},MDXProvider:function(){return f},mdx:function(){return h},useMDXComponents:function(){return l},withMDXComponents:function(){return m}});var t=r(2784);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),m=function(e){return function(n){var r=l(n.components);return t.createElement(e,a({},n,{components:r}))}},l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},f=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||a;return r?t.createElement(d,u(u({ref:n},s),{},{components:r})):t.createElement(d,u({ref:n},s))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16800:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var t=r(22122),o=r(19756),a=(r(2784),r(3905)),i=["components"],u={title:"useCurrentFrame()",id:"use-current-frame"},c={unversionedId:"use-current-frame",id:"use-current-frame",isDocsHomePage:!1,title:"useCurrentFrame()",description:"With this hook, you can retrieve the current frame of the video. Frames are 0-indexed, meaning the first frame is 0, the last frame is the duration of the composition in frames minus one. To learn more about how Remotion works with time, read the page about the fundamentals.",source:"@site/docs/use-current-frame.md",sourceDirName:".",slug:"/use-current-frame",permalink:"/docs/use-current-frame",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/use-current-frame.md",version:"current",frontMatter:{title:"useCurrentFrame()",id:"use-current-frame"},sidebar:"someSidebar",previous:{title:"spring()",permalink:"/docs/spring"},next:{title:"useVideoConfig()",permalink:"/docs/use-video-config"}},s=[{value:"See also",id:"see-also",children:[]}],m={toc:s};function l(e){var n=e.components,r=(0,o.default)(e,i);return(0,a.mdx)("wrapper",(0,t.default)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"With this hook, you can retrieve the current frame of the video. Frames are 0-indexed, meaning the first frame is ",(0,a.mdx)("inlineCode",{parentName:"p"},"0"),", the last frame is the duration of the composition in frames minus one. To learn more about how Remotion works with time, read the page about ",(0,a.mdx)("a",{parentName:"p",href:"/docs/the-fundamentals"},"the fundamentals"),"."),(0,a.mdx)("p",null,"If the component you are writing is wrapped in a ",(0,a.mdx)("inlineCode",{parentName:"p"},"<Sequence>"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"useCurrentFrame")," will return the frame relative to when the Sequence starts."),(0,a.mdx)("p",null,"Say the timeline marker is positioned at frame 25. In the example below, ",(0,a.mdx)("inlineCode",{parentName:"p"},"useCurrentFrame")," will return ",(0,a.mdx)("inlineCode",{parentName:"p"},"20"),", except within the Subtitle component, where it will return ",(0,a.mdx)("inlineCode",{parentName:"p"},"15")," because it is within a sequence that starts at frame 10."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {useCurrentFrame, Sequence} from 'remotion';\n\nconst Title = () => {\n  const frame = useCurrentFrame(); // 25\n  return (\n    <div>{frame}</div>\n  )\n}\n\nconst Subtitle = () => {\n  const frame = useCurrentFrame(); // 15\n  return (\n    <div>{frame}</div>\n  )\n}\n\nconst MyVideo = () => {\n  const frame = useCurrentFrame(); // 25\n\n  return (\n    <div>\n      <Title />\n      <Sequence from={10} durationInFrames={Infinity}>\n        <Subtitle />\n      </Sequence>\n    </div>\n  );\n}\n")),(0,a.mdx)("h2",{id:"see-also"},"See also"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/use-video-config"},"useVideoConfig()"))))}l.isMDXComponent=!0}}]);