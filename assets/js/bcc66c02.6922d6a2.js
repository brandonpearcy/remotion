(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6152],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return m}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),m=function(e){return function(n){var t=p(n.components);return r.createElement(e,i({},n,{components:t}))}},p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,h=m["".concat(a,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(h,s(s({ref:n},l),{},{components:t})):r.createElement(h,s({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},91819:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var r=t(22122),o=t(19756),i=(t(2784),t(3905)),a=["components"],s={id:"ssr",title:"Server-Side Rendering"},d={unversionedId:"ssr",id:"ssr",isDocsHomePage:!1,title:"Server-Side Rendering",description:"Remotion's rendering engine is built upon Node.JS, which makes it exceptionally easy to render a video in the cloud.",source:"@site/docs/ssr.md",sourceDirName:".",slug:"/ssr",permalink:"/docs/ssr",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/ssr.md",version:"current",frontMatter:{id:"ssr",title:"Server-Side Rendering"},sidebar:"someSidebar",previous:{title:"Dynamic duration, FPS & dimensions",permalink:"/docs/dynamic-metadata"},next:{title:"Custom Webpack config",permalink:"/docs/webpack"}},l=[{value:"Render a video programmatically",id:"render-a-video-programmatically",children:[]},{value:"Render using a HTTP server",id:"render-using-a-http-server",children:[]},{value:"Render using a HTTP server (Dockerized)",id:"render-using-a-http-server-dockerized",children:[]},{value:"Render using GitHub Actions",id:"render-using-github-actions",children:[]},{value:"Rendering a video using serverless",id:"rendering-a-video-using-serverless",children:[]},{value:"API reference",id:"api-reference",children:[]}],m={toc:l};function p(e){var n=e.components,t=(0,o.default)(e,a);return(0,i.mdx)("wrapper",(0,r.default)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Remotion's rendering engine is built upon Node.JS, which makes it exceptionally easy to render a video in the cloud."),(0,i.mdx)("p",null,"Since Remotion is built with tech (",(0,i.mdx)("em",{parentName:"p"},"Node.JS, FFMPEG, Puppeteer"),") that works well cross-platform, you can without much hassle run it on a Linux-based system or even dockerize your video."),(0,i.mdx)("p",null,"On this page, we demonstrate the server-rendering capabilities or Remotion using examples ",(0,i.mdx)("a",{parentName:"p",href:"/docs#installation"},"built into the template"),"!"),(0,i.mdx)("h2",{id:"render-a-video-programmatically"},"Render a video programmatically"),(0,i.mdx)("p",null,"The NPM package ",(0,i.mdx)("inlineCode",{parentName:"p"},"@remotion/renderer")," provides you with an API for rendering the videos programmatically. You can make a video in three steps: creating a Webpack bundle, rendering the frames, and stitching them together to an MP4. This gives you more independence and allows you to for example skip the stitching process, if you just want a PNG sequence."),(0,i.mdx)("p",null,"Follow this commented example to see how to render a video:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},"import fs from 'fs';\nimport path from 'path';\nimport {evaluateRootForCompositions} from 'remotion';\nimport {bundle} from '@remotion/bundler';\nimport {\n    getCompositions,\n    renderFrames,\n    stitchFramesToVideo,\n} from '@remotion/renderer';\n\nconst start = async () => {\n  // The composition you want to render\n  const compositionId = 'HelloWorld';\n\n  // Create a webpack bundle of the entry file.\n  const bundled = await bundle(require.resolve('./src/index'));\n\n  // Extract all the compositions you have defined in your project\n  // from the webpack bundle.\n  const comps = await getCompositions(bundled, {\n    // You can pass custom input props that you can retrieve using getInputProps()\n    // in the composition list. Use this if you want to dynamically set the duration or\n    // dimensions of the video.\n    inputProps: {\n      custom: 'data'\n    }\n  });\n\n  // Select the composition you want to render.\n  const video = comps.find((c) => c.id === compositionId);\n\n  // We create a temporary directory for storing the frames\n  const framesDir = await fs.promises.mkdtemp(\n    path.join(os.tmpdir(), 'remotion-')\n  );\n\n  // We create JPEGs for all frames\n  const {assetsInfo} = await renderFrames({\n    config: video,\n    // Path of the webpack bundle you have created\n    webpackBundle: bundled,\n    // Get's called after bundling is finished and the\n    // actual rendering starts.\n    onStart: () => console.log('Rendering frames...'),\n    onFrameUpdate: (f) => {\n      // Log a message whenever 10 frames have rendered.\n      if (f % 10 === 0) {\n        console.log(`Rendered frame ${f}`);\n      }\n    },\n    // How many CPU threads to use. `null` will use a sane default (half of the available threads)\n    // See 'CLI options' section for concurrency options.\n    parallelism: null,\n    outputDir: framesDir,\n    // React props passed to the root component of the sequence. Will be merged with the `defaultProps` of a video.\n    inputProps: {\n      titleText: 'Hello World'\n    },\n    compositionId,\n    // Can be either 'jpeg' or 'png'. JPEG is faster, but has no transparency.\n    imageFormat: 'jpeg'\n  });\n\n  // Add this step if you want to make an MP4 out of the rendered frames.\n  await stitchFramesToVideo({\n    // Input directory of the frames\n    dir: framesDir,\n    // Overwrite existing video\n    force: true,\n    // Possible overwrite of video metadata,\n    // we suggest to just fill in the data from the\n    // video variable\n    fps: video.fps,\n    height: video.height,\n    width: video.width,\n    // Must match the value above for the image format\n    imageFormat: 'jpeg',\n    // Pass in the desired output path of the video. Et voil\xe0!\n    outputLocation: path.join(framesDir, 'out.mp4'),\n    // FFMPEG pixel format\n    pixelFormat: 'yuv420p',\n    // Information needed to construct audio correctly.\n    assetsInfo,\n    // Hook into the FFMPEG progress\n    onProgress: (frame) => undefined\n  });\n};\n\nstart();\n")),(0,i.mdx)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Many projects created before April 27th are missing the extra parameter for ",(0,i.mdx)("inlineCode",{parentName:"p"},"getCompositions()"),". Make sure to add it if you want to use input props to control duration or dimensions of the video."))),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/docs/parametrized-rendering#passing-props-in-github-actions"},"See also: Passing props in GitHub Actions")),(0,i.mdx)("h2",{id:"render-using-a-http-server"},"Render using a HTTP server"),(0,i.mdx)("p",null,"In the ",(0,i.mdx)("a",{parentName:"p",href:"/docs#installation"},"template"),", we added a minimal example of an HTTP server that dynamically returns a video whenever you call the URL."),(0,i.mdx)("p",null,"The server is located under ",(0,i.mdx)("inlineCode",{parentName:"p"},"server.tsx"),", and you can run it using ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm run server"),". Call the default URL with parameters, and it will return a video after some time! Try it out in the browser or using cURL:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'curl "http://localhost:8000?titleText=Hello,+World!&titleColor=red" > output.mp4\n')),(0,i.mdx)("p",null,"Note that we only added a minimal example. For production, you should consider adding a queueing system and rate limiting."),(0,i.mdx)("h2",{id:"render-using-a-http-server-dockerized"},"Render using a HTTP server (Dockerized)"),(0,i.mdx)("p",null,"We added a Dockerfile that includes FFMPEG and added it to the template. That means you can also run the server described in the section above using Docker."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"docker build -t my-video .\ndocker run -p 8000:8000 --privileged my-video\n")),(0,i.mdx)("h2",{id:"render-using-github-actions"},"Render using GitHub Actions"),(0,i.mdx)("p",null,"The template includes a GitHub Actions workflow file\nunder ",(0,i.mdx)("inlineCode",{parentName:"p"},".github/workflows/render-video.yml"),". All you have to do is to adjust the props that your root component accepts in the workflow file and you can render a video right on GitHub."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Commit the template to a GitHub repository"),(0,i.mdx)("li",{parentName:"ol"},"On GitHub, click the 'Actions' tab."),(0,i.mdx)("li",{parentName:"ol"},"Select the 'Render video' workflow on the left."),(0,i.mdx)("li",{parentName:"ol"},"A 'Run workflow' button should appear. Click it"),(0,i.mdx)("li",{parentName:"ol"},"Fill in the props of the root component and click 'Run workflow'."),(0,i.mdx)("li",{parentName:"ol"},"After the rendering is finished, you can download the video under 'Artifacts'.")),(0,i.mdx)("p",null,"Note that running the workflow may incur costs. However, the workflow will only run if you actively trigger it."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/docs/parametrized-rendering#passing-props-in-github-actions"},"See also: Passing props in GitHub Actions")),(0,i.mdx)("h2",{id:"rendering-a-video-using-serverless"},"Rendering a video using serverless"),(0,i.mdx)("p",null,"We are working on a library which will help you render videos using AWS Lambda. Contact us if you are interested in testing an early version."),(0,i.mdx)("h2",{id:"api-reference"},"API reference"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/bundle"},"bundle()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/get-compositions"},"getCompositions()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/render-frames"},"renderFrames()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/stitch-frames-to-video"},"stitchFramesToVideo()"))))}p.isMDXComponent=!0}}]);