"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[41174],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>f});var a=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function t(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,a,r=function(e,n){if(null==e)return{};var o,a,r={},t=Object.keys(e);for(a=0;a<t.length;a++)o=t[a],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)o=t[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),g=function(e){var n=a.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},d=function(e){var n=g(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var o=e.components,r=e.mdxType,t=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=g(o),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||t;return o?a.createElement(f,i(i({ref:n},d),{},{components:o})):a.createElement(f,i({ref:n},d))}));function f(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=o.length,i=new Array(t);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var g=2;g<t;g++)i[g]=o[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},41058:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>g});var a=o(87462),r=(o(67294),o(3905));const t={id:"console-logger",title:"Console Logger"},i=void 0,l={unversionedId:"zio-logging/console-logger",id:"zio-logging/console-logger",title:"Console Logger",description:"logger layer with configuration from config provider:",source:"@site/docs/zio-logging/console-logger.md",sourceDirName:"zio-logging",slug:"/zio-logging/console-logger",permalink:"/zio-logging/console-logger",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-logging/console-logger.md",tags:[],version:"current",frontMatter:{id:"console-logger",title:"Console Logger"},sidebar:"ecosystem-sidebar",previous:{title:"Log Filter",permalink:"/zio-logging/log-filter"},next:{title:"File Logger",permalink:"/zio-logging/file-logger"}},s={},g=[{value:"Configuration",id:"configuration",level:2},{value:"Examples",id:"examples",level:2},{value:"Colorful Console Logger With Log Filtering",id:"colorful-console-logger-with-log-filtering",level:3},{value:"JSON Console Logger",id:"json-console-logger",level:3}],d={toc:g},p="wrapper";function c(e){let{components:n,...o}=e;return(0,r.kt)(p,(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"logger layer with configuration from config provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.logging.consoleLogger\nimport zio.{ ConfigProvider, Runtime }\n\nval configProvider: ConfigProvider = ???\n\nval logger = Runtime.removeDefaultLoggers >>> Runtime.setConfigProvider(configProvider) >>> consoleLogger(configPath = "logger")\n')),(0,r.kt)("p",null,"logger layer with given configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.{ consoleLogger, ConsoleLoggerConfig }\nimport zio.Runtime\n\nval config: ConsoleLoggerConfig = ???\n\nval logger = Runtime.removeDefaultLoggers >>> consoleLogger(config)\n")),(0,r.kt)("p",null,"there are other versions of console loggers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zio.logging.consoleJsonLogger")," - output in json format"),(0,r.kt)("li",{parentName:"ul"},"error console:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zio.logging.consoleErrLogger")," - output in string format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zio.logging.consoleErrJsonLogger")," - output in json format")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"the configuration for console logger (",(0,r.kt)("inlineCode",{parentName:"p"},"zio.logging.ConsoleLoggerConfig"),") has the following configuration structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'logger {\n  # log format, default value: LogFormat.default\n  format = "%label{timestamp}{%fixed{32}{%timestamp}} %label{level}{%level} %label{thread}{%fiberId} %label{message}{%message} %label{cause}{%cause}"\n  \n  filter {\n    # see filter configuration\n    rootLevel = INFO\n  }\n}\n')),(0,r.kt)("p",null,"see also ",(0,r.kt)("a",{parentName:"p",href:"/zio-logging/formatting-log-records#log-format-configuration"},"log format configuration")," and ",(0,r.kt)("a",{parentName:"p",href:"/zio-logging/log-filter#configuration"},"filter configuration")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"You can find the source code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-logging/tree/master/examples"},"here")),(0,r.kt)("h3",{id:"colorful-console-logger-with-log-filtering"},"Colorful Console Logger With Log Filtering"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.config.typesafe.TypesafeConfigProvider\nimport zio.logging.consoleLogger\nimport zio.{ Cause, Config, ConfigProvider, ExitCode, Runtime, Scope, URIO, ZIO, ZIOAppDefault, ZLayer }\n\nobject ConsoleColoredApp extends ZIOAppDefault {\n\n  val configString: String =\n    s"""\n       |logger {\n       |\n       |  format = "%highlight{%timestamp{yyyy-MM-dd\'T\'HH:mm:ssZ} %fixed{7}{%level} [%fiberId] %name:%line %message %cause}"\n       |\n       |  filter {\n       |    mappings {\n       |      "zio.logging.example.LivePingService" = "DEBUG"\n       |    }\n       |  }\n       |}\n       |""".stripMargin\n\n  val configProvider: ConfigProvider = TypesafeConfigProvider.fromHoconString(configString)\n\n  override val bootstrap: ZLayer[Any, Config.Error, Unit] =\n    Runtime.removeDefaultLoggers >>> Runtime.setConfigProvider(configProvider) >>> consoleLogger()\n\n  private def ping(address: String): URIO[PingService, Unit] =\n    PingService\n      .ping(address)\n      .foldZIO(\n        e => ZIO.logErrorCause(s"ping: $address - error", Cause.fail(e)),\n        r => ZIO.logInfo(s"ping: $address - result: $r")\n      )\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    (for {\n      _ <- ping("127.0.0.1")\n      _ <- ping("x8.8.8.8")\n    } yield ExitCode.success).provide(LivePingService.layer)\n\n}\n')),(0,r.kt)("p",null,"Expected console output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'2023-03-05T12:24:05+0100 DEBUG   [zio-fiber-4] zio.logging.example.LivePingService:37 ping: /127.0.0.1 \n2023-03-05T12:24:05+0100 INFO    [zio-fiber-4] zio.logging.example.ConsoleColoredApp:43 ping: 127.0.0.1 - result: true \n2023-03-05T12:24:05+0100 ERROR   [zio-fiber-4] zio.logging.example.LivePingService:36 ping: x8.8.8.8 - invalid address error Exception in thread "zio-fiber-4" java.net.UnknownHostException: x8.8.8.8: nodename nor servname provided, or not known\n    at java.base/java.net.Inet6AddressImpl.lookupAllHostAddr(Native Method)\n    at java.base/java.net.InetAddress$PlatformNameService.lookupAllHostAddr(InetAddress.java:929)\n    at java.base/java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1529)\n    at java.base/java.net.InetAddress$NameServiceAddresses.get(InetAddress.java:848)\n    at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1519)\n    at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1378)\n    at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1306)\n    at java.base/java.net.InetAddress.getByName(InetAddress.java:1256)\n    at zio.logging.example.LivePingService.$anonfun$ping$2(PingService.scala:35)\n    at zio.ZIOCompanionVersionSpecific.$anonfun$attempt$1(ZIOCompanionVersionSpecific.scala:100)\n    at java.net.Inet6AddressImpl.lookupAllHostAddr(Native Method)\n    at java.net.InetAddress$PlatformNameService.lookupAllHostAddr(InetAddress.java:929)\n    at java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1529)\n    at java.net.InetAddress$NameServiceAddresses.get(InetAddress.java:848)\n    at java.net.InetAddress.getAllByName0(InetAddress.java:1519)\n    at java.net.InetAddress.getAllByName(InetAddress.java:1378)\n    at java.net.InetAddress.getAllByName(InetAddress.java:1306)\n    at java.net.InetAddress.getByName(InetAddress.java:1256)\n    at zio.logging.example.LivePingService.ping(PingService.scala:35)\n    at zio.logging.example.LivePingService.ping(PingService.scala:36)\n    at zio.logging.example.LivePingService.ping(PingService.scala:33)\n    at zio.logging.example.ConsoleColoredApp.ping(ConsoleColoredApp.scala:41)\n    at zio.logging.example.ConsoleColoredApp.run(ConsoleColoredApp.scala:49)\n    at zio.logging.example.ConsoleColoredApp.run(ConsoleColoredApp.scala:50)\n2023-03-05T12:24:05+0100 ERROR   [zio-fiber-4] zio.logging.example.ConsoleColoredApp:42 ping: x8.8.8.8 - error Exception in thread "zio-fiber-" java.net.UnknownHostException: x8.8.8.8: nodename nor servname provided, or not known\n    at java.base/java.net.Inet6AddressImpl.lookupAllHostAddr(Native Method)\n    at java.base/java.net.InetAddress$PlatformNameService.lookupAllHostAddr(InetAddress.java:929)\n    at java.base/java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1529)\n    at java.base/java.net.InetAddress$NameServiceAddresses.get(InetAddress.java:848)\n    at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1519)\n    at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1378)\n    at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1306)\n    at java.base/java.net.InetAddress.getByName(InetAddress.java:1256)\n    at zio.logging.example.LivePingService.$anonfun$ping$2(PingService.scala:35)\n    at zio.ZIOCompanionVersionSpecific.$anonfun$attempt$1(ZIOCompanionVersionSpecific.scala:100)\n')),(0,r.kt)("h3",{id:"json-console-logger"},"JSON Console Logger"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.logging.{ LogAnnotation, consoleJsonLogger }\nimport zio.{ ExitCode, Runtime, Scope, ZIO, ZIOAppDefault, _ }\n\nimport java.util.UUID\n\nobject ConsoleJsonApp extends ZIOAppDefault {\n\n  final case class User(firstName: String, lastName: String) {\n    def toJson: String = s"""{"first_name":"$firstName","last_name":"$lastName"}""".stripMargin\n  }\n\n  private val userLogAnnotation = LogAnnotation[User]("user", (_, u) => u, _.toJson)\n  private val uuid              = LogAnnotation[UUID]("uuid", (_, i) => i, _.toString)\n\n  val logFormat =\n    "%label{timestamp}{%timestamp{yyyy-MM-dd\'T\'HH:mm:ssZ}} %label{level}{%level} %label{fiberId}{%fiberId} %label{message}{%message} %label{cause}{%cause} %label{name}{%name} %kvs"\n  \n  val configProvider: ConfigProvider = ConfigProvider.fromMap(\n    Map(\n      "logger/format"           -> logFormat,\n      "logger/filter/rootLevel" -> LogLevel.Info.label\n    ),\n    "/"\n  )\n\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] =\n    Runtime.removeDefaultLoggers >>> Runtime.setConfigProvider(configProvider) >>> consoleJsonLogger()\n\n  private val uuids = List.fill(2)(UUID.randomUUID())\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    for {\n      traceId <- ZIO.succeed(UUID.randomUUID())\n      _       <- ZIO.foreachPar(uuids) { uId =>\n        {\n          ZIO.logInfo("Starting operation") *>\n            ZIO.sleep(500.millis) *>\n            ZIO.logInfo("Stopping operation")\n        } @@ userLogAnnotation(User("John", "Doe")) @@ uuid(uId)\n      } @@ LogAnnotation.TraceId(traceId)\n      _       <- ZIO.logInfo("Done")\n    } yield ExitCode.success\n\n}\n')),(0,r.kt)("p",null,"Expected console output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"timestamp":"2023-03-08T19:36:04+0100","level":"INFO","fiberId":"zio-fiber-5","message":"Starting operation","name":"zio.logging.example.ConsoleJsonApp","trace_id":"f30c2e89-006c-4f7c-adfa-497e3bba1b98","uuid":"3b971312-cb3e-420e-8c12-7fb96add2224","user":{"first_name":"John","last_name":"Doe"}}\n{"timestamp":"2023-03-08T19:36:04+0100","level":"INFO","fiberId":"zio-fiber-6","message":"Starting operation","name":"zio.logging.example.ConsoleJsonApp","trace_id":"f30c2e89-006c-4f7c-adfa-497e3bba1b98","uuid":"93b87ff0-410a-4fc1-9cc7-b7eb7c655f60","user":{"first_name":"John","last_name":"Doe"}}\n{"timestamp":"2023-03-08T19:36:05+0100","level":"INFO","fiberId":"zio-fiber-5","message":"Stopping operation","name":"zio.logging.example.ConsoleJsonApp","trace_id":"f30c2e89-006c-4f7c-adfa-497e3bba1b98","uuid":"3b971312-cb3e-420e-8c12-7fb96add2224","user":{"first_name":"John","last_name":"Doe"}}\n{"timestamp":"2023-03-08T19:36:05+0100","level":"INFO","fiberId":"zio-fiber-6","message":"Stopping operation","name":"zio.logging.example.ConsoleJsonApp","trace_id":"f30c2e89-006c-4f7c-adfa-497e3bba1b98","uuid":"93b87ff0-410a-4fc1-9cc7-b7eb7c655f60","user":{"first_name":"John","last_name":"Doe"}}\n{"timestamp":"2023-03-08T19:36:05+0100","level":"INFO","fiberId":"zio-fiber-4","message":"Done","name":"zio.logging.example.ConsoleJsonApp"}\n')))}c.isMDXComponent=!0}}]);