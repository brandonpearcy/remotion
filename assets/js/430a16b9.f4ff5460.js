(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3456],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return l},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return m}});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),m=function(e){return function(n){var t=p(n.components);return r.createElement(e,o({},n,{components:t}))}},p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),l=a,h=m["".concat(i,".").concat(l)]||m[l]||d[l]||o;return t?r.createElement(h,s(s({ref:n},u),{},{components:t})):r.createElement(h,s({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},40951:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(22122),a=t(19756),o=(t(2784),t(3905)),i=["components"],s={id:"three-canvas",title:"<ThreeCanvas />"},c={unversionedId:"three-canvas",id:"three-canvas",isDocsHomePage:!1,title:"<ThreeCanvas />",description:"A wrapper for React Three Fiber's ` which synchronizes with Remotions useCurrentFrame()`.",source:"@site/docs/three-canvas.md",sourceDirName:".",slug:"/three-canvas",permalink:"/docs/three-canvas",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/three-canvas.md",version:"current",frontMatter:{id:"three-canvas",title:"<ThreeCanvas />"},sidebar:"someSidebar",previous:{title:"@remotion/three",permalink:"/docs/three"},next:{title:"useVideoTexture()",permalink:"/docs/use-video-texture"}},u=[{value:"Example",id:"example",children:[]}],m={toc:u};function p(e){var n=e.components,t=(0,a.default)(e,i);return(0,o.mdx)("wrapper",(0,r.default)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"A wrapper for ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/pmndrs/react-three-fiber"},"React Three Fiber"),"'s ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Canvas />")," which synchronizes with Remotions ",(0,o.mdx)("a",{parentName:"p",href:"/docs/use-current-frame"},(0,o.mdx)("inlineCode",{parentName:"a"},"useCurrentFrame()")),"."),(0,o.mdx)("p",null,"Since React Three Fiber is a custom renderer, normally the React contexts that surround it don't work inside. This would normally break the usage of it in Remotion, but this component wraps the contexts so you can write your markup as expected."),(0,o.mdx)("p",null,"Instead of using React Three Fibers ",(0,o.mdx)("inlineCode",{parentName:"p"},"useFrame")," API, you can (and must) write your animations fully declaratively using Remotions ",(0,o.mdx)("inlineCode",{parentName:"p"},"useCurrentFrame")," API. This will ensure that you can scrub back and forth in the timeline and pause the animation."),(0,o.mdx)("p",null,"A browser bug ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/pmndrs/react-three-fiber/issues/1394"},"would normally cause the layout to be broken")," because we apply a ",(0,o.mdx)("inlineCode",{parentName:"p"},"scale")," transform to the canvas in preview mode. To work around this problem, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"<ThreeCanvas />")," requires the ",(0,o.mdx)("inlineCode",{parentName:"p"},"width")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"height")," props to be set."),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)("p",null,"A spinning, color changing, scaling cube. This example can also be found in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"examples")," folder of the Remotion repo."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport {interpolate, useCurrentFrame} from 'remotion';\nimport {ThreeCanvas} from '@remotion/three';\n\nconst ThreeBasic: React.FC = () => {\n    const frame = useCurrentFrame();\n    const {width, height} = useVideoConfig();\n\n    return (\n        <ThreeCanvas\n            orthographic={false}\n            width={width}\n            height={height}\n            style={{backgroundColor: 'white'}}\n            camera={{fov: 75, position: [0, 0, 470]}}\n        >\n            <ambientLight intensity={0.15} />\n            <pointLight args={[undefined, 0.4]} position={[200, 200, 0]} />\n            <mesh\n                position={[0, 0, 0]}\n                rotation={[frame * 0.06 * 0.5, frame * 0.07 * 0.5, frame * 0.08 * 0.5]}\n                scale={interpolate(Math.sin(frame / 10), [-1, 1], [0.8, 1.2])}\n            >\n                <boxGeometry args={[100, 100, 100]} />\n                <meshStandardMaterial\n                    color={[\n                        Math.sin(frame * 0.12) * 0.5 + 0.5,\n                        Math.cos(frame * 0.11) * 0.5 + 0.5,\n                        Math.sin(frame * 0.08) * 0.5 + 0.5,\n                    ]}\n                />\n            </mesh>\n        </ThreeCanvas>\n    );\n};\n\nexport default ThreeBasic;\n")))}p.isMDXComponent=!0}}]);