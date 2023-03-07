"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[31857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=g(n),c=o,d=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var g=2;g<r;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var a=n(87462),o=(n(67294),n(3905));const r={id:"formatting-log-records",title:"Formatting Log Records"},i=void 0,l={unversionedId:"zio-logging/formatting-log-records",id:"zio-logging/formatting-log-records",title:"Formatting Log Records",description:"A LogFormat represents a DSL to describe the format of text log messages.",source:"@site/docs/zio-logging/formatting-log-records.md",sourceDirName:"zio-logging",slug:"/zio-logging/formatting-log-records",permalink:"/zio-logging/formatting-log-records",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-logging/formatting-log-records.md",tags:[],version:"current",frontMatter:{id:"formatting-log-records",title:"Formatting Log Records"},sidebar:"ecosystem-sidebar",previous:{title:"Introduction",permalink:"/zio-logging/"},next:{title:"Logger Context and Annotations",permalink:"/zio-logging/logger-context-and-annotations"}},s={},g=[{value:"LogFormat and LogAppender",id:"logformat-and-logappender",level:2}],p={toc:g},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"LogFormat")," represents a DSL to describe the format of text log messages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.logging.console\nimport zio.logging.LogFormat._\n\nval myLogFormat = timestamp.fixed(32) |-| level |-| label("message", quoted(line))\nval myConsoleLogger = console(myLogFormat)\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LogFormat.filter")," returns a new log format that produces the same result, if ",(0,o.kt)("inlineCode",{parentName:"p"},"LogFilter")," is satisfied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.logging.LogFormat\nimport zio.logging.LogFilter\n\nLogFormat.label("cause", LogFormat.cause).filter(LogFilter.causeNonEmpty)\n')),(0,o.kt)("h2",{id:"logformat-and-logappender"},"LogFormat and LogAppender"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"LogFormat")," represents a DSL to describe the format of text log messages."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"LogAppender")," is a low-level interface designed to be the bridge between, ZIO Logging and logging backends, such as Logback.\nThis interface is slightly higher-level than a string builder, because it allows for structured logging,\nand preserves all ZIO-specific information about runtime failures."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LogFormat")," may be created by following function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"object LogFormat {\n  def make(format: (LogAppender, Trace, FiberId, LogLevel, () => String, Cause[Any], FiberRefs, List[LogSpan], Map[String, String]) => Any): LogFormat\n}\n")),(0,o.kt)("p",null,"format function arguments can be split to two sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"LogAppender"),(0,o.kt)("li",{parentName:"ul"},"all others - all log inputs provided by ZIO core logging:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Trace - current trace (",(0,o.kt)("inlineCode",{parentName:"li"},"zio.Trace"),")"),(0,o.kt)("li",{parentName:"ul"},"FiberId - fiber id (",(0,o.kt)("inlineCode",{parentName:"li"},"zio.FiberId"),")"),(0,o.kt)("li",{parentName:"ul"},"LogLevel - log level (",(0,o.kt)("inlineCode",{parentName:"li"},"zio.LogLevel"),")"),(0,o.kt)("li",{parentName:"ul"},"() => String - log message"),(0,o.kt)("li",{parentName:"ul"},"Cause","[Any]"," - cause (",(0,o.kt)("inlineCode",{parentName:"li"},"zio.Cause"),")"),(0,o.kt)("li",{parentName:"ul"},"FiberRefs - fiber refs (",(0,o.kt)("inlineCode",{parentName:"li"},"zio.FiberRefs"),"), collection of ",(0,o.kt)("inlineCode",{parentName:"li"},"zio.FiberRef")," - ZIO's equivalent of Java's ThreadLocal"),(0,o.kt)("li",{parentName:"ul"},"List","[LogSpan]"," - log spans  (",(0,o.kt)("inlineCode",{parentName:"li"},"zio.LogSpan"),")"),(0,o.kt)("li",{parentName:"ul"},"Map","[String, String]"," - ZIO core log annotations values, where key is annotation key/name, and value is annotation value")))),(0,o.kt)("p",null,"essential ",(0,o.kt)("inlineCode",{parentName:"p"},"LogAppender")," functions, which are used in predefined log formats: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"def appendCause(cause: Cause[Any])")," - appends a ",(0,o.kt)("inlineCode",{parentName:"li"},"zio.Cause")," to the log, some logging backends may have special support for logging failures "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"def appendNumeric[A](numeric: A)")," - appends a numeric value to the log"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"def appendText(text: String)")," - appends unstructured text to the log"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"def appendKeyValue(key: String, value: String)")," - appends a key/value string pair to the log")),(0,o.kt)("p",null,"then it depends on the specific logging backend how these functions are implemented with respect to the backend output, for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zio-logging/slf4j1"},"slf4j v1")," logging backend - key/value is appended to slf4j ",(0,o.kt)("a",{parentName:"li",href:"https://logback.qos.ch/manual/mdc.html"},"MDC context"),", Cause is transformed to Throwable and placed to slf4j throwable section, all other text and numeric parts are added to slf4j log message"),(0,o.kt)("li",{parentName:"ul"},"console logging backend - in general all values are added to log line, ",(0,o.kt)("inlineCode",{parentName:"li"},"Cause.prettyPrint")," is used to log cause details")),(0,o.kt)("p",null,"example of some predefined log formats implementations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def annotation(name: String): LogFormat =\n  LogFormat.make { (builder, _, _, _, _, _, _, _, annotations) =>\n    annotations.get(name).foreach { value =>\n      builder.appendKeyValue(name, value)\n    }\n  }\n\nval cause: LogFormat =\n  LogFormat.make { (builder, _, _, _, _, cause, _, _, _) =>\n    if (!cause.isEmpty) {\n      builder.appendCause(cause)\n    }\n  }\n\ndef text(value: => String): LogFormat =\n  LogFormat.make { (builder, _, _, _, _, _, _, _, _) =>\n    builder.appendText(value)\n  }\n")))}u.isMDXComponent=!0}}]);