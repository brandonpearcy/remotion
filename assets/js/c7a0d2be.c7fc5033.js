(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2870],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return l},mdx:function(){return h},useMDXComponents:function(){return p},withMDXComponents:function(){return u}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),u=function(e){return function(n){var t=p(n.components);return r.createElement(e,i({},n,{components:t}))}},p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),u=p(t),l=o,f=u["".concat(a,".").concat(l)]||u[l]||c[l]||i;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},35516:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d},default:function(){return p}});var r=t(22122),o=t(19756),i=(t(2784),t(3905)),a=["components"],s={id:"the-fundamentals",title:"The fundamentals"},m={unversionedId:"the-fundamentals",id:"the-fundamentals",isDocsHomePage:!1,title:"The fundamentals",description:"The basic idea behind Remotion is that you get a frame number and blank canvas to render anything you want.",source:"@site/docs/the-fundamentals.md",sourceDirName:".",slug:"/the-fundamentals",permalink:"/docs/the-fundamentals",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/the-fundamentals.md",version:"current",frontMatter:{id:"the-fundamentals",title:"The fundamentals"},sidebar:"someSidebar",previous:{title:"Setup and Installation",permalink:"/docs/"},next:{title:"Animating properties",permalink:"/docs/animating-properties"}},d=[{value:"Video properties",id:"video-properties",children:[]},{value:"Defining compositions",id:"defining-compositions",children:[]}],u={toc:d};function p(e){var n=e.components,t=(0,o.default)(e,a);return(0,i.mdx)("wrapper",(0,r.default)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The basic idea behind Remotion is that you get a frame number and blank canvas to render anything you want."),(0,i.mdx)("p",null,"You express those ideas using ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"https://reactjs.org"},"React")),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'import { useCurrentFrame } from "remotion";\n\nexport const MyVideo = () => {\n  const frame = useCurrentFrame();\n\n  return (\n    <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>\n      The current frame is {frame}.\n    </div>\n  );\n};\n')),(0,i.mdx)("h2",{id:"video-properties"},"Video properties"),(0,i.mdx)("p",null,"A video has 4 properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"width")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"height")," in pixels."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"durationInFrames"),": The number of frames which the video is long."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"fps"),": The amount of frames per second. The duration in frames divided by FPS results in the duration in seconds.")),(0,i.mdx)("p",null,"These properties are variable and you can reuse a component multiple times with different properties. This is why you better not hard-code these properties, but instead derive them from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"useVideoConfig")," hook:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'import { useVideoConfig } from "remotion";\n\nexport const MyVideo = () => {\n  const { fps, durationInFrames, width, height } = useVideoConfig();\n\n  return (\n    <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>\n      This video is {durationInFrames / fps} seconds long.\n    </div>\n  );\n};\n')),(0,i.mdx)("p",null,"A video's first frame is ",(0,i.mdx)("inlineCode",{parentName:"p"},"0")," and it's last frame is ",(0,i.mdx)("inlineCode",{parentName:"p"},"durationInFrames - 1"),"."),(0,i.mdx)("h2",{id:"defining-compositions"},"Defining compositions"),(0,i.mdx)("p",null,"Compositions are components with the above mentioned metadata. You can define compositions in ",(0,i.mdx)("inlineCode",{parentName:"p"},"src/Video.tsx")," to make them show up in the left sidebar."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},'export const RemotionVideo: React.FC = () => {\n  return (\n    <>\n      <Composition\n        id="MyVideo"\n        component={MyVideo}\n        durationInFrames={150}\n        fps={30}\n        width={1920}\n        height={1080}\n      />\n    </>\n  );\n};\n')),(0,i.mdx)("p",null,"Remember that if you like, you can register multiple compositions that rely on the same component. For example, if you like to make a square video for social media feeds, and a portrait video for Stories, you can reuse the component and try to make it 'responsive'."))}p.isMDXComponent=!0}}]);