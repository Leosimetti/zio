"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[83737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={id:"getting-started",title:"Getting Started"},a=void 0,s={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"ZIO ZMX lets you observe everything that goes on in your ZIO application.",source:"@site/node_modules/@zio.dev/zio-metrics-connectors/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/zio-metrics-connectors/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"sidebar",previous:{title:"Introduction to ZIO ZMX",permalink:"/zio-metrics-connectors/"},next:{title:"Metrics",permalink:"/zio-metrics-connectors/metrics/"}},c={},l=[{value:"Installation",id:"installation",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ZIO ZMX lets you observe everything that goes on in your ZIO application."),(0,i.kt)("p",null,"Tests are important for verifying the correctness of the code we write. However, when we go into production conditions\nare inevitably different than in testing and we need to know what is going on in our application in real time so we\ncan diagnose and address problems."),(0,i.kt)("p",null,"Logging is part of the solution but it is not enough. We either only log in certain areas, which are often not the\nareas where an issue actually occurs, or we log everywhere, significantly impacting application performance."),(0,i.kt)("p",null,"Diagnostics and metrics are the other piece of the puzzle, but there has not been a solution for integrating existing\nmetrics backends with functional effect systems before, forcing users to develop their own workarounds. These solutions\nare not connected with the runtime of the effect system, so they have no ability to provide insights on what is going\non at the level of the runtime such as the activity of individual fibers."),(0,i.kt)("p",null,"ZIO ZMX solves this problem. ZIO ZMX can be added to any application with only a few lines of code and provides\ntwo types of insights:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Diagnostics")," \u2014 Diagnostics are pre-defined data on the behavior of the application as it is running provided directly by the ZIO runtime, such as the number of fibers in the application, distribution of fiber lifetimes, and breakdown of fiber reasons for termination."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/zio-metrics-connectors/metrics/"},"Metrics"))," \u2014 Metrics are used-defined data, such as the number of times a certain section of code was executed, that are tracked by ZIO ZMX and made available either directly or through third party metrics solutions such as Prometheus or StatsD.")),(0,i.kt)("p",null,"See the corresponding sections for more information on how to use each of these pieces of functionality."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Include ZIO ZMX in your project by adding the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'libraryDependencies += "dev.zio" %% "zio-zmx" % "2.0.2"\n')))}p.isMDXComponent=!0}}]);